import { Outlet } from "react-router";
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";

function AppLayout() {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
}

export default AppLayout;