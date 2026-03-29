import { FilterBar, PropertyCard } from '../components/Shared';
import { properties } from '../data/mockData';

export default function Buy() {
  return (
    <div>
      <div className="bg-brand-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Curated Properties. Unmatched Potential.</h1>
          <p className="text-zinc-400 max-w-2xl">Discover homes that align with your lifestyle and investment goals, backed by data that proves their long-term value.</p>
        </div>
      </div>
      <div className="sticky top-[72px] z-40 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 py-4"><FilterBar /></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-medium text-zinc-800">{properties.length} Properties Found</h2>
          <select className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer">
            <option>Sort by: Newest</option>
            <option>Price: High to Low</option>
            <option>Highest Yield</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map(prop => <PropertyCard key={prop.id} property={prop} />)}
        </div>
      </div>
    </div>
  );
}
