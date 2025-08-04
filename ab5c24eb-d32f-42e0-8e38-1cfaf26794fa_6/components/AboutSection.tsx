'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              About <span className="text-purple-600">Me</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              こんにちは！私は8年以上の経験を持つWebデザイナーです。
              ユーザー中心のデザインアプローチを大切にし、美しさと機能性を両立させた
              デジタル体験の創造に情熱を注いでいます。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              これまでに100以上のプロジェクトに携わり、スタートアップから
              大企業まで、幅広いクライアントのブランド価値向上に貢献してきました。
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-light text-purple-600">100+</div>
                <div className="text-sm text-gray-600">完了プロジェクト</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-purple-600">8+</div>
                <div className="text-sm text-gray-600">年の経験</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-purple-600">50+</div>
                <div className="text-sm text-gray-600">満足したクライアント</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20creative%20designer%20working%20at%20modern%20workspace%2C%20focused%20person%20at%20clean%20desk%20with%20design%20tools%2C%20natural%20lighting%2C%20contemporary%20office%20interior%2C%20inspirational%20creative%20environment%2C%20purple%20and%20pink%20accent%20colors%20in%20background&width=600&height=700&seq=about-image&orientation=portrait"
                alt="デザイナーの写真"
                className="w-full h-96 lg:h-[500px] object-cover object-top"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-600 rounded-2xl flex items-center justify-center">
                <i className="ri-palette-line text-3xl text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}