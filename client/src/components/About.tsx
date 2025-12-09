import { useState, useRef, useEffect } from 'react';
import { Shield, Lock, Zap, CheckCircle2, FileCheck, Settings, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function About() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  
  const tags = [
    { 
      label: 'PQC', 
      title: 'Post-Quantum Cryptography',
      desc: 'Our PQC implementation utilizes advanced lattice-based constructs (LWE, SIS) to create cryptographic primitives that remain secure even against quantum computers running Shor\'s algorithm. We deploy NIST-standardized algorithms like CRYSTALS-Kyber for key encapsulation and Dilithium for digital signatures.',
      accent: true 
    },
    { 
      label: 'ZKP', 
      title: 'Zero-Knowledge Proofs',
      desc: 'We integrate zk-SNARKs and STARKs to enable privacy-preserving authentication. This allows entities to verify the correctness of a computation or the possession of a secret without revealing the underlying data, ensuring absolute privacy for sensitive transactions.',
      accent: false 
    },
    { 
      label: 'DLT Integration', 
      title: 'Distributed Ledger Technology',
      desc: 'The protocol anchors its state in a high-throughput, DAG-based distributed ledger. This provides an immutable, tamper-evident audit trail for all critical operations, ensuring that history cannot be rewritten and eliminating single points of failure.',
      accent: false 
    },
    { 
      label: 'Formal Verification', 
      title: 'Mathematically Proven Correctness',
      desc: 'We don\'t just test code; we prove it. Using formal methods and model checking, we mathematically verify that our protocol specifications and their implementations satisfy critical security invariants under all possible execution paths.',
      accent: false 
    },
    { 
      label: 'Cryptographic Transparency', 
      title: 'Open & Verifiable',
      desc: 'We reject security-by-obscurity. All our cryptographic primitives, protocols, and implementation details are open-source and publicly documented. We rely solely on the mathematical strength of our keys and algorithms.',
      accent: false 
    },
    { 
      label: 'Precision Engineering', 
      title: 'High-Assurance Infrastructure',
      desc: 'Our systems are built with reliability engineering principles derived from aerospace standards. We employ type-safe languages, deterministic execution paths, and rigorous fault-tolerance mechanisms to ensure 99.999% uptime in hostile environments.',
      accent: false 
    },
  ];

  return (
    <section id="mission" className="py-24 px-6 bg-[#1A1A1A] text-[#F8F5EE]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">
              Engineering the Future of Trust
            </h2>

            <div className="flex flex-wrap gap-3 mb-10">
              {tags.map((tag, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTag(activeTag === tag.label ? null : tag.label)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 border ${
                    activeTag === tag.label || tag.accent
                      ? 'bg-[#FF0099] text-white border-[#FF0099] shadow-[0_0_20px_rgba(255,0,153,0.4)]'
                      : 'bg-[#2A2A2A] text-gray-300 border-transparent hover:bg-[#1E3F3A] hover:text-[#00FFFF] hover:border-[#00FFFF]/50'
                  }`}
                >
                  {tag.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {activeTag && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  className="mb-8 overflow-hidden"
                >
                  <div className="bg-[#2A2A2A]/80 border-l-4 border-[#FF0099] p-6 rounded-r-xl backdrop-blur-sm">
                    <h4 className="text-[#FF0099] font-bold text-lg mb-2">
                      {tags.find(t => t.label === activeTag)?.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {tags.find(t => t.label === activeTag)?.desc}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

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

          <div className="relative sticky top-24">
            <div className="bg-gradient-to-br from-[#1E3F3A] to-[#2A2A2A] rounded-3xl p-12 relative overflow-hidden border border-[#00FFFF]/20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FFFF]/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF0099]/10 rounded-full blur-3xl"></div>

              <div className="relative z-10 space-y-6">
                {[
                  { icon: Shield, text: 'Military-Grade Encryption', status: 'ACTIVE' },
                  { icon: Lock, text: 'Post-Quantum Security', status: 'LOCKED' },
                  { icon: Zap, text: 'Real-Time Protection', status: 'LIVE' },
                  { icon: CheckCircle2, text: 'Zero-Knowledge Proofs', status: 'VERIFIED' },
                  { icon: FileCheck, text: 'Formal Verification', status: 'PASSED' },
                  { icon: Settings, text: 'Automated Security', status: 'ENABLED' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-center justify-between gap-4 bg-[#1A1A1A]/50 p-4 rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-[#1A1A1A] hover:translate-x-2 border border-transparent hover:border-[#00FFFF]/30 cursor-default"
                    style={{
                      animation: `slideInRight 0.5s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#00FFFF] to-[#FF0099] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-lg font-medium group-hover:text-[#00FFFF] transition-colors">{item.text}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs font-mono text-[#00FFFF]">{item.status}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00FFFF] animate-pulse"></div>
                    </div>
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
