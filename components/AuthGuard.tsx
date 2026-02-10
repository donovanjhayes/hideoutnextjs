'use client';

import { useState, useEffect, ReactNode } from 'react';
import { supabase } from '../lib/supabaseClient'; // Import supabase
import { Session } from '@supabase/supabase-js';
import styles from './AuthGuard.module.css'; // We will make this style next

export default function AuthGuard({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // 1. Check if we already have a session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // 2. Listen for changes (login, logout, etc.)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) alert(error.message);
  };

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  // If NOT logged in, show the Login Form
  if (!session) {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>Broconos Update Portal Login</h1>
          <h2>Check your email from February 2026 for login info</h2><br></br>
          <form onSubmit={handleLogin}>
            <input
              className={styles.input}
              type="email"
              placeholder="Your Email"
              // defaultValue='broconos1054@gmail.com'
              value = {email}
              // value = 'broconos1054@gmail.com'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className={styles.input}
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className={styles.button} type="submit">
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  // If logged in, show the actual page content
  return <>{children}</>;
}