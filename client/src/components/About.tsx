import { Shield, Lock, Zap, CheckCircle2, FileCheck, Settings } from 'lucide-react';

export default function About() {
  const tags = [
    { label: 'PQC', accent: true },
    { label: 'ZKP', accent: false },
    { label: 'DLT Integration', accent: false },
    { label: 'Formal Verification', accent: false },
    { label: 'Cryptographic Transparency', accent: false },
    { label: 'Precision Engineering', accent: false },
  ];

  return (
    <section className="py-24 px-6 bg-[#1A1A1A] text-[#F8F5EE]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">
              Engineering the Future of Trust
            </h2>

            <div className="flex flex-wrap gap-3 mb-10">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    tag.accent
                      ? 'bg-[#FF0099] text-white shadow-[0_0_20px_rgba(255,0,153,0.4)]'
                      : 'bg-[#2A2A2A] text-gray-300 hover:bg-[#1E3F3A] hover:text-[#00FFFF]'
                  }`}
                >
                  {tag.label}
                </span>
              ))}
            </div>

            <div className="bg-[#2A2A2A] rounded-2xl p-8 border border-[#00FFFF]/20">
              <h3 className="text-2xl font-semibold mb-4 text-[#00FFFF]">Core Protocol Philosophy</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                We operate at the intersection of research, engineering, and national-grade security, building technology
                that is years ahead of conventional systems. Our single belief: the world deserves security strong enough
                to outpace the most advanced computational capabilities of our time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 bg-[#00FFFF] text-[#1A1A1A] px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-[#FF0099] hover:text-white hover:shadow-[0_0_20px_rgba(255,0,153,0.6)]">
                  View Core Team Profiles
                </button>
                <button className="flex items-center justify-center gap-2 bg-transparent border-2 border-[#00FFFF] text-[#00FFFF] px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-[#00FFFF] hover:text-[#1A1A1A]">
                  Formal Audit Reports
                </button>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[#1E3F3A] to-[#2A2A2A] rounded-3xl p-12 relative overflow-hidden border border-[#00FFFF]/20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF0099]/10 rounded-full blur-3xl"></div>

              <div className="relative z-10 space-y-6">
                {[
                  { icon: Shield, text: 'Military-Grade Encryption' },
                  { icon: Lock, text: 'Post-Quantum Security' },
                  { icon: Zap, text: 'Real-Time Protection' },
                  { icon: CheckCircle2, text: 'Zero-Knowledge Proofs' },
                  { icon: FileCheck, text: 'Formal Verification' },
                  { icon: Settings, text: 'Automated Security' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-[#1A1A1A]/50 p-4 rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-[#1A1A1A] hover:translate-x-2"
                    style={{
                      animation: `slideInRight 0.5s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00FFFF] to-[#FF0099] rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
