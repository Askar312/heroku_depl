import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";
import Header from "./components/Header/Header";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Navbar />
          <Header />
          <MainRoutes />
          {/* <Footer /> */}
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
