import "./HomeScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Footer from "../components/Footer";
import Product from "../components/Product";
import { Carousel } from "react-bootstrap";
import carousel1 from "../images/white.JPEG";
import carousel2 from "../images/triple.jpg";
import carousel3 from "../images/jarturf.jpg";
//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <div className="homescreen-hero">
        {/* <img
          className="hero-image"
          src={green}
          height="500px"
          alt="green-hero"
        ></img> */}
      </div>
      <div className="first-quote">
        -"Take your candle and light the world,
        <br className="break" /> scent for everyday of the week"
      </div>
      <h2 className="homescreen__title">Featured Products</h2>
      <div className="homescreen__products">
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
      <div className="second-quote">
        "Just as a candle cannot burn without fire, men cannot live without
        travel" -Buddha
      </div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel2} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel1} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <Footer />
    </div>
  );
};

export default HomeScreen;
