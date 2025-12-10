export function KrydenLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex items-center gap-3 select-none ${compact ? "scale-90" : ""}`}>
      
      {/* Lattice Glyph */}
      <div className={`relative ${compact ? "w-8 h-8" : "w-10 h-10"}`}>
        
        {/* Outer lattice frame */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          stroke="#0F172A"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        >
          {/* Square lattice frame */}
          <path d="M20 20 L80 20 L80 80 L20 80 Z" />
          
          {/* Diagonal lattice bonds */}
          <path d="M20 20 L80 80" stroke="#677da6" strokeWidth="5" />
          <path d="M80 20 L20 80" stroke="#677da6" strokeWidth="5" />

          {/* Inner lattice core (cryptographic center) */}
          <circle cx="50" cy="50" r="12" fill="#0F172A" />
        </svg>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col leading-tight">
        <span className="font-mono text-xl font-semibold text-[#0F172A] tracking-tight">
          KRYDEN
        </span>
      </div>
    </div>
  );
}
