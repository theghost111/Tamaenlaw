/*
 * TAMAEAN LAW - Contact Section
 * Design: Split layout - contact info + form
 * Real contact data from tamaenlaw.com
 * Two offices: Makkah & Jeddah
 */
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

const services = [
  "قضايا المحاكم",
  "قانون الشركات",
  "صياغة العقود",
  "القضايا العقارية",
  "قانون الأسرة",
  "قانون العمل",
  "استشارة قانونية",
  "أخرى",
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      toast.success("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً");
    },
    onError: (err) => {
      toast.error(err.message || "حدث خطأ، يرجى المحاولة مرة أخرى");
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      toast.error("يرجى ملء جميع الحقول المطلوبة");
      return;
    }
    submitMutation.mutate({
      name: form.name,
      phone: form.phone,
      email: form.email || undefined,
      serviceType: form.service || undefined,
      message: form.message,
    });
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-white">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[oklch(0.62_0.13_85)]" />
            <span className="text-[oklch(0.62_0.13_85)] font-arabic font-medium text-sm uppercase tracking-wider">
              تواصل معنا
            </span>
            <div className="w-8 h-0.5 bg-[oklch(0.62_0.13_85)]" />
          </div>
          <h2 className="text-[oklch(0.18_0.04_260)] font-arabic font-bold mb-4"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
            نحن هنا لمساعدتك
            <br />
            <span className="text-[oklch(0.62_0.13_85)]">استشارة قانونية</span>
          </h2>
          <p className="text-[oklch(0.52_0.03_260)] font-arabic text-base max-w-2xl mx-auto">
            تواصل معنا الآن واحصل على استشارة قانونية من فريقنا المتخصص
          </p>
        </motion.div>

        {/* Two offices cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {/* Makkah Office */}
          <div className="border border-[oklch(0.90_0.02_85)] p-6 hover:border-[oklch(0.72_0.12_85)/0.5] transition-colors group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[oklch(0.62_0.13_85)] flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-white" />
              </div>
              <h3 className="font-arabic font-bold text-[oklch(0.18_0.04_260)] text-base">مكتب مكة المكرمة</h3>
            </div>
            <a
              href="tel:+966565690200"
              className="flex items-center gap-3 text-[oklch(0.35_0.03_260)] hover:text-[oklch(0.62_0.13_85)] transition-colors mb-2"
            >
              <Phone size={15} className="text-[oklch(0.62_0.13_85)] flex-shrink-0" />
              <span className="font-arabic text-sm" dir="ltr">+966 56 569 0200</span>
            </a>
            <div className="flex items-center gap-3 text-[oklch(0.52_0.03_260)]">
              <MapPin size={15} className="text-[oklch(0.62_0.13_85)] flex-shrink-0" />
              <span className="font-arabic text-sm">مكة المكرمة، المملكة العربية السعودية</span>
            </div>
          </div>

          {/* Jeddah Office */}
          <div className="border border-[oklch(0.90_0.02_85)] p-6 hover:border-[oklch(0.72_0.12_85)/0.5] transition-colors group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[oklch(0.62_0.13_85)] flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-white" />
              </div>
              <h3 className="font-arabic font-bold text-[oklch(0.18_0.04_260)] text-base">مكتب جدة</h3>
            </div>
            <a
              href="tel:+966560088703"
              className="flex items-center gap-3 text-[oklch(0.35_0.03_260)] hover:text-[oklch(0.62_0.13_85)] transition-colors mb-2"
            >
              <Phone size={15} className="text-[oklch(0.62_0.13_85)] flex-shrink-0" />
              <span className="font-arabic text-sm" dir="ltr">+966 56 008 8703</span>
            </a>
            <div className="flex items-center gap-3 text-[oklch(0.52_0.03_260)]">
              <MapPin size={15} className="text-[oklch(0.62_0.13_85)] flex-shrink-0" />
              <span className="font-arabic text-sm">طريق الأمير سلطان، جدة، المملكة العربية السعودية</span>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="bg-[oklch(0.96_0.02_85)] border border-[oklch(0.88_0.04_85)] p-8 h-full">
              <h3 className="text-[oklch(0.18_0.04_260)] font-arabic font-bold text-xl mb-8">معلومات التواصل</h3>

              <div className="space-y-7">
                {/* Phone Makkah */}
                <div className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-sm bg-[oklch(0.62_0.13_85)/0.2] flex items-center justify-center flex-shrink-0 group-hover:bg-[oklch(0.62_0.13_85)] transition-colors">
                    <Phone size={17} className="text-[oklch(0.72_0.12_85)] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-[oklch(0.72_0.12_85)] font-arabic font-semibold text-sm mb-1">مكتب مكة المكرمة</div>
                    <a href="tel:+966565690200" className="text-[oklch(0.35_0.04_260)] font-arabic text-sm hover:text-[oklch(0.62_0.13_85)] transition-colors block" dir="ltr">
                      +966 56 569 0200
                    </a>
                  </div>
                </div>

                {/* Phone Jeddah */}
                <div className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-sm bg-[oklch(0.62_0.13_85)/0.2] flex items-center justify-center flex-shrink-0 group-hover:bg-[oklch(0.62_0.13_85)] transition-colors">
                    <Phone size={17} className="text-[oklch(0.72_0.12_85)] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-[oklch(0.72_0.12_85)] font-arabic font-semibold text-sm mb-1">مكتب جدة</div>
                    <a href="tel:+966560088703" className="text-[oklch(0.35_0.04_260)] font-arabic text-sm hover:text-[oklch(0.62_0.13_85)] transition-colors block" dir="ltr">
                      +966 56 008 8703
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-sm bg-[oklch(0.62_0.13_85)/0.2] flex items-center justify-center flex-shrink-0 group-hover:bg-[oklch(0.62_0.13_85)] transition-colors">
                    <Mail size={17} className="text-[oklch(0.72_0.12_85)] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-[oklch(0.72_0.12_85)] font-arabic font-semibold text-sm mb-1">البريد الإلكتروني</div>
                    <a href="mailto:info@tamaenlaw.com" className="text-[oklch(0.35_0.04_260)] font-arabic text-sm hover:text-[oklch(0.62_0.13_85)] transition-colors block">
                      info@tamaenlaw.com
                    </a>
                  </div>
                </div>

                {/* Working hours */}
                <div className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-sm bg-[oklch(0.62_0.13_85)/0.2] flex items-center justify-center flex-shrink-0 group-hover:bg-[oklch(0.62_0.13_85)] transition-colors">
                    <Clock size={17} className="text-[oklch(0.72_0.12_85)] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-[oklch(0.72_0.12_85)] font-arabic font-semibold text-sm mb-1">أوقات العمل</div>
                    <div className="text-[oklch(0.35_0.04_260)] font-arabic text-sm">من 7 صباحاً الى 2 ظهراً</div>
                    <div className="text-[oklch(0.50_0.02_260)] font-arabic text-xs mt-0.5">الأحد — الخميس</div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-10 pt-8 border-t border-[oklch(0.85_0.04_85)]">
                <div className="text-[oklch(0.45_0.02_260)] font-arabic text-sm mb-4">تابعنا على</div>
                <div className="flex gap-3">
                  <a
                    href="https://x.com/tamaenlaw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 border border-[oklch(0.80_0.04_85)] text-[oklch(0.45_0.02_260)] hover:border-[oklch(0.62_0.13_85)] hover:text-[oklch(0.62_0.13_85)] transition-all flex items-center justify-center text-xs font-bold"
                  >
                    X
                  </a>
                  <a
                    href="https://tiktok.com/@tamaenlaw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 border border-[oklch(0.80_0.04_85)] text-[oklch(0.45_0.02_260)] hover:border-[oklch(0.62_0.13_85)] hover:text-[oklch(0.62_0.13_85)] transition-all flex items-center justify-center text-xs font-bold"
                  >
                    TT
                  </a>
                  <a
                    href="https://wa.me/966565690200"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 border border-[oklch(0.80_0.04_85)] text-[oklch(0.45_0.02_260)] hover:border-[oklch(0.62_0.13_85)] hover:text-[oklch(0.62_0.13_85)] transition-all flex items-center justify-center text-xs font-bold"
                  >
                    WA
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 border border-[oklch(0.90_0.02_85)]">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.6 }}
                >
                  <CheckCircle size={64} className="text-[oklch(0.62_0.13_85)] mx-auto mb-6" />
                </motion.div>
                <h3 className="font-arabic font-bold text-2xl text-[oklch(0.18_0.04_260)] mb-3">
                  تم إرسال رسالتك!
                </h3>
                <p className="font-arabic text-[oklch(0.52_0.03_260)] mb-6">
                  شكراً لتواصلك معنا. سيقوم فريقنا بالرد عليك خلال 24 ساعة.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-[oklch(0.62_0.13_85)] font-arabic font-medium hover:underline"
                >
                  إرسال رسالة أخرى
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-[oklch(0.90_0.02_85)] p-8">
                <h3 className="font-arabic font-bold text-xl text-[oklch(0.18_0.04_260)] mb-6">
                  أرسل لنا استفسارك
                </h3>

                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block font-arabic text-sm font-medium text-[oklch(0.35_0.03_260)] mb-2">
                      الاسم بالكامل <span className="text-[oklch(0.62_0.13_85)]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="الاسم بالكامل"
                      className="w-full border border-[oklch(0.90_0.02_85)] px-4 py-3 font-arabic text-sm text-[oklch(0.18_0.04_260)] placeholder:text-[oklch(0.70_0.02_260)] focus:outline-none focus:border-[oklch(0.62_0.13_85)] transition-colors bg-white"
                    />
                  </div>
                  <div>
                    <label className="block font-arabic text-sm font-medium text-[oklch(0.35_0.03_260)] mb-2">
                      رقم الهاتف <span className="text-[oklch(0.62_0.13_85)]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="رقم الهاتف"
                      className="w-full border border-[oklch(0.90_0.02_85)] px-4 py-3 font-arabic text-sm text-[oklch(0.18_0.04_260)] placeholder:text-[oklch(0.70_0.02_260)] focus:outline-none focus:border-[oklch(0.62_0.13_85)] transition-colors bg-white"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block font-arabic text-sm font-medium text-[oklch(0.35_0.03_260)] mb-2">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="البريد الالكتروني"
                      className="w-full border border-[oklch(0.90_0.02_85)] px-4 py-3 font-arabic text-sm text-[oklch(0.18_0.04_260)] placeholder:text-[oklch(0.70_0.02_260)] focus:outline-none focus:border-[oklch(0.62_0.13_85)] transition-colors bg-white"
                    />
                  </div>
                  <div>
                    <label className="block font-arabic text-sm font-medium text-[oklch(0.35_0.03_260)] mb-2">
                      نوع الخدمة
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border border-[oklch(0.90_0.02_85)] px-4 py-3 font-arabic text-sm text-[oklch(0.18_0.04_260)] focus:outline-none focus:border-[oklch(0.62_0.13_85)] transition-colors bg-white appearance-none"
                    >
                      <option value="">اختر نوع الخدمة</option>
                      {services.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block font-arabic text-sm font-medium text-[oklch(0.35_0.03_260)] mb-2">
                    تفاصيل الاستفسار <span className="text-[oklch(0.62_0.13_85)]">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="استفسارك..."
                    className="w-full border border-[oklch(0.90_0.02_85)] px-4 py-3 font-arabic text-sm text-[oklch(0.18_0.04_260)] placeholder:text-[oklch(0.70_0.02_260)] focus:outline-none focus:border-[oklch(0.62_0.13_85)] transition-colors bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitMutation.isPending}
                  className="w-full bg-[oklch(0.62_0.13_85)] text-white py-4 font-arabic font-bold text-base hover:bg-[oklch(0.55_0.12_85)] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 hover:shadow-lg hover:shadow-[oklch(0.62_0.13_85)/0.3]"
                >
                  {submitMutation.isPending ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={18} />
                      <span>ارسال استفسارك</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
