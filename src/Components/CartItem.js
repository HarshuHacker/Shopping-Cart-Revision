import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faMinusCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const CartItem = (props) => {
  const { product, onIncreaseQuantity, onDecreaseQuantity, onDelete } = props;
  const { price, title, qty, img } = product;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} alt="Item" src={img} />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "#777" }}>Rs {price}.00 </div>
        <div style={{ color: "#777" }}>Qty: {qty} </div>
        <div className="cart-item-actions">
          {/* Buttons */}
          <FontAwesomeIcon
            className="action-icons"
            icon={faPlusCircle}
            size="lg"
            onClick={() => onIncreaseQuantity(product)}
          />
          <FontAwesomeIcon
            className="action-icons"
            icon={faMinusCircle}
            size="lg"
            onClick={() => onDecreaseQuantity(product)}
          />
          <FontAwesomeIcon
            className="action-icons"
            icon={faTrash}
            size="lg"
            onClick={() => onDelete(product.id)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 120,
    width: 100,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
