/*
 * TAMAEAN LAW - Achievements Section
 * Design: Dark navy background with gold stats counter
 * Animated number counters on scroll
 */
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Scale, Users, Award, Building2, Star, Globe } from "lucide-react";

const ACHIEVEMENTS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663526564708/8YchEKfoi4q4tV73Rg8cg6/achievements-bg-SMgtff2BpcNsiW2k6xjLJF.webp";

const stats = [
  { icon: Scale, number: 500, suffix: "+", label: "قضية ناجحة", desc: "في مختلف المحاكم" },
  { icon: Users, number: 200, suffix: "+", label: "عميل راضٍ", desc: "من الأفراد والشركات" },
  { icon: Award, number: 15, suffix: "+", label: "سنة خبرة", desc: "في الميدان القانوني" },
  { icon: Building2, number: 50, suffix: "+", label: "شركة مخدومة", desc: "من مختلف القطاعات" },
  { icon: Star, number: 98, suffix: "%", label: "نسبة رضا العملاء", desc: "وفق آخر استطلاع" },
  { icon: Globe, number: 10, suffix: "+", label: "مجال قانوني", desc: "تخصصات متنوعة" },
];

function CounterNumber({ target, suffix, isActive }: { target: number; suffix: string; isActive: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isActive, target]);

  return (
    <span className="font-arabic font-black text-[oklch(0.72_0.12_85)]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
      {count}{suffix}
    </span>
  );
}

export default function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Full background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${ACHIEVEMENTS_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Subtle overlay for text readability - reduced opacity to show background */}
      <div className="absolute inset-0 bg-[oklch(0.10_0.03_260/0.72)]" />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[oklch(0.72_0.12_85)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[oklch(0.72_0.12_85)] to-transparent" />

      <div className="container relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[oklch(0.72_0.12_85)]" />
            <span className="text-[oklch(0.72_0.12_85)] font-arabic font-medium text-sm uppercase tracking-wider">
              إنجازاتنا
            </span>
            <div className="w-8 h-0.5 bg-[oklch(0.72_0.12_85)]" />
          </div>
          <h2 className="text-white font-arabic font-bold mb-4"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
            أرقام تتحدث
            <br />
            <span className="text-[oklch(0.72_0.12_85)]">عن تميزنا</span>
          </h2>
          <p className="text-[oklch(0.85_0.02_85)] font-arabic text-base max-w-2xl mx-auto">
            سنوات من العطاء والتميز في تقديم الخدمات القانونية المتخصصة
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full border border-[oklch(0.72_0.12_85)/0.4] flex items-center justify-center mx-auto mb-4 group-hover:bg-[oklch(0.62_0.13_85)] group-hover:border-[oklch(0.62_0.13_85)] transition-all duration-300">
                <stat.icon size={24} className="text-[oklch(0.72_0.12_85)] group-hover:text-white transition-colors" />
              </div>

              {/* Counter */}
              <CounterNumber target={stat.number} suffix={stat.suffix} isActive={isInView} />
              
              {/* Label */}
              <div className="text-white font-arabic font-bold text-base mt-1 mb-1">{stat.label}</div>
              <div className="text-[oklch(0.80_0.02_85)] font-arabic text-sm">{stat.desc}</div>

              {/* Gold underline */}
              <div className="w-8 h-0.5 bg-[oklch(0.72_0.12_85)/0.5] mx-auto mt-3 group-hover:w-16 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center border border-[oklch(0.72_0.12_85)/0.3] p-8 relative"
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-transparent px-4">
            <span className="text-[oklch(0.72_0.12_85)] text-3xl font-display">"”</span>
          </div>
          <p className="text-[oklch(0.92_0.01_85)] font-arabic text-lg leading-relaxed max-w-3xl mx-auto">
            نؤمن بأن العدالة حق للجميع، ونسعى جاهدين لتحقيقها بأعلى معايير الاحترافية والأمانة
          </p>
          <div className="mt-4 text-[oklch(0.72_0.12_85)] font-arabic font-semibold">
            — فريق تمعن للمحاماة
          </div>
        </motion.div>
      </div>
    </section>
  );
}
