import { useParams } from 'react-router-dom';
import { Bed, Bath, Square, MapPin, CheckCircle2 } from 'lucide-react';
import { properties } from '../data/mockData';

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find(p => p.id === id) || properties[0];

  return (
    <div>
      <div className="w-full h-[60vh] relative">
        <img src={property.image} alt={property.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 max-w-7xl mx-auto">
          <div className="flex gap-2 mb-4">
            {property.tags.map((tag: string) => <span key={tag} className="bg-accent text-brand-900 text-xs px-3 py-1 font-bold tracking-wide uppercase">{tag}</span>)}
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-2">{property.title}</h1>
          <p className="text-zinc-300 flex items-center gap-2"><MapPin size={18}/> {property.address}</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-8 py-6 border-b border-zinc-200 mb-8">
            <div className="flex items-center gap-2 text-brand-900 font-medium"><Bed className="text-accent"/> {property.beds} Beds</div>
            <div className="flex items-center gap-2 text-brand-900 font-medium"><Bath className="text-accent"/> {property.baths} Baths</div>
            <div className="flex items-center gap-2 text-brand-900 font-medium"><Square className="text-accent"/> {property.sqft} SqFt</div>
          </div>
          <h2 className="text-2xl font-serif text-brand-900 mb-4">Property Overview</h2>
          <p className="text-zinc-600 leading-relaxed mb-8">{property.description}</p>
          <h2 className="text-2xl font-serif text-brand-900 mb-4">Amenities</h2>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {property.amenities.map((amenity: string) => (
              <div key={amenity} className="flex items-center gap-2 text-zinc-600"><CheckCircle2 size={18} className="text-accent"/> {amenity}</div>
            ))}
          </div>
        </div>
        <div>
          <div className="sticky top-32 bg-zinc-50 p-8 border border-zinc-200">
            <div className="text-3xl font-serif text-brand-900 mb-6">{property.price}</div>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between border-b border-zinc-200 pb-2"><span className="text-zinc-500">Est. Yield</span><span className="font-medium">{property.yield}</span></div>
              <div className="flex justify-between border-b border-zinc-200 pb-2"><span className="text-zinc-500">Area Growth</span><span className="font-medium text-green-600">{property.growth}</span></div>
            </div>
            <button className="w-full bg-brand-900 text-white py-4 font-medium hover:bg-brand-800 transition-colors mb-4">Schedule Viewing</button>
            <button className="w-full bg-white text-brand-900 border border-brand-900 py-4 font-medium hover:bg-zinc-50 transition-colors">Ask a Question</button>
          </div>
        </div>
      </div>
    </div>
  );
}
