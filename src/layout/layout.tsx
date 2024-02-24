import { Outlet } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import "./layout.scss";

type Props = {
  showFooter: boolean;
};

function Layout({ showFooter = true }: Props) {
  return (
    <>
      <Header />
      <main className="layout__main">
        <Outlet />
      </main>
      {showFooter && <Footer />}
    </>
  );
}

export default Layout;
