import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faMinusCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import JeeraPowder from "./Assets/Images/Jeera.jpeg";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 120,
      title: "Jeera Powder",
      qty: 1,
      img: JeeraPowder,
    };
  }

  // Form 1
  increaseQuantity = () => {
    this.setState({
      qty: this.state.qty + 1,
    });
  };

  // Form 2
  decreaseQuantity = () => {
    this.setState((prevState) => {
      return {
        qty: prevState.qty > 0 ? prevState.qty - 1 : prevState.qty,
      };
    });
  };

  deleteItem = () => {
    console.log('Delete Button Code Unavailable')
  }

  render() {
    const { price, title, qty, img } = this.state;
    console.log('render')
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} alt="Item" src={img} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs {price} </div>
          <div style={{ color: "#777" }}>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <FontAwesomeIcon
              className="action-icons"
              icon={faPlusCircle}
              size="lg"
              onClick={this.increaseQuantity}
            />
            <FontAwesomeIcon
              className="action-icons"
              icon={faMinusCircle}
              size="lg"
              onClick={this.decreaseQuantity}
            />
            <FontAwesomeIcon
              className="action-icons"
              icon={faTrash}
              size="lg"
              onClick={this.deleteItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 120,
    width: 100,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
