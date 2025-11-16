import { Outlet } from "react-router-dom";
import layoutStyle from "../css/layout/layout.module.css";
import Navigation from "../components/Navigation";

export default function MainLayout() {
  return (
    <div className={layoutStyle.mainLayoutContainer}>
      <div className={layoutStyle.mainLayout}>
        <Outlet />
      </div>
      <Navigation />
    </div>
  );
}
