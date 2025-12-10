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

export default function About() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = [
    {
      label: 'PQC',
      title: 'Post-Quantum Cryptography',
      desc: 'Our PQC suite uses hardened lattice-based constructs (LWE, SIS) with NIST-standardized CRYSTALS-Kyber and Dilithium for quantum-safe key exchange and signatures.',
    },
    {
      label: 'ZKP',
      title: 'Zero-Knowledge Proofs',
      desc: 'zk-SNARKs and STARKs enable authentication and computation validation without revealing underlying data, ensuring airtight privacy.',
    },
    {
      label: 'DLT',
      title: 'Distributed Ledger Integration',
      desc: 'We anchor system state in a DAG-backed ledger providing immutable audit trails and eliminating single points of failure.',
    },
    {
      label: 'Formal Verification',
      title: 'Mathematically Proven Correctness',
      desc: 'Using formal methods, we mathematically validate core components to ensure correctness across all possible execution paths.',
    },
    {
      label: 'Transparency',
      title: 'Open Cryptographic Design',
      desc: 'All primitives and implementations are publicly documented—security stems from mathematics, not obscurity.',
    },
    {
      label: 'Precision Engineering',
      title: 'High-Assurance Infrastructure',
      desc: 'We apply aerospace-grade reliability engineering, deterministic execution, and fault tolerance for near-zero downtime.',
    },
  ];

  const auditReports = [
    { id: 'AUD-2024-001', title: 'Kyber-1024 Implementation Audit', auditor: 'NCC Group', date: '2024-03-15', status: 'PASSED' },
    { id: 'AUD-2024-002', title: 'Zero-Knowledge Circuit Constraints', auditor: 'Trail of Bits', date: '2024-04-02', status: 'PASSED' },
    { id: 'AUD-2024-003', title: 'Smart Contract Formal Verification', auditor: 'CertiK', date: '2024-05-20', status: 'PASSED' },
    { id: 'AUD-2024-004', title: 'Consensus Stability Analysis', auditor: 'Sigma Prime', date: '2024-06-10', status: 'PASSED' },
  ];

  return (
    <section id="mission" className="py-24 px-6 bg-[#171717] text-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT COLUMN */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight text-white">
              Engineering the Future of Trust
            </h2>

            <div className="flex flex-wrap gap-3 mb-10">
              {tags.map((tag, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTag(activeTag === tag.label ? null : tag.label)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 border ${activeTag === tag.label
                      ? 'bg-[#9bb3e0] text-black border-[#9bb3e0] shadow-[0_0_20px_rgba(104,126,179,0.4)]'
                      : 'bg-[#0F0F0F] text-gray-300 border-transparent hover:bg-[#1A1A1A] hover:text-[#9bb3e0] hover:border-[#9bb3e0]/40'
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
                  <div className="bg-[#111111]/80 border-l-4 border-[#9bb3e0] p-6 rounded-r-xl backdrop-blur-sm">
                    <h4 className="text-[#9bb3e0] font-bold text-lg mb-2">
                      {tags.find(t => t.label === activeTag)?.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {tags.find(t => t.label === activeTag)?.desc}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Philosophy */}
            <div className="bg-[#0A0A0A] rounded-2xl p-8 border border-[#9bb3e0]/25">
              <h3 className="text-2xl font-semibold mb-4 text-[#9bb3e0]">Core Protocol Philosophy</h3>

              <p className="text-gray-400 leading-relaxed mb-8">
                Our mission is to engineer trust at a level resilient far beyond today's cryptographic and computational threat models.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 bg-[#9bb3e0] text-black px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-white hover:text-black">
                  View Core Team Profiles
                </button>

                <Dialog>
                  <DialogTrigger asChild>
                    <button className="flex items-center justify-center gap-2 bg-transparent border-2 border-[#9bb3e0] text-[#9bb3e0] px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-[#9bb3e0] hover:text-black">
                      Formal Audit Reports
                    </button>
                  </DialogTrigger>

                  <DialogContent className="max-w-3xl bg-black border border-[#9bb3e0]/40 text-gray-100 sm:rounded-3xl p-0 overflow-hidden shadow-2xl">
                    <div className="p-10 relative">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-[#9bb3e0]/15 rounded-full blur-3xl"></div>

                      <DialogHeader className="mb-8 relative z-10">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-[#9bb3e0]/20 rounded-xl">
                            <FileCheck className="w-8 h-8 text-[#9bb3e0]" />
                          </div>
                          <div>
                            <DialogTitle className="text-2xl font-bold font-serif text-white">Security Audits</DialogTitle>
                            <p className="text-gray-500 text-sm mt-1">Independent verification by global security firms.</p>
                          </div>
                        </div>
                      </DialogHeader>

                      <div className="space-y-4 relative z-10">
                        {auditReports.map((report) => (
                          <div key={report.id} className="flex items-center justify-between p-4 rounded-xl bg-[#111111] border border-[#1A1A1A] hover:border-[#9bb3e0]/40 transition-colors">
                            <div className="flex items-center gap-4">
                              <div className="h-10 w-10 rounded-lg bg-[#1A1A1A] flex items-center justify-center">
                                <FileText className="w-5 h-5 text-gray-500 group-hover:text-[#9bb3e0] transition-colors" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-white">{report.title}</h4>
                                <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                                  <span>{report.id}</span> •
                                  <span>{report.auditor}</span> •
                                  <span>{report.date}</span>
                                </div>
                              </div>
                            </div>

                            <span className="px-2 py-1 rounded text-xs font-bold bg-[#9bb3e0]/25 text-[#9bb3e0] border border-[#9bb3e0]/40">
                              {report.status}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 pt-6 border-t border-[#1A1A1A] flex justify-between items-center text-xs text-gray-600 font-mono">
                        <span>TOTAL AUDITS: 14</span>
                        <span>LAST VERIFIED: 2025-12-01</span>
                      </div>
                    </div>

                    <DialogClose className="absolute right-4 top-4 rounded-full p-2 hover:bg-white/10 text-gray-500 hover:text-white">
                      <X className="w-5 h-5" />
                    </DialogClose>
                  </DialogContent>
                </Dialog>

              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative sticky top-24">
            <div className="bg-gradient-to-br from-[#0A0A0A] to-[#1A1A1A] rounded-3xl p-12 border border-[#9bb3e0]/25 relative overflow-hidden">

              <div className="absolute top-0 right-0 w-64 h-64 bg-[#9bb3e0]/20 rounded-full blur-3xl opacity-40"></div>

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
                    className="group flex items-center justify-between gap-4 bg-[#0A0A0A]/70 p-4 rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-[#1A1A1A] hover:translate-x-2 border border-transparent hover:border-[#9bb3e0]/40"
                    style={{ animation: `slideInRight 0.5s ease-out ${index * 0.1}s both` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#9bb3e0] to-[#4F5F85] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <item.icon className="w-6 h-6 text-black" />
                      </div>
                      <span className="text-lg font-medium group-hover:text-[#9bb3e0] transition-colors">
                        {item.text}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs font-mono text-[#9bb3e0]">{item.status}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#9bb3e0] animate-pulse"></div>
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
