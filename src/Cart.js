import React from "react";
import CartItem from "./CartItem";
import TurmericPowder from "./Assets/Images/Turmeric.jpeg";
import JeeraPowder from "./Assets/Images/Jeera.jpeg";
import CorianderPowder from "./Assets/Images/Coriander.jpeg";
import ChilliPowder from "./Assets/Images/Chilli.jpeg";

class Cart extends React.Component {
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
    products = products.filter((product) => product.id != id);
    this.setState({
      products,
    });
  };

  render() {
    const { products } = this.state;
    return (
      <div className="cart-component">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={this.handleIncreaseQuantity}
              onDecreaseQuantity={this.handleDecreaseQuantity}
              onDelete={this.handleDelete}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
