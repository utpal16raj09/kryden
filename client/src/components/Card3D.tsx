import { useRef, useState, useEffect } from 'react';
import { Activity, ShieldCheck, Zap, Server } from 'lucide-react';

interface Card3DProps {
  delay?: number;
  type?: 'network' | 'security';
}

export default function Card3D({ delay = 0, type = 'network' }: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  const isNetwork = type === 'network';
  const primaryColor = isNetwork ? '#00FFFF' : '#FF0099';
  const secondaryColor = isNetwork ? '#FF0099' : '#00FFFF';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full max-w-md h-[450px] bg-[#1A1A1A] rounded-3xl p-10 overflow-hidden cursor-pointer transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(${
          rotation.x !== 0 || rotation.y !== 0 ? '40px' : '0'
        })`,
        boxShadow:
          rotation.x !== 0 || rotation.y !== 0
            ? `0 0 40px ${primaryColor}60, 0 25px 50px rgba(0, 0, 0, 0.8)`
            : '0 15px 35px rgba(0, 0, 0, 0.6)',
        transition: 'box-shadow 0.4s ease, transform 0.3s ease',
      }}
    >
      <div
        className="relative z-10 transition-transform duration-300 h-full flex flex-col justify-between"
        style={{ transform: `translateZ(${rotation.x !== 0 || rotation.y !== 0 ? '20px' : '0'})` }}
      >
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-2 rounded-lg bg-[${primaryColor}]/10 border border-[${primaryColor}]/30`}>
              {isNetwork ? <Activity color={primaryColor} /> : <ShieldCheck color={primaryColor} />}
            </div>
            <p className="text-sm text-gray-400 font-mono tracking-wider">
              {isNetwork ? 'LIVE_METRICS' : 'SYSTEM_STATUS'}
            </p>
          </div>
          
          <h2
            className={`text-4xl font-serif font-bold text-[${primaryColor}] mb-2`}
            style={{ color: primaryColor }}
          >
            {isNetwork ? 'Mainnet' : 'Secure'}
          </h2>
          <div className="flex items-center gap-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-gray-300 font-mono text-sm">OPERATIONAL</span>
          </div>

          <div className="space-y-4">
            <div className="bg-black/30 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-1">
                <span className="text-gray-500 text-xs font-mono">{isNetwork ? 'TPS' : 'THREATS BLOCKED'}</span>
                <Zap className="w-3 h-3 text-yellow-500" />
              </div>
              <div className="text-2xl font-bold text-white font-mono">
                {isNetwork ? '52,941' : '0'}
              </div>
            </div>

            <div className="bg-black/30 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-1">
                <span className="text-gray-500 text-xs font-mono">{isNetwork ? 'BLOCK HEIGHT' : 'ENCRYPTION'}</span>
                <Server className="w-3 h-3 text-purple-500" />
              </div>
              <div className="text-xl font-bold text-white font-mono">
                {isNetwork ? '#14,203,112' : 'LATTICE-KYBER'}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto">
           <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
             <div 
               className="h-full bg-gradient-to-r from-transparent to-white/50 animate-progress"
               style={{ width: '60%', backgroundColor: primaryColor }}
             />
           </div>
           <div className="flex justify-between mt-2 text-[10px] text-gray-500 font-mono">
             <span>LOAD</span>
             <span>{isNetwork ? '42%' : '99.9%'}</span>
           </div>
        </div>
      </div>

      <div className={`absolute bottom-10 right-10 w-32 h-32 border-4 border-dashed border-[${secondaryColor}]/20 rounded-full -z-0 animate-spin-slow`} style={{ borderColor: `${secondaryColor}20` }}></div>

      <div className={`absolute inset-0 bg-gradient-to-br from-[${primaryColor}]/10 via-transparent to-[${secondaryColor}]/10 opacity-0 hover:opacity-100 transition-opacity duration-500`}></div>
    </div>
  );
}
