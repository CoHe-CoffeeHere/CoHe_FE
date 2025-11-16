import { Outlet } from "react-router-dom";
import naviStyle from "../css/components/navigation.module.css";
import layoutStyle from "../css/layout/layout.module.css";

export default function MainLayout() {
  return (
    <div className={layoutStyle.mainLayoutContainer}>
      <div className={layoutStyle.mainLayout}>
        <Outlet />
      </div>
      <div className={naviStyle.container}>네비</div>
    </div>
  );
}
