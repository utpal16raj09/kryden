import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Protocol', 'Assurance', 'Validation', 'Pricing', 'Mission', 'Research'];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#F8F5EE]/95 backdrop-blur-md shadow-lg' : 'bg-[#F8F5EE]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <div className="text-xl font-semibold tracking-tight">
            <span className="font-mono">| | | QUANTUMSHIELD</span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                className="group relative px-4 py-2 bg-[#1A1A1A] text-[#F8F5EE] rounded-xl text-sm font-medium transition-all duration-300 hover:bg-[#1E3F3A] hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:-translate-y-1"
              >
                {item}
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            ))}
          </nav>

          <button className="bg-[#00FFFF] text-[#1A1A1A] px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-[#FF0099] hover:text-white hover:shadow-[0_0_20px_rgba(255,0,153,0.6)] hover:scale-105">
            GET AUTHORIZED ACCESS
          </button>
        </div>
      </div>
    </header>
  );
}
