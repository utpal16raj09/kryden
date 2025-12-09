import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Developer',
      price: 'Free',
      description: 'For prototyping and non-commercial research.',
      features: [
        'Lattice-Kyber API Access',
        'Single Node Verification',
        'Community Support',
        '10k Transactions/mo'
      ],
      cta: 'Start Building',
      highlight: false
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Full sovereign infrastructure for high-value data.',
      features: [
        'Dedicated Quantum Nodes',
        'Formal Verification Reports',
        '24/7 Engineering Support',
        'Unlimited Throughput',
        'On-Premise Deployment'
      ],
      cta: 'Contact Sales',
      highlight: true
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight text-[#0F172A]">
            Protocol Access Tiers
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Scale your quantum resistance from research prototypes to global financial infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
                plan.highlight 
                  ? 'bg-[#0F172A] text-[#F8FAFC] shadow-2xl border border-[#10B981]/30' 
                  : 'bg-white text-[#0F172A] border border-gray-200 hover:shadow-xl'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-[#10B981]' : 'text-[#0F172A]'}`}>
                {plan.name}
              </h3>
              <div className="text-4xl font-serif font-bold mb-4">
                {plan.price}
              </div>
              <p className={`mb-8 ${plan.highlight ? 'text-gray-400' : 'text-[#64748B]'}`}>
                {plan.description}
              </p>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className={`rounded-full p-1 ${plan.highlight ? 'bg-[#10B981]/20 text-[#10B981]' : 'bg-[#0F172A]/10 text-[#0F172A]'}`}>
                      <Check className="w-4 h-4" />
                    </div>
                    <span className={plan.highlight ? 'text-gray-300' : 'text-[#0F172A]'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-[#10B981] text-[#0F172A] hover:bg-[#3B82F6] hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]' 
                  : 'bg-[#0F172A] text-white hover:bg-[#1E293B]'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
