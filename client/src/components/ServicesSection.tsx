/*
 * TAMAEAN LAW - Services Section
 * Design: Pattern background with interactive service cards
 * Gold hover effects, animated entrance
 */
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Scale, Building2, FileText, Users, Briefcase, Home,
  ShieldCheck, Globe, Gavel, ArrowLeft
} from "lucide-react";

const ABSTRACT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663526564708/8YchEKfoi4q4tV73Rg8cg6/abstract-legal-CrrjNAEtpp976RY2r36vy7.webp";

const services = [
  {
    icon: Scale,
    title: "قضايا المحاكم",
    desc: "تمثيل قانوني احترافي أمام جميع درجات المحاكم السعودية في القضايا المدنية والجزائية والتجارية.",
    color: "oklch(0.62_0.13_85)",
  },
  {
    icon: Building2,
    title: "قانون الشركات",
    desc: "تأسيس الشركات وصياغة عقود الشراكة وحل النزاعات التجارية وإعادة الهيكلة القانونية.",
    color: "oklch(0.62_0.13_85)",
  },
  {
    icon: FileText,
    title: "صياغة العقود",
    desc: "صياغة ومراجعة العقود التجارية والمدنية وعقود العمل وضمان حماية حقوق الأطراف.",
    color: "oklch(0.62_0.13_85)",
  },
  {
    icon: Home,
    title: "القضايا العقارية",
    desc: "التعامل مع نزاعات الملكية والإيجار وعقود البيع والشراء والتطوير العقاري.",
    color: "oklch(0.62_0.13_85)",
  },
  {
    icon: Users,
    title: "قانون الأسرة",
    desc: "قضايا الطلاق والنفقة والحضانة والميراث والوصاية بحساسية واحترافية عالية.",
    color: "oklch(0.62_0.13_85)",
  },
  {
    icon: Briefcase,
    title: "قانون العمل",
    desc: "تمثيل أصحاب العمل والموظفين في نزاعات العمل وصياغة عقود العمل والأنظمة الداخلية.",
    color: "oklch(0.62_0.13_85)",
  },
  {
    icon: ShieldCheck,
    title: "الاستشارات القانونية",
    desc: "تقديم استشارات قانونية متخصصة للأفراد والشركات لاتخاذ قرارات مدروسة وآمنة.",
    color: "oklch(0.62_0.13_85)",
  },
  {
    icon: Globe,
    title: "القانون الدولي",
    desc: "التعامل مع العقود الدولية والنزاعات العابرة للحدود والتحكيم التجاري الدولي.",
    color: "oklch(0.62_0.13_85)",
  },
  {
    icon: Gavel,
    title: "التحكيم والوساطة",
    desc: "حل النزاعات بطرق بديلة عبر التحكيم والوساطة لتوفير الوقت والتكلفة على الأطراف.",
    color: "oklch(0.62_0.13_85)",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group bg-white border border-[oklch(0.90_0.02_85)] p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[oklch(0.62_0.13_85)/0.12] hover:border-[oklch(0.72_0.12_85)/0.5] relative overflow-hidden"
    >
      {/* Gold accent top border on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[oklch(0.72_0.12_85)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
      
      {/* Icon */}
      <div className={`w-12 h-12 rounded-sm flex items-center justify-center mb-4 transition-all duration-300 ${
        hovered ? "bg-[oklch(0.62_0.13_85)]" : "bg-[oklch(0.96_0.02_85)]"
      }`}>
        <service.icon size={22} className={`transition-colors duration-300 ${
          hovered ? "text-white" : "text-[oklch(0.62_0.13_85)]"
        }`} />
      </div>

      <h3 className="font-arabic font-bold text-[oklch(0.18_0.04_260)] text-lg mb-2 group-hover:text-[oklch(0.62_0.13_85)] transition-colors">
        {service.title}
      </h3>
      <p className="font-arabic text-[oklch(0.52_0.03_260)] text-sm leading-relaxed">
        {service.desc}
      </p>

      {/* Arrow */}
      <div className={`mt-4 flex items-center gap-2 text-[oklch(0.62_0.13_85)] text-sm font-arabic font-medium transition-all duration-300 ${
        hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
      }`}>
        <span>اقرأ المزيد</span>
        <ArrowLeft size={14} />
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${ABSTRACT_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-[oklch(0.98_0.01_85)]" style={{ opacity: 0.95 }} />

      <div className="container relative z-10">
        {/* Section header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[oklch(0.62_0.13_85)]" />
              <span className="text-[oklch(0.62_0.13_85)] font-arabic font-medium text-sm uppercase tracking-wider">
                خدماتنا القانونية
              </span>
              <div className="w-8 h-0.5 bg-[oklch(0.62_0.13_85)]" />
            </div>
            <h2 className="text-[oklch(0.18_0.04_260)] font-arabic font-bold mb-4"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
              خدمات قانونية متكاملة
              <br />
              <span className="text-[oklch(0.62_0.13_85)]">لكل احتياجاتك</span>
            </h2>
            <p className="text-[oklch(0.52_0.03_260)] font-arabic text-base max-w-2xl mx-auto leading-relaxed">
              نقدم طيفاً واسعاً من الخدمات القانونية المتخصصة، مع الالتزام بأعلى معايير الجودة والاحترافية
            </p>
          </motion.div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
