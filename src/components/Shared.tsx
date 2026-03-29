import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bed, Bath, Square, ArrowRight, Quote, Search, SlidersHorizontal } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => setMenuOpen(false), [location]);
  const links = [{n:'Buy', p:'/buy'}, {n:'Sell', p:'/sell'}, {n:'Market Analysis', p:'/market-analysis'}, {n:'About', p:'/about'}];
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-panel py-4' : 'bg-brand-900 py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className={`text-2xl font-serif font-bold tracking-tight ${isScrolled ? 'text-brand-900' : 'text-white'}`}>AURA<span className="text-accent">.</span></Link>
        <nav className="hidden md:flex items-center space-x-8">
          {links.map(l => <Link key={l.n} to={l.p} className={`text-sm font-medium transition-colors ${isScrolled ? 'text-zinc-600 hover:text-brand-900' : 'text-zinc-300 hover:text-white'}`}>{l.n}</Link>)}
          <Link to="/contact" className={`px-5 py-2.5 text-sm font-medium transition-colors ${isScrolled ? 'bg-brand-900 text-white hover:bg-brand-800' : 'bg-white text-brand-900 hover:bg-zinc-200'}`}>Consultation</Link>
        </nav>
        <button className={`md:hidden ${isScrolled ? 'text-brand-900' : 'text-white'}`} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col space-y-4">
          {links.map(l => <Link key={l.n} to={l.p} className="text-lg font-medium text-zinc-900">{l.n}</Link>)}
          <Link to="/contact" className="bg-brand-900 text-white px-5 py-3 text-center font-medium mt-4">Book Consultation</Link>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div>
          <Link to="/" className="text-2xl font-serif font-bold text-white mb-6 block">AURA<span className="text-accent">.</span></Link>
          <p className="text-zinc-400 text-sm">Intelligence-driven real estate. We combine luxury advisory with institutional-grade data.</p>
        </div>
        <div>
          <h4 className="font-medium mb-6 text-sm tracking-wider uppercase text-zinc-300">Services</h4>
          <ul className="space-y-4 text-sm text-zinc-400">
            <li><Link to="/buy" className="hover:text-white">Buy Property</Link></li>
            <li><Link to="/sell" className="hover:text-white">Sell Property</Link></li>
            <li><Link to="/market-analysis" className="hover:text-white">Market Analysis</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-6 text-sm tracking-wider uppercase text-zinc-300">Company</h4>
          <ul className="space-y-4 text-sm text-zinc-400">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-6 text-sm tracking-wider uppercase text-zinc-300">Insights</h4>
          <p className="text-zinc-400 text-sm mb-4">Subscribe to our quarterly wealth reports.</p>
          <form className="flex" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Email address" className="bg-zinc-800 text-white px-4 py-2 w-full text-sm focus:outline-none focus:ring-1 focus:ring-accent" />
            <button className="bg-accent text-brand-900 px-4 py-2 text-sm font-medium hover:bg-white">Join</button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-zinc-800 flex justify-between text-xs text-zinc-500">
        <p>&copy; {new Date().getFullYear()} Aura Real Estate Intelligence.</p>
      </div>
    </footer>
  );
}

