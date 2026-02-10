'use client';

import NavBar from '../../components/NavBar';
import styles from '../updates/updates.module.css'; // Re-using your existing styles!
import AuthGuard from '../../components/AuthGuard';
import Tablechalet from '@/components/Tablechalet'; 
import Tabledaybreak from '@/components/Tabledaybreak';


import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"




export default function FinancesPage() {
  return (
    <>
    <AuthGuard>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.feedWrapper}>
          <h1 className={styles.pageTitle}>Finances</h1>
          <div className={styles.postCard}>
            <p className={styles.markdownContent}>Summary of Financial Info, <a className={styles.a} href ="https://docs.google.com/spreadsheets/d/1fLv8ZrrkYW90ZEpI8yL0mczwFpJlb8frrewqRBCqOgE/edit?gid=817693034#gid=817693034">for full details see the spreadsheet</a>.</p>          </div>
          <div>
<div> <Tablechalet /></div>
<div>  <Tabledaybreak /> </div>

{/* <FinanceTable /> */}
  </div>
        </div>
      </div>
    
    </AuthGuard>
    </>
  );
}