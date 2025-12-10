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
    <section id="pricing" className="py-24 px-6 bg-[#fcfbf2]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight text-[#0F172A]">
            Protocol Access Tiers
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Scale your quantum resistance from research prototypes to global financial infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => {
            const isDev = plan.name === "Developer";
            const isEnt = plan.name === "Enterprise";

            return (
              <div
                key={index}
                className={`
                  rounded-3xl p-8 transition-all duration-300 hover:scale-105
                  ${isDev
                    ? 'bg-white text-[#0F172A] border border-gray-200 hover:shadow-xl'   // ORIGINAL DEVELOPER
                    : 'bg-[#677DA6] text-white border border-[#ffffff20] shadow-xl'       // UPDATED ENTERPRISE
                  }
                `}
              >

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2">
                  {plan.name}
                </h3>

                <div className="text-4xl font-serif font-bold mb-4">
                  {plan.price}
                </div>

                <p className={`mb-8 ${isDev ? 'text-[#64748B]' : 'text-gray-200'}`}>
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div
                        className={`
                          rounded-full p-1
                          ${isDev 
                            ? 'bg-[#0F172A]/10 text-[#0F172A]' 
                            : 'bg-black/20 text-white'
                          }
                        `}
                      >
                        <Check className="w-4 h-4" />
                      </div>

                      <span className={isDev ? 'text-[#0F172A]' : 'text-white'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* BUTTONS */}
                <button
                  className={`
                    w-full py-4 rounded-xl font-semibold transition-all duration-300
                    ${isDev
                      ? 'bg-black text-white hover:bg-[#1A1A1A]'     // DEVELOPER button
                      : 'bg-white text-black hover:bg-[#1A1A1A] hover:text-white'     // ENTERPRISE button (same style)
                    }
                  `}
                >
                  {plan.cta}
                </button>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