export function Hero({ title, subtitle, image, ctas, align = 'center' }: any) {
  return (
    <div className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-brand-900">
      <div className="absolute inset-0">
        <img src={image} alt="Hero" className="w-full h-full object-cover opacity-40" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-transparent to-transparent" />
      </div>
      <div className={`relative z-10 max-w-7xl mx-auto px-6 w-full ${align === 'center' ? 'text-center' : 'text-left'}`}>
        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">{title}</h1>
        <p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl font-light mx-auto">{subtitle}</p>
        {ctas && (
          <div className={`flex flex-col sm:flex-row gap-4 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
            {ctas.map((cta: any, idx: number) => (
              <Link key={idx} to={cta.link} className={`px-8 py-4 text-sm font-medium transition-all ${cta.primary ? 'bg-white text-brand-900 hover:bg-zinc-200' : 'bg-brand-800/80 backdrop-blur-md text-white hover:bg-brand-800 border border-white/10'}`}>
                {cta.text}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function SectionHeading({ title, subtitle, centered = false }: any) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      {subtitle && <span className="text-accent text-sm font-semibold tracking-widest uppercase mb-3 block">{subtitle}</span>}
      <h2 className="text-3xl md:text-4xl font-serif text-brand-900">{title}</h2>
    </div>
  );
}

export function PropertyCard({ property }: any) {
  return (
    <Link to={`/property/${property.id}`} className="group block bg-white border border-zinc-100 hover:shadow-xl transition-all duration-500 overflow-hidden">
      <div className="relative h-64 overflow-hidden">
        <img src={property.image} alt={property.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {property.tags.map((tag: string) => <span key={tag} className="bg-brand-900/80 backdrop-blur-sm text-white text-xs px-3 py-1 font-medium tracking-wide">{tag}</span>)}
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif text-brand-900 group-hover:text-accent transition-colors">{property.title}</h3>
          <span className="text-lg font-medium text-brand-900">{property.price}</span>
        </div>
        <p className="text-zinc-500 text-sm mb-6 truncate">{property.address}</p>
        <div className="flex items-center gap-6 text-sm text-zinc-600 border-t border-zinc-100 pt-4">
          <div className="flex items-center gap-2"><Bed size={16} className="text-zinc-400"/> {property.beds}</div>
          <div className="flex items-center gap-2"><Bath size={16} className="text-zinc-400"/> {property.baths}</div>
          <div className="flex items-center gap-2"><Square size={16} className="text-zinc-400"/> {property.sqft} sqft</div>
        </div>
      </div>
    </Link>
  );
}

export function StatCard({ label, value, description, dark = false }: any) {
  return (
    <div className={`p-8 border ${dark ? 'border-zinc-800 bg-brand-800 text-white' : 'border-zinc-100 bg-white text-brand-900'}`}>
      <div className={`text-4xl font-serif mb-2 ${dark ? 'text-white' : 'text-brand-900'}`}>{value}</div>
      <div className="text-sm font-semibold tracking-wider uppercase mb-3 text-accent">{label}</div>
      {description && <p className={`text-sm ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>{description}</p>}
    </div>
  );
}

export function CTASection({ title, subtitle, buttonText, buttonLink, dark = true }: any) {
  return (
    <section className={`py-24 ${dark ? 'bg-brand-900 text-white' : 'bg-zinc-50 text-brand-900'}`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-6">{title}</h2>
        <p className={`text-lg mb-10 ${dark ? 'text-zinc-400' : 'text-zinc-600'}`}>{subtitle}</p>
        <Link to={buttonLink} className={`inline-block px-8 py-4 font-medium transition-colors ${dark ? 'bg-white text-brand-900 hover:bg-zinc-200' : 'bg-brand-900 text-white hover:bg-brand-800'}`}>
          {buttonText}
        </Link>
      </div>
    </section>
  );
}

export function MarketInsightCard({ insight }: any) {
  return (
    <Link to="/market-analysis" className="group block border-b border-zinc-200 py-6 hover:border-brand-900 transition-colors">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-accent text-xs font-bold tracking-widest uppercase mb-2 block">{insight.category}</span>
          <h3 className="text-xl font-serif text-brand-900 group-hover:text-accent transition-colors">{insight.title}</h3>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-sm text-zinc-500">{insight.date}</span>
          <ArrowRight className="text-zinc-300 group-hover:text-brand-900 transition-colors transform group-hover:translate-x-2" size={20} />
        </div>
      </div>
    </Link>
  );
}

export function AgentCard({ agent }: any) {
  return (
    <div className="group">
      <div className="relative overflow-hidden mb-4 aspect-[3/4]">
        <img src={agent.image} alt={agent.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
      </div>
      <h3 className="text-xl font-serif text-brand-900">{agent.name}</h3>
      <p className="text-sm text-zinc-500 mb-1">{agent.role}</p>
      <p className="text-xs font-semibold text-accent uppercase tracking-wider">{agent.stats}</p>
    </div>
  );
}

export function FilterBar() {
  return (
    <div className="bg-white border border-zinc-200 p-4 flex flex-col md:flex-row gap-4 items-center shadow-sm">
      <div className="relative flex-grow w-full">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400" size={20} />
        <input type="text" placeholder="Search by neighborhood..." className="w-full pl-12 pr-4 py-3 bg-zinc-50 border border-transparent focus:bg-white focus:border-brand-900 focus:outline-none" />
      </div>
      <div className="flex gap-4 w-full md:w-auto">
        <select className="px-4 py-3 bg-zinc-50 border border-transparent focus:bg-white focus:border-brand-900 focus:outline-none w-full md:w-40 appearance-none">
          <option>Price (Any)</option>
          <option>$1M - $3M</option>
          <option>$3M+</option>
        </select>
        <button className="bg-brand-900 text-white px-6 py-3 flex items-center justify-center gap-2 hover:bg-brand-800 whitespace-nowrap">
          <SlidersHorizontal size={18} /> Filters
        </button>
      </div>
    </div>
  );
}
