import React, { useEffect } from "react";
import styles from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "../Redux/action";
import axios from "axios";
const Cart = () => {
  const data = useSelector((state) => state.item);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart(data));
  }, []);
  

  return (
    <div className={styles.container}>
      {data.length > 0 &&
        data.map((ele) => {
          return (
            <div className={styles.card} key={ele.id}>
              <div>
              <img src={ele.image} alt="" />
              </div>
              <div>
                <p>Category : {ele.category}</p>
                <p>Product Name : {ele.title}</p>
                <p>Price : {ele.price}</p>
                <button onClick={()=>{
                  axios.delete(`  http://localhost:3000/posts/${ele.id}`).then(()=>{
                    dispatch(getCart(data));
                  })
                }} >Delete</button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Cart;
