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
import React from "react";
import logo from "../../assetcs/images/navbar/logo.svg";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import { NoEncryption } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "../Header/Header.module.css";

const Header = () => {
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
        <Box sx={{ my: 1, mx: 2 }}>
          <img className={styles.logo} src={logo} alt="logo" />
        </Box>
        <Box>
          <Input
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
        <Button sx={{ my: 2, color: "white" }}>
          <Badge color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </Button>
      </Box>
    </>
  );
};

export default Header;
