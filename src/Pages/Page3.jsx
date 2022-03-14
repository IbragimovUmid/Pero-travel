import React from "react";
import Calendar from "../components/Calendar/Calendar";
import Pagethree from "../components/Page/Pagethree";
import Pageinfo from "../components/Pageprice/Pageinfo";
import Route from "../components/Route/Route";
import Gallery from "../components/Gallery/Gallery";
import Footer from "../components/Footer/Footer";
import Expenses from "../components/Expenses/Expenses";
import ImportInfo from "../components/ImportInfo/ImportInfo";

const Page3 = () => {
  return (
    <div>
      <Pagethree />
      <Pageinfo />
      <Calendar />
      <Route />
      <div className="container">
        <Expenses />
      </div>
      <Gallery />
      <Footer />
    </div>
  );
};

export default Page3;
