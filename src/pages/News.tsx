import { motion } from 'motion/react';
import { Newspaper, Clock, Share2, Bookmark } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    category: 'Market Analysis',
    time: '12 MIN AGO',
    headline: 'Federal Reserve maintains interest rates, causing BTC volatility.',
    excerpt: 'The FOMC meeting concluded today with rates remaining steady. Markets responded with immediate volatility as traders digest the long-term outlook...',
    image: 'https://picsum.photos/seed/crypto1/800/400'
  },
  {
    id: 2,
    category: 'Technology',
    time: '2 HOURS AGO',
    headline: 'The shift towards L2 solutions: Why Ruben Brouwer is bullish on Scalability.',
    excerpt: 'Layer 2 protocols are seeing record adoption as Ethereum gas fees remain a bottleneck for retail users. We explore the top contenders in the space...',
    image: 'https://picsum.photos/seed/crypto2/800/400'
  },
  {
    id: 3,
    category: 'Regulation',
    time: '5 HOURS AGO',
    headline: 'Spot ETF inflows reach record $2.4B in weekly volume.',
    excerpt: 'Institutional demand for Bitcoin continues to surge as spot ETFs see unprecedented inflows from major asset managers globally...',
    image: 'https://picsum.photos/seed/crypto3/800/400'
  }
];

export default function News() {
  return (
    <div className="space-y-12 pb-20">
      <div className="text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Market Insights</h1>
        <p className="text-[#a1a1aa] mt-2 text-sm sm:text-base">The latest news and analysis from the world of digital assets.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {newsArticles.map((article) => (
            <motion.article 
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#111111] border border-white/10 rounded-[28px] sm:rounded-[32px] overflow-hidden group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.headline}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-2 text-[#a1a1aa] text-[9px] sm:text-[10px]">
                    <Clock className="w-3 h-3" /> {article.time}
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold group-hover:text-blue-500 transition-colors line-clamp-2">{article.headline}</h2>
                <p className="text-[#a1a1aa] text-sm sm:text-base leading-relaxed line-clamp-3">{article.excerpt}</p>
                <div className="pt-4 flex justify-between items-center border-t border-white/5">
                  <button className="text-sm font-bold text-blue-500 hover:underline">Read Full Article</button>
                  <div className="flex gap-4">
                    <button className="p-2 text-[#a1a1aa] hover:text-white transition-colors"><Share2 className="w-4 h-4" /></button>
                    <button className="p-2 text-[#a1a1aa] hover:text-white transition-colors"><Bookmark className="w-4 h-4" /></button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <aside className="space-y-8">
          <div className="bg-[#111111] border border-white/10 rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 space-y-6">
            <h3 className="text-lg sm:text-xl font-bold">Trending Topics</h3>
            <div className="flex flex-wrap gap-2">
              {['Bitcoin', 'Ethereum', 'DeFi', 'NFTs', 'L2', 'Regulation', 'Mining', 'Web3'].map((tag) => (
                <button key={tag} className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/5 border border-white/10 rounded-xl text-xs sm:text-sm hover:bg-white/10 transition-colors">
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 space-y-6">
            <h3 className="text-lg sm:text-xl font-bold">Subscribe to Insights</h3>
            <p className="text-blue-100 text-sm opacity-90 leading-relaxed">Get the latest market analysis delivered directly to your inbox every morning.</p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-sm placeholder:text-blue-200 focus:outline-none focus:border-white transition-colors"
              />
              <button className="w-full bg-white text-blue-600 font-bold py-3 rounded-xl hover:bg-blue-50 transition-colors">
                Subscribe Now
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
