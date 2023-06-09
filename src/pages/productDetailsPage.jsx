import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from "../api/Endpoints";
import Constants from "../api/Constants";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const getData = () => {
    axios
      .get(Endpoints.PRODUCT_BY_ID_URL + id)
      .then((response) => setProduct(response.data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="wrapper">
          <div className="row">
            <div className="col-md-6">
              <img
                src={Constants.IMAGE_URL + product.image}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h5>{product.productName}</h5>
              <p>{product.unit}</p>
              <p>{product.description}</p>
              <h2>
                <span>&#8377;</span> {product.price}
                <span className="mrp">
                  <del>
                    <span>&#8377;</span> {product.mrp}
                  </del>
                </span>
              </h2>
              <button className="btn btn-primary">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
