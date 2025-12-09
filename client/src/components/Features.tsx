import { useState } from 'react';
import { 
  Shield, 
  EyeOff, 
  Network, 
  CheckCircle2, 
  FileCode, 
  Cpu, 
  X,
  ArrowRight
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Features() {
  const features = [
    {
      id: "pqc",
      icon: <Shield className="w-8 h-8" />,
      title: 'PQC (Post-Quantum Cryptography)',
      shortDesc: 'Future-proof security against quantum threats.',
      content: (
        <div className="space-y-6 font-sans text-lg text-gray-300">
          <p>
            <strong className="text-[#00FFFF] block mb-2 text-xl">Lattice-Based Constructs</strong>
            Utilizing high-dimensional lattice problems (LWE, SIS) that remain computationally hard even for quantum computers.
          </p>
          <p>
            <strong className="text-[#00FFFF] block mb-2 text-xl">Quantum-Resistant Primitives</strong>
            Implementation of NIST-standardized algorithms (CRYSTALS-Kyber, Dilithium) to replace classical RSA/ECC.
          </p>
          <p>
            <strong className="text-[#00FFFF] block mb-2 text-xl">Attack Mitigation</strong>
            Specifically engineered to neutralize Shor’s algorithm (which breaks factorization) and Grover’s algorithm (which speeds up search), ensuring long-term data confidentiality.
          </p>
        </div>
      )
    },
    {
      id: "zkp",
      icon: <EyeOff className="w-8 h-8" />,
      title: 'ZKP (Zero-Knowledge Proofs)',
      shortDesc: 'Verify truth without revealing data.',
      content: (
        <div className="space-y-6 font-sans text-lg text-gray-300">
          <p>
            <strong className="text-[#00FFFF] block mb-2 text-xl">Proof Systems</strong>
            Leveraging zk-SNARKs and STARKs to enable succinct, non-interactive verification of computation correctness.
          </p>
          <p>
            <strong className="text-[#00FFFF] block mb-2 text-xl">Privacy-Preserving Auth</strong>
            Allowing users to prove identity or authorization (e.g., age, balance, membership) without exposing the underlying sensitive attributes.
          </p>
          <p>
            <strong className="text-[#00FFFF] block mb-2 text-xl">Trustless Verification Flow</strong>
            Decoupling the prover from the verifier, enabling mathematical certainty of validity with zero information leakage.
          </p>
        </div>
      )
    },
    {
      id: "dlt",
      icon: <Network className="w-8 h-8" />,
      title: 'DLT Integration',
      shortDesc: 'Distributed immutable ledger systems.',
      content: (
        <div className="space-y-6 font-sans text-lg text-gray-300">
          <p>
            <strong className="text-[#00FFFF] block mb-2 text-xl">Distributed Structures</strong>
            Utilizing DAG (Directed Acyclic Graph) or Block-lattice architectures for high-throughput, asynchronous consensus.
          </p>
          <p>
            <strong className="text-[#00FFFF] block mb-2 text-xl">Auditability & Tamper-Evidence</strong>
            Every state transition is cryptographically linked, creating an immutable history that is publicly verifiable and resistant to revision.
          </p>
          <p>
            <strong className="text-[#00FFFF] block mb-2 text-xl">Cryptographic Anchoring</strong>
            Rooting system state in a decentralized substrate to eliminate single points of failure and central authority dependence.
          </p>
        </div>
      )
    },
    {
      id: "formal-verification",
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: 'Formal Verification',
      shortDesc: 'Mathematically proven correctness.',
      content: (
        <div className="space-y-6 font-sans text-lg text-gray-300">
          <p>
            <strong className="text-[#00FFFF] block mb-2 text-xl">Provable Correctness</strong>
            Using mathematical methods to prove that the system implementation adheres strictly to its formal specification, eliminating entire classes of bugs.
          </p>
          <p>
            <strong className="text-[#00FFFF] block mb-2 text-xl">Model Checking</strong>
            Exhaustively exploring the state space of critical components to ensure invariants hold under all possible execution paths.
          </p>
          <p>
            <strong className="text-[#00FFFF] block mb-2 text-xl">Validation of Security Logic</strong>
            Rigorous certification of core cryptographic protocol logic, ensuring no edge cases or logic flaws exist in the trusted computing base.
          </p>
        </div>
      )
    },
    {
      id: "transparency",
      icon: <FileCode className="w-8 h-8" />,
      title: 'Cryptographic Transparency',
      shortDesc: 'Open verifiability, no black boxes.',
      content: (
        <div className="space-y-6 font-sans text-lg text-gray-300">
          <p>
            <strong className="text-[#00FFFF] block mb-2 text-xl">Open Specification</strong>
            All protocols and formats are publicly documented, allowing independent security analysis and implementation.
          </p>
          <p>
            <strong className="text-[#00FFFF] block mb-2 text-xl">Deterministic Builds</strong>
            Ensuring that the executable code running in production exactly matches the open-source code through reproducible build processes.
          </p>
          <p>
            <strong className="text-[#00FFFF] block mb-2 text-xl">No Security-by-Obscurity</strong>
            Relying solely on the strength of keys and algorithms, not on hiding implementation details or secret mechanisms.
          </p>
        </div>
      )
    },
    {
      id: "precision",
      icon: <Cpu className="w-8 h-8" />,
      title: 'Precision Engineering',
      shortDesc: 'High-assurance reliability principles.',
      content: (
        <div className="space-y-6 font-sans text-lg text-gray-300">
          <p>
            <strong className="text-[#00FFFF] block mb-2 text-xl">Reliability Engineering</strong>
            Systems designed with redundancy, fail-safe defaults, and graceful degradation to maintain integrity under stress.
          </p>
          <p>
            <strong className="text-[#00FFFF] block mb-2 text-xl">Deterministic Execution</strong>
            Eliminating undefined behavior and race conditions to ensure that the system behaves predictably in every run.
          </p>
          <p>
            <strong className="text-[#00FFFF] block mb-2 text-xl">High-Assurance Infrastructure</strong>
            Utilizing type-safe languages and memory-safe runtimes to enforce structural guarantees at the compiler level.
          </p>
        </div>
      )
    }
  ];

  return (
    <section id="protocol" className="py-24 px-6 bg-[#1A1A1A] text-[#F8F5EE] rounded-3xl my-12 mx-6 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00FFFF]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF0099]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
            <span className="px-4 py-2 bg-[#00FFFF]/20 text-[#00FFFF] rounded-xl text-sm font-mono border border-[#00FFFF]/30">
              SECURE
            </span>
            <span className="px-4 py-2 bg-[#FF0099]/20 text-[#FF0099] rounded-xl text-sm font-mono border border-[#FF0099]/30">
              VERIFIED
            </span>
            <span className="px-4 py-2 bg-[#00FFFF]/20 text-[#00FFFF] rounded-xl text-sm font-mono border border-[#00FFFF]/30">
              QUANTUM-SAFE
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
            Advanced Protocol Specifications
          </h2>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Explore the six pillars of our next-generation security architecture. Click any module to inspect technical details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Dialog key={feature.id}>
              <DialogTrigger asChild>
                <button
                  className="group text-left h-full w-full bg-[#2A2A2A] p-8 rounded-2xl transition-all duration-500 hover:bg-[#1E3F3A] hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,255,0.3)] border border-transparent hover:border-[#00FFFF]/30 flex flex-col"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00FFFF] to-[#FF0099] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-[#00FFFF] group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                    {feature.shortDesc}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm font-medium text-[#FF0099] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span>View Technical Specs</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl bg-[#1A1A1A] border border-[#00FFFF]/30 text-[#F8F5EE] sm:rounded-3xl p-0 overflow-hidden shadow-[0_0_100px_rgba(0,255,255,0.2)]">
                <div className="relative p-8 md:p-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FFFF]/10 rounded-full blur-3xl -z-0"></div>
                  
                  <DialogHeader className="mb-8 relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#00FFFF] to-[#FF0099] rounded-xl flex items-center justify-center text-white shadow-lg">
                        {feature.icon}
                      </div>
                      <div className="flex flex-col">
                        <DialogTitle className="text-2xl md:text-3xl font-serif text-white">
                          {feature.title}
                        </DialogTitle>
                        <span className="text-[#00FFFF] font-mono text-sm mt-1">MODULE_ID: {feature.id.toUpperCase()}</span>
                      </div>
                    </div>
                  </DialogHeader>

                  <ScrollArea className="max-h-[60vh] pr-4 relative z-10">
                    {feature.content}
                  </ScrollArea>

                  <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center text-xs font-mono text-gray-500">
                    <span>STATUS: VERIFIED</span>
                    <span>ENCRYPTION: AES-256-GCM</span>
                  </div>
                </div>
                <DialogClose className="absolute right-4 top-4 rounded-full p-2 hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                  <X className="w-5 h-5" />
                  <span className="sr-only">Close</span>
                </DialogClose>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
