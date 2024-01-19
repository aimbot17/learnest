import Navbar from "./components/navbar.component";
import Footer from "./components/footer.component";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
