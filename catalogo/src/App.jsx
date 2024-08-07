import React, { useState } from "react";
import PhoneList from "./components/phones";
import BrandList from "./components/brands";
import Header from "./components/nav/header";
import Navigation from "./components/nav/navbar";
import Footer from "./components/footer";
import Search from "./components/search";
import FetchComponent from "./components/fetchConecction";
import Offer from "./components/offer";
import Detail from "./components/detail";
import ProductInformation from "./components/productInformation";

const App = () => {
    const [showDetail, setShowDetail] = useState(false);
    const [selectedPhone, setSelectedPhone] = useState(null);

    const handleDetail = (phone) => {
        setSelectedPhone(phone);
        setShowDetail(true);
    };

    const handleBack = () => {
        setShowDetail(false);
        setSelectedPhone(null);
    };

    const urls = [
        "https://phone-specs-api-git-master-azharimm.vercel.app/latest",
        "https://phone-specs-api-git-master-azharimm.vercel.app/brands/casio-phones-77",
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
                    {!showDetail ? (
                        <>
                            <div className="body">
                                <div className="filter">
                                    <BrandList brands={brands.data} />
                                </div>
                                <div className="result">
                                    <Search />
                                    <PhoneList phones={latestPhones.data.phones} handleDetail={handleDetail} />
                                </div>
                            </div>
                            <Offer />
                            <PhoneList phones={popularPhones.data.phones} title="Nuestros Productos Más Vendidos" handleDetail={handleDetail} />
                        </>
                    ) : (
                        <>
                            {selectedPhone && (
                                <FetchComponent urls={[`https://phone-specs-api-git-master-azharimm.vercel.app/${selectedPhone.slug}`]}>
                                    {([phoneDetail]) => (
                                        <>
                                            <Detail phone={selectedPhone} handleBack={handleBack} />
                                            <ProductInformation phone={phoneDetail.data} />
                                            <PhoneList phones={popularPhones.data.phones} title="Nuestros Productos Más Vendidos" handleDetail={handleDetail} />
                                        </>
                                    )}
                                </FetchComponent>
                            )}
                        </>
                    )}
                    <div className="footer">
                        <Footer />
                    </div>
                </div>
            )}
        </FetchComponent>
    );
};

export default App;
