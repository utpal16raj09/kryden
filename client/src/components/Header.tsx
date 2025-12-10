import { useState, useEffect } from 'react';
import { KrydenLogo } from "@/components/logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Assurance', 'Protocol', 'Mission', 'Pricing', 'Research'];

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed w-full top-0 left-0 z-50 pointer-events-none">

      {/* Top subtle blur strip */}
      <div
        className={`pointer-events-none transition-all duration-300 
          ${scrolled ? 'h-5 backdrop-blur-xl bg-transparent' : 'h-0'}
        `}
      />

      {/* Floating header panel */}
      <div
        className={`
          pointer-events-auto
          fixed left-1/2 -translate-x-1/2 z-50
          transition-all duration-500 px-4
          ${scrolled
            ? 'mt-4 bg-[#ede9df]/70 rounded-4xl shadow-xl backdrop-blur-xl w-[90%]'
            : 'mt-0 bg-[#ede9df] w-full rounded-none shadow-none'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-4">

            {/* LOGO */}
            <KrydenLogo />

            {/* NAVIGATION */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className="
                    group relative px-4 py-2 
                    bg-[#0d0d0d] text-[#F8FAFC]
                    rounded-4xl text-sm font-medium
                    transition-all duration-300
                    hover:bg-[#1A1A1A] hover:-translate-y-1
                  "
                >
                  {item}

                  {/* Soft black glow */}
                  <span
                    className="
                      absolute inset-0 rounded-4xl bg-black/10
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-300
                    "
                  />
                </button>
              ))}
            </nav>

            {/* CTA BUTTON */}
            <button
              className="
                bg-[#3B82F6] opacity-80 text-[#0d0d0d]
                px-6 py-2.5 rounded-4xl font-semibold text-sm
                transition-all duration-300
                hover:bg-[#3B82F6] hover:text-white
                hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]
                hover:scale-105
              "
            >
              GET AUTHORIZED ACCESS
            </button>

          </div>
        </div>
      </div>

    </header>
  );
}
