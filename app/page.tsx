"use client";

import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState<"ar" | "en">("en");

  const content = {
    ar: {
      dir: "rtl",
      nav: ["الأخبار", "الثقافة", "الموضة", "التكنولوجيا", "أسلوب الحياة", "الرياضة", "الآراء"],
      heroCategory: "الثقافة • غلاف العدد",
      heroTitle: "من الشباب إلى الشباب: صياغة أسلوب جيل جديد",
      heroDesc: "منصة إعلامية مستقلة تسلط الضوء على ابتكارات الشباب، الفنون المعاصرة، والرؤى المستقبلية للمجتمع العربي والعالمي.",
      readStory: "اقرأ القصة كاملة",
      trendingTitle: "الأكثر قراءة هذا الأسبوع",
      trending1Tag: "#1 الموضة المستدامة",
      trending1Title: "كيف يعيد المصممون الشباب تعريف عالم الأزياء؟",
      trending2Tag: "#2 الذكاء الاصطناعي",
      trending2Title: "مستقبل صُنّاع المحتوى في عصر خوارزميات التوليد",
      trending3Tag: "#3 أصوات شابة",
      trending3Title: "حوار خاص: الفنون المستقلة بين الهوية والعالمية",
      editorsPicks: "مختارات المحرر",
      newsletterTitle: "انضم إلى مجتمع YOUTH MAG",
      newsletterDesc: "احصل على أفضل المقالات والقصص الحصرية مباشرة إلى بريدك الإلكتروني أسبوعياً.",
      subscribeBtn: "اشتراك",
      placeholderEmail: "أدخل بريدك الإلكتروني...",
      btnText: "EN",
      timeRead: "دقائق قراءة",
    },
    en: {
      dir: "ltr",
      nav: ["NEWS", "CULTURE", "FASHION", "TECH", "LIFESTYLE", "SPORTS", "OPINIONS"],
      heroCategory: "CULTURE • COVER STORY",
      heroTitle: "FROM YOUTH TO YOUTH: SHAPING THE NEXT GENERATION",
      heroDesc: "An independent media platform empowering youth culture, contemporary arts, and forward-thinking perspectives worldwide.",
      readStory: "Read Full Story",
      trendingTitle: "TRENDING STORIES",
      trending1Tag: "#1 SUSTAINABLE FASHION",
      trending1Title: "How young designers are reinventing streetwear and luxury.",
      trending2Tag: "#2 AI & CREATIVITY",
      trending2Title: "The future of digital artists in the era of generative AI.",
      trending3Tag: "#3 VOICES",
      trending3Title: "In Conversation: Independent art between local identity & global impact.",
      editorsPicks: "EDITOR'S PICKS",
      newsletterTitle: "STAY IN THE LOOP",
      newsletterDesc: "Get curations of our best stories, interviews, and features delivered to your inbox every week.",
      subscribeBtn: "SUBSCRIBE",
      placeholderEmail: "Enter your email...",
      btnText: "عربي",
      timeRead: "min read",
    },
  };

  const t = content[lang];

  const toggleLanguage = () => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  };

  return (
    <div
      className={`min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500 selection:text-black ${
        t.dir === "rtl" ? "dir-rtl" : "dir-ltr"
      }`}
      dir={t.dir}
    >
      {/* Top Banner Accent */}
      <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500 w-full" />

      {/* 1. HEADER */}
      <header className="border-b border-zinc-800/80 px-6 py-5 max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-2xl md:text-3xl font-black tracking-tighter uppercase font-mono">
            YOUTH<span className="text-emerald-400">.</span>MAG
          </span>
        </div>

        <div className="flex gap-5 items-center text-xs md:text-sm font-medium">
          <a
            href="https://www.instagram.com/liby.anyouth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span>Instagram</span>
            <svg
              className={`w-3.5 h-3.5 ${t.dir === "rtl" ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <div className="h-4 w-[1px] bg-zinc-800" />

          <button
            onClick={toggleLanguage}
            className="border border-zinc-700 bg-zinc-900/80 hover:bg-zinc-800 px-4 py-1.5 rounded-full text-xs text-white transition-all font-mono font-semibold hover:border-zinc-500 active:scale-95"
          >
            {t.btnText}
          </button>
        </div>
      </header>

      {/* 2. NAVIGATION */}
      <nav className="border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex justify-start md:justify-center gap-6 md:gap-10 text-xs font-mono font-bold tracking-widest text-zinc-400 overflow-x-auto py-3.5 scrollbar-none">
            {t.nav.map((item, index) => (
              <li
                key={index}
                className="hover:text-emerald-400 cursor-pointer transition-colors whitespace-nowrap uppercase relative group py-0.5"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-400 transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-20">
        {/* 3. HERO SECTION */}
        <section className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800/80 grid md:grid-cols-12 gap-8 items-center p-6 md:p-10 shadow-2xl">
          <div className="md:col-span-7 space-y-6 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              {t.heroCategory}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-balance">
              {t.heroTitle}
            </h1>

            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl">
              {t.heroDesc}
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button className="group bg-emerald-400 hover:bg-emerald-300 text-black font-bold px-7 py-3.5 rounded-2xl transition-all duration-300 flex items-center gap-3 text-sm shadow-lg shadow-emerald-500/10 active:scale-95">
                <span>{t.readStory}</span>
                <svg
                  className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                    t.dir === "rtl" ? "rotate-180 group-hover:-translate-x-1" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <span className="text-xs font-mono text-zinc-500">5 {t.timeRead}</span>
            </div>
          </div>

          <div className="md:col-span-5 relative h-80 md:h-[420px] rounded-2xl overflow-hidden border border-zinc-800 group">
            <img
              src="/hero.jpg.jpeg"
              alt="Hero Cover"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60" />
          </div>
        </section>

        {/* 4. TRENDING SECTION */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
            <div className="w-1.5 h-6 bg-emerald-400 rounded-full" />
            <h2 className="text-xl md:text-2xl font-extrabold tracking-tight font-mono">
              {t.trendingTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { tag: t.trending1Tag, title: t.trending1Title, date: "May 12" },
              { tag: t.trending2Tag, title: t.trending2Title, date: "May 10" },
              { tag: t.trending3Tag, title: t.trending3Title, date: "May 08" },
            ].map((item, idx) => (
              <article
                key={idx}
                className="group relative bg-zinc-900/40 hover:bg-zinc-900/90 border border-zinc-800/80 hover:border-zinc-700 p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold text-emerald-400 block">
                    {item.tag}
                  </span>
                  <h3 className="font-bold text-lg leading-snug group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-zinc-800/50 text-xs font-mono text-zinc-500">
                  <span>{item.date}</span>
                  <span className="group-hover:translate-x-1 transition-transform text-zinc-400">
                    →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 5. NEWSLETTER SECTION */}
        <section className="relative rounded-3xl bg-zinc-900/80 border border-zinc-800 p-8 md:p-12 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-2xl mx-auto text-center space-y-6 relative z-10">
            <h2 className="text-2xl md:text-4xl font-black tracking-tight">
              {t.newsletterTitle}
            </h2>
            <p className="text-zinc-400 text-sm md:text-base">
              {t.newsletterDesc}
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 pt-2">
              <input
                type="email"
                placeholder={t.placeholderEmail}
                className="bg-zinc-950 border border-zinc-800 focus:border-emerald-400 text-white placeholder-zinc-500 px-5 py-3.5 rounded-xl flex-1 text-sm outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-zinc-100 hover:bg-white text-black font-bold px-7 py-3.5 rounded-xl transition-all text-sm whitespace-nowrap active:scale-95"
              >
                {t.subscribeBtn}
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-10 text-center text-xs text-zinc-500 font-mono">
        <p>© {new Date().getFullYear()} YOUTH MAG. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}