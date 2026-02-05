import { useState } from 'react';
import './App.css';

// 多语言文本
const i18n = {
  zh: {
    nav: {
      features: '功能特性',
      download: '下载',
      docs: '文档',
      getStarted: '立即开始',
    },
    hero: {
      tag: '沉浸式 Markdown 阅读器',
      title: '让 Markdown 阅读\n更专注、更高效',
      description: 'PureMark 是一款为开发者和写作者打造的沉浸式 Markdown 预览器，支持多标签管理、实时预览、大纲导航，让您专注于内容本身。',
      downloadMac: 'Download for macOS',
      downloadWin: 'Download for Windows',
    },
    features: {
      tag: 'FEATURES',
      title: '强大功能，专为高效阅读而生',
      description: '六大核心功能，让 Markdown 阅读体验焕然一新',
      items: [
        {
          title: '多标签管理',
          description: '同时打开多个文档，轻松在不同文件之间切换，提高工作效率',
        },
        {
          title: '实时预览',
          description: '文件变更自动刷新，配合编辑器使用，实时查看渲染效果',
        },
        {
          title: '大纲导航',
          description: '智能提取文档结构，支持多级标题折叠，快速定位内容位置',
        },
        {
          title: '全文搜索',
          description: '快速搜索文档内容，支持关键词高亮显示，精准定位目标内容',
        },
        {
          title: '专注模式',
          description: '隐藏干扰元素，沉浸式阅读体验，让您专注于内容本身',
        },
        {
          title: '个性化设置',
          description: '自定义主题、字体、代码高亮样式，打造专属阅读环境',
        },
      ],
    },
    download: {
      title: '立即下载 PureMark',
      description: '免费下载，开启沉浸式 Markdown 阅读之旅',
      macTitle: 'macOS 版本',
      macVersion: 'macOS 10.15+',
      winTitle: 'Windows 版本',
      winVersion: 'Windows 10+',
      sysReq: '支持 macOS 10.15+ · Windows 10+',
    },
    footer: {
      copyright: '© 2025 PureMark. All rights reserved.',
    },
  },
  en: {
    nav: {
      features: 'Features',
      download: 'Download',
      docs: 'Docs',
      getStarted: 'Get Started',
    },
    hero: {
      tag: 'Immersive Markdown Reader',
      title: 'Make Markdown Reading\nMore Focused & Efficient',
      description: 'PureMark is an immersive Markdown previewer designed for developers and writers, featuring multi-tab management, live preview, and outline navigation.',
      downloadMac: 'Download for macOS',
      downloadWin: 'Download for Windows',
    },
    features: {
      tag: 'FEATURES',
      title: 'Powerful Features for Efficient Reading',
      description: 'Six core features to revolutionize your Markdown reading experience',
      items: [
        {
          title: 'Multi-Tab Management',
          description: 'Open multiple documents simultaneously and switch between files effortlessly',
        },
        {
          title: 'Live Preview',
          description: 'Auto-refresh on file changes, see rendered results in real-time',
        },
        {
          title: 'Outline Navigation',
          description: 'Smart document structure extraction with collapsible headings',
        },
        {
          title: 'Full-Text Search',
          description: 'Quick content search with keyword highlighting',
        },
        {
          title: 'Focus Mode',
          description: 'Distraction-free reading experience for better concentration',
        },
        {
          title: 'Customization',
          description: 'Personalize themes, fonts, and code highlighting styles',
        },
      ],
    },
    download: {
      title: 'Download PureMark Now',
      description: 'Free download to start your immersive Markdown reading journey',
      macTitle: 'macOS Version',
      macVersion: 'macOS 10.15+',
      winTitle: 'Windows Version',
      winVersion: 'Windows 10+',
      sysReq: 'Supports macOS 10.15+ · Windows 10+',
    },
    footer: {
      copyright: '© 2025 PureMark. All rights reserved.',
    },
  },
};

// Feature icons with gradients
const featureIcons = [
  { gradient: 'from-green-500/30 to-green-600/30', icon: '📑' },
  { gradient: 'from-blue-500/30 to-blue-600/30', icon: '👁️' },
  { gradient: 'from-purple-500/30 to-purple-600/30', icon: '📋' },
  { gradient: 'from-orange-500/30 to-orange-600/30', icon: '🔍' },
  { gradient: 'from-pink-500/30 to-pink-600/30', icon: '🎯' },
  { gradient: 'from-cyan-500/30 to-cyan-600/30', icon: '⚙️' },
];

type Language = 'zh' | 'en';

