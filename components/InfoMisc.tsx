'use client';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Database } from '../app/types/supabase';
import styles from './InfoTable.module.css'; // We'll make this simple CSS next


type FinanceRow = Database['public']['Tables']['info_misc']['Row'];
// Read specific columns



export default function FinanceTable() {
  const [rows, setRows] = useState<FinanceRow[]>([]);
  const [loading, setLoading] = useState(true);

  // 2. The "Effect" that runs once when the component mounts
  useEffect(() => {
    async function fetchFinances() {
      const { data, error } = await supabase
        .from('info_misc') // Matches your table name in Supabase
        .select('*')
        .order('id', { ascending: true }); // Oldest items at the top

      if (error) {
        console.error('Error fetching finances:', error);
      } else {
        setRows(data || []);
      }
      setLoading(false);
    }

    fetchFinances();
  }, []);

  // 3. Helper to make money look like money
  const formatCurrency = (amount: number, type: string) => {
    const isExpense = type === 'expense';
    const sign = isExpense ? '-' : '+';
    const color = isExpense ? '#ef4444' : '#10b981'; // Red for expense, Green for income

    return (
      <span style={{ color, fontWeight: 600 }}>
        {sign}${Math.abs(amount).toFixed(2)}
      </span>
    );
  };

  if (loading) return <p>Loading financial data...</p>;

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
    <caption className={styles.caption}>
    Frequently Used Info
  </caption>
        <thead>
          <tr>
            {/* <th align="right">Item</th> */}
            <th></th>
            <th></th>
            {/* <th>Pin or Password</th> */}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
            <td align="center">{row.note}</td>
            <td align="left">{row.values}</td>
            </tr>
          ))}
          {rows.length === 0 && (
            <tr>
              <td colSpan={6} className={styles.noRecords}>
                No records found. Add some in Supabase!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}