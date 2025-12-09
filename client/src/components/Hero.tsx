import { Key, FileText } from 'lucide-react';
import Card3D from './Card3D';

export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-center mb-8 leading-tight">
          Quantum-Resistant.{' '}
          <span className="relative inline-block">
            <span className="relative z-10">4x stronger</span>
            <span className="absolute bottom-2 left-0 w-full h-3 bg-[#FF0099] -z-0"></span>
          </span>{' '}
          than RSA.
        </h1>

        <p className="text-lg md:text-xl text-[#6C757D] text-center max-w-4xl mx-auto mb-12 leading-relaxed">
          After decades of relying on flawed primitives, <strong>Lattice-Based Cryptography</strong> is finally here.
          Deploy a security layer designed to fundamentally defy Shor's algorithm, securing your data against all theoretical threats.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button className="group flex items-center gap-2 bg-[#00FFFF] text-[#1A1A1A] px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-[#FF0099] hover:text-white hover:shadow-[0_0_30px_rgba(255,0,153,0.7)] hover:scale-105">
            <Key className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            Request Protocol Access
          </button>
          <button className="group flex items-center gap-2 bg-transparent border-2 border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:bg-[#1A1A1A] hover:text-[#F8F5EE] hover:scale-105">
            <FileText className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            Review Whitepaper
          </button>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 perspective-1000">
          <Card3D type="network" />
          <Card3D delay={200} type="security" />
        </div>
      </div>
    </section>
  );
}
