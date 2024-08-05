import React from "react";
import PhoneList from "./components/phones";
import BrandList from "./components/brands";
import Header from "./components/nav/header";
import Navigation from "./components/nav/navbar";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
        <div className="nav">
          <Header />
          <Navigation />
        </div>
        <div className="body">
          <div className="filter">
            <BrandList />
          </div>
          <div className="result">
            <PhoneList />
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
    </>
  )
}

export default App