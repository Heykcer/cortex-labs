import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../../styles/Admin.module.css';

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    }
  }, [status, router]);

  if (status === 'loading' || status === 'unauthenticated') {
    return <div className={styles.loginContainer}>Loading...</div>;
  }

  return (
    <div className={styles.dashboardContainer}>
      <Head>
        <title>Dashboard - Cortex Labs</title>
      </Head>
      
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <h2>Cortex Admin</h2>
        <nav className={styles.navLinks}>
          <a 
            href="#" 
            className={activeTab === 'overview' ? styles.activeLink : styles.navLink}
            onClick={(e) => { e.preventDefault(); setActiveTab('overview'); }}
          >
            Overview
          </a>
          <a 
            href="#" 
            className={activeTab === 'team' ? styles.activeLink : styles.navLink}
            onClick={(e) => { e.preventDefault(); setActiveTab('team'); }}
          >
            Team Members
          </a>
          <a 
            href="#" 
            className={activeTab === 'projects' ? styles.activeLink : styles.navLink}
            onClick={(e) => { e.preventDefault(); setActiveTab('projects'); }}
          >
            Projects
          </a>
          <a 
            href="#" 
            className={activeTab === 'events' ? styles.activeLink : styles.navLink}
            onClick={(e) => { e.preventDefault(); setActiveTab('events'); }}
          >
            Events & Hackathons
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1>Dashboard Overview</h1>
          <button onClick={() => signOut()} className={styles.logoutBtn}>
            Logout
          </button>
        </header>
        
        <section className={styles.contentArea}>
          {activeTab === 'overview' && (
            <div>
              <p>Welcome back, {session?.user?.username || 'Admin'}!</p>
              <p style={{ marginTop: '1rem', color: 'var(--muted)' }}>
                Select a tab on the left to manage the website content.
              </p>
            </div>
          )}
          {activeTab === 'team' && (
            <div>
              <h3>Team Management</h3>
              <p style={{ color: 'var(--muted)', marginTop: '0.5rem' }}>Coming soon: Data table and forms.</p>
            </div>
          )}
          {activeTab === 'projects' && (
            <div>
              <h3>Projects Management</h3>
              <p style={{ color: 'var(--muted)', marginTop: '0.5rem' }}>Coming soon: Data table and forms.</p>
            </div>
          )}
          {activeTab === 'events' && (
            <div>
              <h3>Events & Hackathons Management</h3>
              <p style={{ color: 'var(--muted)', marginTop: '0.5rem' }}>Coming soon: Data table and forms.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
