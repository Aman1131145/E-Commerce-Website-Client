import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Categories from "./pages/collection/Collection";
import Home from "./pages/home/Home";
import ProductDetail from "./pages/productDetail/ProductDetail";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./redux/CategorySlice";
import { useEffect } from "react";
import Payments from "./components/payments/Payments";
import FooterItem from "./components/footerItem/FooterItem";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    return (
        <div className="App">
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/category/:categoryId?"
                        element={<Categories />}
                    />
                    <Route
                        path="/products/:productId"
                        element={<ProductDetail />}
                    />
                    <Route
                        path="/payments/:status"
                        element={<Payments />}
                    />
                    <Route
                        path="/footer/:info"
                        element= {<FooterItem/>}
                    />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
