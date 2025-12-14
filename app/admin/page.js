'use client';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function AdminPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
    const handleLogin = () => {
    if (password === process.env.NEXT_PUBLIC_FAMILY_PASSWORD) {
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

  // 2. Handle File Upload (Read .md file text)
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setContent(event.target.result); // Puts file text into the content box
    };
    reader.readAsText(file);
  };

  // 3. Submit to Supabase
  const handleSubmit = async (e) => {
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
      router.push('/family'); // Redirect to view page
    }
  };

  if (!isLoggedIn) {
    return (
      <div style={{ padding: '50px', maxWidth: '400px', margin: '0 auto' }}>
        <h1>Admin Login</h1>
        <input 
          type="password" 
          placeholder="Enter Admin Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
        />
        <button onClick={handleLogin} style={{ padding: '10px 20px' }}>Login</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>Post Family Update</h1>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        <div>
          <label style={{ display: 'block', fontWeight: 'bold' }}>Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ background: '#f0f0f0', padding: '15px', borderRadius: '5px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Option A: Upload Markdown File</label>
          <input type="file" accept=".md" onChange={handleFileUpload} />
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: 'bold' }}>Option B: Type/Edit Content</label>
          <textarea 
            rows="10" 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <button type="submit" disabled={loading} style={{ padding: '10px', background: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>
          {loading ? 'Posting...' : 'Post Update'}
        </button>

      </form>
    </div>
  );
}