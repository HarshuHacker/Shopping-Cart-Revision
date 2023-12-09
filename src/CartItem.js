import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle, faTrash } from '@fortawesome/free-solid-svg-icons'
import JeeraPowder from './Assets/Images/Jeera.jpeg'

class CartItem extends React.Component {
  constructor () {
    super();
    this.state = {
      price: 120,
      title: 'Jeera Powder',
      qty: 1,
      img: JeeraPowder
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
  }
  increaseQuantity = () => {
    console.log('this', this.state);
  }
  render () {
    const { price, title, qty, img } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} alt='Item' src={img}/>
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <FontAwesomeIcon className='action-icons' icon={faPlusCircle} size="lg" />
            <FontAwesomeIcon className='action-icons' icon={faMinusCircle} size="lg" />
            <FontAwesomeIcon className='action-icons' icon={faTrash} size="lg" />
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
    background: '#ccc'
  }
}

export default CartItem;