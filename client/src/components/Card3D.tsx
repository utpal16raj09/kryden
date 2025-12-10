import { useRef, useState, useEffect } from 'react';
import { Activity, ShieldCheck, Zap, Server, Terminal, Wifi } from 'lucide-react';

interface Card3DProps {
  delay?: number;
  type?: 'network' | 'security';
}

export default function Card3D({ delay = 0, type = 'network' }: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  // Simulate live logs
  useEffect(() => {
    if (!isVisible) return;

    const networkLogs = [
      "Block 0x9af2…e4c1 propagated — 48ms",
      "Peer up: 192.168.1.104 — RTT 22ms",
      "State sync: 99.97%",
      "Tx 0x12ab…7c confirmed — 12ms",
      "Mempool: 420 tx"
    ];

    const securityLogs = [
      "Kyber-1024 handshake ok",
      "Intrusion blocked: 84.22.19.7",
      "Key rotation in 20min",
      "Integrity check SHA3-512 ok",
      "ZKP validated — id zkp_4421"
    ];


    const sourceLogs = type === 'network' ? networkLogs : securityLogs;

    const interval = setInterval(() => {
      const randomLog = sourceLogs[Math.floor(Math.random() * sourceLogs.length)];
      const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });
      setLogs(prev => [`[${timestamp}] ${randomLog}`, ...prev].slice(0, 6));
    }, 1500);

    return () => clearInterval(interval);
  }, [isVisible, type]);

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
  const primaryColor = isNetwork ? '#10B981' : '#3B82F6';
  const secondaryColor = isNetwork ? '#000000ff' : '#10B981';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full max-w-md h-[500px] bg-[#1A1A1A] rounded-3xl p-8 overflow-hidden cursor-pointer transition-all duration-700 group mt-12 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(${rotation.x !== 0 || rotation.y !== 0 ? '40px' : '0'
          })`,
        boxShadow:
          rotation.x !== 0 || rotation.y !== 0
            ? `0 0 40px ${primaryColor}60, 0 25px 50px rgba(0, 0, 0, 0.8)`
            : '0 15px 35px rgba(0, 0, 0, 0.6)',
        transition: 'box-shadow 0.4s ease, transform 0.3s ease',
      }}
    >
      <div
        className="relative z-10 transition-transform duration-300 h-full flex flex-col"
        style={{ transform: `translateZ(${rotation.x !== 0 || rotation.y !== 0 ? '20px' : '0'})` }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg bg-[${primaryColor}]/10 border border-[${primaryColor}]/30`}>
              {isNetwork ? <Activity color={primaryColor} size={20} /> : <ShieldCheck color={primaryColor} size={20} />}
            </div>
            <div>
              <p className="text-xs text-gray-400 font-mono tracking-wider">SYSTEM_MONITOR</p>
              <h2 className={`text-xl font-bold text-[${primaryColor}]`} style={{ color: primaryColor }}>
                {isNetwork ? 'Network Node' : 'Sentinel Guard'}
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-green-500 font-mono text-[10px] font-bold">ONLINE</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-black/40 p-3 rounded-xl border border-white/5 backdrop-blur-sm group-hover:border-white/10 transition-colors">
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-500 text-[10px] font-mono">{isNetwork ? 'LATENCY' : 'THREAT LEVEL'}</span>
              <Wifi className="w-3 h-3 text-gray-600" />
            </div>
            <div className="text-lg font-bold text-white font-mono">
              {isNetwork ? '12ms' : 'LOW'}
            </div>
          </div>
          <div className="bg-black/40 p-3 rounded-xl border border-white/5 backdrop-blur-sm group-hover:border-white/10 transition-colors">
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-500 text-[10px] font-mono">{isNetwork ? 'PEERS' : 'ENCRYPTION'}</span>
              <Server className="w-3 h-3 text-gray-600" />
            </div>
            <div className="text-lg font-bold text-white font-mono">
              {isNetwork ? '842' : 'AES-256'}
            </div>
          </div>
        </div>

        {/* Terminal/Logs Area */}
        <div className="flex-1 bg-[#000000] rounded-xl border border-white/5 p-4 font-mono text-[10px] overflow-hidden relative group-hover:border-[${primaryColor}]/30 transition-colors" style={{ borderColor: rotation.x !== 0 ? `${primaryColor}40` : '' }}>
          <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-[${primaryColor}]/5 to-transparent pointer-events-none" />
          <div className="flex items-center gap-2 mb-3 text-gray-500 border-b border-white/5 pb-2">
            <Terminal size={10} />
            <span>/var/log/{isNetwork ? 'net' : 'auth'}.log</span>
          </div>
          <div className="space-y-2">
            {logs.map((log, i) => (
              <div key={i} className="flex gap-2 animate-in fade-in slide-in-from-left-2 duration-300">
                <span className="text-gray-600 shrink-0">{log.split(']')[0]}]</span>
                <span className={i === 0 ? `text-[${primaryColor}] font-bold` : 'text-gray-400'} style={{ color: i === 0 ? primaryColor : '' }}>
                  {log.split(']')[1]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`absolute bottom-10 right-10 w-32 h-32 border-4 border-dashed border-[${secondaryColor}]/20 rounded-full -z-0 animate-spin-slow`} style={{ borderColor: `${secondaryColor}20` }}></div>

      <div className={`absolute inset-0 bg-gradient-to-br from-[${primaryColor}]/10 via-transparent to-[${secondaryColor}]/10 opacity-0 hover:opacity-100 transition-opacity duration-500`}></div>
    </div>
  );
}
