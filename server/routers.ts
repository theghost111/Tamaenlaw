import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { createContactMessage, getAllContactMessages, markMessageAsRead, markMessageAsHandled } from "./db";
import { notifyOwner } from "./_core/notification";
import { z } from "zod";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // ===== Contact Messages =====
  contact: router({
    /** إرسال رسالة تواصل من نموذج الموقع */
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(2, "الاسم مطلوب"),
        phone: z.string().min(9, "رقم الجوال مطلوب"),
        email: z.string().email("البريد الإلكتروني غير صحيح").optional().or(z.literal("")),
        serviceType: z.string().optional(),
        message: z.string().min(10, "الرسالة يجب أن تكون 10 أحرف على الأقل"),
      }))
      .mutation(async ({ input }) => {
        await createContactMessage({
          name: input.name,
          phone: input.phone,
          email: input.email || null,
          serviceType: input.serviceType || null,
          message: input.message,
        });

        // إرسال إشعار للمالك
        await notifyOwner({
          title: `رسالة جديدة من ${input.name}`,
          content: `رقم الجوال: ${input.phone}\nنوع الخدمة: ${input.serviceType || "غير محدد"}\n\n${input.message}`,
        });

        return { success: true };
      }),

    /** جلب جميع الرسائل (للمدير فقط) */
    list: protectedProcedure
      .query(async ({ ctx }) => {
        if (ctx.user.role !== "admin") {
          throw new Error("غير مصرح لك بالوصول");
        }
        return getAllContactMessages();
      }),

    /** تحديد رسالة كمقروءة */
    markRead: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") throw new Error("غير مصرح");
        await markMessageAsRead(input.id);
        return { success: true };
      }),

    /** تحديد رسالة كمُعالجة */
    markHandled: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") throw new Error("غير مصرح");
        await markMessageAsHandled(input.id);
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
