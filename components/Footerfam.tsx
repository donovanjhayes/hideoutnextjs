import Link from 'next/link';

export default function Footerfam() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand Section */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-stone-100 tracking-tight mb-1">
            Hideout Vacations
          </h2>
          {/* <p className="text-sm">Poconos escapes for the modern traveler.</p> */}
        </div>

        {/* Links Section */}
        <nav className="flex gap-6 text-sm font-medium">
          <Link href="http://airbnb.com/h/hideoutvacation" className="hover:text-amber-500 transition">
            Airbnb Chalet
          </Link>
          <Link href="http://airbnb.com/h/hideoutdaybreak" className="hover:text-amber-500 transition">
            Daybreak on Airbnb
          </Link>
          <Link href="https://calendar.google.com/calendar/embed?src=b6880dcae5bede6bae1595deb33b3c57cdca602917225e1155d62153eeba476f%40group.calendar.google.com&ctz=America%2FNew_York" className="hover:text-amber-500 transition">
            Google Calendar for Daybreak (View Only)
          </Link>
          <Link href="https://calendar.google.com/calendar/embed?src=b6880dcae5bede6bae1595deb33b3c57cdca602917225e1155d62153eeba476f%40group.calendar.google.com&ctz=America%2FNew_York" className="hover:text-amber-500 transition">
            Add to Calendar for Daybreak
          </Link>
        </nav>

        {/* Copyright Section
        <div className="text-sm text-stone-500">
          &copy; {currentYear} Hideout Vacations. All rights reserved.
        </div> */}

      </div>
    </footer>
  );
}