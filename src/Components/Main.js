import Products from "./Products";
import { BrowserRouter as Router } from "react-router-dom";

import { useContext } from "react";
import UserContext, { UserProvider } from "../Context/UserContext";

function Main(props) {
  let data = useContext(UserContext);

  return (
    <Router>
      <UserProvider
        value={{
          products: data.products,
          selectedSize: data.selectedSize,
          handleAddToCart: props.handleAddToCart,
        }}
      >
        <div className="main flex-80">
          <Products />
        </div>
      </UserProvider>
    </Router>
  );
}

export default Main;
