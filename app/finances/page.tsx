import NavBar from '../components/NavBar';
import styles from '../updates/updates.module.css'; // Re-using your existing styles!
import AuthGuard from '../components/AuthGuard';



export default function FinancesPage() {
  return (
    <>
    <AuthGuard>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.feedWrapper}>
          <h1 className={styles.pageTitle}>Finances</h1>
          <div className={styles.postCard}>
            <p>Financial reports and spreadsheets will go here.</p>
          </div>
          
        </div>
      </div>
    
    </AuthGuard>
    </>
  );
}