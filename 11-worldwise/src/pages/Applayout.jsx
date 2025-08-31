import Map from "../component/map";
import Sidebar from "../component/Sidebar";
import User from "../component/User";
import styles from "./AppLayout.module.css";

function Applayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
}

export default Applayout;
