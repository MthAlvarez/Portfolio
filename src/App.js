import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from "./Pages/Home";
import Initial from "./Pages/Initial";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Knowledge from "./Pages/Knowledge";
import Certificates from "./Pages/Certificates";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/about" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;