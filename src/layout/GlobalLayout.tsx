import { Outlet } from "react-router-dom";
import layoutStyle from "../css/layout/layout.module.css";

export default function GlobalLayout() {
  return (
    <div className={layoutStyle.globalLayout}>
      <Outlet />
    </div>
  );
}
