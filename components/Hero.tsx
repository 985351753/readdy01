
'use client';

export default function Hero() {
  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20minimalist%20creative%20workspace%20with%20clean%20white%20desk%2C%20natural%20lighting%2C%20soft%20purple%20and%20pink%20gradient%20background%2C%20professional%20photography%20equipment%2C%20design%20tools%2C%20abstract%20geometric%20shapes%2C%20contemporary%20interior%20design%2C%20inspiring%20creative%20environment&width=1920&height=1080&seq=hero-bg&orientation=landscape')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 leading-tight">
            Creative
            <br />
            <span className="text-purple-600 font-medium">Designer</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            美しいデザインで、あなたのブランドに
            <br />
            新しい価値を創造します
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToWork}
              className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              作品を見る
            </button>
            <button 
              onClick={scrollToContact}
              className="border border-purple-600 text-purple-600 px-8 py-4 rounded-full hover:bg-purple-50 transition-colors cursor-pointer whitespace-nowrap"
            >
              お問い合わせ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
