'use client';

import NavBar from '../../components/NavBar';
import styles from '../updates/updates.module.css'; // Re-using your existing styles!
import AuthGuard from '../../components/AuthGuard';



const columns = [
  { title: "Name", field: "name", width: 15 },
  { title: "Age", field: "age", hozAlign: "left", formatter: "progress" },
  { title: "Favourite Color", field: "col" },
  { title: "Date Of Birth", field: "dob", hozAlign: "center" },
  { title: "Rating", field: "rating", hozAlign: "center", formatter: "star" },
  { title: "Passed?", field: "passed", hozAlign: "center", formatter: "tickCross" }
];

var data = [
  {id:1, name:"Oli Bob", age:"12", col:"red", dob:""},
  {id:2, name:"Mary May", age:"1", col:"blue", dob:"14/05/1982"},
  {id:3, name:"Christine Lobowski", age:"42", col:"green", dob:"22/05/1982"},
  {id:4, name:"Brendon Philips", age:"125", col:"orange", dob:"01/08/1980"},
  {id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999"},
];


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
          <div>
  {/* <ReactTabulator
  data={data}
  columns={columns}
  layout={"fitData"}
  /> */}
{/* <FinanceTable /> */}
  </div>
        </div>
      </div>
    
    </AuthGuard>
    </>
  );
}