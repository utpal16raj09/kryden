export default function ValueProp() {
  return (
    <section id="assurance" className="py-24 px-6 bg-gradient-to-b from-[#F8F5EE] to-[#E8E5DE]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-8 leading-tight">
          Don't encrypt, just{' '}
          <span className="relative inline-block text-[#FF0099]">
            transform
            <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12">
              <path
                d="M0,6 Q50,0 100,6 T200,6"
                fill="none"
                stroke="#FF0099"
                strokeWidth="3"
                className="animate-draw-line"
              />
            </svg>
          </span>
        </h2>

        <p className="text-xl text-[#6C757D] max-w-3xl mx-auto mb-10 leading-relaxed">
          The Post-Quantum AI that turns sensitive data into clear,{' '}
          <strong>computationally irreversible</strong> hash-trees in every infrastructure layer.
        </p>

        <button className="bg-[#00FFFF] text-[#1A1A1A] px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-[#FF0099] hover:text-white hover:shadow-[0_0_30px_rgba(255,0,153,0.7)] hover:scale-105 mb-6">
          Initiate Strategic Briefing
        </button>

        <p className="text-sm text-[#6C757D] font-medium">
          Certified for Finance, Defense, and National Infrastructure
        </p>

        <div className="mt-16 relative h-24 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-scroll-left whitespace-nowrap text-sm font-mono text-[#1E3F3A]/40">
              PROTOCOL V3.1 // LATTICE_KEY_GEN_SUCCESS // ENTROPY_POOL_CAPACITY_AT_99% // AUDIT_TRAIL_COMMITTED_TO_CHAIN
              // ZERO_LEAKAGE_RISK // NODE_VALIDATION_COMPLETE // FORMAL_VERIFICATION_COMPLETE //
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center mt-12">
            <div className="animate-scroll-right whitespace-nowrap text-sm font-mono text-[#1E3F3A]/40">
              QUANTUM_RESISTANT // LATTICE_BASED_ENCRYPTION // POST_QUANTUM_READY // CRYPTOGRAPHIC_FUSION //
              MULTI_FACTOR_ASSURANCE // IMMUTABLE_INTEGRITY //
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
