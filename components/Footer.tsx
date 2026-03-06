import Link from 'next/link';
// Make sure Footer is capitalized
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-stone-100 tracking-tight mb-1">
            Hideout Vacations
          </h2>
          <p className="text-sm">Poconos escapes for the modern traveler.</p>
        </div>

        {/* Links Section */}
        <nav className="flex gap-6 text-sm font-medium">
          <Link href="http://airbnb.com/h/hideoutvacation" className="hover:text-amber-500 transition">
            Airbnb Chalet
          </Link>
          <Link href="http://airbnb.com/h/hideoutdaybreak" className="hover:text-amber-500 transition">
            Daybreak on Airbnb
          </Link>
          <Link href="mailto:info@hideoutvacation.com" className="hover:text-amber-500 transition">
            Contact Us
          </Link>
        </nav>

        {/* Copyright Section */}
        <div className="text-sm text-stone-500">
          &copy; {currentYear} Hideout Vacations. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
