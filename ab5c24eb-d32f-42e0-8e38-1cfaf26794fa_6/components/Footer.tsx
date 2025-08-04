'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-3xl font-['Pacifico'] text-purple-400 mb-6 block">
              logo
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              美しいデザインと優れたユーザー体験で、
              あなたのビジネスを次のレベルへ導きます。
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-twitter-line text-lg"></i>
              </button>
              <button className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-instagram-line text-lg"></i>
              </button>
              <button className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-dribbble-line text-lg"></i>
              </button>
              <button className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-linkedin-line text-lg"></i>
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">サービス</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Webデザイン</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">UI/UXデザイン</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">ブランディング</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">フロントエンド開発</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6">お問い合わせ</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <i className="ri-mail-line mr-2"></i>
                hello@designer.com
              </li>
              <li className="text-gray-400">
                <i className="ri-phone-line mr-2"></i>
                +81 90-1234-5678
              </li>
              <li className="text-gray-400">
                <i className="ri-map-pin-line mr-2"></i>
                東京都渋谷区
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Designer Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}