/*
 * TAMAEAN LAW - CTA Banner
 * Design: Full-width gold gradient banner with call to action
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-16 relative overflow-hidden bg-[oklch(0.62_0.13_85)]">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      
      {/* Decorative circles */}
      <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/10" />
      <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-white/10" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h2 className="text-white font-arabic font-black text-2xl md:text-3xl mb-2">
              هل تحتاج إلى مساعدة قانونية؟
            </h2>
            <p className="text-white/80 font-arabic text-base">
              تواصل معنا الآن واحصل على استشارة قانونية من فريقنا المتخصص
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+966565690200"
              className="flex items-center gap-3 bg-white text-[oklch(0.62_0.13_85)] px-6 py-3 font-arabic font-bold text-sm hover:bg-[oklch(0.97_0.01_85)] transition-colors shadow-lg"
            >
              <Phone size={18} />
              اتصل الآن
            </a>
            <a
              href="https://wa.me/966565690200"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border-2 border-white text-white px-6 py-3 font-arabic font-bold text-sm hover:bg-white/10 transition-colors"
            >
              <MessageCircle size={18} />
              واتساب
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
