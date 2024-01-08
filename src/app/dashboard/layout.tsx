import NavBar from "../ui/dashboard/navbar.tsx/navbar";
import SideBar from "../ui/dashboard/sidebar/sidebar";
import styles from "../ui/dashboard/dashboard.module.css";
import Footer from "../ui/footer/Footer";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <SideBar />
      </div>
      <div className={styles.content}>
        <NavBar />
        {children}
        <Footer />
      </div>
    </div>
  );
}
