import { useState, useRef, useEffect } from 'react';
import { Shield, Lock, Zap, CheckCircle2, FileCheck, Settings, ArrowRight, FileText, Download, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function About() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  
  const tags = [
    { 
      label: 'PQC', 
      title: 'Post-Quantum Cryptography',
      desc: 'Our PQC implementation utilizes advanced lattice-based constructs (LWE, SIS) to create cryptographic primitives that remain secure even against quantum computers running Shor\'s algorithm. We deploy NIST-standardized algorithms like CRYSTALS-Kyber for key encapsulation and Dilithium for digital signatures.',
      accent: false 
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

  const auditReports = [
    { id: 'AUD-2024-001', title: 'Kyber-1024 Implementation Audit', auditor: 'NCC Group', date: '2024-03-15', status: 'PASSED' },
    { id: 'AUD-2024-002', title: 'Zero-Knowledge Circuit Constraints', auditor: 'Trail of Bits', date: '2024-04-02', status: 'PASSED' },
    { id: 'AUD-2024-003', title: 'Smart Contract Formal Verification', auditor: 'CertiK', date: '2024-05-20', status: 'PASSED' },
    { id: 'AUD-2024-004', title: 'Network Consensus Stability Analysis', auditor: 'Sigma Prime', date: '2024-06-10', status: 'PASSED' },
  ];

  return (
    <section id="mission" className="py-24 px-6 bg-[#0F172A] text-[#F8FAFC]">
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
                    activeTag === tag.label
                      ? 'bg-[#3B82F6] text-white border-[#3B82F6] shadow-[0_0_20px_rgba(59,130,246,0.4)]'
                      : 'bg-[#1E293B] text-gray-300 border-transparent hover:bg-[#334155] hover:text-[#10B981] hover:border-[#10B981]/50'
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
                  <div className="bg-[#1E293B]/80 border-l-4 border-[#3B82F6] p-6 rounded-r-xl backdrop-blur-sm">
                    <h4 className="text-[#3B82F6] font-bold text-lg mb-2">
                      {tags.find(t => t.label === activeTag)?.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {tags.find(t => t.label === activeTag)?.desc}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="bg-[#1E293B] rounded-2xl p-8 border border-[#10B981]/20">
              <h3 className="text-2xl font-semibold mb-4 text-[#10B981]">Core Protocol Philosophy</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                We operate at the intersection of research, engineering, and national-grade security, building technology
                that is years ahead of conventional systems. Our single belief: the world deserves security strong enough
                to outpace the most advanced computational capabilities of our time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 bg-[#10B981] text-[#0F172A] px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-[#3B82F6] hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]">
                  View Core Team Profiles
                </button>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="flex items-center justify-center gap-2 bg-transparent border-2 border-[#10B981] text-[#10B981] px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-[#10B981] hover:text-[#0F172A]">
                      Formal Audit Reports
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl bg-[#0F172A] border border-[#10B981]/30 text-[#F8FAFC] sm:rounded-3xl p-0 overflow-hidden shadow-2xl">
                    <div className="p-8 md:p-10 relative">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-[#10B981]/10 rounded-full blur-3xl -z-0"></div>
                      <DialogHeader className="mb-8 relative z-10">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-[#10B981]/20 rounded-xl">
                            <FileCheck className="w-8 h-8 text-[#10B981]" />
                          </div>
                          <div>
                            <DialogTitle className="text-2xl font-bold font-serif text-white">Security Audits</DialogTitle>
                            <p className="text-[#64748B] text-sm mt-1">Independent verifications by top-tier security firms.</p>
                          </div>
                        </div>
                      </DialogHeader>

                      <div className="space-y-4 relative z-10">
                        {auditReports.map((report) => (
                          <div key={report.id} className="flex items-center justify-between p-4 rounded-xl bg-[#1E293B] border border-[#334155] hover:border-[#10B981]/50 transition-colors group">
                            <div className="flex items-center gap-4">
                              <div className="h-10 w-10 rounded-lg bg-[#334155] flex items-center justify-center">
                                <FileText className="w-5 h-5 text-[#94A3B8] group-hover:text-[#10B981] transition-colors" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-[#F8FAFC]">{report.title}</h4>
                                <div className="flex items-center gap-3 text-xs text-[#94A3B8] mt-1">
                                  <span>{report.id}</span>
                                  <span>•</span>
                                  <span>{report.auditor}</span>
                                  <span>•</span>
                                  <span>{report.date}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="px-2 py-1 rounded text-xs font-bold bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30">
                                {report.status}
                              </span>
                              <button className="p-2 rounded-lg hover:bg-[#334155] text-[#94A3B8] hover:text-white transition-colors">
                                <Download className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 pt-6 border-t border-[#334155] flex justify-between items-center text-xs text-[#64748B] font-mono">
                         <span>TOTAL AUDITS: 14</span>
                         <span>LAST VERIFIED: 2025-12-01</span>
                      </div>
                    </div>
                    <DialogClose className="absolute right-4 top-4 rounded-full p-2 hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                      <X className="w-5 h-5" />
                      <span className="sr-only">Close</span>
                    </DialogClose>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>

          <div className="relative sticky top-24">
            <div className="bg-gradient-to-br from-[#111827] to-[#1E293B] rounded-3xl p-12 relative overflow-hidden border border-[#10B981]/20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#10B981]/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-3xl"></div>

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
                    className="group flex items-center justify-between gap-4 bg-[#0F172A]/50 p-4 rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-[#1E293B] hover:translate-x-2 border border-transparent hover:border-[#10B981]/30 cursor-default"
                    style={{
                      animation: `slideInRight 0.5s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#10B981] to-[#3B82F6] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-lg font-medium group-hover:text-[#10B981] transition-colors">{item.text}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs font-mono text-[#10B981]">{item.status}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></div>
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
