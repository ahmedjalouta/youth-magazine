export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans dir-rtl">
      {/* 1. HEADER */}
      <header className="border-b border-zinc-800 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-black tracking-wider uppercase">YOUTH MAG</div>
        
        <div className="flex gap-6 items-center text-sm text-zinc-400">
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">X</a>
            <a href="#" className="hover:text-white">TikTok</a>
          </div>
          <button className="border border-zinc-700 px-3 py-1 rounded-full text-xs text-white hover:bg-zinc-800">
            EN / عربي
          </button>
        </div>
      </header>

      {/* 2. NAVIGATION */}
      <nav className="border-b border-zinc-800 py-3 bg-zinc-950/50 backdrop-blur sticky top-0 z-50">
        <ul className="flex justify-center gap-8 text-xs md:text-sm font-semibold tracking-widest text-zinc-400 overflow-x-auto px-4">
          <li className="hover:text-white cursor-pointer transition">NEWS</li>
          <li className="hover:text-white cursor-pointer transition">CULTURE</li>
          <li className="hover:text-white cursor-pointer transition">FASHION</li>
          <li className="hover:text-white cursor-pointer transition">TECH</li>
          <li className="hover:text-white cursor-pointer transition">LIFESTYLE</li>
          <li className="hover:text-white cursor-pointer transition">SPORTS</li>
          <li className="hover:text-white cursor-pointer transition">OPINIONS</li>
        </ul>
      </nav>

      {/* 3. HERO SECTION (المقال الرئيسي) */}
      <main className="max-w-7xl mx-auto p-6 space-y-16">
        <section className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 grid md:grid-cols-2 gap-8 items-center p-8">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">CULTURE • FEATURED</span>
            <h1 className="text-3xl md:text-5xl font-black leading-tight">
              from youth to youth
            </h1>
            <p className="text-zinc-400 text-sm leading-relaxed">
              وصف قصير للمقال الرئيسي يعطي القارئ لمحة سريعة ومحفزة لقراءة القصة كاملة...
            </p>
            <button className="bg-white text-black font-bold px-6 py-3 rounded-xl hover:bg-zinc-200 transition text-sm mt-4">
              Read the story ←
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
          <h2 className="text-xl font-bold mb-6 text-zinc-300 border-r-4 border-emerald-500 pr-3">TRENDING NOW</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900/50 p-5 rounded-xl border border-zinc-800 space-y-2">
              <span className="text-xs text-zinc-500">#1 FASHION</span>
              <h3 className="font-bold">عنوان المقال الشائع الأول</h3>
            </div>
            <div className="bg-zinc-900/50 p-5 rounded-xl border border-zinc-800 space-y-2">
              <span className="text-xs text-zinc-500">#2 TECH</span>
              <h3 className="font-bold">عنوان المقال الشائع الثاني</h3>
            </div>
            <div className="bg-zinc-900/50 p-5 rounded-xl border border-zinc-800 space-y-2">
              <span className="text-xs text-zinc-500">#3 VOICES</span>
              <h3 className="font-bold">عنوان المقال الشائع الثالث</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}