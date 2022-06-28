import React from "react";
import Aside from "./Aside";
import Main from "./Main";
import Cart from "./Cart";
import data from "../data.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedSize: [],
      cartItems: [],
    };
  }

  componentDidMount() {
    if (localStorage.carts) {
      this.setState({ cartItems: JSON.parse(localStorage.carts) || [] });
    }
    window.addEventListener("beforeunload", this.handleUpdateLocalStorage);
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.handleUpdateLocalStorage);
  }

  handleUpdateLocalStorage = () => {
    localStorage.setItem("carts", JSON.stringify(this.state.cartItems));
  };

  handleAddToCart = (p) => {
    let isPresent =
      this.state.cartItems.findIndex((product) => product.id === p.id) !== -1;
    if (isPresent) {
      this.incrementQuantity(p.id);
    } else {
      this.setState((prevState) => ({
        cartItems: prevState.cartItems.concat({ ...p, quantity: 1 }),
      }));
    }
  };

  incrementQuantity = (id) => {
    this.setState((prevState) => {
      let updatedCartItems = prevState.cartItems.map((p) => {
        if (p.id === id) {
          return {
            ...p,
            quantity: p.quantity + 1,
          };
        }
        return p;
      });
      return {
        cartItems: updatedCartItems,
      };
    });
  };

  decrementQuantity = (id) => {
    this.setState((prevState) => {
      let updatedCartItems = prevState.cartItems.map((p) => {
        if (p.id === id) {
          return {
            ...p,
            quantity: p.quantity - 1,
          };
        }
        return p;
      });
      return {
        cartItems: updatedCartItems,
      };
    });
  };

  deleteItem = (id) => {
    this.setState((prevState) => {
      let updatedCartItems = prevState.cartItems.filter((p) => {
        return p.id !== id;
      });
      return {
        cartItems: updatedCartItems,
      };
    });
  };

  handleClick = (size) => {
    if (this.state.selectedSize.includes(size)) {
      this.setState((prevState) => ({
        selectedSize: prevState.selectedSize.filter((s) => s !== size),
      }));
    } else {
      this.setState((prevState) => ({
        selectedSize: prevState.selectedSize.concat(size),
      }));
    }
  };

  render() {
    let products = data.products;

    return (
      <>
        <div className="wrapper flex space-between">
          <Aside
            products={products}
            selectedSize={this.state.selectedSize}
            handleClick={this.handleClick}
          />
          <Main
            products={products}
            selectedSize={this.state.selectedSize}
            handleAddToCart={this.handleAddToCart}
          />
          <Cart
            cartItems={this.state.cartItems}
            incrementQuantity={this.incrementQuantity}
            decrementQuantity={this.decrementQuantity}
            deleteItem={this.deleteItem}
          />
        </div>
      </>
    );
  }
}

export default App;
