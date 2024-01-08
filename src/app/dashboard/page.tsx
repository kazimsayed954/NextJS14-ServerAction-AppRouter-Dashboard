import Card from "../ui/card/Card";
import Chart from "../ui/chart/Chart";
import styles from "../ui/dashboard/dashboard.module.css";
import RightBar from "../ui/rightBar/RightBar";
import Transaction from "../ui/transactions/Transaction";

export default function Dashboard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.card}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transaction />
        <Chart />
      </div>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  );
}
