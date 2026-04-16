import { motion } from 'motion/react';
import { Search, ArrowUpRight, ArrowDownRight, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';

const marketData = [
  { id: 1, name: 'Bitcoin', symbol: 'BTC', price: '$64,102.40', change: '+2.45%', marketCap: '$1.2T', volume: '$32.1B' },
  { id: 2, name: 'Ethereum', symbol: 'ETH', price: '$3,421.12', change: '-1.12%', marketCap: '$412.5B', volume: '$18.4B' },
  { id: 3, name: 'Solana', symbol: 'SOL', price: '$142.88', change: '+8.20%', marketCap: '$63.2B', volume: '$4.2B' },
  { id: 4, name: 'Cardano', symbol: 'ADA', price: '$0.45', change: '+0.15%', marketCap: '$16.1B', volume: '$0.8B' },
  { id: 5, name: 'Polkadot', symbol: 'DOT', price: '$7.24', change: '-2.34%', marketCap: '$10.4B', volume: '$0.5B' },
  { id: 6, name: 'Chainlink', symbol: 'LINK', price: '$18.12', change: '+4.56%', marketCap: '$10.6B', volume: '$1.1B' },
];

export default function Markets() {
  return (
    <div className="space-y-12 pb-20">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div className="text-center lg:text-left w-full lg:w-auto">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Market Overview</h1>
          <p className="text-[#a1a1aa] mt-2 text-sm sm:text-base">Real-time data for the world's leading digital assets.</p>
        </div>
        <div className="flex items-center gap-3 w-full lg:w-auto">
          <div className="relative flex-grow lg:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a1a1aa]" />
            <input 
              type="text" 
              placeholder="Search assets..." 
              className="w-full bg-[#111111] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <button className="p-2.5 bg-[#111111] border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
            <Filter className="w-5 h-5 text-[#a1a1aa]" />
          </button>
        </div>
      </div>

      <div className="bg-[#111111] border border-white/10 rounded-[24px] sm:rounded-[32px] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[700px]">
            <thead>
              <tr className="border-b border-white/5 text-[12px] text-[#a1a1aa] uppercase tracking-widest">
                <th className="px-8 py-6 font-semibold">Asset</th>
                <th className="px-8 py-6 font-semibold">Price</th>
                <th className="px-8 py-6 font-semibold">24h Change</th>
                <th className="px-8 py-6 font-semibold">Market Cap</th>
                <th className="px-8 py-6 font-semibold">Volume (24h)</th>
                <th className="px-8 py-6 font-semibold"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {marketData.map((coin) => (
                <motion.tr 
                  key={coin.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="hover:bg-white/[0.02] transition-colors group cursor-pointer"
                >
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center font-bold text-blue-500">
                        {coin.symbol[0]}
                      </div>
                      <div>
                        <div className="font-bold">{coin.name}</div>
                        <div className="text-[12px] text-[#a1a1aa]">{coin.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 font-semibold">{coin.price}</td>
                  <td className="px-8 py-6">
                    <div className={cn(
                      "flex items-center gap-1 font-medium",
                      coin.change.startsWith('+') ? "text-[#10b981]" : "text-[#ef4444]"
                    )}>
                      {coin.change.startsWith('+') ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                      {coin.change}
                    </div>
                  </td>
                  <td className="px-8 py-6 text-[#a1a1aa]">{coin.marketCap}</td>
                  <td className="px-8 py-6 text-[#a1a1aa]">{coin.volume}</td>
                  <td className="px-8 py-6 text-right">
                    <button className="px-4 py-2 bg-blue-500/10 text-blue-500 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Trade
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
