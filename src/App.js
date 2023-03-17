import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Catalog from "./components/Catalog";
import Price from "./components/Price";
import AboutUs from "./components/AboutUs";
import "./components/css/style.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/home/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/price" element={<Price />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
