import { Outlet } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import "./layout.scss";

function Layout() {
  return (
    <>
      <Header />
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
