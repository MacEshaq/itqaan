import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import ProgressNotes from "./components/ProgressNotes";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
