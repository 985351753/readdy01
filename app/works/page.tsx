
'use client';

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
    client: "DEF Agency"
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
  },
  {
    id: 7,
    title: "レストランブランディング",
    category: "ブランディング",
    image: "https://readdy.ai/api/search-image?query=Elegant%20restaurant%20branding%20design%20with%20menu%2C%20business%20cards%2C%20signage%20mockup%2C%20warm%20purple%20and%20cream%20colors%2C%20sophisticated%20typography%2C%20premium%20dining%20aesthetic%2C%20professional%20photography&width=600&height=400&seq=project-7&orientation=landscape",
    images: [
      "https://readdy.ai/api/search-image?query=Elegant%20restaurant%20branding%20design%20with%20menu%2C%20business%20cards%2C%20signage%20mockup%2C%20warm%20purple%20and%20cream%20colors%2C%20sophisticated%20typography%2C%20premium%20dining%20aesthetic%2C%20professional%20photography&width=800&height=500&seq=project-7-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Restaurant%20menu%20design%20with%20elegant%20typography%2C%20purple%20color%20accents%2C%20premium%20dining%20aesthetic%2C%20sophisticated%20food%20menu%20layout%2C%20high-end%20restaurant%20branding&width=800&height=500&seq=project-7-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Restaurant%20interior%20signage%20and%20branding%20applications%2C%20purple%20accent%20colors%2C%20elegant%20wayfinding%20design%2C%20premium%20dining%20environment%20branding%20elements&width=800&height=500&seq=project-7-3&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Restaurant%20packaging%20design%20for%20takeout%2C%20elegant%20food%20containers%20with%20purple%20branding%2C%20premium%20restaurant%20packaging%2C%20sophisticated%20food%20service%20branding&width=800&height=500&seq=project-7-4&orientation=landscape"
    ],
    description: "高級レストランの総合ブランディング",
    details: "高級レストランの新規オープンに伴い、ロゴからメニューデザイン、店舗サイネージまでトータルブランディングを担当。上質な食事体験にふさわしい洗練されたデザインを実現しました。",
    technologies: ["Illustrator", "Photoshop", "InDesign"],
    duration: "10週間",
    client: "Restaurant Elite"
  },
  {
    id: 8,
    title: "スマートウォッチアプリ",
    category: "UIデザイン",
    image: "https://readdy.ai/api/search-image?query=Modern%20smartwatch%20app%20interface%20design%20on%20wearable%20device%2C%20clean%20minimal%20UI%20with%20purple%20accents%2C%20health%20tracking%20interface%2C%20contemporary%20wearable%20technology%20aesthetic&width=600&height=400&seq=project-8&orientation=landscape",
    images: [
      "https://readdy.ai/api/search-image?query=Modern%20smartwatch%20app%20interface%20design%20on%20wearable%20device%2C%20clean%20minimal%20UI%20with%20purple%20accents%2C%20health%20tracking%20interface%2C%20contemporary%20wearable%20technology%20aesthetic&width=800&height=500&seq=project-8-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Smartwatch%20health%20monitoring%20app%20interface%2C%20heart%20rate%20tracking%2C%20fitness%20data%20visualization%20with%20purple%20color%20scheme%2C%20wearable%20device%20UI%20design&width=800&height=500&seq=project-8-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Smartwatch%20notification%20and%20messaging%20interface%20design%2C%20clean%20minimal%20UI%20with%20purple%20accents%2C%20wearable%20technology%20user%20experience%20design&width=800&height=500&seq=project-8-3&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Smartwatch%20app%20navigation%20and%20menu%20design%2C%20circular%20interface%20layout%20with%20purple%20color%20theme%2C%20modern%20wearable%20device%20interface%20design&width=800&height=500&seq=project-8-4&orientation=landscape"
    ],
    description: "ヘルスケア向けスマートウォッチアプリUI",
    details: "健康管理に特化したスマートウォッチアプリのUIデザインを担当。小さなスクリーンでも見やすく操作しやすいインターフェイスを設計し、ユーザーの日常に自然に溶け込むデザインを実現しました。",
    technologies: ["Figma", "Swift UI", "Kotlin"],
    duration: "6週間",
    client: "HealthTech Inc."
  },
  {
    id: 9,
    title: "イベントポスター",
    category: "グラフィックデザイン",
    image: "https://readdy.ai/api/search-image?query=Dynamic%20event%20poster%20design%20with%20bold%20typography%2C%20purple%20and%20magenta%20gradient%20background%2C%20modern%20concert%20or%20festival%20aesthetic%2C%20energetic%20visual%20composition%2C%20professional%20graphic%20design&width=600&height=400&seq=project-9&orientation=landscape",
    images: [
      "https://readdy.ai/api/search-image?query=Dynamic%20event%20poster%20design%20with%20bold%20typography%2C%20purple%20and%20magenta%20gradient%20background%2C%20modern%20concert%20or%20festival%20aesthetic%2C%20energetic%20visual%20composition%2C%20professional%20graphic%20design&width=800&height=500&seq=project-9-1&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Music%20festival%20lineup%20poster%20design%2C%20artist%20names%20typography%20with%20purple%20gradient%20background%2C%20energetic%20concert%20poster%20layout%2C%20modern%20event%20design&width=800&height=500&seq=project-9-2&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Event%20poster%20design%20variations%20for%20different%20sizes%2C%20social%20media%20adaptations%2C%20purple%20color%20theme%2C%20concert%20promotional%20materials%2C%20festival%20branding%20design&width=800&height=500&seq=project-9-3&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Concert%20venue%20poster%20display%2C%20festival%20promotional%20materials%20in%20urban%20setting%2C%20purple%20gradient%20event%20posters%20on%20street%20displays%2C%20real-world%20event%20marketing&width=800&height=500&seq=project-9-4&orientation=landscape"
    ],
    description: "音楽フェスティバルのビジュアルアイデンティティ",
    details: "大型音楽フェスティバルのメインビジュアルとして、エネルギッシュで印象的なポスターデザインを制作。音楽の躍動感と現代的な美しさを表現し、幅広い年齢層にアピールするデザインを目指しました。",
    technologies: ["Illustrator", "Photoshop"],
    duration: "2週間",
    client: "Music Festival Japan"
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

export default function WorksPage() {
  const [selectedCategory, setSelectedCategory] = useState("すべて");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = selectedCategory === "すべて" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-[\\\'Pacifico\\\'] text-purple-600">
              logo
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/#work" className="text-gray-700 hover:text-purple-600 transition-colors">作品</Link>
              <Link href="/#about" className="text-gray-700 hover:text-purple-600 transition-colors">私について</Link>
              <Link href="/#skills" className="text-gray-700 hover:text-purple-600 transition-colors">スキル</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-purple-600 transition-colors">お問い合わせ</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/#contact" className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap">
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            All <span className="text-purple-600">Works</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            クリエイティブなデザインソリューションで、ブランドの価値を最大化する作品の数々をご覧ください
          </p>
          <Link href="/" className="text-purple-600 hover:text-purple-700 transition-colors cursor-pointer">
            <i className="ri-arrow-left-line mr-2"></i>
            ホームに戻る
          </Link>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-16">
            <div className="flex flex-wrap gap-2 bg-white p-2 rounded-full shadow-lg">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-8 py-3 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-3">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <i className="ri-eye-line text-purple-600"></i>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-purple-600 mb-2 font-medium">{project.category}</div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{project.duration}</span>
                      <div className="w-6 h-6 flex items-center justify-center">
                        <i className="ri-arrow-right-line text-purple-600 group-hover:translate-x-1 transition-transform"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center mt-16">
            <p className="text-gray-600">
              {filteredProjects.length}件の作品を表示中
            </p>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
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
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                    >
                      <i className="ri-arrow-left-line text-xl"></i>
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex(prev => 
                        prev === selectedProject.images.length - 1 ? 0 : prev + 1
                      )}
                      className="absolute right-16 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                    >
                      <i className="ri-arrow-right-line text-xl"></i>
                    </button>
                    
                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
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
                className="absolute top-4 right-4 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="text-sm text-purple-600 mb-2 font-medium">{selectedProject.category}</div>
              <h3 className="text-3xl font-medium text-gray-900 mb-4">{selectedProject.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">{selectedProject.details}</p>

              {/* Thumbnail Gallery */}
              {selectedProject.images && selectedProject.images.length > 1 && (
                <div className="mb-8">
                  <h4 className="font-medium text-gray-900 mb-4">プロジェクト画像</h4>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {selectedProject.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden cursor-pointer transition-all ${
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {selectedProject.technologies && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">使用技術</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {selectedProject.duration && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">制作期間</h4>
                    <p className="text-gray-600 text-lg">{selectedProject.duration}</p>
                  </div>
                )}
                {selectedProject.client && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">クライアント</h4>
                    <p className="text-gray-600 text-lg">{selectedProject.client}</p>
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <Link href="/#contact" className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap">
                  お問い合わせ
                </Link>
                <button className="border border-gray-300 text-gray-600 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap">
                  類似プロジェクト
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-all flex items-center justify-center cursor-pointer"
      >
        <i className="ri-arrow-up-line text-xl"></i>
      </button>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-[\\\'Pacifico\\\'] text-purple-400 mb-4">logo</h3>
              <p className="text-gray-400 mb-6 max-w-md">
                クリエイティブなデザインソリューションで、あなたのビジネスを次のレベルへ導きます。
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                  <i className="ri-twitter-line"></i>
                </div>
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                  <i className="ri-instagram-line"></i>
                </div>
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                  <i className="ri-dribbble-line"></i>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-4">サービス</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-purple-400 transition-colors cursor-pointer">ウェブデザイン</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors cursor-pointer">ブランディング</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors cursor-pointer">UIデザイン</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors cursor-pointer">グラフィックデザイン</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">お問い合わせ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@example.com</li>
                <li>+81 90-1234-5678</li>
                <li>東京都渋谷区</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Designer Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
