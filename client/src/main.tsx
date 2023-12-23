import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/routes";
import { Provider } from "react-redux";
import store from "./redux/Store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
      <RouterProvider router={Routes} />
  </Provider>
);
