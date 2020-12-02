import React, { Component } from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";
import "../App.css";
import B_Coffee from "./pic/Black_coffee.jpg";
import Cappuccino from "./pic/Cappuccino.jpg";
import iced from "./pic/iced-coffee.jpg";
import Orange from "./pic/Orange_Juice.jpg";
import B_Coffee_H from "./pic/InkedBlack_coffee_copy_LI.jpg";
import Cappuccino_H from "./pic/InkedCappuccino - Copy_LI.jpg";
import iced_H from "./pic/Inkediced-coffee-Copy_LI.jpg";
import Orange_H from "./pic/InkedOrange_Juice-copy_LI.jpg";
import Item from "./item";


class OrderForm extends Component {
  state = {
    items: [
      {
        id: 1,
        src: B_Coffee,
        title: "Black Coffee",
        hoversrc: B_Coffee_H,
        price: 3,
      },
      {
        id: 2,
        src: Cappuccino,
        title: "Cappuccino",
        hoversrc: Cappuccino_H,
        price: 2,
      },
      { id: 3, src: iced, title: "Iced Coffee", hoversrc: iced_H, price: 4 },
      {
        id: 4,
        src: Orange,
        title: "Orange Juice",
        hoversrc: Orange_H,
        price: 2,
      },
    ],
    total: 0,
  };

  handlePurchase = (price, title) => {
    var subtotal = document.getElementById("total").value;
    subtotal = parseInt(subtotal);
    document.getElementById("total").value = (subtotal + price).toFixed(2);
    document.getElementById("order-list").value +=
      price.toFixed(2) + " " + title + "\n";
      const submitButton = document.getElementById("submit");
     submitButton.disabled = false;
  };
  
  handleReset = () => {
    document.getElementById("total").value = 0;
    document.getElementById("order-list").value = '';
  };


  render() {
    return (
        <Router>
      <div className="container">
        <h1 className="font-weight-light text-center  mt-4 mb-4">
          Please Select Your Drink
        </h1>
        <div className="row">
          {this.state.items.map((item) => (
            <Item
              key={item.id}
              src={item.src}
              hoversrc={item.hoversrc}
              title={item.title}
              price={item.price}
              handlePurchase={this.handlePurchase}
            />
          ))}
        </div>
        <form method="get">
          <div className="form-group">
            <label htmlFor="order-list">Your order:</label>
            <textarea
              className="form-control"
              id="order-list"
              rows="6"
              disabled
            ></textarea>
            <label htmlFor="total " className="total">
              Total:
            </label>
            <input className="mt-2  ml-2 mr-2" type="text" id="total" disabled value={this.state.total} />
            <p  id="totaltest"></p>
          </div>
          <br />
          <div class="alert col-5 alert-warning" role="alert">Choose at least an item!</div>
    <NavLink to={"/Confirmation"}>
    <button
        className="btn btn-primary btn-sm mb-2" id="submit"
        onClick={this.handleSubmit}
         disabled>Place Your Order!
       </button>

    </NavLink>
          <button onClick={this.handleReset} className="btn btn-warning btn-sm mb-2 ml-2" id="reset">
            Clear order
          </button>
        </form>
      </div>
    
  <Route
    path="/"
    exact
    strict
    render={() => {
      return "";
    }}
  />
  <Route
    path="/Confirmation"
    exact
    strict
    render={() => {
      return (
        <div className="container">
          <div>
            <nav className="absolute text-center text-primary  bg-white">
              <h2>Coffee React</h2>
              <p>The best Coffee in Montreal!</p>
              <hr></hr>
            </nav>
          </div>

          <div className="absolute_msg">
            <h1 className="text ">Thanks You!</h1>
            <h3 className="text-h3">
              Thanks for visiting Coffee React
            </h3>
            <NavLink to={"/"}>
              <button className="btn btn-warning btn-sm mb-2  back_btn">
                Place another order
              </button>{" "}
            </NavLink>
          </div>
        </div>
      );
    }}
  />

</Router>
    

    );
  }
}

export default OrderForm;
