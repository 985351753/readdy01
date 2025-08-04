'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-['Pacifico'] text-purple-600">
            logo
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#work" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">
              作品
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">
              について
            </Link>
            <Link href="#skills" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">
              スキル
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer whitespace-nowrap">
              お問い合わせ
            </Link>
          </div>

          <button 
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 pt-4">
              <Link href="#work" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">
                作品
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">
                について
              </Link>
              <Link href="#skills" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">
                スキル
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors cursor-pointer">
                お問い合わせ
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}