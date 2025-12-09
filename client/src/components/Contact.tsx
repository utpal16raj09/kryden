import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="research" className="py-24 px-6 bg-gradient-to-b from-[#F8FAFC] to-[#E2E8F0]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight text-[#0F172A]">
              Initiate Secure Channel Establishment
            </h2>
            <p className="text-lg text-[#64748B] mb-8 leading-relaxed">
              For protocol integration, sovereign deployment, or R&D partnership, reach out to our strategic team.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#10B981] rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.6)]">
                  <Mail className="w-6 h-6 text-[#0F172A]" />
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A] mb-1">Secure Endpoint</p>
                  <p className="text-[#64748B]">protocol@quantumshield.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-[#3B82F6] rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A] mb-1">Global Node</p>
                  <p className="text-[#64748B]">San Francisco, CA / Zug, CH</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Entity Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 bg-[#F8FAFC] border-2 border-transparent rounded-xl focus:border-[#10B981] focus:outline-none transition-all duration-300 text-[#0F172A] placeholder-gray-400"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Verification Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 bg-[#F8FAFC] border-2 border-transparent rounded-xl focus:border-[#10B981] focus:outline-none transition-all duration-300 text-[#0F172A] placeholder-gray-400"
                  required
                />
              </div>

              <div>
                <textarea
                  placeholder="Scope of Inquiry"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-6 py-4 bg-[#F8FAFC] border-2 border-transparent rounded-xl focus:border-[#10B981] focus:outline-none transition-all duration-300 text-[#0F172A] placeholder-gray-400 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#10B981] text-[#0F172A] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-[#3B82F6] hover:text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] hover:scale-105"
              >
                <Send className="w-5 h-5" />
                Initiate Transmission
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
