import { useEffect } from "react";
import "./equityZerodha.css";

function EquitySellZ(props) {
  const price = parseFloat(props.p);
  const quantity = parseInt(props.q, 10);
  const totalValue = price * quantity;
  // var tempBrokerage = (totalValue * 0.0005).toFixed(2);
  // if (tempBrokerage > 20) {
  //   tempBrokerage = 20;
  // }
  const brokerage = 0;
  const sttC = Math.round(
    parseFloat(parseFloat(totalValue * 0.001).toFixed(2))
  );
  const etC = (totalValue * 0.0000345).toFixed(2);
  const sebiC = (totalValue * 0.000001).toFixed(2);
  const tempGST = parseFloat(brokerage) + parseFloat(etC);
  const gstC = (parseFloat(tempGST) * 0.18).toFixed(2);
  const totalCharge = (
    parseFloat(brokerage) +
    parseFloat(sttC) +
    parseFloat(etC) +
    parseFloat(sebiC) +
    parseFloat(gstC)
  ).toFixed(2);
  const netValue = (parseFloat(totalValue) - parseFloat(totalCharge)).toFixed(
    2
  );

  function valueChangeHandler() {
    document.getElementById("total-value").innerHTML = totalValue;
    document.getElementById("total-charges").innerHTML = totalCharge;
    document.getElementById("net-amount").innerHTML = netValue;
    document.getElementById("brokerage-charges").innerHTML = brokerage;
    document.getElementById("stt-charges").innerHTML = sttC;
    document.getElementById("ext-charges").innerHTML = etC;
    document.getElementById("sebi-charges").innerHTML = sebiC;
    document.getElementById("gst-charges").innerHTML = gstC;
  }
  useEffect(() => {
    valueChangeHandler();
  });

  return (
    <div className="main-output">
      <div className="output-container">
        <div className="order-charge">
          <div className="amount-heading-font">Total Order Value</div>
          <span className="amount-font">₹ </span>
          <span className="amount-font" id="total-value"></span>
        </div>
        <div className="order-charge">
          <div className="amount-heading-font">Total charges</div>
          <span className="amount-font">₹ </span>
          <span className="amount-font" id="total-charges"></span>
        </div>
        <div className="order-charge">
          <div className="amount-heading-font">Net Value</div>
          <span className="amount-font">₹ </span>
          <span className="amount-font" id="net-amount"></span>
        </div>
      </div>
      <div className="charge-breakup">
        <div className="breakup-heading">Breakup Charges for Sell</div>
        <div className="space-padding"></div>
        <div className="amount-heading amount-heading-font">Groww Charges</div>
        <div className="amount-show amount-font">
          <div>Brokerage</div>
          <div>
            <span>₹ </span>
            <span id="brokerage-charges"></span>
          </div>
        </div>
        <div className="space-padding"></div>
        <div className="amount-heading amount-heading-font">
          Regulatory Charges
        </div>
        <div className="amount-show amount-font">
          <div>STT Charges (0.1%)</div>
          <div>
            <span className="">₹ </span>
            <span id="stt-charges"></span>
          </div>
        </div>
        <div className="amount-show amount-font">
          <div>Exchange Txn Charges (0.00345%)</div>
          <div>
            <span>₹ </span>
            <span id="ext-charges"></span>
          </div>
        </div>
        <div className="amount-show amount-font">
          <div>SEBI Charges (0.0001%)</div>
          <div>
            <span>₹ </span>
            <span id="sebi-charges"></span>
          </div>
        </div>
        <div className="amount-show amount-font">
          <div>GST (18%)</div>
          <div>
            <span>₹ </span>
            <span id="gst-charges"></span>
          </div>
        </div>
        <div className="amount-show amount-font">
          {/* <div><br/></div> */}
        </div>
        <div className=" sub-amount-show sub-font">
          <div>*DP charges are excluded. </div>
          <div>*The above charges are tentative. </div>
        </div>
      </div>
    </div>
  );
}
export default EquitySellZ;
