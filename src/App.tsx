import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background3D from './components/Background3D';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Markets from './pages/Markets';
import Portfolio from './pages/Portfolio';
import News from './pages/News';
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">
        <Background3D />
        <Navbar />

        <main className="pt-32 max-w-[1024px] mx-auto px-4 sm:px-8 lg:px-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/markets" element={<Markets />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 py-12 px-4 sm:px-8 lg:px-16 max-w-[1024px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="font-bold tracking-tighter uppercase">RUBEN BROUWER</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-[#a1a1aa]">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
            <div className="text-[#a1a1aa] text-sm space-y-1">
              <p>© 2024 Ruben Brouwer. All rights reserved.</p>
              <p className="text-[10px] tracking-widest opacity-60">Developed by BolCodify</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
