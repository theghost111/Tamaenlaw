/*
 * TAMAEAN LAW - About Section
 * Design: Asymmetric layout with image + content
 * Gold accent lines, fade-in animations on scroll
 */
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";

const CONSULTATION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663526564708/8YchEKfoi4q4tV73Rg8cg6/about-office-meeting-v3_5c2c871a.png";

const values = [
  { icon: Target, title: "الدقة والاحترافية", desc: "نلتزم بأعلى معايير الدقة في كل قضية" },
  { icon: Eye, title: "الشفافية والأمانة", desc: "نتعامل بصدق ووضوح مع عملائنا" },
  { icon: Heart, title: "التفاني في الخدمة", desc: "نضع مصلحة العميل في مقدمة أولوياتنا" },
];

const highlights = [
  "خبرة قانونية تمتد لأكثر من 15 عاماً",
  "فريق من المحامين المتخصصين في مختلف المجالات",
  "تمثيل قانوني أمام جميع المحاكم السعودية",
  "استشارات قانونية متخصصة للشركات والأفراد",
  "متابعة مستمرة لمستجدات التشريعات والأنظمة",
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Decorative gold frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[oklch(0.72_0.12_85)/0.3] rounded-sm" />
              <img
                src={CONSULTATION_IMG}
                alt="استشارة قانونية"
                className="w-full h-[300px] md:h-[500px] object-cover rounded-sm shadow-2xl relative z-10"
              />
              {/* Experience badge */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-[oklch(0.62_0.13_85)] text-white p-6 shadow-xl">
                <div className="font-arabic font-black text-4xl leading-none">+15</div>
                <div className="font-arabic text-sm mt-1 text-white/90">سنة خبرة</div>
              </div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            {/* Section label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[oklch(0.62_0.13_85)]" />
              <span className="text-[oklch(0.62_0.13_85)] font-arabic font-medium text-sm uppercase tracking-wider">
                من نحن
              </span>
            </div>

            <h2 className="text-[oklch(0.18_0.04_260)] font-arabic font-bold mb-6 leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
              شركة قانونية رائدة
              <br />
              <span className="text-[oklch(0.62_0.13_85)]">بخبرة وثقة</span>
            </h2>

            <p className="text-[oklch(0.45_0.03_260)] font-arabic leading-relaxed text-base mb-6">
              تمعن للمحاماة والاستشارات القانونية شركة قانونية متخصصة تأسست على مبادئ الأمانة والاحترافية، 
              تقدم خدماتها للأفراد والشركات والمؤسسات في المملكة العربية السعودية. 
              نفخر بفريق من المحامين المؤهلين والمتخصصين في مختلف فروع القانون.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle size={18} className="text-[oklch(0.62_0.13_85)] flex-shrink-0 mt-0.5" />
                  <span className="text-[oklch(0.35_0.03_260)] font-arabic text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[oklch(0.90_0.02_85)]">
              {values.map((val, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-10 h-10 rounded-full bg-[oklch(0.96_0.02_85)] flex items-center justify-center mx-auto mb-2 group-hover:bg-[oklch(0.62_0.13_85)] transition-colors">
                    <val.icon size={18} className="text-[oklch(0.62_0.13_85)] group-hover:text-white transition-colors" />
                  </div>
                  <div className="font-arabic font-bold text-xs text-[oklch(0.18_0.04_260)] mb-1">{val.title}</div>
                  <div className="font-arabic text-xs text-[oklch(0.52_0.03_260)] leading-tight">{val.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
