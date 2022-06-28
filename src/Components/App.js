import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Aside from "./Aside";
import Main from "./Main";
import Cart from "./Cart";
import UserInfo from "./UserInfo";
import PaymentForm from "./PaymentForm";
import CheckOutPage from "./CheckOutPage";
import data from "../data.json";

import { UserProvider } from "../Context/UserContext";

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
        <Router>
          <UserProvider
            value={{
              products: products,
              selectedSize: this.state.selectedSize,
            }}
          >
            <Header />
            <div className="wrapper flex space-between">
              <Switch>
                <Route path="/" exact>
                  <Aside handleClick={this.handleClick} />
                  <Main handleAddToCart={this.handleAddToCart} />
                  <Cart
                    cartItems={this.state.cartItems}
                    incrementQuantity={this.incrementQuantity}
                    decrementQuantity={this.decrementQuantity}
                    deleteItem={this.deleteItem}
                  />
                </Route>
                <Route path="/checkout" exact>
                  <UserInfo />
                </Route>
                <Route path="/payment" exact>
                  <PaymentForm />
                </Route>
                <Route path="/final" exact>
                  <CheckOutPage />
                </Route>
              </Switch>
            </div>
          </UserProvider>
        </Router>
      </>
    );
  }
}

export default App;
