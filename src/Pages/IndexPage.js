import React from "react";
import Data from "../Components/Data";
import DataTable from "../Components/DataTable";
import FirstImage from "../Components/FirstImage";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import SecondImage from "../Components/SecondImage";

const IndexPage = () => {
  return (
    <div style={{ backgroundColor: "#191d28" }}>
      <Header />
      <Data />
      <FirstImage />
      <DataTable />
      <SecondImage />
      <Footer />
    </div>
  );
};

export default IndexPage;
