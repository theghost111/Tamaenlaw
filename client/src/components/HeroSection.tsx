/*
 * TAMAEAN LAW - Hero Section
 * Design: Full-screen hero with luxury office background
 * Dark overlay with gold accents, animated text entrance
 */
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Scale, Shield, Award } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663526564708/8YchEKfoi4q4tV73Rg8cg6/hero-bg-kU5AGVgNqanLQqy8Gva77p.webp";

const stats = [
  { number: "+500", label: "قضية ناجحة", icon: Scale },
  { number: "+15", label: "سنة خبرة", icon: Award },
  { number: "+200", label: "عميل راضٍ", icon: Shield },
];

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Dark overlay - gradient from dark navy to semi-transparent */}
      <div className="absolute inset-0 bg-gradient-to-l from-[oklch(0.18_0.04_260/0.85)] via-[oklch(0.18_0.04_260/0.75)] to-[oklch(0.18_0.04_260/0.60)]" />
      
      {/* Gold accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[oklch(0.72_0.12_85)] to-transparent" />

      {/* Content */}
      <div className="relative z-10 container py-16 md:py-24 flex flex-col items-start">
        <div className="max-w-3xl">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-0.5 bg-[oklch(0.72_0.12_85)]" />
            <span className="text-[oklch(0.72_0.12_85)] font-arabic font-medium text-sm tracking-widest uppercase">
              TAMAEAN LAW FIRM
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white font-arabic leading-tight mb-6"
            style={{ fontSize: "clamp(1.8rem, 5vw, 4rem)", fontWeight: 800 }}
          >
            تمعن للمحاماة
            <br />
            <span className="gold-shimmer">والاستشارات القانونية</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/80 font-arabic text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-xl"
          >
            نقدم خدمات قانونية متكاملة بأعلى معايير الاحترافية والأمانة، 
            مع فريق من المحامين المتخصصين لحماية حقوقك وتحقيق أهدافك القانونية.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={scrollToContact}
              className="bg-[oklch(0.62_0.13_85)] text-white px-5 py-3 md:px-8 md:py-4 font-arabic font-bold text-sm md:text-base hover:bg-[oklch(0.55_0.12_85)] transition-all duration-300 hover:shadow-xl hover:shadow-[oklch(0.62_0.13_85)/0.4] hover:-translate-y-0.5"
            >
              احصل على استشارة قانونية
            </button>
            <button
              onClick={scrollToAbout}
              className="border-2 border-white/60 text-white px-5 py-3 md:px-8 md:py-4 font-arabic font-semibold text-sm md:text-base hover:border-[oklch(0.72_0.12_85)] hover:text-[oklch(0.72_0.12_85)] transition-all duration-300"
            >
              تعرف علينا
            </button>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-8 md:mt-20 grid grid-cols-3 gap-2 md:gap-8 w-full max-w-2xl"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="flex justify-center mb-2">
                <stat.icon size={24} className="text-[oklch(0.72_0.12_85)]" />
              </div>
              <div className="text-white font-arabic font-black text-xl md:text-3xl mb-1 group-hover:text-[oklch(0.72_0.12_85)] transition-colors">
                {stat.number}
              </div>
              <div className="text-white/70 font-arabic text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-[oklch(0.72_0.12_85)] transition-colors z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  );
}
