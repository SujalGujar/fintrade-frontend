export default function EMIHighlight() {
  const plans = [
    {
      title: "3 Month EMI",
      price: "₹4,999",
      period: "/month",
      details: "Total ₹14,997 + GST",
      badge: null,
      recommended: false,
      features: [
        "Split into 3 easy installments",
        "No processing fee",
        "Instant approval"
      ]
    },
    {
      title: "6 Month EMI",
      price: "₹2,999",
      period: "/month",
      details: "Total ₹17,994 + GST",
      badge: "0% Interest",
      badgeBg: "bg-[#D50032]",
      recommended: true,
      features: [
        "Split into 6 easy installments",
        "0% interest for 6 months",
        "No processing fee",
        "Instant approval"
      ]
    },
    {
      title: "12 Month EMI",
      price: "₹1,599",
      period: "/month",
      details: "Total ₹19,188 + GST",
      badge: "Lowest EMI",
      badgeBg: "bg-gray-950",
      recommended: false,
      features: [
        "Lowest monthly payment",
        "Flexible tenure",
        "CIBIL 730+ required"
      ]
    }
  ];

  return (
    <section className="py-4 md:py-6 bg-[#fafafa] relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-2 border border-[#D50032]/25 bg-[#D50032]/5">
            <span className="text-[#D50032] font-extrabold text-xs tracking-wider uppercase flex items-center gap-1">
              💳 Easy Payments
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-1.5 text-gray-900 tracking-tight">
            Flexible <span className="text-[#D50032]">EMI & Payment Plans</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
            Invest in your trading career with our convenient payment options
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 max-w-4xl mx-auto items-stretch">
          {plans.map((plan, index) => {
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-4 sm:p-5 flex flex-col justify-between items-stretch transition-all duration-300 select-none ${
                  plan.recommended
                    ? "border-2 border-[#D50032] shadow-[0_15px_35px_rgba(213,0,50,0.07)] md:-translate-y-1 z-10"
                    : "border border-gray-100/90 shadow-[0_12px_40px_rgba(0,0,0,0.015)] hover:border-gray-200"
                }`}
              >
                {/* Top Center Floating Badge */}
                {plan.badge && (
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3.5 py-0.5 rounded-full text-[9px] font-black text-white ${plan.badgeBg} uppercase tracking-wider shadow-sm z-20`}>
                    {plan.badge}
                  </div>
                )}

                {/* Plan Content */}
                <div className="space-y-3.5">
                  
                  {/* Plan Identifier & Recommended Label */}
                  <div>
                    {plan.recommended && (
                      <div className="text-[#D50032] text-[10px] font-black uppercase tracking-wider flex items-center gap-1 mb-1">
                        ★ Recommended
                      </div>
                    )}
                    <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest leading-none">
                      {plan.title}
                    </span>
                  </div>

                  {/* Pricing Box */}
                  <div>
                    <div className="flex items-baseline gap-1 leading-none">
                      <span className="text-3xl sm:text-3.5xl font-black text-[#D50032] tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs font-bold text-gray-500">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-[10px] font-semibold text-gray-400 mt-1 tracking-wide uppercase">
                      {plan.details}
                    </p>
                  </div>

                  {/* Horizontal Line Separator */}
                  <div className="w-full h-[1px] bg-gray-100" />

                  {/* Features List */}
                  <div className="space-y-2.5 pt-0.5 pb-2">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-[11px] font-medium text-gray-700">
                        <span className="w-4.5 h-4.5 rounded-full border border-emerald-100 bg-emerald-50 flex items-center justify-center flex-shrink-0">
                          <svg className="w-2.5 h-2.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                        <span className="leading-tight mt-0.5">{feature}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* CTA Action Button */}
                <div className="mt-4 pt-1">
                  {plan.recommended ? (
                    <button className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#D50032] to-[#FF3D00] text-white font-extrabold text-xs uppercase tracking-wider hover:shadow-[0_8px_25px_rgba(213,0,50,0.35)] transition-all duration-300 transform active:scale-98 cursor-pointer">
                      Choose Plan
                    </button>
                  ) : (
                    <button className="w-full py-2.5 px-4 rounded-xl border border-[#D50032]/45 text-[#D50032] font-extrabold text-xs uppercase tracking-wider bg-white hover:bg-[#D50032]/5 hover:border-[#D50032] transition-all duration-300 transform active:scale-98 cursor-pointer">
                      Choose Plan
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
