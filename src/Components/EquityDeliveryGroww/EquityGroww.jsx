import { React,useState, useEffect } from "react";
import "./equityGroww.css";
import EquityBuyG from "./EquityBuyG";

function EquityGroww() {
  const[quantity,setQuantity]=useState(0);
  const[price,setPrice] = useState(0);
  
  function quantityInputHandler(e) {
    if (!e.target.value) {
      setQuantity(0)
      document.getElementById("qty-error").innerHTML = ""
    }
    else if(e.target.value < 0 || e.target.value == 0 ){
      setQuantity(0)
      document.getElementById("qty-error").innerHTML = "Value must be greater than 0!"
    }
    else{
      setQuantity(e.target.value)
      document.getElementById("qty-error").innerHTML = ""

    }
  }
  function priceInputHandler(e) {
    if (!e.target.value) {
      setPrice(0)
      document.getElementById("price-error").innerHTML = "<br />"
    }
    else if(e.target.value < 0 || e.target.value == 0){
      setPrice(0)
      document.getElementById("price-error").innerHTML = "Value must be greater than 0!"
    }
    else{
      setPrice(e.target.value)
      document.getElementById("price-error").innerHTML = "<br />"
    }
  }
  // function check(){
  //   console.log(quantity,price);
  // }
  // useEffect(()=>{
  //   check()
  // },[price,quantity])
  
  return (
    <div className="container">
      <div className="input-container">
        <div className="tab-container">
          <div className="tabs">
            <div className="tab-item lt-mar amount-heading-font">
              Delivery - Buy
            </div>
            <div className="tab-item rt-mar amount-heading-font" >
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
                  onChange={quantityInputHandler}
                  id="quantity"
                  type="number"
                  placeholder="Quantity of the shares"
                  autoComplete="off"
                  required
                />
                <div id="qty-error"><br /></div>
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
                  onChange={priceInputHandler}
                  id="price"
                  type="number"
                  placeholder="Price of the shares"
                  autoComplete="off"
                  required
                />
                <div id="price-error"><br /></div>
              </div>
            </div>
          </div>
          {/* -------------- */}

          <EquityBuyG p={price} q={quantity}  />
        </div>
      </div>
    </div>
  );
}

export default EquityGroww;
