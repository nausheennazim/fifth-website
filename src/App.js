import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import CartPage from "./pages/CartPage";
import NewArrivalsPage from "./pages/NewArrivalsPage";
import NewsLetterDialog from "./pages/NewsLetterDialog";

function App() {
  const [showSignUp, setShowSignUp] = useState(true)

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openNewsletterDialog = () => {
    setIsDialogOpen(true)
  }

  return (
    <Router basename="/fifth-website">
      <div>
        {showSignUp && (
          <div style={{
            width: "100%",
            height: "25px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 100,
            fontSize: "12px"
          }}>
            <span style={{ flex: 1, textAlign: "center", zIndex: 10000 }}>
              Sign up and get 20% off on your first order.
              <a onClick={() => { setIsDialogOpen(true) }} style={{ marginLeft: "5px", textDecoration: "underline", zIndex: 10000 }}>Sign Up Now</a>
            </span>
            <FontAwesomeIcon
              icon={faTimes}
              onClick={() => { setShowSignUp(false) }}
              style={{ marginRight: "10px", zIndex: 10000 }}
            />
          </div>
        )}
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage openNewsletterDialog={openNewsletterDialog} />} />
            <Route path="/cart" element={<CartPage openNewsletterDialog={openNewsletterDialog} />} />
            <Route path="/newArrivals" element={<NewArrivalsPage openNewsletterDialog={openNewsletterDialog} />} />
          </Routes>
        </main>
        <Footer />
        {isDialogOpen && <NewsLetterDialog onClose={() => { setIsDialogOpen(false) }} />}
      </div>
    </Router>
  );
}

export default App;
