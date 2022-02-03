import { React, useEffect } from "react";
import "./equityGroww.css";
import EquityBuyG from "./EquityBuyG";

function EquityGroww() {
  return (
    <div className="container">
      <div className="input-container">
        <div className="tab-container">
          <div className="tabs">
            <div className="tab-item lt-mar amount-heading-font">Delivery - Buy</div>
            <div className="tab-item rt-mar amount-heading-font">Delivery - Sell</div>
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
                  id="shares"
                  type="number"
                  autocomplete="off"
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
                  id="price"
                  type="number"
                  autocomplete="off"
                  placeholder="Test2"
                  required
                />
              </div>
            </div>
          </div>
          {/* -------------- */}
          <EquityBuyG/>
        </div>
      </div>
    </div>
  );
}

export default EquityGroww;
