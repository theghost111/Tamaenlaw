import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, boolean } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * جدول رسائل التواصل من نموذج الموقع
 * يحفظ جميع الاستفسارات الواردة من العملاء
 */
export const contactMessages = mysqlTable("contact_messages", {
  id: int("id").autoincrement().primaryKey(),
  /** اسم المرسل */
  name: varchar("name", { length: 255 }).notNull(),
  /** رقم الجوال */
  phone: varchar("phone", { length: 30 }).notNull(),
  /** البريد الإلكتروني (اختياري) */
  email: varchar("email", { length: 320 }),
  /** نوع الخدمة المطلوبة */
  serviceType: varchar("serviceType", { length: 100 }),
  /** نص الرسالة */
  message: text("message").notNull(),
  /** حالة الرسالة: جديدة، مقروءة، مُعالجة */
  status: mysqlEnum("status", ["new", "read", "handled"]).default("new").notNull(),
  /** هل تم الرد على الرسالة */
  replied: boolean("replied").default(false).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = typeof contactMessages.$inferInsert;
