import { motion } from 'motion/react';
import { TrendingUp, BarChart3, PieChart, Newspaper, Globe, Shield, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import ThreeDCoin from '../components/ThreeDCoin';

const mockMarkets = [
  { name: 'Bitcoin', symbol: 'BTC', price: '$64,102.40', change: '+2.45%' },
  { name: 'Ethereum', symbol: 'ETH', price: '$3,421.12', change: '-1.12%' },
  { name: 'Solana', symbol: 'SOL', price: '$142.88', change: '+8.20%' },
];

export default function Home() {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero & Side Panel Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
        {/* Left Column: Hero & Portfolio */}
        <section className="flex flex-col justify-center pb-10 space-y-8">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-3 py-1.5 bg-blue-500/10 border border-blue-500 text-blue-500 rounded-full text-[11px] font-semibold uppercase tracking-widest"
            >
              Institutional Crypto Platform
            </motion.div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-6xl font-extrabold tracking-tighter leading-none"
                >
                  Design the <span className="text-blue-500">Future</span> <br />
                  of your Wealth.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-[#a1a1aa] mt-6 max-w-[500px] leading-relaxed"
                >
                  Professional-grade portfolio tracking and market analysis for the modern digital asset investor. Join the elite circle of Ruben Brouwer.
                </motion.p>
              </div>

              {/* 3D Coin Animation */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                className="w-full md:w-[300px] h-[300px] relative"
              >
                <Canvas shadows camera={{ position: [0, 0, 4], fov: 40 }}>
                  <Stage environment="city" intensity={0.5}>
                    <ThreeDCoin />
                  </Stage>
                  <OrbitControls enableZoom={false} autoRotate />
                </Canvas>
              </motion.div>
            </div>
          </div>

          {/* Portfolio Preview Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#111111] border border-white/10 rounded-[24px] p-8 space-y-6 h-[320px] flex flex-col"
          >
            <div className="flex gap-12">
              <div className="flex flex-col gap-1">
                <span className="text-[12px] text-[#a1a1aa] uppercase tracking-widest">Portfolio Value</span>
                <span className="text-3xl font-bold">$1,242,084.50</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[12px] text-[#a1a1aa] uppercase tracking-widest">24h Change</span>
                <span className="text-3xl font-bold text-[#10b981]">+$42,104.12</span>
              </div>
            </div>

            <div className="flex-grow bg-gradient-to-r from-transparent via-blue-500/5 to-transparent rounded-xl relative overflow-hidden">
              <div className="absolute bottom-5 left-0 w-full h-20 bg-gradient-to-t from-blue-500/10 to-transparent" />
              <div className="absolute bottom-10 left-0 w-full h-[2px] bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] transform -skew-y-3" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl px-8 h-14 text-lg font-semibold">
              Get Started Now
            </Button>
          </motion.div>
        </section>

        {/* Right Column: Side Panel */}
        <aside className="hidden lg:flex flex-col gap-6 py-10">
          {/* Live Markets Card */}
          <div className="bg-[#111111] border border-white/10 rounded-[24px] p-6">
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-sm font-semibold">Live Markets</h3>
              <span className="text-[12px] text-[#a1a1aa]">See all</span>
            </div>
            <div className="space-y-4">
              {mockMarkets.map((market) => (
                <div key={market.symbol} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className={cn("w-8 h-8 rounded-full", 
                      market.symbol === 'BTC' ? 'bg-[#f7931a]' : 
                      market.symbol === 'ETH' ? 'bg-[#627eea]' : 
                      'bg-[#14f195]'
                    )} />
                    <div>
                      <span className="font-semibold text-sm">{market.name}</span>
                      <span className="text-[12px] text-[#a1a1aa] ml-1">{market.symbol}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold">{market.price}</div>
                    <div className={cn("text-[11px]", market.change.startsWith('+') ? 'text-[#10b981]' : 'text-[#ef4444]')}>
                      {market.change}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Insights Card */}
          <div className="bg-[#111111] border border-white/10 rounded-[24px] p-6 flex-grow">
            <h3 className="text-sm font-semibold mb-5">Recent Insights</h3>
            <div className="space-y-6">
              {[
                { time: '12 MIN AGO', headline: 'Federal Reserve maintains interest rates, causing BTC volatility.' },
                { time: '2 HOURS AGO', headline: 'The shift towards L2 solutions: Why Ruben Brouwer is bullish on Scalability.' },
                { time: '5 HOURS AGO', headline: 'Spot ETF inflows reach record $2.4B in weekly volume.' }
              ].map((news, idx) => (
                <div key={idx} className={cn("space-y-1 pb-4", idx !== 2 && "border-b border-white/5")}>
                  <div className="text-[10px] text-[#a1a1aa] uppercase tracking-wider">{news.time}</div>
                  <p className="text-[13px] font-medium leading-relaxed">{news.headline}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Additional Homepage Sections */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-[#111111] border border-white/10 rounded-[32px] space-y-4">
          <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center">
            <Shield className="text-blue-500" />
          </div>
          <h3 className="text-xl font-bold">Secure Custody</h3>
          <p className="text-[#a1a1aa] text-sm leading-relaxed">
            Your assets are protected by military-grade encryption and multi-signature cold storage protocols.
          </p>
        </div>
        <div className="p-8 bg-[#111111] border border-white/10 rounded-[32px] space-y-4">
          <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center">
            <Zap className="text-emerald-500" />
          </div>
          <h3 className="text-xl font-bold">Instant Execution</h3>
          <p className="text-[#a1a1aa] text-sm leading-relaxed">
            Trade with zero latency. Our proprietary matching engine handles millions of transactions per second.
          </p>
        </div>
        <div className="p-8 bg-[#111111] border border-white/10 rounded-[32px] space-y-4">
          <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center">
            <Globe className="text-purple-500" />
          </div>
          <h3 className="text-xl font-bold">Global Liquidity</h3>
          <p className="text-[#a1a1aa] text-sm leading-relaxed">
            Access deep liquidity pools across global markets, ensuring the best prices for every trade.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-blue-600 rounded-[40px] p-12 md:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none" />
        <div className="max-w-2xl space-y-8 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Our Mission is to Empower Your Digital Future.</h2>
          <p className="text-blue-100 text-lg leading-relaxed">
            At Ruben Brouwer, we believe that financial freedom should be accessible to everyone. We're building the infrastructure for the next generation of wealth management.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Transparent Operations",
              "Community Driven",
              "Innovation First",
              "User Centric Design"
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white font-medium">
                <CheckCircle2 className="w-5 h-5 text-blue-300" />
                {item}
              </div>
            ))}
          </div>
          <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-10 h-14 text-lg font-bold">
            Learn More About Us <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
