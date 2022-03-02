import { Grid } from "@mui/material";
import React, { useEffect } from "react";

import { useProducts } from "../../contexts/ProductContext";
import MediaCard from "../Product/ProductCard";
import SideBar from "../SideBar/SideBar";

const ProductList = ({ products }) => {
  const { getProducts } = useProducts();
  console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div>
        <SideBar />
      </div>
      <div style={{ display: "flex" }}>
        <div className="blog-left">
          <Grid container>
            {products ? (
              products.map((item) => (
                <Grid item>
                  <MediaCard item={item} key={item.id} />
                </Grid>
              ))
            ) : (
              <>
                <h2>..Loading</h2>
              </>
            )}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default ProductList;
