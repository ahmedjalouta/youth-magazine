"use client";

import { useState } from "react";

export default function Home() {
  // تم تغيير اللغة الافتراضية هنا إلى 'en' لتبدأ الصفحة بالإنجليزية فوراً
  const [lang, setLang] = useState<"ar" | "en">("en");

  const content = {
    ar: {
      dir: "rtl",
      nav: ["الأخبار", "الثقافة", "الموضة", "التكنولوجيا", "أسلوب الحياة", "الرياضة", "الآراء"],
      heroCategory: "الثقافة • مميز",
      heroTitle: "from youth to youth",
      heroDesc: "stay tuned",
      readStory: "stay tuned",
      trendingTitle: "الشائع الآن",
      trending1Tag: "#1 الموضة",
      trending1Title: "youth magazine",
      trending2Tag: "#2 التكنولوجيا",
      trending2Title: "youth magazine",
      trending3Tag: "#3 أصوات",
      trending3Title: "youth magazine",
      btnText: "EN",
    },
    en: {
      dir: "ltr",
      nav: ["NEWS", "CULTURE", "FASHION", "TECH", "LIFESTYLE", "SPORTS", "OPINIONS"],
      heroCategory: "CULTURE • FEATURED",
      heroTitle: "from youth to youth",
      heroDesc: "stay tuned",
      readStory: "stay tuned",
      trendingTitle: "TRENDING NOW",
      trending1Tag: "#1 FASHION",
      trending1Title: "youth magazine",
      trending2Tag: "#2 TECH",
      trending2Title: "youth magazine",
      trending3Tag: "#3 VOICES",
      trending3Title: "youth magazine",
      btnText: "عربي",
    },
  };

  const t = content[lang];

  const toggleLanguage = () => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  };

  return (
    <div className={`min-h-screen bg-black text-white font-sans ${t.dir === "rtl" ? "dir-rtl" : "dir-ltr"}`} dir={t.dir}>
      {/* 1. HEADER */}
      <header className="border-b border-zinc-800 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-black tracking-wider uppercase">YOUTH MAG</div>
        
        <div className="flex gap-6 items-center text-sm text-zinc-400">
          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/liby.anyouth"
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white"
            >
              Instagram
            </a>
          </div>
          
          <button 
            onClick={toggleLanguage}
            className="border border-zinc-700 px-3 py-1 rounded-full text-xs text-white hover:bg-zinc-800 transition font-bold"
          >
            {t.btnText}
          </button>
        </div>
      </header>

      {/* 2. NAVIGATION */}
      <nav className="border-b border-zinc-800 py-3 bg-zinc-950/50 backdrop-blur sticky top-0 z-50">
        <ul className="flex justify-center gap-8 text-xs md:text-sm font-semibold tracking-widest text-zinc-400 overflow-x-auto px-4">
          {t.nav.map((item, index) => (
            <li key={index} className="hover:text-white cursor-pointer transition">
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* 3. HERO SECTION */}
      <main className="max-w-7xl mx-auto p-6 space-y-16">
        <section className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 grid md:grid-cols-2 gap-8 items-center p-8">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">{t.heroCategory}</span>
            <h1 className="text-3xl md:text-5xl font-black leading-tight">
              {t.heroTitle}
            </h1>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {t.heroDesc}
            </p>
            <button className="bg-white text-black font-bold px-6 py-3 rounded-xl hover:bg-zinc-200 transition text-sm mt-4">
              {t.readStory}
            </button>
          </div>
          
          <div className="h-80 bg-zinc-800 rounded-xl flex items-center justify-center border border-zinc-700/50 overflow-hidden">
            <img 
              src="/hero.jpg.jpeg" 
              alt="Cover Image" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* 4. TRENDING SECTION */}
        <section>
          <h2 className={`text-xl font-bold mb-6 text-zinc-300 border-emerald-500 ${t.dir === 'rtl' ? 'border-r-4 pr-3' : 'border-l-4 pl-3'}`}>
            {t.trendingTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900/50 p-5 rounded-xl border border-zinc-800 space-y-2">
              <span className="text-xs text-zinc-500">{t.trending1Tag}</span>
              <h3 className="font-bold">{t.trending1Title}</h3>
            </div>
            <div className="bg-zinc-900/50 p-5 rounded-xl border border-zinc-800 space-y-2">
              <span className="text-xs text-zinc-500">{t.trending2Tag}</span>
              <h3 className="font-bold">{t.trending2Title}</h3>
            </div>
            <div className="bg-zinc-900/50 p-5 rounded-xl border border-zinc-800 space-y-2">
              <span className="text-xs text-zinc-500">{t.trending3Tag}</span>
              <h3 className="font-bold">{t.trending3Title}</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}