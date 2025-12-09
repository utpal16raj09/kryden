import { useRef, useState, useEffect } from 'react';

interface Card3DProps {
  delay?: number;
}

export default function Card3D({ delay = 0 }: Card3DProps) {
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
            ? '0 0 40px rgba(0, 255, 255, 0.6), 0 25px 50px rgba(0, 0, 0, 0.8)'
            : '0 15px 35px rgba(0, 0, 0, 0.6)',
        transition: 'box-shadow 0.4s ease, transform 0.3s ease',
      }}
    >
      <div
        className="relative z-10 transition-transform duration-300"
        style={{ transform: `translateZ(${rotation.x !== 0 || rotation.y !== 0 ? '20px' : '0'})` }}
      >
        <p className="text-sm text-gray-400 mb-2 font-mono">Geometric quantum structure</p>
        <p className="text-lg font-semibold text-[#F8F5EE] mb-8">QuantumShield Lattice</p>
        <h2
          className="text-7xl font-serif font-bold text-[#00FFFF] mb-6 uppercase"
          style={{
            textShadow: '0 0 15px rgba(0, 255, 255, 0.8), 0 0 30px rgba(0, 255, 255, 0.5)',
          }}
        >
          Immutable
        </h2>
        <div
          className="w-8 h-8 border-4 border-[#00FFFF] rounded-full"
          style={{ boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)' }}
        ></div>
      </div>

      <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-dashed border-[#FF0099]/20 rounded-full -z-0 animate-spin-slow"></div>

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
}
