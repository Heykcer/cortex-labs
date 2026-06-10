import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../../styles/Admin.module.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    const res = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });

    if (res?.error) {
      setError('Invalid username or password');
    } else {
      router.push('/admin');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <Head>
        <title>Admin Login - Cortex Labs</title>
      </Head>
      <div className={styles.loginCard}>
        <h2>Admin Access</h2>
        <p>Sign in to manage Cortex Labs content</p>
        
        {error && <div className={styles.errorAlert}>{error}</div>}
        
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.inputGroup}>
            <label>Username</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
          </div>
          
          <div className={styles.inputGroup}>
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          
          <button type="submit" className={styles.primaryBtn}>
            Login to Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}
