import React, { useState, useEffect } from 'react'
import StarIcon from '@material-ui/icons/Star';
import { yellow } from '@material-ui/core/colors';
import { useCart } from '../Server/Context/Hooks/cartHook';
import '../style/style.css';
import { publicRequest } from '../Server/index'

function Product({id, title, image, price, rating}) {
  const [ product, setProduct ] = useState({});
  const { addProduct } = useCart();
  useEffect(() => {
    const getItem = async () => {
      const { data } = await publicRequest.get(`/products/${id}`);
      setProduct(data);
    };
    getItem();
  }, []);
    return (
        <div className = "product">
            <div className = "product__info">
              <p>{title}</p>
              <p className = "product__price">
                <small>$</small>
                <strong>{price}</strong>
              </p>
              <div className = "product__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p><StarIcon style={{ color: yellow[700] }} /></p>
                    ))
                }
              </div>
            </div>
            
            <img src = {image} alt = "" />
            <button onClick = {() => addProduct(product)}> Add To Cart </button>
        </div>
    )
}

export default Product
