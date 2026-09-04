import "./App.css";
import "./Styles/Main.scss";
import { getProducts } from "./API/productApi";
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await getProducts();

        setProducts(data);
      } catch (err) {
        setError("unable to load product");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div className="app">
      <main className="main">
        <div className="hero"></div>
        <div className="product-section">
          <div className="product-section_header">
            <div>
              {error && !loading && (
                <div className="error-state">
                  <h3>some thing is wrong</h3>
                  <p>{error}</p>
                  <button onClick={() => window.location.reload()}>
                    try again
                  </button>
                </div>
              )}
              {!error && !loading && <ProductList products={products} />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
