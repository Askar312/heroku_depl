import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";
import style from "../Product/style/ProductDetail.module.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { getProductDetails, productDetails } = useProducts();

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  return (
    <div className={style.detailsWrap}>
      <div>
        <img className={style.detailImg} src={productDetails.picture} alt="" />
      </div>

      <div className={style.detailsList}>
        <h2 className="title">
          <span className={style.detailSpan}>Наименование - </span>
          {productDetails.name}
        </h2>
        <h3 className="price">
          <span className={style.detailSpan}>Цена - </span>
          {productDetails.price}
        </h3>
        <h3 className="descr">
          <span className={style.detailSpan}>Описание - </span>
          {productDetails.description}
        </h3>
      </div>
    </div>
  );
};

export default ProductDetails;
