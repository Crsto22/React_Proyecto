import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import PromoModal from "./components/PromoModal"; 

function App() {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const modalTimer = setTimeout(() => {
        setIsModalOpen(true); 
      }, 3000); 

      return () => clearTimeout(modalTimer);
    }
  }, [loading]);

  if (loading) {
    return <LoadingScreen isLoading={loading} setShowLoading={setLoading} />;
  }

  return (
    <Router>
      <Navbar />
      <PromoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> 
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
