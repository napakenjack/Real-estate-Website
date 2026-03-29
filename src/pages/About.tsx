import { Hero, SectionHeading, AgentCard, CTASection } from '../components/Shared';
import { team } from '../data/mockData';

export default function About() {
  return (
    <div>
      <Hero title="Redefining Real Estate." subtitle="Frustrated by the guesswork in traditional real estate, we built a firm that treats property like the major financial asset it is." image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80" />
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionHeading title="Our Philosophy" subtitle="The Aura Difference" centered={true} />
          <p className="text-lg text-zinc-600 leading-relaxed mb-6">We are not just agents who open doors; we are data-backed wealth advisors who secure assets, maximize property yields, and eliminate market uncertainty.</p>
          <p className="text-lg text-zinc-600 leading-relaxed font-medium">"We advise you not to buy if the data doesn't support it."</p>
        </div>
      </section>
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Leadership Team" subtitle="Expertise" centered={true} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            {team.map(member => <AgentCard key={member.id} agent={member} />)}
          </div>
        </div>
      </section>
      <CTASection title="Partner with us." subtitle="Experience the difference of intelligence-driven real estate." buttonText="Contact Us" buttonLink="/contact" />
    </div>
  );
}
