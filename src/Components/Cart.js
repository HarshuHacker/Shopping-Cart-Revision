import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { products, onIncreaseQuantity, onDecreaseQuantity, onDelete } = props;
  return (
    <div className="cart">
      {products.map((product) => {
        return (
          <CartItem
            product={product}
            key={product.id}
            onIncreaseQuantity={onIncreaseQuantity}
            onDecreaseQuantity={onDecreaseQuantity}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
};

export default Cart;
