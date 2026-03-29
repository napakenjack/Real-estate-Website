import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-serif text-brand-900 mb-4">404</h1>
      <p className="text-xl text-zinc-600 mb-8">The page you are looking for does not exist.</p>
      <Link to="/" className="bg-brand-900 text-white px-8 py-4 font-medium hover:bg-brand-800 transition-colors">
        Return to Home
      </Link>
    </div>
  );
}
