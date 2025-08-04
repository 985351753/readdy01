'use client';

const skills = [
  {
    category: "デザインツール",
    items: [
      { name: "Figma", level: 95 },
      { name: "Adobe XD", level: 90 },
      { name: "Photoshop", level: 85 },
      { name: "Illustrator", level: 88 }
    ]
  },
  {
    category: "フロントエンド",
    items: [
      { name: "HTML/CSS", level: 92 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 75 },
      { name: "Tailwind CSS", level: 85 }
    ]
  },
  {
    category: "専門スキル",
    items: [
      { name: "UI/UX Design", level: 95 },
      { name: "ブランディング", level: 88 },
      { name: "プロトタイピング", level: 90 },
      { name: "ユーザビリティテスト", level: 82 }
    ]
  }
];

const services = [
  {
    icon: "ri-palette-line",
    title: "UI/UX デザイン",
    description: "ユーザー中心の直感的なインターフェースデザインを提供"
  },
  {
    icon: "ri-smartphone-line",
    title: "レスポンシブデザイン",
    description: "あらゆるデバイスで最適な体験を実現するデザイン"
  },
  {
    icon: "ri-brush-line",
    title: "ブランディング",
    description: "一貫性のあるブランドアイデンティティの構築"
  },
  {
    icon: "ri-code-line",
    title: "フロントエンド開発",
    description: "デザインを実際のWebサイトとして実装"
  },
  {
    icon: "ri-search-line",
    title: "ユーザーリサーチ",
    description: "データに基づいたデザイン判断のためのリサーチ"
  },
  {
    icon: "ri-lightbulb-line",
    title: "コンセプト設計",
    description: "プロジェクトの方向性を決める戦略的な設計"
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Skills & <span className="text-purple-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            常に最新の技術とトレンドを学び、クライアントに最高のソリューションを提供します
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <h3 className="text-2xl font-medium text-gray-900 mb-8">技術スキル</h3>
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                <h4 className="text-lg font-medium text-gray-900 mb-4">{skillGroup.category}</h4>
                <div className="space-y-4">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700">{skill.name}</span>
                        <span className="text-purple-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-600 to-pink-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-medium text-gray-900 mb-8">提供サービス</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                    <i className={`${service.icon} text-xl text-purple-600 group-hover:text-white`}></i>
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">{service.title}</h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}