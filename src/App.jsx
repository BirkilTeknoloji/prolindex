import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ITServicesPage from './pages/ITServicesPage';
import CosmeticsPage from './pages/CosmeticsPage';
import CoffeeTradingPage from './pages/CoffeeTradingPage';
import PartnersPage from './pages/PartnersPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/it-services" element={<ITServicesPage />} />
          <Route path="/cosmetics" element={<CosmeticsPage />} />
          <Route path="/coffee-trading" element={<CoffeeTradingPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
