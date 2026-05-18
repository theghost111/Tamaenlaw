/*
 * TAMAEAN LAW - Footer Component
 * Design: Dark navy footer with gold accents
 * Real contact data from tamaenlaw.com
 */
import { Phone, Mail, MapPin, ChevronUp, MessageCircle } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663526564708/8YchEKfoi4q4tV73Rg8cg6/tamaean-logo_dc782de8.webp";

const quickLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "من نحن", href: "#about" },
  { label: "خدماتنا", href: "#services" },
  { label: "فريقنا", href: "#team" },
  { label: "إنجازاتنا", href: "#achievements" },
  { label: "تواصل معنا", href: "#contact" },
];

const legalServices = [
  "قضايا المحاكم",
  "قانون الشركات",
  "صياغة العقود",
  "القضايا العقارية",
  "قانون الأسرة",
  "قانون العمل",
  "التحكيم والوساطة",
  "الاستشارات القانونية",
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[oklch(0.96_0.02_85)] text-[oklch(0.18_0.04_260)] border-t border-[oklch(0.88_0.04_85)]">
      {/* Gold top border */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-[oklch(0.72_0.12_85)] to-transparent" />

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <img
              src={LOGO_URL}
              alt="تمعن للمحاماة"
              className="h-16 w-auto object-contain mb-6"
            />
            <p className="text-[oklch(0.40_0.02_260)] font-arabic text-sm leading-relaxed mb-6">
              تمعن للمحاماة والاستشارات القانونية — شركة قانونية رائدة تقدم خدمات متكاملة بأعلى معايير الاحترافية والأمانة.
            </p>
            <div className="flex gap-3">
              <a
                href="https://x.com/tamaenlaw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-[oklch(0.80_0.04_85)] text-[oklch(0.45_0.02_260)] hover:border-[oklch(0.62_0.13_85)] hover:text-[oklch(0.62_0.13_85)] transition-all text-xs font-bold flex items-center justify-center"
              >
                X
              </a>
              <a
                href="https://tiktok.com/@tamaenlaw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-[oklch(0.80_0.04_85)] text-[oklch(0.45_0.02_260)] hover:border-[oklch(0.62_0.13_85)] hover:text-[oklch(0.62_0.13_85)] transition-all text-xs font-bold flex items-center justify-center"
              >
                TT
              </a>
              <a
                href="https://wa.me/966565690200"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-[oklch(0.80_0.04_85)] text-[oklch(0.45_0.02_260)] hover:border-[oklch(0.62_0.13_85)] hover:text-[oklch(0.62_0.13_85)] transition-all text-xs font-bold flex items-center justify-center"
              >
                WA
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-arabic font-bold text-base mb-5 text-[oklch(0.18_0.04_260)]">
              <span className="border-b-2 border-[oklch(0.72_0.12_85)] pb-1">روابط سريعة</span>
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-[oklch(0.40_0.02_260)] font-arabic text-sm hover:text-[oklch(0.62_0.13_85)] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.12_85)/0.5] group-hover:bg-[oklch(0.72_0.12_85)] transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-arabic font-bold text-base mb-5 text-[oklch(0.18_0.04_260)]">
              <span className="border-b-2 border-[oklch(0.72_0.12_85)] pb-1">خدماتنا</span>
            </h4>
            <ul className="space-y-2.5">
              {legalServices.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="text-[oklch(0.40_0.02_260)] font-arabic text-sm hover:text-[oklch(0.62_0.13_85)] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.12_85)/0.5] group-hover:bg-[oklch(0.72_0.12_85)] transition-colors" />
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-arabic font-bold text-base mb-5 text-[oklch(0.18_0.04_260)]">
              <span className="border-b-2 border-[oklch(0.72_0.12_85)] pb-1">تواصل معنا</span>
            </h4>
            <div className="space-y-4">
              {/* Makkah */}
              <div>
                <div className="text-[oklch(0.72_0.12_85)] font-arabic text-xs font-semibold mb-1">مكة المكرمة</div>
                <a href="tel:+966565690200" className="flex items-center gap-3 group">
                  <Phone size={14} className="text-[oklch(0.72_0.12_85)] flex-shrink-0" />
                  <span className="text-[oklch(0.35_0.04_260)] font-arabic text-sm group-hover:text-[oklch(0.62_0.13_85)] transition-colors" dir="ltr">
                    +966 56 569 0200
                  </span>
                </a>
              </div>
              {/* Jeddah */}
              <div>
                <div className="text-[oklch(0.72_0.12_85)] font-arabic text-xs font-semibold mb-1">جدة</div>
                <a href="tel:+966560088703" className="flex items-center gap-3 group">
                  <Phone size={14} className="text-[oklch(0.72_0.12_85)] flex-shrink-0" />
                  <span className="text-[oklch(0.35_0.04_260)] font-arabic text-sm group-hover:text-[oklch(0.62_0.13_85)] transition-colors" dir="ltr">
                    +966 56 008 8703
                  </span>
                </a>
              </div>
              {/* Email */}
              <a href="mailto:info@tamaenlaw.com" className="flex items-start gap-3 group">
                <Mail size={14} className="text-[oklch(0.72_0.12_85)] mt-0.5 flex-shrink-0" />
                <span className="text-[oklch(0.35_0.04_260)] font-arabic text-sm group-hover:text-[oklch(0.62_0.13_85)] transition-colors">
                  info@tamaenlaw.com
                </span>
              </a>
              {/* Hours */}
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-[oklch(0.72_0.12_85)] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-[oklch(0.35_0.04_260)] font-arabic text-sm">من 7ص الى 2ظ</div>
                  <div className="text-[oklch(0.50_0.02_260)] font-arabic text-xs">الأحد — الخميس</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[oklch(0.85_0.04_85)]">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[oklch(0.50_0.02_260)] font-arabic text-sm text-center">
            © {new Date().getFullYear()} تمعن للمحاماة والاستشارات القانونية. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-6">
            <button className="text-[oklch(0.50_0.02_260)] font-arabic text-xs hover:text-[oklch(0.62_0.13_85)] transition-colors">
              سياسة الخصوصية
            </button>
            <button className="text-[oklch(0.50_0.02_260)] font-arabic text-xs hover:text-[oklch(0.62_0.13_85)] transition-colors">
              الشروط والأحكام
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/966565690200"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-40 flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all hover:scale-110"
        style={{ bottom: '2rem', left: '1.5rem', background: '#25D366', boxShadow: '0 4px 20px rgba(37,211,102,0.4)' }}
        aria-label="تواصل عبر واتساب"
      >
        <MessageCircle size={22} className="text-white" />
      </a>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed z-40 w-10 h-10 bg-[oklch(0.62_0.13_85)] text-white flex items-center justify-center shadow-lg hover:bg-[oklch(0.55_0.12_85)] transition-all hover:-translate-y-1"
        aria-label="العودة للأعلى"
        style={{ bottom: '5.5rem', left: '1.5rem' }}
      >
        <ChevronUp size={20} />
      </button>
    </footer>
  );
}
