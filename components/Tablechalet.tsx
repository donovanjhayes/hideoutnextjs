'use client';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Database } from '../app/types/supabase';
// import styles from './FinanceTable.module.css'; // We'll make this simple CSS next

// 1. Define the shape of our data using your existing Supabase types
// create table public.financials (
//   "1054 Prev Reserve Balance" text null,
//   "1054 Inflow" text null,
//   "1054 Outflow" text null,
//   "1054 Net In/Outflow" text null,
//   "1054 Current Reserve Balance" text null,
//   "1184 Prev Reserve Balance" text null,
//   "1184 Inflow" text null,
//   "1184 Outflow" text null,
//   "1184 Net In/Outflow" text null,
//   "1184 Current Reserve Balance" text null,
//   "MONTH" smallint not null,
//   constraint financials_pkey primary key ("MONTH")
// ) TABLESPACE pg_default;

type FinanceRow = Database['public']['Tables'];
// Read specific columns

// let { data: financials, error } = await supabase
//   .from('financials')
//   .select('some_column,other_column')


export default function FinanceTable() {
  const [rows, setRows] = useState<FinanceRow[]>([]);
  const [loading, setLoading] = useState(true);

  // 2. The "Effect" that runs once when the component mounts
  useEffect(() => {
    async function fetchFinances() {
      const { data, error } = await supabase
        .from('financials') // Matches your table name in Supabase
        .select('*')
        .order('date', { ascending: false }); // Newest items at the top

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
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Description</th>
            <th style={{ textAlign: 'right' }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{new Date(row.date).toLocaleDateString()}</td>
              <td>
                <span className={styles.categoryBadge}>{row.category}</span>
              </td>
              <td className={styles.description}>{row.description}</td>
              <td style={{ textAlign: 'right' }}>
                {formatCurrency(row.amount, row.type)}
              </td>
            </tr>
          ))}
          {rows.length === 0 && (
            <tr>
              <td colSpan={4} style={{ textAlign: 'center', padding: '20px' }}>
                No records found. Add some in Supabase!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}