function App() {
  const [lang, setLang] = useState<Language>('zh');
  const t = i18n[lang];

  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0B]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-[#22C55E]"></div>
            <span className="font-mono text-lg font-semibold tracking-wider text-white">PureMark</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-[#ADADB0] hover:text-white transition-colors">
              {t.nav.features}
            </a>
            <a href="#download" className="text-sm font-medium text-[#ADADB0] hover:text-white transition-colors">
              {t.nav.download}
            </a>
            <a href="#" className="text-sm font-medium text-[#ADADB0] hover:text-white transition-colors">
              {t.nav.docs}
            </a>
          </nav>

          {/* CTA Button */}
          <button className="btn-primary px-5 py-2.5 rounded-lg text-sm font-semibold text-white">
            {t.nav.getStarted}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-20 bg-gradient-to-b from-[#0A0A0B] to-[#111113]">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto flex flex-col items-center">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#22C55E]/10 mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded bg-[#22C55E]"></div>
            <span className="text-sm text-[#22C55E]">{t.hero.tag}</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-center text-[#F8FAFC] leading-tight mb-6 animate-slide-up whitespace-pre-line">
            {t.hero.title}
          </h1>

          {/* Description */}
          <p className="text-lg text-[#94A3B8] text-center max-w-2xl mb-10 leading-relaxed animate-slide-up stagger-1">
            {t.hero.description}
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up stagger-2">
            <button className="btn-primary flex items-center gap-3 px-8 py-4 rounded-xl text-white">
              <span className="text-xl">⌘</span>
              <span className="font-medium">{t.hero.downloadMac}</span>
            </button>
            <button className="btn-secondary flex items-center gap-3 px-8 py-4 rounded-xl text-[#F8FAFC] border border-white/10">
              <span className="text-xl">⊞</span>
              <span className="font-medium">{t.hero.downloadWin}</span>
            </button>
          </div>

          {/* Product Preview */}
          <div className="w-full max-w-5xl glass-card rounded-2xl p-8 animate-slide-up stagger-3">
            <div className="bg-[#1E293B] rounded-xl h-[400px] md:h-[500px] flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📝</div>
                <p className="text-[#64748B] text-xl">Product Screenshot Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 lg:px-20 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex px-4 py-1.5 rounded-full bg-[#3B82F6]/10 mb-4">
              <span className="text-xs font-medium text-[#3B82F6] tracking-widest">{t.features.tag}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#F8FAFC] mb-4">{t.features.title}</h2>
            <p className="text-lg text-[#94A3B8]">{t.features.description}</p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.features.items.map((feature, index) => (
              <div
                key={index}
                className={`feature-card glass-card rounded-2xl p-8 animate-slide-up stagger-${index + 1}`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${featureIcons[index].gradient} flex items-center justify-center mb-5`}>
                  <span className="text-2xl">{featureIcons[index].icon}</span>
                </div>
                <h3 className="text-xl font-medium text-[#F8FAFC] mb-3">{feature.title}</h3>
                <p className="text-[#94A3B8] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24 px-6 lg:px-20 bg-gradient-to-b from-[#0F172A] to-[#0A0A0B]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#F8FAFC] mb-4">{t.download.title}</h2>
          <p className="text-lg text-[#94A3B8] mb-10">{t.download.description}</p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-8">
            <button className="btn-primary flex items-center gap-3 px-10 py-5 rounded-2xl text-white">
              <span className="text-2xl">⌘</span>
              <div className="text-left">
                <div className="font-semibold">{t.download.macTitle}</div>
                <div className="text-sm text-white/70">{t.download.macVersion}</div>
              </div>
            </button>
            <button className="btn-secondary flex items-center gap-3 px-10 py-5 rounded-2xl text-[#F8FAFC] border border-white/10">
              <span className="text-2xl">⊞</span>
              <div className="text-left">
                <div className="font-semibold">{t.download.winTitle}</div>
                <div className="text-sm text-[#94A3B8]">{t.download.winVersion}</div>
              </div>
            </button>
          </div>

          <p className="text-sm text-[#64748B]">{t.download.sysReq}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-20 bg-[#0A0A0B] border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#22C55E]"></div>
            <span className="font-mono text-[#F8FAFC]">PureMark</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-[#64748B]">{t.footer.copyright}</p>

          {/* Language Switcher */}
          <div className="flex rounded-lg bg-[#1E293B] overflow-hidden">
            <button
              onClick={() => setLang('zh')}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                lang === 'zh'
                  ? 'bg-[#22C55E] text-[#0A0A0B]'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              中文
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                lang === 'en'
                  ? 'bg-[#22C55E] text-[#0A0A0B]'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
