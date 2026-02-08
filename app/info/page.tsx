import NavBar from '../../components/NavBar';
import styles from '../updates/updates.module.css';
import AuthGuard from '../../components/AuthGuard'; //

export default function InfoPage() {
  return (
    <AuthGuard>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.feedWrapper}>
          <h1 className={styles.pageTitle}>Information</h1>
          <div className={styles.postCard}>
            <p>House rules, wifi passwords, and instructions will go here.</p>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}