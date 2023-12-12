import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebaseInfo from "../Assets/Files/firebaseConfig";

import {
  getFirestore,
  addDoc,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

const db = getFirestore(firebaseInfo);
const citiesCol = collection(db, "products");

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
  }

  componentDidMount() {
    console.log("Mount");
    onSnapshot(citiesCol, (querySnapshot) => {
      let temporaryArr = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        data["id"] = doc.id;
        temporaryArr.push(data);
      });
      this.setState({
        products: temporaryArr,
        loading: false,
      });
    });
    // this.addProducts()
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    updateDoc(doc(citiesCol, products[index].id), {
      qty: products[index].qty + 1,
    });
  };

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    updateDoc(doc(citiesCol, products[index].id), {
      qty:
        products[index].qty > 0 ? products[index].qty - 1 : products[index].qty,
    });
  };

  handleDelete = (id) => {
    deleteDoc(doc(citiesCol, id), {});
  };

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;
    let totalAmount = 0;
    products.forEach((product) => {
      totalAmount += product.qty * product.price;
    });
    return totalAmount;
  };

  addProducts = () => {
    addDoc(collection(db, "products"), {
      title: "New Masala",
      img: "fdfsfs",
      price: 100,
      qty: 1,
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1 id="heading">Uma Fresh</h1>
          <Navbar count={this.getCartCount()} />
        </header>
        <Cart
          products={this.state.products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDelete={this.handleDelete}
        />
        Total : {this.getCartTotal()}
        {this.state.loading === true ? <p>Loading Products...</p> : <p></p>}
      </div>
    );
  }
}

export default App;
