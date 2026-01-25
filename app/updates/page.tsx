'use client';

import { useEffect, useState, FormEvent } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Database } from '../types/supabase'; // Import the type definition we made earlier
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Cookies from 'js-cookie';
import styles from './updates.module.css';


// Define what a single row looks like based on our Database type
type UpdateRow = Database['public']['Tables']['updates']['Row'];

export default function FamilyPage() {
  const [updates, setUpdates] = useState<UpdateRow[]>([]);
  const [password, setPassword] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true); // Added loading state for initial fetch

  // --- LOGIC ---

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    const secretPass = process.env.NEXT_PUBLIC_FAMILY_PASSWORD;

    if (password === secretPass) {
      Cookies.set('family_auth', 'true', { expires: 7 });
      setIsLoggedIn(true);
      fetchUpdates();
    } else {
      alert('Wrong password!');
    }
  };

  useEffect(() => {
    const auth = Cookies.get('family_auth');
    if (auth === 'true') {
      setIsLoggedIn(true);
      fetchUpdates();
    } else {
      setLoading(false); // Stop loading if not logged in so we show the login form
    }
  }, []);

  async function fetchUpdates() {
    setLoading(true);
    // TypeScript knows 'data' is an array of UpdateRow because of the generic client!
    const { data, error } = await supabase
      .from('updates')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (data) {
      setUpdates(data);
    }
    
    if (error) {
      console.error('Error fetching updates:', error);
    }
    setLoading(false);
  }

  // --- RENDER: LOGIN SCREEN ---
  if (!isLoggedIn) {
    if (loading) return null; // Avoid flashing login screen if checking cookies

    return (
      <div className={styles.container}>
        <div className={styles.loginCard}>
          <h1 style={{marginBottom: '20px'}}>Family Portal</h1>
          <p style={{color: '#666', marginBottom: '20px'}}>
            Please enter the family password to view updates.
          </p>
          <form onSubmit={handleLogin}>
            <input 
              type="password" 
              className={styles.input}
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className={styles.button}>Enter</button>
          </form>
        </div>
      </div>
    );
  }

  // --- RENDER: MAIN LAYOUT ---
  return (
    <div className={styles.container}>
      
      {/* Page Title */}
      <h1 style={{textAlign:'center', marginBottom:'40px', fontSize:'2.5rem', fontWeight:'800', color:'#111827'}}>
        Monthly Updates
      </h1>

      <div className={styles.contentLayout}>
        
        {/* LEFT SIDEBAR */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarTitle}>2026 Updates</div>
          {updates.length === 0 && <p style={{fontSize:'0.9rem', color:'#666'}}>No updates yet.</p>}
          
          <nav>
            {updates.map((update) => (
              <a 
                key={update.id} 
                href={`#post-${update.id}`} 
                className={styles.sidebarLink}
              >
                {/* Display Title and Month */}
                <div>{update.title}</div>
                <div style={{fontSize: '0.75rem', color:'#9ca3af'}}>
                  {new Date(update.created_at).toLocaleDateString(undefined, {month:'short', year:'numeric'})}
                </div>
              </a>
            ))}
          </nav>
        </aside>

        {/* RIGHT FEED */}
        <main className={styles.feedWrapper}>
          {loading && <p>Loading updates...</p>}

          {updates.map((update) => (
            <article 
              key={update.id} 
              id={`post-${update.id}`} // <--- This ID allows the link to jump here
              className={styles.postCard}
            >
              <header className={styles.postHeader}>
                <h2 className={styles.postTitle}>{update.title}</h2>
                <time className={styles.postDate}>
                  {new Date(update.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </header>
              
              <div className={styles.markdownContent}>
              <ReactMarkdown remarkPlugins={[remarkGfm]}> 
              {update.content}
              </ReactMarkdown>
              </div>
            </article>
          ))}
        </main>

      </div>
    </div>
  );
}