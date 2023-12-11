import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

import TurmericPowder from "../Assets/Images/Turmeric.jpeg";
import JeeraPowder from "../Assets/Images/Jeera.jpeg";
import CorianderPowder from "../Assets/Images/Coriander.jpeg";
import ChilliPowder from "../Assets/Images/Chilli.jpeg";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          price: 55,
          title: "Haldi Powder",
          qty: 1,
          img: TurmericPowder,
        },
        {
          id: 2,
          price: 120,
          title: "Jeera Powder",
          qty: 1,
          img: JeeraPowder,
        },
        {
          id: 3,
          price: 50,
          title: "Dhaniya Powder",
          qty: 1,
          img: CorianderPowder,
        },
        {
          id: 4,
          price: 70,
          title: "Chilli Powder",
          qty: 1,
          img: ChilliPowder,
        },
      ],
    };
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products,
    });
  };

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty =
      products[index].qty > 0 ? products[index].qty - 1 : products[index].qty;
    this.setState({
      products,
    });
  };

  handleDelete = (id) => {
    let { products } = this.state;
    products = products.filter((product) => product.id !== id);
    this.setState({
      products,
    });
  };

  getCartCount = () => {
    const { products } = this.state;
    let count = 0
    products.forEach((product) => {
      count += product.qty
    })
    return count
  };

  getCartTotal = () => {
    const { products } = this.state;
    let totalAmount = 0
    products.forEach((product) => {
      totalAmount += product.qty * product.price
    })
    return totalAmount
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 id="Heading">Uma Fresh</h1>
          <Navbar count={this.getCartCount()} />
        </header>
        <Cart
          products={this.state.products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDelete={this.handleDelete}
        />
         Total : {this.getCartTotal()}
      </div>
    );
  }
}

export default App;
