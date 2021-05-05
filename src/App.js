import React from "react";
import Data from "./Components/Data";
import Header from "./Components/Header";
import FirstImage from "./Components/FirstImage";
import SecondImage from "./Components/SecondImage";
import Footer from "./Components/Footer";
import DataTable from "./Components/DataTable";

export default function App() {
  return (
    <div>
      <Header />
      <Data />
      <FirstImage />
      <DataTable />
      <SecondImage />
      <Footer />
    </div>
  );
}
