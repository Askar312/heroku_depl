import {
  AppBar,
  Icon,
  IconButton,
  Input,
  InputBase,
  Button,
  Badge,
} from "@mui/material";
import { Box, style } from "@mui/system";
import React, { useEffect, useState } from "react";
import logo from "../../assetcs/images/navbar/logo.svg";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import { NoEncryption } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "../Header/Header.module.css";
import { useProducts} from "../../contexts/ProductContext";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { ADMIN } from "../../helpers/consts";

const Header = () => {
  const {
    handleLogout,
    user: { email },
  } = useAuth();

  const { cart } = useProducts();
  const { getProducts } = useProducts();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  const ariaLabel = { "aria-label": "description" };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          width: "100%",
          height: "10vh",
          bgcolor: "#212121",
          borderTop: 1,
          borderColor: "white",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box onClick={() => navigate("/")} sx={{ my: 1, mx: 2 }}>
          <img className={styles.logo} src={logo} alt="logo" />
        </Box>
        <Box>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              fontFamily: "-apple-system",
              borderRadius: 4,
              width: "50vw",
              border: 1,
              color: "white",
              borderColor: "white",
              flexWrap: "wrap",
            }}
            placeholder="        Поиск товаров"
          />
        </Box>

        {email == ADMIN ? (null) : (
              <Link to="/cart">
                <Button sx={{ my: 2, color: 'white' }}>
                  <Badge
                    badgeContent={cart?.products ? cart.products.length : 0}
                    color="secondary"
                  >
                    <ShoppingCartIcon />
                  </Badge>
                </Button>
              </Link>
            )}
        
      </Box>
    </>
  );
};

export default Header;
