/*
 * TAMAEAN LAW - Why Us Section
 * Design: Split layout with abstract background image
 * Animated feature cards with gold icons
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Clock, Users, Trophy, HeartHandshake, BookOpen } from "lucide-react";

const ABSTRACT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663526564708/8YchEKfoi4q4tV73Rg8cg6/abstract-legal-CrrjNAEtpp976RY2r36vy7.webp";

const reasons = [
  {
    icon: ShieldCheck,
    title: "ضمان السرية التامة",
    desc: "نلتزم بأعلى معايير السرية وحماية المعلومات الشخصية لعملائنا",
  },
  {
    icon: Clock,
    title: "استجابة سريعة",
    desc: "نضمن الرد على استفساراتكم خلال 24 ساعة في أيام العمل",
  },
  {
    icon: Users,
    title: "فريق متخصص",
    desc: "محامون متخصصون في مختلف فروع القانون لخدمتكم على أكمل وجه",
  },
  {
    icon: Trophy,
    title: "سجل حافل بالنجاحات",
    desc: "أكثر من 500 قضية ناجحة تشهد على كفاءتنا وتميزنا",
  },
  {
    icon: HeartHandshake,
    title: "شراكة حقيقية",
    desc: "نتعامل مع قضيتك كأنها قضيتنا ونضع مصلحتك فوق كل اعتبار",
  },
  {
    icon: BookOpen,
    title: "تحديث مستمر",
    desc: "نواكب أحدث التشريعات والأنظمة لتقديم أفضل الحلول القانونية",
  },
];

export default function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[oklch(0.62_0.13_85)]" />
              <span className="text-[oklch(0.62_0.13_85)] font-arabic font-medium text-sm uppercase tracking-wider">
                لماذا تمعن؟
              </span>
            </div>

            <h2 className="text-[oklch(0.18_0.04_260)] font-arabic font-bold mb-6 leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
              ما يميزنا عن
              <br />
              <span className="text-[oklch(0.62_0.13_85)]">غيرنا</span>
            </h2>

            <p className="text-[oklch(0.45_0.03_260)] font-arabic leading-relaxed text-base mb-10">
              نحن لسنا مجرد مكتب محاماة، بل شريك قانوني موثوق يسعى لتحقيق أهدافك وحماية حقوقك بكل أمانة واحترافية.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {reasons.map((reason, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="group flex gap-4 p-4 hover:bg-[oklch(0.97_0.01_85)] transition-colors rounded-sm"
                >
                  <div className="w-10 h-10 rounded-sm bg-[oklch(0.96_0.02_85)] flex items-center justify-center flex-shrink-0 group-hover:bg-[oklch(0.62_0.13_85)] transition-colors">
                    <reason.icon size={18} className="text-[oklch(0.62_0.13_85)] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-arabic font-bold text-sm text-[oklch(0.18_0.04_260)] mb-1 group-hover:text-[oklch(0.62_0.13_85)] transition-colors">
                      {reason.title}
                    </h4>
                    <p className="font-arabic text-xs text-[oklch(0.52_0.03_260)] leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main image */}
              <img
                src={ABSTRACT_BG}
                alt="تمعن القانونية"
                className="w-full h-[500px] object-cover rounded-sm shadow-2xl"
              />
              
              {/* Overlay card */}
              <div className="absolute bottom-6 right-6 left-6 bg-white/95 backdrop-blur-sm p-6 shadow-xl border-r-4 border-[oklch(0.62_0.13_85)]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[oklch(0.62_0.13_85)] flex items-center justify-center flex-shrink-0">
                    <ShieldCheck size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-arabic font-bold text-[oklch(0.18_0.04_260)] text-base">
                      مرخصون ومعتمدون
                    </div>
                    <div className="font-arabic text-sm text-[oklch(0.52_0.03_260)]">
                      مرخص من وزارة العدل السعودية
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
