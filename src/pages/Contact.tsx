import { SectionHeading } from '../components/Shared';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <SectionHeading title="Private Advisory" subtitle="Contact Us" />
          <p className="text-zinc-600 mb-10 text-lg">Whether you are looking to acquire a new asset, sell a premium property, or discuss portfolio strategy, our advisors are ready.</p>
          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-4"><MapPin className="text-accent mt-1" /><div><h4 className="font-serif text-brand-900 text-lg">Global Headquarters</h4><p className="text-zinc-500">1420 Financial District, Suite 400<br/>New York, NY 10004</p></div></div>
            <div className="flex items-start gap-4"><Phone className="text-accent mt-1" /><div><h4 className="font-serif text-brand-900 text-lg">Direct Line</h4><p className="text-zinc-500">+1 (212) 555-0199</p></div></div>
            <div className="flex items-start gap-4"><Mail className="text-accent mt-1" /><div><h4 className="font-serif text-brand-900 text-lg">Email</h4><p className="text-zinc-500">advisory@aurarealestate.com</p></div></div>
          </div>
        </div>
        <div className="bg-white p-8 border border-zinc-200 shadow-sm">
          <h3 className="text-2xl font-serif text-brand-900 mb-6">Request a Consultation</h3>
          <form className="space-y-6" onSubmit={e => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-sm font-medium text-zinc-700 mb-2">First Name</label><input type="text" className="w-full px-4 py-3 border border-zinc-300 focus:border-brand-900 focus:outline-none bg-zinc-50" /></div>
              <div><label className="block text-sm font-medium text-zinc-700 mb-2">Last Name</label><input type="text" className="w-full px-4 py-3 border border-zinc-300 focus:border-brand-900 focus:outline-none bg-zinc-50" /></div>
            </div>
            <div><label className="block text-sm font-medium text-zinc-700 mb-2">Email Address</label><input type="email" className="w-full px-4 py-3 border border-zinc-300 focus:border-brand-900 focus:outline-none bg-zinc-50" /></div>
            <div><label className="block text-sm font-medium text-zinc-700 mb-2">Message</label><textarea rows="4" className="w-full px-4 py-3 border border-zinc-300 focus:border-brand-900 focus:outline-none bg-zinc-50"></textarea></div>
            <button className="w-full bg-brand-900 text-white py-4 font-medium hover:bg-brand-800 transition-colors">Submit Request</button>
          </form>
        </div>
      </div>
    </div>
  );
}
