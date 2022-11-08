import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Collection from "../../components/Produto/Collection"
import Linkicons from "../../components/Produto/Collection/Linkicons/Linkicons.js";
import ProdutosAlta from "../../components/ProdutosAlta/produtosAlta";
import Carrossel from "../../components/carrossel"
import BannerFooter from "../../components/BannerFooter";
let Home = () => {
    return(
        <div style={{backgroundColor: '#F9F8FE',display:'flex',justifyContent:"center",flexDirection:"column"}}>
                <Header/>
                <Carrossel/>
                <Collection/>
                <Linkicons/>
                <ProdutosAlta/>
                <BannerFooter/>
                <Footer/>
        </div>
    );
}
export default Home;