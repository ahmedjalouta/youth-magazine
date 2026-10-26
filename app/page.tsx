
"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [lang, setLang] = useState<"ar" | "en">("en");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [activeStory, setActiveStory] = useState<string | null>(null);

  useEffect(() => {
    if (localStorage.getItem("lym_subscribed")) {
      setSubscribed(true);
    }
  }, []);

  const content = {
    ar: {
      dir: "rtl",
      nav: ["الأخبار", "الثقافة", "الموضة", "التكنولوجيا", "أسلوب الحياة", "الرياضة", "الآراء"],
      heroCategory: "LYM • غلاف العدد",
      heroTitle: "من الشباب إلى الشباب: مجلة أمل",
      heroDesc: "مجلة الشباب الليبي، مساحة للأفكار والإبداع والمواهب الشبابية.",
      readStory: "اقرأ المجلة كاملة",
      trendingTitle: "الأكثر قراءة هذا الأسبوع",
      trending1Tag: "#1 الموضة المستدامة",
      trending1Title: "كيف يعيد المصممون الشباب تعريف عالم الأزياء؟",
      trending2Tag: "#2 الذكاء الاصطناعي",
      trending2Title: "مستقبل صناع المحتوى في عصر الذكاء الاصطناعي.",
      trending3Tag: "#3 أصوات شابة",
      trending3Title: "الفنون المستقلة بين الهوية والتأثير العالمي.",
      newsletterTitle: "اشترك في النشرة",
      newsletterDesc: "احصل على أحدث القصص والمقالات في بريدك الإلكتروني.",
      subscribeBtn: "اشتراك",
      submittingBtn: "جاري الإرسال...",
      subscribedSuccess: "تم الاشتراك بنجاح!",
      placeholderEmail: "أدخل بريدك الإلكتروني...",
      btnText: "EN",
      timeRead: "دقائق قراءة",
      modalExcerpt: "تصفح العدد الرقمي لمجلة الشباب الليبي واقرأ محتواه عبر الموقع.",
      closeBtn: "إغلاق",
      badge: "مجلة أمل • LYM",
    },
    en: {
      dir: "ltr",
      nav: ["NEWS", "CULTURE", "FASHION", "TECH", "LIFESTYLE", "SPORTS", "OPINIONS"],
      heroCategory: "LYM • MAGAZINE COVER",
      heroTitle: "FROM YOUTH TO YOUTH: Amal Magazine",
      heroDesc: "An independent youth magazine celebrating ideas, creativity, and the voices of young Libyans.",
      readStory: "READ FULL STORY",
      trendingTitle: "TRENDING STORIES",
      trending1Tag: "#1 SUSTAINABLE FASHION",
      trending1Title: "How young designers are reinventing the world of fashion.",
      trending2Tag: "#2 AI & CREATIVITY",
      trending2Title: "The future of content creators in the age of artificial intelligence.",
      trending3Tag: "#3 YOUTH VOICES",
      trending3Title: "Independent art between local identity and global impact.",
      newsletterTitle: "JOIN THE LYM GAZETTE",
      newsletterDesc: "Get our latest stories, interviews, and features delivered to your inbox.",
      subscribeBtn: "SUBSCRIBE",
      submittingBtn: "SENDING...",
      subscribedSuccess: "Thank you for subscribing!",
      placeholderEmail: "Enter your email...",
      btnText: "عربي",
      timeRead: "min read",
      modalExcerpt: "Explore the digital edition of Libyan Youth Magazine by opening the complete flipbook.",
      closeBtn: "Close",
      badge: "Amal Magazine • LYM",
    },
  };

  const t = content[lang];
  const magazineUrl = "https://heyzine.com/flip-book/7f55f44e9a.html";

  const toggleLanguage = () => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const handleNewsletterSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/moevywbb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubscribed(true);
        localStorage.setItem("lym_subscribed", "true");
        setEmail("");
      } else {
        alert(
          lang === "ar"
            ? "تعذر الاشتراك. حاول مرة أخرى."
            : "Failed to subscribe. Please try again."
        );
      }
    } catch {
      alert(
        lang === "ar"
          ? "تعذر الاتصال بالخادم."
          : "Network error. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      dir={t.dir}
      className="min-h-screen bg-[#EAE4D9] text-[#2B2825] font-serif selection:bg-[#7A2821] selection:text-white"
    >
      {/* HEADER */}
      <header className="border-b-2 border-[#2B2825] px-6 py-6 max-w-7xl mx-auto flex justify-between items-center bg-[#EAE4D9]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border-2 border-[#2B2825] rounded-full flex items-center justify-center font-bold text-xs bg-[#D5CDBF]">
            LYM
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-black tracking-widest uppercase leading-none">
              YOUTH MAG
            </h1>
            <span className="text-[10px] uppercase font-sans tracking-widest text-[#6B655F]">
              Create • Connect • Empower
            </span>
          </div>
        </div>

        <div className="flex gap-4 items-center text-xs md:text-sm font-sans font-bold">
          <a
            href="https://www.instagram.com/liby.anyouth"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#7A2821] underline underline-offset-4"
          >
            Instagram
          </a>

          <button
            onClick={toggleLanguage}
            className="border-2 border-[#2B2825] px-4 py-1 bg-[#D5CDBF] hover:bg-[#2B2825] hover:text-white"
          >
            {t.btnText}
          </button>
        </div>
      </header>

      {/* NAVIGATION */}
      <nav className="border-b-2 border-[#2B2825] bg-[#D5CDBF] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex justify-start md:justify-center gap-6 md:gap-8 text-xs font-sans font-black tracking-widest overflow-x-auto py-3">
            {t.nav.map((item, index) => (
              <li
                key={item}
                onClick={() => setActiveTab(index)}
                className={`cursor-pointer whitespace-nowrap uppercase px-3 py-1 border border-transparent ${
                  activeTab === index
                    ? "bg-[#2B2825] text-[#EAE4D9]"
                    : "hover:border-[#2B2825] hover:text-[#7A2821]"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-12">
        {/* HERO */}
        <section className="border-2 border-[#2B2825] bg-[#DFD7C8] p-6 md:p-8 shadow-[6px_6px_0px_0px_#2B2825] grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-5">
            <span className="inline-block px-3 py-1 border border-[#2B2825] bg-[#D5CDBF] text-[#7A2821] text-xs font-sans font-bold uppercase tracking-wider">
              {t.heroCategory}
            </span>

            <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">
              {t.heroTitle}
            </h2>

            <p className="text-[#524D46] text-base leading-relaxed">
              {t.heroDesc}
            </p>

            <div className="pt-2 flex items-center gap-4">
              <a
                href={magazineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#2B2825] text-[#EAE4D9] font-sans font-bold px-6 py-3 border-2 border-[#2B2825] hover:bg-[#7A2821] transition-all text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_#7A2821]"
              >
                {t.readStory}
              </a>

              <span className="text-xs font-sans font-semibold text-[#78726A]">
                5 {t.timeRead}
              </span>
            </div>
          </div>

          {/* MAGAZINE COVER IMAGE */}
          <a
            href={magazineUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Amal Magazine"
            className="md:col-span-5 relative aspect-square w-full border-2 border-[#2B2825] overflow-hidden group cursor-pointer shadow-[4px_4px_0px_0px_#2B2825]"
          >
            <img
              src="/lym-cover.jpg.jpeg"
              alt="FROM YOUTH TO YOUTH: Amal Magazine cover"
              className="w-full h-full object-contain bg-[#EAE4D9] group-hover:scale-[1.02] transition-transform duration-500"
            />
          </a>
        </section>

        {/* TRENDING STORIES */}
        <section className="space-y-6">
          <div className="border-b-2 border-[#2B2825] pb-2">
            <h3 className="text-xl md:text-2xl font-black font-sans uppercase tracking-wider">
              {t.trendingTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: "trending1", tag: t.trending1Tag, title: t.trending1Title },
              { id: "trending2", tag: t.trending2Tag, title: t.trending2Title },
              { id: "trending3", tag: t.trending3Tag, title: t.trending3Title },
            ].map((item) => (
              <article
                key={item.id}
                className="border-2 border-[#2B2825] bg-[#DFD7C8] p-5 shadow-[4px_4px_0px_0px_#2B2825] hover:-translate-y-1 transition-all flex flex-col justify-between space-y-4 cursor-pointer"
                onClick={() => setActiveStory(item.title)}
              >
                <div className="space-y-2">
                  <span className="text-xs font-sans font-bold text-[#7A2821] block">
                    {item.tag}
                  </span>
                  <h4 className="font-bold text-lg leading-snug hover:underline">
                    {item.title}
                  </h4>
                </div>

                <div className="flex justify-end items-center pt-3 border-t border-[#C3B9A8] text-xs font-sans">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveStory(item.title);
                    }}
                    className="font-bold hover:text-[#7A2821]"
                  >
                    {t.readStory} →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* DIGITAL MAGAZINE */}
        <section className="border-2 border-[#2B2825] bg-[#DFD7C8] p-6 md:p-8 shadow-[6px_6px_0px_0px_#2B2825] space-y-5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#7A2821]">
                LYM • DIGITAL EDITION
              </span>

              <h3 className="text-2xl md:text-3xl font-black mt-2">
                {lang === "ar"
                  ? "مجلة الشباب الليبي"
                  : "LIBYAN YOUTH MAGAZINE"}
              </h3>

              <p className="text-sm mt-2 text-[#524D46]">
                {lang === "ar"
                  ? "تصفح العدد مباشرة واقلب الصفحات من داخل الموقع."
                  : "Read the latest issue and flip through its pages right here."}
              </p>
            </div>

            <a
              href={magazineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2B2825] text-[#EAE4D9] px-5 py-3 text-xs font-sans font-bold hover:bg-[#7A2821]"
            >
              {lang === "ar" ? "افتح المجلة في صفحة جديدة ↗" : "OPEN FLIPBOOK ↗"}
            </a>
          </div>

          <div className="border-2 border-[#2B2825] bg-white overflow-hidden">
            <iframe
              allowFullScreen
              allow="autoplay; fullscreen; clipboard-write"
              scrolling="no"
              title="LYM Digital Magazine Flipbook"
              src={magazineUrl}
              className="w-full h-[400px] md:h-[650px]"
              style={{ border: "1px solid lightgray" }}
            />
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="border-2 border-[#2B2825] bg-[#D5CDBF] p-8 md:p-10 text-center space-y-4 shadow-[6px_6px_0px_0px_#2B2825]">
          <h3 className="text-2xl md:text-3xl font-black uppercase">
            {t.newsletterTitle}
          </h3>

          <p className="text-xs md:text-sm text-[#524D46] max-w-lg mx-auto font-sans">
            {t.newsletterDesc}
          </p>

          {subscribed ? (
            <div className="p-4 border-2 border-[#2B2825] bg-[#7A2821] text-white font-sans font-bold text-sm max-w-md mx-auto">
              {t.subscribedSuccess}
            </div>
          ) : (
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2"
            >
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.placeholderEmail}
                className="border-2 border-[#2B2825] px-4 py-2.5 bg-[#EAE4D9] text-[#2B2825] placeholder-[#78726A] font-sans text-xs flex-1 outline-none focus:bg-[#F5F2EC]"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#7A2821] text-white font-sans font-bold px-6 py-2.5 border-2 border-[#2B2825] hover:bg-[#2B2825] transition-all text-xs uppercase tracking-wider disabled:opacity-50"
              >
                {isSubmitting ? t.submittingBtn : t.subscribeBtn}
              </button>
            </form>
          )}
        </section>
      </main>

      {/* ARTICLE PREVIEW MODAL */}
      {activeStory && (
        <div className="fixed inset-0 bg-[#2B2825]/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#EAE4D9] border-4 border-[#2B2825] max-w-2xl w-full p-6 md:p-8 shadow-[8px_8px_0px_0px_#2B2825] space-y-4 relative">
            <button
              onClick={() => setActiveStory(null)}
              aria-label="Close dialog"
              className="absolute top-4 right-4 text-xl font-bold border-2 border-[#2B2825] w-8 h-8 flex items-center justify-center hover:bg-[#7A2821] hover:text-white"
            >
              ✕
            </button>

            <span className="text-xs font-sans font-bold text-[#7A2821] block uppercase">
              {t.badge}
            </span>

            <h3 className="text-2xl font-black">{activeStory}</h3>

            <p className="text-sm leading-relaxed text-[#4A4540]">
              {t.modalExcerpt}
            </p>

            <a
              href={magazineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#2B2825] text-[#EAE4D9] text-xs font-sans font-bold px-5 py-2.5 border-2 border-[#2B2825] hover:bg-[#7A2821]"
            >
              {t.readStory}
            </a>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t-2 border-[#2B2825] bg-[#D5CDBF] py-8 text-center text-xs text-[#6B655F] font-sans font-bold">
        <p>
          © {new Date().getFullYear()} LYM - LIBYAN YOUTH MAGAZINE. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}
