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

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#F8F5EE]/95 backdrop-blur-md shadow-lg' : 'bg-[#F8F5EE]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <div className="text-xl font-semibold tracking-tight text-[#0F172A]">
            <span className="font-mono">| | | QUANTUMSHIELD</span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="group relative px-4 py-2 bg-[#0F172A] text-[#F8FAFC] rounded-xl text-sm font-medium transition-all duration-300 hover:bg-[#1E293B] hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] hover:-translate-y-1"
              >
                {item}
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#10B981]/0 via-[#10B981]/20 to-[#10B981]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            ))}
          </nav>

          <button className="bg-[#10B981] text-[#0F172A] px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-[#3B82F6] hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:scale-105">
            GET AUTHORIZED ACCESS
          </button>
        </div>
      </div>
    </header>
  );
}
