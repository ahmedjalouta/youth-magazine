"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [lang, setLang] = useState<"ar" | "en">("en");
  
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [activeStory, setActiveStory] = useState<string | null>(null);

  // 1. استرجاع الإعجابات والحالة عند تحميل الصفحة من LocalStorage
  const [likes, setLikes] = useState<{ [key: string]: number }>({
    trending1: 124,
    trending2: 89,
    trending3: 215,
  });

  useEffect(() => {
    const savedLikes = localStorage.getItem("lym_likes");
    if (savedLikes) {
      setLikes(JSON.parse(savedLikes));
    }
    const savedSub = localStorage.getItem("lym_subscribed");
    if (savedSub) {
      setSubscribed(true);
    }
  }, []);

  const content = {
    ar: {
      dir: "rtl",
      nav: ["الأخبار", "الثقافة", "الموضة", "التكنولوجيا", "أسلوب الحياة", "الرياضة", "الآراء"],
      heroCategory: "LYM • غلاف العدد",
      heroTitle: "من الشباب إلى الشباب: صياغة أسلوب جيل جديد",
      heroDesc: "منصة إعلامية تمزج بين الأصالة التحريرية القديمة والرؤية الشبابية المعاصرة.",
      readStory: "اقرأ القصة كاملة",
      trendingTitle: "الأكثر قراءة هذا الأسبوع",
      trending1Tag: "#1 الموضة المستدامة",
      trending1Title: "كيف يعيد المصممون الشباب تعريف عالم الأزياء؟",
      trending2Tag: "#2 الذكاء الاصطناعي",
      trending2Title: "مستقبل صُنّاع المحتوى في عصر خوارزميات التوليد",
      trending3Tag: "#3 أصوات شابة",
      trending3Title: "حوار خاص: الفنون المستقلة بين الهوية والعالمية",
      newsletterTitle: "اشترك في النشرة الورقية الرقمية",
      newsletterDesc: "احصل على أحدث القصص والمقالات الحصرية أسبوعياً في صندوق بريدك.",
      subscribeBtn: "اشتراك",
      submittingBtn: "جاري الإرسال...",
      subscribedSuccess: "تم الاشتراك بنجاح! تم حفظ بريدك وحساب إعجاباتك.",
      placeholderEmail: "أدخل بريدك الإلكتروني...",
      btnText: "EN",
      timeRead: "دقائق قراءة",
      like: "إعجاب",
    },
    en: {
      dir: "ltr",
      nav: ["NEWS", "CULTURE", "FASHION", "TECH", "LIFESTYLE", "SPORTS", "OPINIONS"],
      heroCategory: "LYM • COVER STORY",
      heroTitle: "FROM YOUTH TO YOUTH: SHAPING THE NEXT GENERATION",
      heroDesc: "An independent media platform echoing vintage editorial vibes with contemporary youth perspectives.",
      readStory: "Read Full Story",
      trendingTitle: "TRENDING STORIES",
      trending1Tag: "#1 SUSTAINABLE FASHION",
      trending1Title: "How young designers are reinventing streetwear and luxury.",
      trending2Tag: "#2 AI & CREATIVITY",
      trending2Title: "The future of digital artists in the era of generative AI.",
      trending3Tag: "#3 VOICES",
      trending3Title: "In Conversation: Independent art between local identity & global impact.",
      newsletterTitle: "JOIN THE LYM GAZETTE",
      newsletterDesc: "Get curations of our best stories, interviews, and features delivered to your inbox every week.",
      subscribeBtn: "SUBSCRIBE",
      submittingBtn: "SENDING...",
      subscribedSuccess: "Thank you for subscribing! Your preference is saved.",
      placeholderEmail: "Enter your email...",
      btnText: "عربي",
      timeRead: "min read",
      like: "Like",
    },
  };

  const t = content[lang];

  const toggleLanguage = () => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const handleLike = (id: string) => {
    const updatedLikes = { ...likes, [id]: likes[id] + 1 };
    setLikes(updatedLikes);
    localStorage.setItem("lym_likes", JSON.stringify(updatedLikes));
  };

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        alert(lang === "ar" ? "حدث خطأ أثناء الإرسال. يرجى التثبت من البريد والمحاولة مجدداً." : "Failed to subscribe. Please try again.");
      }
    } catch (error) {
      alert(lang === "ar" ? "تعذر الاتصال بالخادم." : "Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`min-h-screen bg-[#EAE4D9] text-[#2B2825] font-serif transition-colors duration-300 selection:bg-[#7A2821] selection:text-white ${
        t.dir === "rtl" ? "dir-rtl" : "dir-ltr"
      }`}
      dir={t.dir}
    >
      {/* 1. HEADER */}
      <header className="border-b-2 border-[#2B2825] px-6 py-6 max-w-7xl mx-auto flex justify-between items-center bg-[#EAE4D9]">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 border-2 border-[#2B2825] rounded-full flex items-center justify-center font-bold text-xs bg-[#D5CDBF] group-hover:bg-[#7A2821] group-hover:text-white transition-all">
            LYM
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-black tracking-widest uppercase font-serif leading-none text-[#2B2825]">
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
            className="hover:text-[#7A2821] transition-colors underline underline-offset-4 decoration-1 text-[#2B2825]"
          >
            Instagram
          </a>

          <button
            onClick={toggleLanguage}
            className="border-2 border-[#2B2825] px-4 py-1 bg-[#D5CDBF] hover:bg-[#2B2825] hover:text-[#EAE4D9] transition-all font-sans font-bold shadow-[2px_2px_0px_0px_#2B2825] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
          >
            {t.btnText}
          </button>
        </div>
      </header>

      {/* 2. NAVIGATION */}
      <nav className="border-b-2 border-[#2B2825] bg-[#D5CDBF] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex justify-start md:justify-center gap-6 md:gap-8 text-xs font-sans font-black tracking-widest text-[#4A4540] overflow-x-auto py-3">
            {t.nav.map((item, index) => (
              <li
                key={index}
                onClick={() => setActiveTab(index)}
                className={`cursor-pointer transition-all whitespace-nowrap uppercase px-3 py-1 border border-transparent ${
                  activeTab === index
                    ? "bg-[#2B2825] text-[#EAE4D9] font-bold"
                    : "hover:border-[#2B2825] hover:text-[#7A2821]"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* MAIN CONTENT */} 
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-12">
        {/* 3. HERO SECTION */}
        <section className="border-2 border-[#2B2825] bg-[#DFD7C8] p-6 md:p-8 shadow-[6px_6px_0px_0px_#2B2825] grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-5">
            <span className="inline-block px-3 py-1 border border-[#2B2825] bg-[#D5CDBF] text-[#7A2821] text-xs font-sans font-bold uppercase tracking-wider">
              {t.heroCategory}
            </span>

            <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight text-[#2B2825]">
              {t.heroTitle}
            </h2>

            <p className="text-[#524D46] text-base leading-relaxed font-serif">
              {t.heroDesc}
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => setActiveStory(t.heroTitle)}
                className="bg-[#2B2825] text-[#EAE4D9] font-sans font-bold px-6 py-3 border-2 border-[#2B2825] hover:bg-[#7A2821] hover:text-white transition-all text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_#7A2821] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                {t.readStory}
              </button>
              <span className="text-xs font-sans font-semibold text-[#78726A]">
                5 {t.timeRead}
              </span>
            </div>
          </div>

          <div
            onClick={() => setActiveStory(t.heroTitle)}
            className="md:col-span-5 relative h-80 border-2 border-[#2B2825] overflow-hidden group cursor-pointer shadow-[4px_4px_0px_0px_#2B2825]"
          >
            <img
              src="/hero.jpg.jpeg"
              alt="Cover Image"
              className="w-full h-full object-cover filter contrast-[105%] sepia-[15%] group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-[#2B2825]/10 group-hover:bg-transparent transition-colors" />
          </div>
        </section>

        {/* 4. TRENDING SECTION */}
        <section className="space-y-6">
          <div className="border-b-2 border-[#2B2825] pb-2 flex justify-between items-end">
            <h3 className="text-xl md:text-2xl font-black font-sans uppercase tracking-wider text-[#2B2825]">
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
                className="border-2 border-[#2B2825] bg-[#DFD7C8] p-5 shadow-[4px_4px_0px_0px_#2B2825] hover:-translate-y-1 transition-all flex flex-col justify-between space-y-4"
              >
                <div
                  className="space-y-2 cursor-pointer"
                  onClick={() => setActiveStory(item.title)}
                >
                  <span className="text-xs font-sans font-bold text-[#7A2821] block">
                    {item.tag}
                  </span>
                  <h4 className="font-bold text-lg leading-snug hover:underline text-[#2B2825]">
                    {item.title}
                  </h4>
                </div>

                <div className="flex justify-between items-center pt-3 border-t border-[#C3B9A8] text-xs font-sans">
                  <button
                    onClick={() => handleLike(item.id)}
                    className="flex items-center gap-1 text-[#7A2821] hover:bg-[#D5CDBF] px-2 py-1 rounded transition-colors font-bold"
                  >
                    ♥ {likes[item.id]} {t.like}
                  </button>
                  <button
                    onClick={() => setActiveStory(item.title)}
                    className="font-bold hover:text-[#7A2821]"
                  >
                    →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 5. NEWSLETTER SECTION */}
        <section className="border-2 border-[#2B2825] bg-[#D5CDBF] p-8 md:p-10 text-center space-y-4 shadow-[6px_6px_0px_0px_#2B2825]">
          <h3 className="text-2xl md:text-3xl font-black font-serif uppercase text-[#2B2825]">
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
                className="bg-[#7A2821] text-white font-sans font-bold px-6 py-2.5 border-2 border-[#2B2825] hover:bg-[#2B2825] transition-all text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_#2B2825] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none disabled:opacity-50"
              >
                {isSubmitting ? t.submittingBtn : t.subscribeBtn}
              </button>
            </form>
          )}
        </section>
      </main>

      {/* 6. MODAL POPUP FOR READING STORIES */}
      {activeStory && (
        <div className="fixed inset-0 bg-[#2B2825]/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#EAE4D9] border-4 border-[#2B2825] max-w-2xl w-full p-6 md:p-8 shadow-[8px_8px_0px_0px_#2B2825] space-y-4 relative">
            <button
              onClick={() => setActiveStory(null)}
              className="absolute top-4 right-4 text-xl font-bold font-sans border-2 border-[#2B2825] w-8 h-8 flex items-center justify-center hover:bg-[#7A2821] hover:text-white transition-colors"
            >
              ✕
            </button>
            <span className="text-xs font-sans font-bold text-[#7A2821] block uppercase">
              LYM Special Feature
            </span>
            <h3 className="text-2xl font-black font-serif text-[#2B2825]">{activeStory}</h3>
            <p className="text-sm leading-relaxed text-[#4A4540]">
              هذا النص تجريبي لعرض المقال المختار كاملاً داخل نافذة تفاعلية. يمكن ربطه لاحقاً بأي قاعدة بيانات أو مقالات حقيقية.
            </p>
            <button
              onClick={() => setActiveStory(null)}
              className="bg-[#2B2825] text-[#EAE4D9] text-xs font-sans font-bold px-5 py-2.5 border-2 border-[#2B2825] hover:bg-[#7A2821] hover:text-white"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t-2 border-[#2B2825] bg-[#D5CDBF] py-8 text-center text-xs text-[#6B655F] font-sans font-bold">
        <p>© {new Date().getFullYear()} LYM - LIBYAN YOUTH MAGAZINE. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}