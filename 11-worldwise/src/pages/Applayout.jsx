import Map from "../component/map";
import Sidebar from "../component/Sidebar";
import styles from "./AppLayout.module.css";

function Applayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default Applayout;
