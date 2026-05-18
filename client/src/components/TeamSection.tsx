/*
 * TAMAEAN LAW - Team Section
 * Design: Professional team cards WITHOUT photos - icon-based avatars
 * Gold accents, elegant typography
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Scale, Briefcase, BookOpen, Building2 } from "lucide-react";

const TEAM_IMG = "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&h=400&fit=crop";

const team = [
  {
    icon: Scale,
    name: "محامٍ متخصص",
    title: "المؤسس والشريك الإداري",
    specialty: "قانون الشركات والتجاري",
    experience: "15+",
    color: "oklch(0.62_0.13_85)",
  },
  {
    icon: BookOpen,
    name: "مستشار قانوني",
    title: "شريك أول",
    specialty: "قانون الأسرة والأحوال الشخصية",
    experience: "12+",
    color: "oklch(0.55_0.12_85)",
  },
  {
    icon: Briefcase,
    name: "محامٍ أول",
    title: "محامٍ أول",
    specialty: "القضايا الجزائية والمدنية",
    experience: "10+",
    color: "oklch(0.62_0.13_85)",
  },
  {
    icon: Building2,
    name: "محامية متخصصة",
    title: "محامية متخصصة",
    specialty: "القانون العقاري والتجاري",
    experience: "8+",
    color: "oklch(0.55_0.12_85)",
  },
];

function TeamCard({ member, index }: { member: typeof team[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = member.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white border border-[oklch(0.90_0.02_85)] overflow-hidden hover:shadow-2xl hover:shadow-[oklch(0.62_0.13_85)/0.15] transition-all duration-400 text-center"
    >
      {/* Avatar area */}
      <div className="relative bg-[oklch(0.96_0.02_85)] h-44 flex flex-col items-center justify-center">
        {/* Decorative background circles */}
        <div className="absolute w-32 h-32 rounded-full bg-[oklch(0.62_0.13_85)/0.08] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute w-20 h-20 rounded-full bg-[oklch(0.62_0.13_85)/0.12] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        {/* Icon circle */}
        <div className="relative w-20 h-20 rounded-full bg-[oklch(0.62_0.13_85)] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <Icon size={32} className="text-white" />
        </div>

        {/* Experience badge */}
        <div className="absolute top-3 left-3 bg-[oklch(0.18_0.04_260)] text-white text-xs font-arabic px-2 py-1">
          {member.experience} سنة
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Gold accent line */}
        <div className="w-10 h-0.5 bg-[oklch(0.72_0.12_85)] mx-auto mb-3 group-hover:w-20 transition-all duration-300" />

        <h3 className="font-arabic font-bold text-[oklch(0.18_0.04_260)] text-base mb-1 group-hover:text-[oklch(0.62_0.13_85)] transition-colors">
          {member.name}
        </h3>
        <p className="font-arabic text-[oklch(0.62_0.13_85)] text-sm font-semibold mb-2">
          {member.title}
        </p>
        <p className="font-arabic text-[oklch(0.52_0.03_260)] text-sm">
          {member.specialty}
        </p>
      </div>
    </motion.div>
  );
}

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 bg-white">
      <div className="container">
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
                فريقنا القانوني
              </span>
              <div className="w-8 h-0.5 bg-[oklch(0.62_0.13_85)]" />
            </div>
            <h2 className="text-[oklch(0.18_0.04_260)] font-arabic font-bold mb-4"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
              محامون متخصصون
              <br />
              <span className="text-[oklch(0.62_0.13_85)]">في خدمتكم</span>
            </h2>
            <p className="text-[oklch(0.52_0.03_260)] font-arabic text-base max-w-2xl mx-auto leading-relaxed">
              فريقنا من المحامين المؤهلين والمتخصصين يعمل بشغف ومهنية عالية لتحقيق أفضل النتائج لعملائنا
            </p>
          </motion.div>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <TeamCard key={i} member={member} index={i} />
          ))}
        </div>

        {/* Team banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 relative overflow-hidden shadow-xl"
        >
          <img
            src={TEAM_IMG}
            alt="فريق تمعن القانوني"
            className="w-full h-56 md:h-72 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[oklch(0.18_0.04_260/0.85)] via-[oklch(0.18_0.04_260/0.5)] to-transparent flex items-center justify-end p-10">
            <div className="text-right max-w-sm">
              <h3 className="text-white font-arabic font-black text-2xl md:text-3xl mb-3">فريق تمعن القانوني</h3>
              <p className="text-white/80 font-arabic text-sm leading-relaxed">نعمل معاً بشغف واحترافية لتحقيق العدالة وحماية حقوقكم</p>
              <div className="mt-4 w-12 h-0.5 bg-[oklch(0.72_0.12_85)] mr-0" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
