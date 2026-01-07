'use client';

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import styles from './admin.module.css';

export default function AdminPage() {
  // We explicitly tell useState what kind of data to expect
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  
  const router = useRouter();

  // --- LOGIC ---

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    // We check if the env variable exists to satisfy TS, though in Next.js it usually does
    const secretPass = process.env.NEXT_PUBLIC_FAMILY_PASSWORD;
    
    if (password === secretPass) {
      Cookies.set('family_auth', 'true', { expires: 7 });
      setIsLoggedIn(true);
    } else {
      alert('Wrong password!');
    }
  };

  useEffect(() => {
    if (Cookies.get('family_auth') === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  // Type: ChangeEvent<HTMLInputElement> ensures we can access e.target.files
  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Optional chaining in case no file is selected
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setContent(event.target.result as string);
      }
    };
    reader.readAsText(file);
  };

  // Type: FormEvent ensures we can call e.preventDefault()
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from('updates')
      .insert([{ title, content }]);

    setLoading(false);

    if (error) {
      alert('Error saving: ' + error.message);
    } else {
      alert('Update posted successfully!');
      setTitle('');
      setContent('');
      router.push('/updates');
    }
  };

  // --- RENDER: LOGIN SCREEN ---
  if (!isLoggedIn) {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <h1 className={styles.title}>Admin Access</h1>
          <form onSubmit={handleLogin}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Password</label>
              <input 
                type="password" 
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
              />
            </div>
            <button type="submit" className={styles.button}>Login</button>
          </form>
        </div>
      </div>
    );
  }

  // --- RENDER: DASHBOARD SCREEN ---
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>New Family Update</h1>
        
        <form onSubmit={handleSubmit}>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Title</label>
            <input 
              type="text" 
              className={styles.input}
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required 
              placeholder="e.g. October House Updates"
            />
          </div>

          {/* Option A: File Upload */}
          <div className={styles.fileUploadBox}>
            <label className={styles.label} style={{cursor: 'pointer'}}>
              📄 Upload Markdown File
              <input 
                type="file" 
                accept=".md" 
                onChange={handleFileUpload} 
                style={{ display: 'none' }} 
              />
            </label>
            <div style={{fontSize: '0.8rem', color: '#6b7280', marginTop: '5px'}}>
              Or drag and drop a .md file here
            </div>
          </div>

          {/* Option B: Text Area */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Content (Markdown)</label>
            <textarea 
              rows={8} 
              className={styles.textarea}
              value={content} 
              onChange={(e) => setContent(e.target.value)} 
              required
              placeholder="# Hello Family!&#10;Here is the latest news..."
            />
          </div>

          <button type="submit" disabled={loading} className={styles.button}>
            {loading ? 'Posting...' : 'Post Update'}
          </button>

        </form>
      </div>
    </div>
  );
}