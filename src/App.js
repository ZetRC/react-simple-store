import Navbar from './components/Navbar'
import Footer from "./components/Footer"
import ProductsList from "./pages/ProductsList"
import Cart from "./pages/Cart"
import NotFound from "./pages/NotFound"
import About from "./pages/About"
import Products from "./pages/Products"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router basename='react-simple-store'>
        <Navbar/>
          <Routes>
            <Route path="/products/:id" element={<Products/>}></Route>
            <Route path="/" element={<ProductsList/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
