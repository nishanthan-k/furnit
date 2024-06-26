import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <main className="w-screen h-dvh">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
