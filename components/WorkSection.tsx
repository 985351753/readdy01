
import { useState } from 'react';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: "モダンECサイト",
    category: "ウェブデザイン",
    image: "https://readdy.ai/api/search-image?query=Modern%20elegant%20e-commerce%20website%20design%20on%20laptop%20screen%2C%20clean%20minimal%20interface%20with%20purple%20accent%20colors%2C%20product%20showcase%2C%20professional%20photography%2C%20soft%20lighting%2C%20contemporary%20design%20aesthetic&width=600&height=400&seq=project-1&orientation=landscape",
    images: [
      "https://readdy.ai/api/search-image?query=Modern%20elegant%20e-commerce%20website%20design%20on%20laptop%20screen%2C%20clean%20minimal%20interface%20with%20purple%20accent%20colors%2C%20product%20showcase%2C%20professional%20photography%2C%20soft%20lighting%2C%20contemporary%20design%20aesthetic&width=800&height=500&seq=project-1-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20e-commerce%20product%20page%20design%20with%20purple%20accent%20colors%2C%20clean%20layout%2C%20product%20gallery%2C%20shopping%20cart%20interface%2C%20minimal%20design%20aesthetic%2C%20professional%20web%20design&width=800&height=500&seq=project-1-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=E-commerce%20mobile%20app%20interface%20design%20with%20purple%20color%20scheme%2C%20clean%20product%20listing%2C%20user-friendly%20navigation%2C%20modern%20mobile%20UI%20design%2C%20responsive%20layout&width=800&height=500&seq=project-1-3&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Modern%20shopping%20cart%20and%20checkout%20process%20design%2C%20clean%20interface%20with%20purple%20accents%2C%20user%20experience%20focused%20design%2C%20professional%20e-commerce%20UI&width=800&height=500&seq=project-1-4&orientation=landscape"
    ],
    description: "ユーザー体験を重視したモダンなECサイトのデザイン",
    details: "このプロジェクトでは、ユーザビリティを最優先に考えた直感的なナビゲーションと、商品の魅力を最大限に引き出すビジュアルデザインを実現しました。レスポンシブデザインにより、あらゆるデバイスで快適なショッピング体験を提供します。",
    technologies: ["Figma", "React", "TypeScript", "Tailwind CSS"],
    duration: "6週間",
    client: "株式会社ABC Commerce"
  },
  {
    id: 2,
    title: "ブランドアイデンティティ",
    category: "ブランディング",
    image: "https://readdy.ai/api/search-image?query=Professional%20brand%20identity%20design%20showcase%20with%20logo%20mockups%2C%20business%20cards%2C%20letterhead%2C%20clean%20white%20background%20with%20purple%20and%20pink%20accents%2C%20modern%20typography%2C%20design%20studio%20aesthetic&width=600&height=400&seq=project-2&orientation=landscape",
    images: [
      "https://readdy.ai/api/search-image?query=Professional%20brand%20identity%20design%20showcase%20with%20logo%20mockups%2C%20business%20cards%2C%20letterhead%2C%20clean%20white%20background%20with%20purple%20and%20pink%20accents%2C%20modern%20typography%2C%20design%20studio%20aesthetic&width=800&height=500&seq=project-2-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Brand%20logo%20design%20variations%20and%20applications%2C%20purple%20color%20palette%2C%20modern%20typography%20samples%2C%20brand%20guidelines%20presentation%2C%20professional%20design%20mockups&width=800&height=500&seq=project-2-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Business%20stationery%20design%20mockup%20with%20purple%20branding%2C%20letterhead%2C%20business%20cards%2C%20envelope%20design%2C%20corporate%20identity%20materials%2C%20clean%20professional%20layout&width=800&height=500&seq=project-2-3&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Brand%20application%20mockups%20on%20various%20materials%2C%20signage%20design%2C%20merchandise%20branding%2C%20purple%20color%20scheme%2C%20consistent%20brand%20identity%20across%20different%20mediums&width=800&height=500&seq=project-2-4&orientation=landscape"
    ],
    description: "統一感のあるブランドアイデンティティの構築",
    details: "スタートアップ企業の新しいブランドアイデンティティを一から構築。ロゴデザイン、カラーパレット、タイポグラフィ、ビジネスカードまで、ブランドの価値観を反映した統一感のあるデザインシステムを開発しました。",
    technologies: ["Illustrator", "Photoshop", "InDesign"],
    duration: "4週間",
    client: "XYZ Startup"
  },
  {
    id: 3,
    title: "モバイルアプリUI",
    category: "UIデザイン",
    image: "https://readdy.ai/api/search-image?query=Modern%20mobile%20app%20UI%20design%20mockup%20on%20smartphone%20screen%2C%20clean%20interface%20with%20purple%20gradient%20elements%2C%20user-friendly%20design%2C%20professional%20product%20photography%2C%20soft%20shadows%2C%20contemporary%20style&width=600&height=400&seq=project-3&orientation=landscape",
    images: [
      "https://readdy.ai/api/search-image?query=Modern%20mobile%20app%20UI%20design%20mockup%20on%20smartphone%20screen%2C%20clean%20interface%20with%20purple%20gradient%20elements%2C%20user-friendly%20design%2C%20professional%20product%20photography%2C%20soft%20shadows%2C%20contemporary%20style&width=800&height=500&seq=project-3-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Mobile%20app%20user%20interface%20screens%20showing%20navigation%2C%20profile%20page%2C%20settings%20menu%2C%20purple%20color%20scheme%2C%20clean%20modern%20design%2C%20smartphone%20mockup&width=800&height=500&seq=project-3-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Mobile%20app%20onboarding%20screens%20design%2C%20step-by-step%20user%20guide%20interface%2C%20purple%20gradient%20backgrounds%2C%20modern%20mobile%20UI%2C%20user%20experience%20focused%20design&width=800&height=500&seq=project-3-3&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Mobile%20app%20dashboard%20and%20analytics%20interface%2C%20data%20visualization%20with%20purple%20accents%2C%20clean%20charts%20and%20graphs%2C%20modern%20mobile%20app%20design%2C%20user-friendly%20layout&width=800&height=500&seq=project-3-4&orientation=landscape"
    ],
    description: "直感的で美しいモバイルアプリのUI設計",
    details: "モバイルアプリのUIデザインを担当し、直感的で美しいインターフェイスを設計しました。ユーザー体験を重視し、シンプルで使いやすいデザインを目指しました。",
    technologies: ["Figma", "React Native", "JavaScript"],
    duration: "8週間",
    client: " DEF Agency"
  },
  {
    id: 4,
    title: "コーポレートサイト",
    category: "ウェブデザイン",
    image: "https://readdy.ai/api/search-image?query=Professional%20corporate%20website%20design%20displayed%20on%20desktop%20monitor%2C%20clean%20modern%20layout%20with%20purple%20color%20scheme%2C%20business%20professional%20aesthetic%2C%20office%20environment%2C%20contemporary%20web%20design&width=600&height=400&seq=project-4&orientation=landscape",
    images: [
      "https://readdy.ai/api/search-image?query=Professional%20corporate%20website%20design%20displayed%20on%20desktop%20monitor%2C%20clean%20modern%20layout%20with%20purple%20color%20scheme%2C%20business%20professional%20aesthetic%2C%20office%20environment%2C%20contemporary%20web%20design&width=800&height=500&seq=project-4-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Corporate%20website%20about%20us%20page%20design%2C%20team%20section%20layout%2C%20company%20information%20presentation%2C%20professional%20purple%20color%20scheme%2C%20modern%20web%20design&width=800&height=500&seq=project-4-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Corporate%20website%20services%20page%20design%2C%20professional%20layout%20with%20purple%20accents%2C%20clean%20typography%2C%20business-focused%20web%20design%2C%20modern%20corporate%20aesthetic&width=800&height=500&seq=project-4-3&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Corporate%20website%20contact%20page%20and%20footer%20design%2C%20professional%20contact%20form%2C%20company%20information%20layout%2C%20purple%20color%20scheme%2C%20modern%20business%20web%20design&width=800&height=500&seq=project-4-4&orientation=landscape"
    ],
    description: "信頼性と先進性を表現したコーポレートサイト",
    details: "企業のコーポレートサイトをデザインし、信頼性と先進性を表現しました。モダンでクリーンなレイアウトと、パープルを基調としたカラースキームを使用しました。",
    technologies: ["WordPress", "HTML", "CSS"],
    duration: "12週間",
    client: "GHI Corporation"
  },
  {
    id: 5,
    title: "パッケージデザイン",
    category: "グラフィックデザイン",
    image: "https://readdy.ai/api/search-image?query=Elegant%20product%20package%20design%20mockup%20with%20purple%20and%20white%20color%20scheme%2C%20minimalist%20aesthetic%2C%20premium%20quality%20appearance%2C%20professional%20product%20photography%2C%20clean%20studio%20background&width=600&height=400&seq=project-5&orientation=landscape",
    images: [
      "https://readdy.ai/api/search-image?query=Elegant%20product%20package%20design%20mockup%20with%20purple%20and%20white%20color%20scheme%2C%20minimalist%20aesthetic%2C%20premium%20quality%20appearance%2C%20professional%20product%20photography%2C%20clean%20studio%20background&width=800&height=500&seq=project-5-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Product%20packaging%20design%20from%20multiple%20angles%2C%20box%20design%20with%20purple%20branding%2C%20premium%20product%20presentation%2C%20elegant%20minimalist%20packaging%20design&width=800&height=500&seq=project-5-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Product%20label%20and%20tag%20design%20with%20purple%20color%20scheme%2C%20minimalist%20typography%2C%20premium%20brand%20aesthetic%2C%20package%20design%20details%20and%20specifications&width=800&height=500&seq=project-5-3&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Product%20packaging%20in%20real%20environment%2C%20retail%20shelf%20display%2C%20premium%20product%20presentation%20with%20purple%20branding%2C%20elegant%20package%20design%20in%20store%20setting&width=800&height=500&seq=project-5-4&orientation=landscape"
    ],
    description: "商品の魅力を最大化するパッケージデザイン",
    details: "商品のパッケージデザインを担当し、商品の魅力を最大化するデザインを目指しました。ミニマリストなエステティックとプレミアムな質感を表現しました。",
    technologies: ["Illustrator", "Photoshop"],
    duration: "4週間",
    client: "JKL Company"
  },
  {
    id: 6,
    title: "ポスターデザイン",
    category: "グラフィックデザイン",
    image: "https://readdy.ai/api/search-image?query=Modern%20creative%20poster%20design%20with%20abstract%20geometric%20elements%2C%20purple%20and%20pink%20gradient%20colors%2C%20contemporary%20typography%2C%20artistic%20composition%2C%20professional%20graphic%20design%20aesthetic&width=600&height=400&seq=project-6&orientation=landscape",
    images: [
      "https://readdy.ai/api/search-image?query=Modern%20creative%20poster%20design%20with%20abstract%20geometric%20elements%2C%20purple%20and%20pink%20gradient%20colors%2C%20contemporary%20typography%2C%20artistic%20composition%2C%20professional%20graphic%20design%20aesthetic&width=800&height=500&seq=project-6-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Concert%20event%20poster%20design%20with%20bold%20typography%2C%20purple%20and%20magenta%20gradient%20background%2C%20dynamic%20visual%20composition%2C%20modern%20graphic%20design%20for%20music%20events&width=800&height=500&seq=project-6-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Festival%20poster%20design%20variations%20with%20different%20layouts%2C%20purple%20color%20theme%2C%20abstract%20geometric%20patterns%2C%20contemporary%20poster%20design%20for%20cultural%20events&width=800&height=500&seq=project-6-3&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Poster%20design%20displayed%20in%20urban%20environment%2C%20street%20advertising%2C%20purple%20gradient%20poster%20on%20billboard%2C%20real-world%20application%20of%20graphic%20design%20work&width=800&height=500&seq=project-6-4&orientation=landscape"
    ],
    description: "インパクトのあるビジュアルコミュニケーション",
    details: "ポスターデザインを担当し、インパクトのあるビジュアルコミュニケーションを目指しました。抽象的な幾何学的要素と、パープルとピンクのグラデーションカラーを使用しました。",
    technologies: ["Illustrator", "Photoshop"],
    duration: "3週間",
    client: "MNO Studio"
  }
];

