import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./Product.module.css";
import { useDispatch } from "react-redux";
import { postCart } from "../Redux/action";
import { useNavigate } from "react-router-dom";
const Product = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((r) => setData(r.data))
      .catch((e) => e);
  }, []);

  const addToCart = (ele) => {
    dispatch(postCart(ele));
    alert("Product add in Cart");
    navigate("/cart");
  };

  return (
    <div className={styles.container}>
      {data.map((ele) => {
        return (
          <div className={styles.card} key={ele.id}>
            <img src={ele.image} alt="" />

            <p>Category : {ele.category}</p>
            <p>{ele.title}</p>
            <p>Price : {ele.price}</p>

            <button
              onClick={() => {
                addToCart(ele);
              }}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
