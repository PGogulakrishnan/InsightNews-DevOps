import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Search, 
  TrendingUp, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck,
  Menu,
  X,
  RefreshCw,
  ExternalLink
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Global');
  const [loading, setLoading] = useState(false);

  // Mock data for initial UI
  const newsItems = [
    {
      id: 1,
      title: "Breakthrough in Fusion Energy announced by International Lab",
      source: "TechPulse",
      category: "Science",
      status: "Verified",
      description: "Scientists achieve net energy gain for the third time, signaling a new era for clean power.",
      time: "2h ago"
    },
    {
      id: 2,
      title: "Global Markets show resilience amidst shifting trade policies",
      source: "FinanceWire",
      category: "Business",
      status: "Fact-Checked",
      description: "Major indices remain stable as central banks signal potential rate cuts later this year.",
      time: "4h ago"
    },
    {
      id: 3,
      title: "AI Regulation bill passed with overwhelming majority in EU",
      source: "BrusselsInsider",
      category: "Politics",
      status: "Verified",
      description: "The landmark legislation aims to balance innovation with ethical safeguards and safety.",
      time: "1h ago"
    }
  ];

  const categories = ['Global', 'Technology', 'Business', 'Science', 'Politics'];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="glass sticky top-0 z-50 m-4 mb-0 rounded-2xl flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-indigo-500 rounded-lg">
            <Globe className="text-white" size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight">Insight<span className="text-indigo-400">News</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm font-medium transition-colors ${activeCategory === cat ? 'text-indigo-400' : 'text-slate-400 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center glass px-3 py-1.5 rounded-full border-slate-700">
            <Search size={16} className="text-slate-400" />
            <input 
              type="text" 
              placeholder="Search news..." 
              className="bg-transparent border-none outline-none text-sm px-2 text-white w-32 focus:w-48 transition-all"
            />
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <header className="mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">
              Curated Insights. <br />
              Fact-Checked Reality.
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl">
              InsightNews aggregates headlines from global sources and cross-references them with historical data to give you the most accurate perspective.
            </p>
          </motion.div>
        </header>

        {/* Stats / Trending */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="glass p-6 border-l-4 border-indigo-500"
          >
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck className="text-indigo-400" size={20} />
              <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Curation Engine</span>
            </div>
            <div className="text-3xl font-bold">100% Active</div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="glass p-6 border-l-4 border-emerald-500"
          >
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle2 className="text-emerald-400" size={20} />
              <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Fact Checked Today</span>
            </div>
            <div className="text-3xl font-bold">1,248 Stories</div>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="glass p-6 border-l-4 border-amber-500"
          >
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="text-amber-400" size={20} />
              <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Trending Topics</span>
            </div>
            <div className="text-3xl font-bold">Energy & AI</div>
          </motion.div>
        </section>

        {/* News Grid */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Latest Stories</h2>
          <button className="flex items-center gap-2 text-indigo-400 text-sm font-semibold hover:underline">
            <RefreshCw size={16} />
            Refresh Feed
          </button>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {newsItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass glass-hover p-6 flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-xs font-semibold text-indigo-300">
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{item.time}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 leading-tight text-white group-hover:text-indigo-400">
                  {item.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-6 flex-grow">
                  {item.description}
                </p>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-300">{item.source}</span>
                    {item.status === 'Verified' ? (
                      <CheckCircle2 size={14} className="text-emerald-500" />
                    ) : (
                      <ShieldCheck size={14} className="text-indigo-400" />
                    )}
                  </div>
                  <button className="text-slate-400 hover:text-white transition-colors">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-900 mt-12 text-center">
        <p className="text-slate-500 text-sm">
          &copy; 2024 InsightNews. Built for DevOps & Scalability.
        </p>
      </footer>
    </div>
  );
};

export default App;
