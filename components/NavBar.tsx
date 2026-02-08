'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './NavBar.module.css';
import { supabase } from '../lib/supabaseClient' // Import supabase
import { useRouter } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter(); // To redirect after logout

  const isActive = (path: string) => pathname === path;

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh(); // Refresh page to trigger the AuthGuard login screen
  };

  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navList}>
        
        {/* Button 1: Updates (The main family page) */}
        <li>
          <Link 
            href="/updates" 
            className={`${styles.navLink} ${isActive('/updates') ? styles.active : ''}`}
          >
            Updates
          </Link>
        </li>

        {/* Button 2: Info */}
        <li>
          <Link 
            href="/info" 
            className={`${styles.navLink} ${isActive('/info') ? styles.active : ''}`}
          >
            Info
          </Link>
        </li>

        {/* Button 3: Finances */}
        <li>
          <Link 
            href="/finances" 
            className={`${styles.navLink} ${isActive('/finances') ? styles.active : ''}`}
          >
            Finances
          </Link>
        </li>

        <li>
          <button 
            onClick={handleLogout}
            style={{
               background: 'none', 
            //    border: '1px solid #e5e7eb', 
               cursor: 'pointer',
            //    padding: '8px 20px',
            //    borderRadius: '20px',
               color: '#ef4444', // Red text
            //    fontWeight: 600
            }}
          >
            Sign Out
          </button>
        </li>

      </ul>
    </nav>
  );
}