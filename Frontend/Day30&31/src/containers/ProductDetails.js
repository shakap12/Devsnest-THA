import React from "react";
import axios from "axios";
import { useEffect } from "react";
import {
  selectedProducts
  
} from "../redux/actions/productAction";
import { removeSelectedProducts } from "../redux/actions/productAction";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
export default function ProductDetails() {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { productId } = useParams();
  console.log(product);
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(selectedProducts(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return()=>{ 
        dispatch(removeSelectedProducts());
    }
  }, [productId]);

  return (
    <div class="ui items">
      <div class="item" style={{ marginLeft: "200px", marginTop: "100px" }}>
        <div class="image">
          <img src={product.image} />
        </div>
        <div class="content">
          <a class="header">{product.title}</a>
          <div class="meta">
            <span>{product.category}</span>
          </div>
          <div class="description">
            <p>{product.description}</p>
          </div>
          <div class="extra">
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}