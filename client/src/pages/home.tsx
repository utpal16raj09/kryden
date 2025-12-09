import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  EyeOff, 
  Network, 
  CheckCircle2, 
  FileCode, 
  Cpu,
  Moon,
  Sun,
  Terminal,
  Activity,
  Lock,
  ChevronRight,
  X
} from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

// --- Content Data ---

const FEATURES = [
  {
    id: "pqc",
    title: "Post-Quantum Cryptography",
    icon: Shield,
    shortDesc: "Future-proof security against quantum threats.",
    content: (
      <div className="space-y-4 font-mono text-sm leading-relaxed">
        <p>
          <strong className="text-primary">Lattice-Based Constructs:</strong> Utilizing high-dimensional lattice problems (LWE, SIS) that remain computationally hard even for quantum computers.
        </p>
        <p>
          <strong className="text-primary">Quantum-Resistant Primitives:</strong> Implementation of NIST-standardized algorithms (CRYSTALS-Kyber, Dilithium) to replace classical RSA/ECC.
        </p>
        <p>
          <strong className="text-primary">Attack Mitigation:</strong> Specifically engineered to neutralize Shor’s algorithm (which breaks factorization) and Grover’s algorithm (which speeds up search), ensuring long-term data confidentiality.
        </p>
      </div>
    ),
  },
  {
    id: "zkp",
    title: "Zero-Knowledge Proofs",
    icon: EyeOff,
    shortDesc: "Verify truth without revealing data.",
    content: (
      <div className="space-y-4 font-mono text-sm leading-relaxed">
        <p>
          <strong className="text-primary">Proof Systems:</strong> Leveraging zk-SNARKs and STARKs to enable succinct, non-interactive verification of computation correctness.
        </p>
        <p>
          <strong className="text-primary">Privacy-Preserving Auth:</strong> Allowing users to prove identity or authorization (e.g., age, balance, membership) without exposing the underlying sensitive attributes.
        </p>
        <p>
          <strong className="text-primary">Trustless Verification Flow:</strong> Decoupling the prover from the verifier, enabling mathematical certainty of validity with zero information leakage.
        </p>
      </div>
    ),
  },
  {
    id: "dlt",
    title: "DLT Integration",
    icon: Network,
    shortDesc: "Distributed immutable ledger systems.",
    content: (
      <div className="space-y-4 font-mono text-sm leading-relaxed">
        <p>
          <strong className="text-primary">Distributed Structures:</strong> Utilizing DAG (Directed Acyclic Graph) or Block-lattice architectures for high-throughput, asynchronous consensus.
        </p>
        <p>
          <strong className="text-primary">Auditability & Tamper-Evidence:</strong> Every state transition is cryptographically linked, creating an immutable history that is publicly verifiable and resistant to revision.
        </p>
        <p>
          <strong className="text-primary">Cryptographic Anchoring:</strong> Rooting system state in a decentralized substrate to eliminate single points of failure and central authority dependence.
        </p>
      </div>
    ),
  },
  {
    id: "formal-verification",
    title: "Formal Verification",
    icon: CheckCircle2,
    shortDesc: "Mathematically proven correctness.",
    content: (
      <div className="space-y-4 font-mono text-sm leading-relaxed">
        <p>
          <strong className="text-primary">Provable Correctness:</strong> Using mathematical methods to prove that the system implementation adheres strictly to its formal specification, eliminating entire classes of bugs.
        </p>
        <p>
          <strong className="text-primary">Model Checking:</strong> Exhaustively exploring the state space of critical components to ensure invariants hold under all possible execution paths.
        </p>
        <p>
          <strong className="text-primary">Validation of Security Logic:</strong> rigorous certification of core cryptographic protocol logic, ensuring no edge cases or logic flaws exist in the trusted computing base.
        </p>
      </div>
    ),
  },
  {
    id: "transparency",
    title: "Cryptographic Transparency",
    icon: FileCode,
    shortDesc: "Open verifiability, no black boxes.",
    content: (
      <div className="space-y-4 font-mono text-sm leading-relaxed">
        <p>
          <strong className="text-primary">Open Specification:</strong> All protocols and formats are publicly documented, allowing independent security analysis and implementation.
        </p>
        <p>
          <strong className="text-primary">Deterministic Builds:</strong> Ensuring that the executable code running in production exactly matches the open-source code through reproducible build processes.
        </p>
        <p>
          <strong className="text-primary">No Security-by-Obscurity:</strong> Relying solely on the strength of keys and algorithms, not on hiding implementation details or secret mechanisms.
        </p>
      </div>
    ),
  },
  {
    id: "precision",
    title: "Precision Engineering",
    icon: Cpu,
    shortDesc: "High-assurance reliability principles.",
    content: (
      <div className="space-y-4 font-mono text-sm leading-relaxed">
        <p>
          <strong className="text-primary">Reliability Engineering:</strong> Systems designed with redundancy, fail-safe defaults, and graceful degradation to maintain integrity under stress.
        </p>
        <p>
          <strong className="text-primary">Deterministic Execution:</strong> Eliminating undefined behavior and race conditions to ensure that the system behaves predictably in every run.
        </p>
        <p>
          <strong className="text-primary">High-Assurance Infrastructure:</strong> Utilizing type-safe languages and memory-safe runtimes to enforce structural guarantees at the compiler level.
        </p>
      </div>
    ),
  },
];

