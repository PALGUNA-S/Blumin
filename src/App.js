import { Box } from '@mui/material';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Register from './components/Register';
import About from './pages/AboutUs/AboutUs';
import Academia from './pages/Academia/Academia';
import ContactUs from './pages/ContactUs/ContactUs';
import Home from './pages/Home/Home';
import Industry from './pages/Industry/Industry';
import ScrollTop from './components/ScrollTop';
import RegisterHome from './pages/Register/RegisterHome';

function App() {
  const location = useLocation();
  const showRegister = location.pathname !== '/registerhome';

  return (
    <Box sx={{ background: 'linear-gradient(270deg, #E0E0E0 3.99%, rgba(231, 231, 231, 0.52) 73.83%);' }}>
      <Navbar />
      <ScrollTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academia" element={<Academia />} />
          <Route path="/industry" element={<Industry />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/registerhome" element={<RegisterHome />} />
        </Routes>
      </ScrollTop>
      {showRegister && <Register />}
      <Footer />
    </Box>
  );
}

export default App;
