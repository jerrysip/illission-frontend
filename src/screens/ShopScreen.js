import "./ShopScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Product from "../components/Product";
import Footer from "../components/Footer";
//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const ShopScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="shopscreen">
      <div className="shopscreen-hero">
        {/* <img
          className="hero-image"
          src={green}
          height="500px"
          alt="green-hero"
        ></img> */}
      </div>
      <h2 className="shopscreen__title">Latest Products</h2>
      <div className="shopscreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ShopScreen;
