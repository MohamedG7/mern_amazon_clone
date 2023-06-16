import React, { useEffect, useState } from 'react'
import '../style/style.css'
import Product from '../Components/Product'
import Header from '../Components/Header'
import { publicRequest } from '../Server/index';

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await publicRequest.get("/products/");
      setProducts(data);
    };
    getProducts();
  }, []);
    return (
        <div className = 'home'>
            <Header />
            <img className= 'home__banner' src = 'https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/All_Or_Nothing_Tottenham_Hotspur_S1/AONT_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB406302419_.jpg' />
            <div className = "home__row">
              {
                products.slice(0, 8)
                .map(({_id, title, image, price, rating}) => <Product
                  id = {_id}
                  title = {title}
                  image = {image}
                  price = {price}
                  rating = {rating}
                />)
              }
            </div>
        </div>
    )
}

export default Home
