// App.jsx
import React from "react";
import PhoneList from "./components/phones";
import BrandList from "./components/brands";
import Header from "./components/nav/header";
import Navigation from "./components/nav/navbar";
import Footer from "./components/footer";
import Search from "./components/search";
import FetchComponent from "./components/fetchConecction";
import Offer from "./components/offer";

const App = () => {
    const urls = [
        "https://phone-specs-api-git-master-azharimm.vercel.app/latest",
        "http://phone-specs-api-git-master-azharimm.vercel.app/brands/casio-phones-77",
        "https://phone-specs-api-git-master-azharimm.vercel.app/brands"
    ];

    return (
        <FetchComponent urls={urls}>
            {([latestPhones, popularPhones, brands]) => (
                <div>
                    <div className="nav">
                        <Header />
                        <Navigation />
                    </div>
                    <div className="body">
                        <div className="filter">
                            <BrandList brands={brands.data} />
                        </div>
                        <div className="result">
                            <Search />
                            <PhoneList phones={latestPhones.data.phones} />
                        </div>
                    </div>
                    <Offer />
                    <PhoneList phones={popularPhones.data.phones} title="Nuestros Productos Mas Vendidos" />
                    <div className="footer">
                        <Footer />
                    </div>
                </div>
            )}
        </FetchComponent>
    );
};

export default App;
