import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import ProductList from "../components/Product/ProductList";
import { useProducts } from "../contexts/ProductContext";

const ProductsPage = () => {
  const { products, getProducts } = useProducts();
  const [page, setPage] = useState(0);

  const productPerPage = 6;
  const location = useLocation();

  useEffect(() => {
    getProducts();
  }, [location.search]);

  return (
    <div>
      <ProductList />
    </div>
  );
};

export default ProductsPage;