const categories = ["すべて", "ウェブデザイン", "ブランディング", "UIデザイン", "グラフィックデザイン"];

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  images: string[];
  description: string;
  details: string;
  technologies: string[];
  duration: string;
  client: string;
}

export default function WorkSection() {
  const [selectedCategory, setSelectedCategory] = useState("すべて");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = selectedCategory === "すべて" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Selected <span className="text-purple-600">Works</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            クライアントのビジョンを形にした、厳選された作品をご紹介します
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 bg-white p-2 rounded-full shadow-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/10 transition-all"></div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-purple-600 mb-2">{project.category}</div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/works"
            className="inline-flex items-center bg-white text-purple-600 border border-purple-600 px-8 py-3 rounded-full hover:bg-purple-600 hover:text-white transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            すべて見る
            <i className="ri-arrow-right-line ml-2"></i>
          </Link>
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <div className="relative">
                  <img
                    src={selectedProject.images ? selectedProject.images[currentImageIndex] : selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 md:h-96 object-contain bg-gray-50"
                  />
                  
                  {/* Image Navigation */}
                  {selectedProject.images && selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={() => setCurrentImageIndex(prev => 
                          prev === 0 ? selectedProject.images.length - 1 : prev - 1
                        )}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                      >
                        <i className="ri-arrow-left-line"></i>
                      </button>
                      <button
                        onClick={() => setCurrentImageIndex(prev => 
                          prev === selectedProject.images.length - 1 ? 0 : prev + 1
                        )}
                        className="absolute right-14 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                      >
                        <i className="ri-arrow-right-line"></i>
                      </button>
                      
                      {/* Image Indicators */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {selectedProject.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                              index === currentImageIndex
                                ? 'bg-white'
                                : 'bg-white/50 hover:bg-white/75'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
                
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    setCurrentImageIndex(0);
                  }}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center cursor-pointer"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>
              <div className="p-6 md:p-8">
                <div className="text-sm text-purple-600 mb-2">{selectedProject.category}</div>
                <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4">{selectedProject.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{selectedProject.details || selectedProject.description}</p>

                {/* Thumbnail Gallery */}
                {selectedProject.images && selectedProject.images.length > 1 && (
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">プロジェクト画像</h4>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {selectedProject.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden cursor-pointer transition-all ${
                            index === currentImageIndex
                              ? 'ring-2 ring-purple-600'
                              : 'hover:ring-2 hover:ring-purple-300'
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${selectedProject.title} - ${index + 1}`}
                            className="w-full h-full object-cover object-top"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProject.technologies && (
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">使用技術</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {selectedProject.duration && (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">制作期間</h4>
                      <p className="text-gray-600">{selectedProject.duration}</p>
                    </div>
                  )}
                  {selectedProject.client && (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">クライアント</h4>
                      <p className="text-gray-600">{selectedProject.client}</p>
                    </div>
                  )}
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => {
                      setSelectedProject(null);
                      setCurrentImageIndex(0);
                      scrollToContact();
                    }}
                    className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    お問い合わせ
                  </button>
                  <button className="border border-gray-300 text-gray-600 px-6 py-2 rounded-full hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap">
                    類似プロジェクト
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
