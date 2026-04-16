import { motion } from 'motion/react';
import { Shield, Users, Globe, Award, Mail, Twitter, Github } from 'lucide-react';

export default function About() {
  return (
    <div className="space-y-24 pb-20">
      <section className="text-center space-y-6 max-w-3xl mx-auto pt-12 px-4 sm:px-0">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter leading-none"
        >
          Redefining <span className="text-blue-500">Wealth</span> in the Digital Age.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-base sm:text-lg md:text-xl text-[#a1a1aa] leading-relaxed"
        >
          Ruben Brouwer is a premier digital asset platform dedicated to providing institutional-grade tools and security to the modern investor.
        </motion.p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our Story</h2>
          <div className="space-y-4 text-[#a1a1aa] leading-relaxed text-sm sm:text-base">
            <p>
              Founded in 2024, Ruben Brouwer emerged from a vision to bridge the gap between traditional finance and the burgeoning world of decentralized assets.
            </p>
            <p>
              We recognized that while the crypto market was growing rapidly, the tools available to serious investors were often fragmented, insecure, or overly complex.
            </p>
            <p>
              Today, we serve thousands of clients globally, providing a unified interface for market analysis, portfolio management, and secure asset custody.
            </p>
          </div>
          <div className="flex justify-center md:justify-start gap-4">
            <button className="p-3 bg-[#111111] border border-white/10 rounded-xl hover:text-blue-500 transition-colors"><Twitter className="w-5 h-5" /></button>
            <button className="p-3 bg-[#111111] border border-white/10 rounded-xl hover:text-blue-500 transition-colors"><Github className="w-5 h-5" /></button>
            <button className="p-3 bg-[#111111] border border-white/10 rounded-xl hover:text-blue-500 transition-colors"><Mail className="w-5 h-5" /></button>
          </div>
        </div>
        <div className="aspect-square bg-[#111111] border border-white/10 rounded-[32px] sm:rounded-[40px] overflow-hidden relative">
          <img 
            src="https://picsum.photos/seed/team/800/800" 
            alt="Team" 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
          <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12">
            <div className="text-2xl sm:text-3xl font-bold">850K+</div>
            <div className="text-[#a1a1aa] uppercase tracking-widest text-[10px] sm:text-sm">Active Users Globally</div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {[
          { icon: Shield, title: 'Security First', desc: 'We employ the highest standards of encryption and cold storage.' },
          { icon: Users, title: 'User Focused', desc: 'Every feature is designed with the user experience in mind.' },
          { icon: Globe, title: 'Global Reach', desc: 'Our platform is accessible from over 150 countries.' },
          { icon: Award, title: 'Award Winning', desc: 'Recognized as the most innovative crypto platform of 2024.' },
        ].map((item, idx) => (
          <div key={idx} className="p-6 sm:p-8 bg-[#111111] border border-white/10 rounded-[24px] sm:rounded-[32px] space-y-4 text-center sm:text-left">
            <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto sm:mx-0">
              <item.icon className="text-blue-500 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-[#a1a1aa] text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
