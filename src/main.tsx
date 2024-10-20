import ReactDOM from "react-dom/client";
import { Fragment } from "react/jsx-runtime";
import "@/index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "@/routes/routes";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Fragment>
    <RouterProvider router={Routes} />
    <ToastContainer />
  </Fragment>
);
