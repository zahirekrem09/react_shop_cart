import React, { Component } from "react";
import formatCurrency from "../unil";
import Fade from 'react-reveal/Fade';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { showCheckout: false, name: "", email: "", adress: "" };
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  createOrder = (e) => {
    e.preventDefault();
    const order = {
        name:this.state.name,
        email:this.state.email,
        adress:this.state.adress,
        cartItems:this.props.cartItems
    };
    this.props.createOrder(order);
  }
  render() {
    const { cartItems } = this.props;

    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header"> Cart is empty</div>
        ) : (
          <div className="cart cart-header">
            {" "}
            You have {cartItems.length} in the cart{" "}
          </div>
        )}
        <div>
          <div className="cart">
              <Fade left cascade>
            <ul className="cart-items">
              {cartItems.map((item) => (
                <li key={item._id}>
                  <div>
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div>
                    <div>{item.title}</div>
                    <div className="right">
                      {formatCurrency(item.price)} x {item.count}
                      {"  "}
                      <button
                        className="btn btn-primary"
                        onClick={() => this.props.removeFromCart(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            </Fade>
          </div>
          {cartItems.length !== 0 && (
            <div>
              <div className="cart">
                <div className="total">
                  <div>
                    Total:{" "}
                    {formatCurrency(
                      cartItems.reduce((a, c) => a + c.price * c.count, 0)
                    )}
                  </div>
                  <button
                    onClick={() => {
                      this.setState({ showCheckout: true });
                    }}
                    className="btn btn-primary"
                  >
                    Proceed
                  </button>
                </div>
              </div>
              {this.state.showCheckout && (
                <div className="cart">
                    <Fade right cascade>
                  <form onSubmit={this.createOrder}>
                  
                    <ul className="form-container">
                      <li>
                        <label htmlFor=""> Email </label>
                        <input
                          type="email"
                          name="email"
                          required
                          onChange={this.handleInput}
                        />
                      </li>

                      <li>
                        <label htmlFor=""> Name </label>
                        <input
                          type="text"
                          name="name"
                          required
                          onChange={this.handleInput}
                        />
                      </li>
                      <li>
                        <label htmlFor=""> Adress </label>
                        <input
                          type="text"
                          name="adress"
                          required
                          onChange={this.handleInput}
                        />
                      </li>
                      <li>
                        <button type="submit" className="btn btn-primary">
                          Checkout
                        </button>
                      </li>
                    </ul>
                  </form>
                  </Fade>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}
