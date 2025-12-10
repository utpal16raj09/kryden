import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

export default function ValueProp() {
  return (
    <section id="assurance" className="py-24 px-6 bg-[#f8f5ee]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-8 leading-tight text-[#0F172A]">
          Don't encrypt, just{" "}
          <span className="relative inline-block text-[#3B82F6]">
            transform
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="12"
              viewBox="0 0 200 12"
            >
              <path
                d="M0,6 Q50,0 100,6 T200,6"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3"
                className="animate-draw-line"
              />
            </svg>
          </span>
        </h2>

        <p className="text-xl text-[#64748B] max-w-3xl mx-auto mb-10 leading-relaxed">
          The Post-Quantum AI that turns sensitive data into clear,{" "}
          <strong>computationally irreversible</strong> hash-trees in every infrastructure layer.
        </p>

        {/* --- Dialog Wrapper --- */}
        <Dialog>
          <DialogTrigger asChild>
            <button className="bg-[#3B82F6] opacity-70 text-[#0F172A] px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-[#3B82F6] hover:text-white hover:scale-105 mb-6">
              Initiate Strategic Briefing
            </button>
          </DialogTrigger>

          <DialogContent
            className="
    max-w-2xl
    bg-[#f8f5ee]
    border border-black/10
    text-[#0F172A]
    rounded-3xl
    p-8
    shadow-xl
    space-y-8
  "
          >
            <DialogHeader>
              <DialogTitle className="text-3xl font-serif tracking-tight">
                Strategic Briefing — Secure Session
              </DialogTitle>
            </DialogHeader>

            {/* Status Cards — Bigger Text */}
            <div className="grid grid-cols-3 gap-5">
              <div className="bg-white border border-black/10 rounded-xl p-4 text-center">
                <div className="text-xs text-gray-500 font-mono mb-1">PQ RES.</div>
                <div className="text-xl font-semibold">Kyber</div>
              </div>

              <div className="bg-white border border-black/10 rounded-xl p-4 text-center">
                <div className="text-xs text-gray-500 font-mono mb-1">ZK PROOF</div>
                <div className="text-xl font-semibold">v2.1</div>
              </div>

              <div className="bg-white border border-black/10 rounded-xl p-4 text-center">
                <div className="text-xs text-gray-500 font-mono mb-1">TEE</div>
                <div className="text-xl font-semibold">OK</div>
              </div>
            </div>

            {/* Checklist — Increased font size */}
            <div>
              <h3 className="text-base font-semibold mb-3">Operational Readiness</h3>

              <div className="grid grid-cols-2 gap-3 text-sm text-[#0F172A]/90 leading-snug">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0F172A]"></span>
                  Kyber entropy grid online
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0F172A]"></span>
                  ZK attestation authenticated
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0F172A]"></span>
                  TEE integrity validated
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0F172A]"></span>
                  Hash-tree drift stable
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0F172A]"></span>
                  Threat index below threshold
                </div>
              </div>
            </div>

            {/* Warning — Text size increased */}
            <div className="bg-[#0F172A] text-[#f8f5ee] rounded-xl p-4 text-sm leading-relaxed">
              ⚠️ Once briefing completes, entropy locks & system shifts into immutable verification mode.
            </div>

            <DialogClose className="bg-black text-white px-6 py-3 rounded-xl text-sm hover:bg-[#1A1A1A] transition">
              Close
            </DialogClose>
          </DialogContent>

        </Dialog>

        <p className="text-sm text-[#64748B] font-medium">
          Certified for Finance, Defense, and National Infrastructure
        </p>

        <div className="mt-16 relative h-24 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-scroll-left whitespace-nowrap text-sm font-mono text-[#1E293B]/40">
              PROTOCOL_V3.2 // LATTICE_KEYGEN_COMPLETE // ENTROPY_POOL_AT_99.7% // HASH_TREE_ROOT_SEALED // ZERO_KNOWLEDGE_ATTEST_OK // NODE_STATE_VERIFIED // IMMUTABILITY_CHECKSUM_MATCH
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center mt-12">
            <div className="animate-scroll-right whitespace-nowrap text-sm font-mono text-[#1E293B]/40">
              QUANTUM_SHIELD_ACTIVE // ML_ATTACK_SURFACE_REDUCED // POST_QUANTUM_HANDSHAKE_OK // LATTICE_CIPHER_ROTATION_SYNC // ANOMALY_SCORE_BELOW_THRESHOLD // ACCESS_CONTROL_HARDENED // THREAT_MODEL_V5_CERTIFIED
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
