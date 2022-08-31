import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./Common.module.css";
import { useDispatch } from "react-redux";
import { postCart } from "../Redux/action";
import { useNavigate } from "react-router-dom";
const Product = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://blueproduct.herokuapp.com/product")
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
            <img src={ele.image_link} alt="" />

            <p>Brand : {ele.brand}</p>
            <p>{ele.name}</p>
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
