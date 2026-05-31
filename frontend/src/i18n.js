import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// ── Translations Dictionary ────────────────────────────────────────────────
const resources = {
  en: {
    translation: {
      navbar: {
        services: "Services",
        track: "Track Complaint",
        about: "About",
        login: "Sign In"
      },
      hero: {
        badge: "🏆 KP's First Smart City Initiative",
        title_city: "Mardan",
        title_smart: "Smart City",
        title_portal: "Citizen Portal",
        subtitle: "Submit civic complaints, track resolutions in real time, and connect directly with Mardan's municipal services — all in one intelligent platform.",
        btn_file: "File a Complaint",
        btn_track: "Track My Complaint",
        trust: {
          support: "24/7 Support",
          tracking: "Instant Tracking",
          secure: "Secure & Private",
          multilingual: "Multilingual"
        },
        scroll: "Scroll",
        stats: {
          filed: "Complaints Filed",
          resolved: "Resolved",
          rate: "Resolution Rate",
          response: "Avg. Response"
        }
      }
    }
  },
  ur: {
    translation: {
      navbar: {
        services: "خدمات",
        track: "شکایت ٹریک کریں",
        about: "ہمارے بارے میں",
        login: "سائن ان کریں"
      },
      hero: {
        badge: "🏆 خیبر پختونخوا کا پہلا سمارٹ سٹی منصوبہ",
        title_city: "مردان",
        title_smart: "سمارٹ سٹی",
        title_portal: "شہری پورٹل",
        subtitle: "شہری شکایات درج کریں، حقیقی وقت میں حل کی ٹریکنگ کریں، اور مردان کی بلدیاتی خدمات سے براہ راست جڑیں — سب کچھ ایک ہی ذہین پلیٹ فارم پر۔",
        btn_file: "شکایت درج کریں",
        btn_track: "میری شکایت ٹریک کریں",
        trust: {
          support: "24/7 سپورٹ",
          tracking: "فوری ٹریکنگ",
          secure: "محفوظ اور نجی",
          multilingual: "کثیر لسانی"
        },
        scroll: "نیچے جائیں",
        stats: {
          filed: "درج شکایات",
          resolved: "حل شدہ",
          rate: "حل کی شرح",
          response: "اوسط جواب"
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // React already escapes by default
    }
  });

export default i18n;
