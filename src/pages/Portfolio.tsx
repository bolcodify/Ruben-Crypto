import { motion } from 'motion/react';
import { Wallet, TrendingUp, ArrowUpRight, Plus, History, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

const holdings = [
  { name: 'Bitcoin', symbol: 'BTC', amount: '1.24 BTC', value: '$79,486.97', change: '+2.4%', color: 'bg-[#f7931a]' },
  { name: 'Ethereum', symbol: 'ETH', amount: '15.5 ETH', value: '$53,027.36', change: '-1.2%', color: 'bg-[#627eea]' },
  { name: 'Solana', symbol: 'SOL', amount: '240.0 SOL', value: '$34,291.20', change: '+8.5%', color: 'bg-[#14f195]' },
];

export default function Portfolio() {
  return (
    <div className="space-y-12 pb-20">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div className="text-center lg:text-left w-full lg:w-auto">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Portfolio</h1>
          <p className="text-[#a1a1aa] mt-2 text-sm sm:text-base">Manage your digital assets and track performance.</p>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-end gap-3 w-full lg:w-auto">
          <button className="p-3 bg-[#111111] border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
            <History className="w-5 h-5 text-[#a1a1aa]" />
          </button>
          <button className="p-3 bg-[#111111] border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
            <Settings className="w-5 h-5 text-[#a1a1aa]" />
          </button>
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl font-bold transition-colors w-full sm:w-auto">
            <Plus className="w-5 h-5" /> Add Asset
          </button>
        </div>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 sm:p-8 bg-[#111111] border border-white/10 rounded-[28px] sm:rounded-[32px] space-y-4">
          <span className="text-[10px] sm:text-[12px] text-[#a1a1aa] uppercase tracking-widest text-center sm:text-left block">Total Balance</span>
          <div className="text-3xl sm:text-4xl font-bold text-center sm:text-left">$166,805.53</div>
          <div className="flex items-center justify-center sm:justify-start gap-1 text-[#10b981] text-sm font-medium">
            <ArrowUpRight className="w-4 h-4" /> +12.4% ($18,421.12)
          </div>
        </div>
        <div className="p-6 sm:p-8 bg-[#111111] border border-white/10 rounded-[28px] sm:rounded-[32px] space-y-4">
          <span className="text-[10px] sm:text-[12px] text-[#a1a1aa] uppercase tracking-widest text-center sm:text-left block">24h Profit/Loss</span>
          <div className="text-3xl sm:text-4xl font-bold text-[#10b981] text-center sm:text-left">+$4,210.45</div>
          <div className="text-[11px] sm:text-sm text-[#a1a1aa] text-center sm:text-left">Based on current market prices</div>
        </div>
        <div className="p-6 sm:p-8 bg-blue-600 rounded-[28px] sm:rounded-[32px] space-y-4 relative overflow-hidden sm:col-span-2 lg:col-span-1">
          <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-20">
            <Wallet className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24" />
          </div>
          <span className="text-[10px] sm:text-[12px] text-blue-200 uppercase tracking-widest relative z-10 block">Connected Wallet</span>
          <div className="text-xl sm:text-2xl font-bold relative z-10 break-all">0x71C...3E21</div>
          <div className="text-[11px] sm:text-sm text-blue-100 relative z-10">Main Ethereum Network</div>
        </div>
      </div>

      {/* Holdings Table */}
      <div className="bg-[#111111] border border-white/10 rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl font-bold">Your Assets</h2>
          <button className="text-blue-500 text-sm font-semibold hover:underline">View All</button>
        </div>
        <div className="space-y-4">
          {holdings.map((asset) => (
            <div key={asset.symbol} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 sm:p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] transition-colors gap-4">
              <div className="flex items-center gap-4">
                <div className={cn("w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm sm:text-base", asset.color)}>
                  {asset.symbol[0]}
                </div>
                <div>
                  <div className="font-bold text-base sm:text-lg">{asset.name}</div>
                  <div className="text-[12px] sm:text-sm text-[#a1a1aa]">{asset.amount}</div>
                </div>
              </div>
              <div className="text-left sm:text-right w-full sm:w-auto">
                <div className="font-bold text-base sm:text-lg">{asset.value}</div>
                <div className={cn("text-[12px] sm:text-sm font-medium", asset.change.startsWith('+') ? "text-[#10b981]" : "text-[#ef4444]")}>
                  {asset.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
