import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";
import Social from "./components/Social";

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import ShopScreen from "./screens/ShopScreen";
import FreeShipping from "./components/FreeShipping";
import OurStory from "./screens/OurStory";
import SignIn from "./screens/Signin";
import Product from "./components/Product";
import Success from "./components/Success";
function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Social />
      <FreeShipping />
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main className="app">
        <Switch>
          <Route exact path="/home" component={HomeScreen} />
          <Route exact path="/shop" component={ShopScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/ourstory" component={OurStory} />
          <Route exact path="/products" component={Product} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignIn} />
          <Route exact path="/success" component={Success} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
