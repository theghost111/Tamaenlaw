/*
 * TAMAEAN LAW - Navbar Component
 * Design: Contemporary Legal Luxury - White/Gold palette
 * Sticky navigation with smooth scroll, mobile responsive
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663526564708/8YchEKfoi4q4tV73Rg8cg6/tamaean-logo_dc782de8.webp";

const navLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "من نحن", href: "#about" },
  { label: "خدماتنا", href: "#services" },
  { label: "فريقنا", href: "#team" },
  { label: "إنجازاتنا", href: "#achievements" },
  { label: "تواصل معنا", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(l => l.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>


      {/* Main navbar */}
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-[oklch(0.90_0.02_85)]"
            : "bg-white shadow-sm border-b border-[oklch(0.90_0.02_85)]"
        }`}
      >
        <div className="container flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => scrollTo("#home")} className="flex-shrink-0">
            <img
              src={LOGO_URL}
              alt="تمعن للمحاماة والاستشارات القانونية"
              className="h-14 w-auto object-contain"
            />
          </button>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`nav-link font-arabic font-medium text-sm transition-colors duration-200 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-[oklch(0.62_0.13_85)] active"
                    : "text-[oklch(0.18_0.04_260)] hover:text-[oklch(0.62_0.13_85)]"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollTo("#contact")}
              className="bg-[oklch(0.62_0.13_85)] text-white px-6 py-2.5 rounded-sm font-arabic font-semibold text-sm hover:bg-[oklch(0.55_0.12_85)] transition-all duration-200 hover:shadow-lg hover:shadow-[oklch(0.62_0.13_85)/0.3]"
            >
              استشارة قانونية
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[oklch(0.18_0.04_260)] hover:text-[oklch(0.62_0.13_85)] transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white border-t border-[oklch(0.90_0.02_85)]"
            >
              <div className="container py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className={`text-right py-3 px-4 font-arabic font-medium text-sm rounded-sm transition-colors ${
                      activeSection === link.href.replace("#", "")
                        ? "text-[oklch(0.62_0.13_85)] bg-[oklch(0.96_0.02_85)]"
                        : "text-[oklch(0.18_0.04_260)] hover:text-[oklch(0.62_0.13_85)] hover:bg-[oklch(0.96_0.02_85)]"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollTo("#contact")}
                  className="mt-2 bg-[oklch(0.62_0.13_85)] text-white py-3 px-4 rounded-sm font-arabic font-semibold text-sm hover:bg-[oklch(0.55_0.12_85)] transition-colors"
                >
                  استشارة قانونية
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
