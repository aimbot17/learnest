import { Fragment } from "react/jsx-runtime";

import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar";

export default function AppLayout() {
  return (
    <Fragment>
      <Sidebar />
    </Fragment>
  );
}
