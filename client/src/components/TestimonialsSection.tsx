/*
 * TAMAEAN LAW - Testimonials Section
 * Design: Carousel with client testimonials
 * Gold stars, animated slider - mobile shows 1 card, desktop shows 3
 */
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ChevronRight, ChevronLeft, Quote } from "lucide-react";

const testimonials = [
  {
    name: "أحمد محمد الغامدي",
    role: "رجل أعمال",
    rating: 5,
    text: "تعاملت مع تمعن في قضية تجارية معقدة، وكانت النتيجة أفضل مما توقعت. الفريق محترف جداً ومتابع باستمرار.",
  },
  {
    name: "سارة عبدالله الشمري",
    role: "مديرة شركة",
    rating: 5,
    text: "خدمة ممتازة وسريعة. ساعدوني في تأسيس شركتي وصياغة جميع العقود بدقة واحترافية عالية.",
  },
  {
    name: "خالد إبراهيم العتيبي",
    role: "مستثمر عقاري",
    rating: 5,
    text: "أنصح بشدة بالتعامل مع تمعن. حلوا لي قضية عقارية كانت تبدو مستعصية في وقت قياسي.",
  },
  {
    name: "نورة فهد السعيد",
    role: "طبيبة",
    rating: 5,
    text: "تعاملت معهم في قضية أسرية حساسة، وكانوا محترفين جداً ومتفهمين للوضع. شكراً لفريق تمعن.",
  },
  {
    name: "محمد علي الزهراني",
    role: "مقاول",
    rating: 5,
    text: "أفضل مكتب محاماة تعاملت معه. سرعة في الاستجابة، دقة في العمل، وأسعار مناسبة.",
  },
];

function TestimonialCard({ t, elevated = false }: { t: typeof testimonials[0]; elevated?: boolean }) {
  return (
    <div className={`bg-white p-6 shadow-sm border border-[oklch(0.90_0.02_85)] relative h-full ${elevated ? "md:-mt-4 md:shadow-xl md:border-[oklch(0.72_0.12_85)]" : ""}`}>
      <Quote size={32} className="text-[oklch(0.72_0.12_85)] opacity-30 mb-4" />
      <div className="flex gap-1 mb-4">
        {Array.from({ length: t.rating }).map((_, j) => (
          <Star key={j} size={14} className="text-[oklch(0.72_0.12_85)] fill-[oklch(0.72_0.12_85)]" />
        ))}
      </div>
      <p className="font-arabic text-[oklch(0.35_0.03_260)] text-sm leading-relaxed mb-6">
        "{t.text}"
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-[oklch(0.90_0.02_85)]">
        <div className="w-10 h-10 rounded-full bg-[oklch(0.62_0.13_85)] flex items-center justify-center text-white font-arabic font-bold text-sm flex-shrink-0">
          {t.name[0]}
        </div>
        <div>
          <div className="font-arabic font-bold text-sm text-[oklch(0.18_0.04_260)]">{t.name}</div>
          <div className="font-arabic text-xs text-[oklch(0.62_0.13_85)]">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  // 3 cards for desktop
  const desktopVisible = [
    testimonials[current % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section className="py-16 md:py-24 bg-[oklch(0.97_0.01_85)]" ref={ref}>
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[oklch(0.62_0.13_85)]" />
            <span className="text-[oklch(0.62_0.13_85)] font-arabic font-medium text-sm uppercase tracking-wider">
              آراء عملائنا
            </span>
            <div className="w-8 h-0.5 bg-[oklch(0.62_0.13_85)]" />
          </div>
          <h2 className="text-[oklch(0.18_0.04_260)] font-arabic font-bold mb-4"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
            ماذا يقول
            <br />
            <span className="text-[oklch(0.62_0.13_85)]">عملاؤنا</span>
          </h2>
        </motion.div>

        {/* Mobile: single card */}
        <div className="block md:hidden">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
          >
            <TestimonialCard t={testimonials[current]} />
          </motion.div>
        </div>

        {/* Desktop: 3 cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {desktopVisible.map((t, i) => (
            <motion.div
              key={`${current}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <TestimonialCard t={t} elevated={i === 1} />
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 border border-[oklch(0.90_0.02_85)] flex items-center justify-center hover:border-[oklch(0.62_0.13_85)] hover:text-[oklch(0.62_0.13_85)] transition-colors"
            aria-label="السابق"
          >
            <ChevronRight size={18} />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "bg-[oklch(0.62_0.13_85)] w-6" : "bg-[oklch(0.85_0.02_85)] w-2"
                }`}
                aria-label={`الانتقال إلى التقييم ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 border border-[oklch(0.90_0.02_85)] flex items-center justify-center hover:border-[oklch(0.62_0.13_85)] hover:text-[oklch(0.62_0.13_85)] transition-colors"
            aria-label="التالي"
          >
            <ChevronLeft size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
