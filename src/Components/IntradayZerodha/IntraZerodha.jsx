import { React, useState} from "react";
import "./IntraZerodha.css";
import IntraBuyZ from "./IntraBuyZ";
import IntraSellZ from "./IntraSellZ";
import zerodhaLogo from "./Assets/zerodha-logo.svg";

function IntraZerodha() {
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [deliveryType, setDeliveryType] = useState("false");

  function quantityInputHandler(e) {
    if (!e.target.value) {
      setQuantity(0);
      document.getElementById("qty-error").innerHTML = "";
    } else if (e.target.value < 0 || e.target.value === 0) {
      setQuantity(0);
      document.getElementById("qty-error").innerHTML =
        "Value must be greater than 0!";
    } else {
      setQuantity(e.target.value);
      document.getElementById("qty-error").innerHTML = "";
    }
  }
  function priceInputHandler(e) {
    if (!e.target.value) {
      setPrice(0);
      document.getElementById("price-error").innerHTML = "<br />";
    } else if (e.target.value < 0 || e.target.value === 0) {
      setPrice(0);
      document.getElementById("price-error").innerHTML =
        "Value must be greater than 0!";
    } else {
      setPrice(e.target.value);
      document.getElementById("price-error").innerHTML = "<br />";
    }
  }
  function updateSellHandler() {
    setDeliveryType("true");
  }
  function updateBuyHandler() {
    setDeliveryType("false");
  }

  return (
    <div className="container">
      <div className="cal-broker-name">
        <div className="cal-name"><h2><b>Intraday Brokerage Calculator for</b></h2>{" "} </div>
        <img src={zerodhaLogo} alt="logo" className="broker-logo" />
      </div>
      <div className="input-container">
        <div className="tab-container">
          <div className="tabs">
            <div
              className="tab-item lt-mar amount-heading-font "
              id={deliveryType === "false" ? "active-btnz" :"" }
              onClick={updateBuyHandler}
            >
              Intraday - Buy
            </div>
            <div
              className="tab-item rt-mar amount-heading-font"
              id={deliveryType === "false" ? "" :"active-btnz" }
              onClick={updateSellHandler}
            >
              Intraday - Sell
            </div>
          </div>
          <div className="input-div">
            
            <div className="input-section-one">
              <div className="input-label amount-heading-font">
                <label htmlFor="price">Share Price</label>
                <br />
              </div>
              <div className="input-area">
                <input
                  className="input-field amount-font"
                  onChange={priceInputHandler}
                  id="price"
                  type="number"
                  placeholder="Price of the shares"
                  autoComplete="off"
                  required
                />
                <div id="price-error">
                  <br />
                </div>
              </div>
            </div>
            <div className="input-section-one">
              <div className="input-label amount-heading-font">
                <label htmlFor="shares">Share Quantity</label>
                <br />
              </div>
              <div className="input-area">
                <input
                  className="input-field amount-font"
                  onChange={quantityInputHandler}
                  id="quantity"
                  type="number"
                  placeholder="Quantity of the shares"
                  autoComplete="off"
                  required
                />
                <div id="qty-error">
                  <br />
                </div>
              </div>
            </div>
          </div>
          {/* -------------- */}
          {deliveryType === "false" ? (
            <IntraBuyZ p={price} q={quantity} />
          ) : (
            <IntraSellZ p={price} q={quantity} />
          )}
        </div>
      </div>
    </div>
  );
}

export default IntraZerodha;
