import { React, useEffect } from "react";
import "./equityGroww.css";
import EquityBuyG from "./EquityBuyG";

function EquityGroww() {
  var quantity;
  var price;
  function amountInputHandler() {
    quantity = document.getElementById("shares").value;
    price = document.getElementById("price").value;
    if (!price) {
      price = 0;
    }
    if (!quantity) {
      quantity = 0;
    }
    // console.log(quantity,price)
    // document.getElementById("demo").innerHTML = x;
  }
  console.log(quantity, price);
  return (
    <div className="container">
      <div className="input-container">
        <div className="tab-container">
          <div className="tabs">
            <div className="tab-item lt-mar amount-heading-font">
              Delivery - Buy
            </div>
            <div className="tab-item rt-mar amount-heading-font">
              Delivery - Sell
            </div>
          </div>
          <div className="input-div">
            <div className="input-section-one">
              <div className="input-label amount-heading-font">
                <label htmlFor="shares">Shares to Buy</label>
                <br />
              </div>
              <div className="input-area">
                <input
                  className="input-field amount-font"
                  onKeyUp={amountInputHandler}
                  id="shares"
                  type="number"
                  placeholder="Test1"
                  required
                />
              </div>
            </div>
            <div className="input-section-one">
              <div className="input-label amount-heading-font">
                <label htmlFor="price">Share Price</label>
                <br />
              </div>
              <div className="input-area">
                <input
                  className="input-field amount-font"
                  onKeyUp={amountInputHandler}
                  id="price"
                  type="number"
                  placeholder="Test2"
                  required
                />
              </div>
            </div>
          </div>
          {/* -------------- */}
          <EquityBuyG />
        </div>
      </div>
    </div>
  );
}

export default EquityGroww;
