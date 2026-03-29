import { useParams } from 'react-router-dom';
import { neighborhoods, properties } from '../data/mockData';
import { Hero, SectionHeading, PropertyCard, StatCard } from '../components/Shared';

export default function NeighborhoodDetails() {
  const { id } = useParams();
  const neighborhood = neighborhoods.find(n => n.id === id) || neighborhoods[0];
  const localProperties = properties.filter(p => p.neighborhoodId === neighborhood.id);

  return (
    <div>
      <Hero title={neighborhood.name} subtitle={neighborhood.description} image={neighborhood.image} />
      <section className="py-20 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Market Intelligence" subtitle="Area Stats" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <StatCard label="Median Price" value={neighborhood.medianPrice} />
            <StatCard label="Capital Growth" value={neighborhood.growth} description="Year over year" />
            <StatCard label="Rental Yield" value={neighborhood.yield} description="Average gross" />
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Available Properties" subtitle="Exclusive Listings" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {localProperties.length > 0 ? localProperties.map(prop => <PropertyCard key={prop.id} property={prop} />) : <p className="text-zinc-500">No properties currently available in this area.</p>}
          </div>
        </div>
      </section>
    </div>
  );
}
