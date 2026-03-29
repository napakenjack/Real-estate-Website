import { Hero, SectionHeading, StatCard, MarketInsightCard } from '../components/Shared';
import { marketInsights } from '../data/mockData';

export default function MarketAnalysis() {
  return (
    <div>
      <Hero title="Institutional-Grade Insights." subtitle="See where the market is going before it gets there. Access our proprietary data and research." image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80" />
      <section className="py-20 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Live Market Dashboard" subtitle="City Overview" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <StatCard label="Citywide Median Price" value="$1.85M" description="Up 3.2% this quarter" />
            <StatCard label="Avg Rental Yield" value="4.1%" description="Strongest in 5 years" />
            <StatCard label="Inventory Level" value="Low" description="Seller's market conditions" />
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading title="Research & Reports" subtitle="Deep Dives" />
          <div className="mt-8">
            {marketInsights.map(insight => <MarketInsightCard key={insight.id} insight={insight} />)}
          </div>
        </div>
      </section>
      <section className="py-24 bg-brand-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Get the Q4 Wealth Report</h2>
          <p className="text-zinc-400 mb-10">Join 10,000+ investors receiving our exclusive quarterly market analysis.</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" className="px-4 py-3 bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:border-accent w-full" />
            <button className="bg-accent text-brand-900 px-8 py-3 font-medium hover:bg-white transition-colors whitespace-nowrap">Download Now</button>
          </form>
        </div>
      </section>
    </div>
  );
}