// --- Components ---

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full w-10 h-10 border border-border/50 hover:bg-accent/50 transition-colors"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

function StatusBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono tracking-wider">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
      </span>
      SYSTEM ONLINE
    </div>
  );
}

function FeatureCard({ feature, index }: { feature: typeof FEATURES[0], index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
          <div className="h-full flex flex-col p-6 rounded-xl border border-border/60 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </div>
            
            <h3 className="text-lg font-semibold mb-2 tracking-tight group-hover:text-primary transition-colors">
              {feature.title}
            </h3>
            
            <p className="text-muted-foreground text-sm leading-relaxed">
              {feature.shortDesc}
            </p>

            <div className="mt-auto pt-4 flex items-center gap-2 text-xs font-mono text-muted-foreground/60">
              <Terminal className="w-3 h-3" />
              <span>MODULE_0{index + 1}</span>
            </div>
          </div>
        </motion.div>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md border-primary/20 bg-background/95 backdrop-blur-xl">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <feature.icon className="w-8 h-8" />
            </div>
            <div>
              <DialogTitle className="text-xl font-bold tracking-tight">
                {feature.title}
              </DialogTitle>
              <DialogDescription className="font-mono text-xs mt-1 text-primary/80">
                SECURE_PROTOCOL_VERIFIED
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        
        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="py-2">
            {feature.content}
          </div>
        </ScrollArea>
        
        <div className="mt-4 pt-4 border-t border-border flex justify-between items-center text-xs text-muted-foreground font-mono">
          <div className="flex items-center gap-1">
            <Lock className="w-3 h-3" />
            <span>ENCRYPTED</span>
          </div>
          <span>ID: {feature.id.toUpperCase()}_V2.0</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
           style={{ 
             backgroundImage: "linear-gradient(#888 1px, transparent 1px), linear-gradient(90deg, #888 1px, transparent 1px)", 
             backgroundSize: "40px 40px" 
           }} 
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Activity className="w-6 h-6 text-primary" />
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight leading-none">NEXUS</span>
                <span className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">Security Protocol</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <StatusBadge />
              </div>
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
            >
              Next-Generation <br className="hidden sm:block"/>
              <span className="text-primary">Cryptographic Infrastructure</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground md:text-xl leading-relaxed"
            >
              Engineered for the post-quantum era. Verify everything, trust nothing.
              Advanced primitives for a decentralized future.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {FEATURES.map((feature, index) => (
              <FeatureCard key={feature.id} feature={feature} index={index} />
            ))}
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border/40 py-8 mt-auto">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 font-mono text-xs">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>ALL SYSTEMS OPERATIONAL</span>
            </div>
            <div className="font-mono text-xs opacity-50">
              © 2024 NEXUS PROTOCOL. SECURE TRANSMISSION.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
