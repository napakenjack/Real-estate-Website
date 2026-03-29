import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';
import { Hero, SectionHeading, PropertyCard, StatCard, CTASection } from '../components/Shared';
import { properties, testimonials, neighborhoods } from '../data/mockData';

export default function Home() {
  return (
    <div>
      <Hero 
        title="Intelligence-Driven Real Estate."
        subtitle="Navigate the market with precision. We combine luxury advisory with institutional-grade data to help you buy, sell, and invest with absolute confidence."
        image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80"
        ctas={[
          { text: 'Buy Property', link: '/buy', primary: true },
          { text: 'Sell Property', link: '/sell', primary: false },
          { text: 'Market Insights', link: '/market-analysis', primary: false }
        ]}
      />
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1 flex flex-col justify-center">
              <h3 className="text-2xl font-serif text-brand-900 mb-4">Live Market Pulse</h3>
              <p className="text-zinc-600 text-sm mb-6">Real-time data driving our advisory decisions this week.</p>
              <Link to="/market-analysis" className="text-accent font-medium flex items-center gap-2 hover:text-brand-900 transition-colors">
                Full Report <ArrowRight size={16} />
              </Link>
            </div>
            <StatCard label="Avg Days on Market" value="14" description="Down 12% YoY" dark={true} />
            <StatCard label="Q3 Growth" value="+4.2%" description="Premium sector" dark={true} />
            <StatCard label="Off-Market Listings" value="24" description="Exclusive access" dark={true} />
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <SectionHeading title="Curated Properties" subtitle="Exclusive Portfolio" />
            <Link to="/buy" className="hidden md:flex items-center gap-2 text-brand-900 font-medium hover:text-accent transition-colors mb-12">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.slice(0, 3).map(prop => <PropertyCard key={prop.id} property={prop} />)}
          </div>
        </div>
      </section>
      <section className="py-24 bg-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-3 block">For Sellers</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">We Don't Just List Properties. We Engineer Sales.</h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Leverage predictive data, global marketing, and expert negotiation to sell your property flawlessly. Our listings sell 22% faster and for 4.5% more than the market average.
            </p>
            <Link to="/sell" className="inline-block bg-white text-brand-900 px-8 py-4 font-medium hover:bg-zinc-200 transition-colors">
              Get a Data-Backed Valuation
            </Link>
          </div>
          <div className="relative h-[500px]">
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80" alt="Luxury interior" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Prime Markets" subtitle="Neighborhood Intelligence" centered={true} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {neighborhoods.map(n => (
              <Link key={n.id} to={`/neighborhood/${n.id}`} className="group relative h-96 overflow-hidden block">
                <img src={n.image} alt={n.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/40 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <h3 className="text-2xl font-serif text-white mb-2">{n.name}</h3>
                  <div className="flex justify-between text-sm text-zinc-300 border-t border-white/20 pt-4 mt-4">
                    <span>Median: {n.medianPrice}</span>
                    <span className="text-accent">{n.growth} Growth</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Client Success" subtitle="Proven Results" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map(t => (
              <div key={t.id} className="bg-zinc-50 p-8 border border-zinc-100 relative">
                <Quote className="text-zinc-200 absolute top-6 right-6" size={48} />
                <p className="text-zinc-700 leading-relaxed mb-8 relative z-10 italic">"{t.text}"</p>
                <div>
                  <h4 className="font-serif text-brand-900 text-lg">{t.name}</h4>
                  <p className="text-accent text-sm font-medium">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Your next strategic move starts here." subtitle="Speak with an advisory partner today to discuss your real estate portfolio." buttonText="Book a Private Consultation" buttonLink="/contact" />
    </div>
  );
}
