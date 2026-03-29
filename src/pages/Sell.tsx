import { Hero, SectionHeading, CTASection } from '../components/Shared';

export default function Sell() {
  const handleSubmit = (e: any) => { e.preventDefault(); alert("Valuation request submitted."); };
  return (
    <div>
      <Hero title="Sell with Precision." subtitle="We engineer the highest sale price by leveraging predictive data and global marketing." image="https://images.unsplash.com/photo-1600607687931-cece5ce21418?w=1600&q=80" align="left" />
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading title="Get a Precision Property Valuation" subtitle="Data-Backed Pricing" />
            <p className="text-zinc-600 mb-8 leading-relaxed">Standard agencies guess. We analyze. Enter your property details to receive a comprehensive, institutional-grade valuation report.</p>
            <form onSubmit={handleSubmit} className="bg-zinc-50 p-8 border border-zinc-200 space-y-6">
              <div><label className="block text-sm font-medium text-zinc-700 mb-2">Property Address</label><input type="text" required className="w-full px-4 py-3 border border-zinc-300 focus:border-brand-900 focus:outline-none" placeholder="Start typing your address..." /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium text-zinc-700 mb-2">Property Type</label><select className="w-full px-4 py-3 border border-zinc-300 focus:border-brand-900 focus:outline-none bg-white"><option>House</option><option>Apartment</option><option>Villa</option></select></div>
                <div><label className="block text-sm font-medium text-zinc-700 mb-2">Timeline</label><select className="w-full px-4 py-3 border border-zinc-300 focus:border-brand-900 focus:outline-none bg-white"><option>ASAP</option><option>1-3 Months</option><option>Just Curious</option></select></div>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">Your Contact Details</label>
                <div className="space-y-4">
                  <input type="text" required className="w-full px-4 py-3 border border-zinc-300 focus:border-brand-900 focus:outline-none" placeholder="Full Name" />
                  <input type="email" required className="w-full px-4 py-3 border border-zinc-300 focus:border-brand-900 focus:outline-none" placeholder="Email Address" />
                </div>
              </div>
              <button type="submit" className="w-full bg-brand-900 text-white py-4 font-medium hover:bg-brand-800 transition-colors">Request Valuation Report</button>
              <p className="text-xs text-zinc-500 text-center">100% free. No obligation to sell. Your data is secure.</p>
            </form>
          </div>
          <div className="flex flex-col justify-center">
            <div className="bg-brand-900 text-white p-10 mb-8">
              <h3 className="text-2xl font-serif mb-6">The Aura Advantage</h3>
              <div className="space-y-8">
                <div><div className="text-3xl font-serif text-accent mb-1">22%</div><div className="text-sm font-medium uppercase tracking-wider mb-2">Faster Sales</div><p className="text-zinc-400 text-sm">Our targeted global marketing reduces days on market significantly.</p></div>
                <div><div className="text-3xl font-serif text-accent mb-1">+4.5%</div><div className="text-sm font-medium uppercase tracking-wider mb-2">Above Market Average</div><p className="text-zinc-400 text-sm">Data-driven pricing strategies ensure you leave no money on the table.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection title="Ready to maximize your asset?" subtitle="Speak directly with a senior listing strategist." buttonText="Book an Advisory Call" buttonLink="/contact" dark={false} />
    </div>
  );
}
