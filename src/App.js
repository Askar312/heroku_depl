import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./MainRoutes";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Header />
        <MainRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
