'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate textarea character limit
    if (formData.message.length > 500) {
      alert('メッセージは500文字以内で入力してください。');
      return;
    }

    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        project: '',
        budget: '',
        message: ''
      });
    }, 3000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Limit textarea to 500 characters
    if (name === 'message' && value.length > 500) {
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Let's <span className="text-purple-600">Connect</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            素晴らしいプロジェクトを一緒に作りませんか？お気軽にお問い合わせください
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-medium text-gray-900 mb-6">お問い合わせ情報</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-xl text-purple-600"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">メール</h4>
                    <p className="text-gray-600">hello@designer.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-xl text-purple-600"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">電話</h4>
                    <p className="text-gray-600">+81 90-1234-5678</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-xl text-purple-600"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">所在地</h4>
                    <p className="text-gray-600">東京都渋谷区</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="w-12 h-12 bg-purple-100 hover:bg-purple-600 rounded-xl flex items-center justify-center transition-colors cursor-pointer group">
                <i className="ri-twitter-line text-xl text-purple-600 group-hover:text-white"></i>
              </button>
              <button className="w-12 h-12 bg-purple-100 hover:bg-purple-600 rounded-xl flex items-center justify-center transition-colors cursor-pointer group">
                <i className="ri-instagram-line text-xl text-purple-600 group-hover:text-white"></i>
              </button>
              <button className="w-12 h-12 bg-purple-100 hover:bg-purple-600 rounded-xl flex items-center justify-center transition-colors cursor-pointer group">
                <i className="ri-dribbble-line text-xl text-purple-600 group-hover:text-white"></i>
              </button>
              <button className="w-12 h-12 bg-purple-100 hover:bg-purple-600 rounded-xl flex items-center justify-center transition-colors cursor-pointer group">
                <i className="ri-linkedin-line text-xl text-purple-600 group-hover:text-white"></i>
              </button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">お名前 *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-600 focus:outline-none transition-colors text-sm"
                    placeholder="山田太郎"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">メールアドレス *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-600 focus:outline-none transition-colors text-sm"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">プロジェクト種類</label>
                  <div className="relative">
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-600 focus:outline-none transition-colors text-sm appearance-none pr-8"
                    >
                      <option value="">選択してください</option>
                      <option value="web-design">Webデザイン</option>
                      <option value="branding">ブランディング</option>
                      <option value="ui-design">UI/UXデザイン</option>
                      <option value="app-design">アプリデザイン</option>
                      <option value="other">その他</option>
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">予算</label>
                  <div className="relative">
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-600 focus:outline-none transition-colors text-sm appearance-none pr-8"
                    >
                      <option value="">選択してください</option>
                      <option value="under-50k">5万円未満</option>
                      <option value="50k-100k">5万円 - 10万円</option>
                      <option value="100k-300k">10万円 - 30万円</option>
                      <option value="300k-500k">30万円 - 50万円</option>
                      <option value="over-500k">50万円以上</option>
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  メッセージ * 
                  <span className="text-gray-500">({formData.message.length}/500)</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  maxLength={500}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-600 focus:outline-none transition-colors text-sm resize-none"
                  placeholder="プロジェクトの詳細や要望をお聞かせください..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-purple-600 text-white py-4 rounded-xl hover:bg-purple-700 transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50"
              >
                {isSubmitted ? '送信完了！' : 'メッセージを送信'}
              </button>

              {isSubmitted && (
                <div className="text-center text-green-600 font-medium">
                  お問い合わせありがとうございます。24時間以内に返信いたします。
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}