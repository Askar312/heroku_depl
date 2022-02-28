import React from "react";
import { useAuth } from "../contexts/AuthContext";
import Login from "../components/Auth/Login";
import HomePage from "./HomePage";

const AuthPage = () => {
  const { user } = useAuth();
  return <>{user ? <HomePage /> : <Login />}</>;
};

export default AuthPage;
