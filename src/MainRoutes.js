import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";
import AboutUsPage from "./pages/AboutUsPage";
import AdminPage from "./pages/AdminPage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import CreditPage from "./pages/CreditPage";
import DeliveryPage from "./pages/DeliveryPage";
import EditProductPage from "./pages/EditProductPage";
import HomePage from "./pages/HomePage";
import CreditCardPage from "./pages/CreditCardPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductsPage from "./pages/ProductsPage";
import WarrantyPage from "./pages/WarrantyPage";
import { ADMIN } from "./helpers/consts";
import { useAuth } from "./contexts/AuthContext";

import Stock from "./components/News/Stock";

const MainRoutes = () => {
  const { user } = useAuth();
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/aboutus",
      element: <AboutUsPage />,
      id: 2,
    },
    {
      link: "/auth",
      element: <AuthPage />,
      id: 3,
    },
    {
      link: "/products",
      element: <ProductsPage />,
      id: 4,
    },
    {
      link: "/products/:id",
      element: <ProductDetailsPage />,
      id: 5,
    },
    {
      link: "/cart",
      element: <CartPage />,
      id: 6,
    },
    {
      link: "/contacts",
      element: <Contacts />,
      id: 7,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 8,
    },
    {
      link: "/credit",
      element: <CreditPage />,
      id: 9,
    },
    {
      link: "/warranty",
      element: <WarrantyPage />,
      id: 10,
    },
    {
      link: "/delivery",
      element: <DeliveryPage />,
      id: 11,
    },
    {
      link: "/stock",
      element: <Stock />,
      id: 12,
    },
    {
      link: "/credit-card",
      element: <CreditCardPage />,
      id: 13,
    },
  ];

  const PRIVATE_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditProductPage />,
      id: 2,
    },
  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} />
        ))}

        {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                path={item.link}
                element={
                  user.email === ADMIN ? (
                    item.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
              />
            ))
          : null}
      </Routes>
    </>
  );
};

export default MainRoutes;
