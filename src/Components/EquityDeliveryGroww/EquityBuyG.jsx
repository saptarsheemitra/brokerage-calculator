import "./equityGroww.css";
function EquityBuyG() {
  return (
    <div className="main-output">
      <div className="output-container">
        <div className="order-charge">
          <div className="amount-heading-font">Total Order Value</div>
          <span className="amount-font">₹ </span>
          <span className="amount-font">Amount</span>
        </div>
        <div className="order-charge">
          <div className="amount-heading-font">Total charges</div>
          <span className="amount-font">₹ </span>
          <span className="amount-font">Amount</span>
        </div>
        <div className="order-charge">
          <div className="amount-heading-font">Net Value</div>
          <span className="amount-font">₹ </span>
          <span className="amount-font">Amount</span>
        </div>
      </div>
      <div className="charge-breakup">
        <div className="breakup-heading">Breakup Charge for Groww</div>
        <div className="space-padding"></div>
        <div className="amount-heading amount-heading-font">Groww Charges</div>
        <div className="amount-show amount-font">
          <div >Brokerage</div>
          <div>
            <span>₹ </span>
            <span>0.05</span>
          </div>
        </div>
        <div className="space-padding"></div>
        <div className="amount-heading amount-heading-font">Regulatory Charges</div>
        <div className="amount-show amount-font">
          <div >STT Charges (0.1%)</div>
          <div>
            <span className="">₹ </span>
            <span>000</span>
          </div>
        </div>
        <div className="amount-show amount-font">
          <div >Exchange Txn Charges (0.00345%)</div>
          <div>
            <span>₹ </span>
            <span>000</span>
          </div>
        </div>
        <div className="amount-show amount-font">
          <div >SEBI Charges (0.0001%)</div>
          <div>
            <span>₹ </span>
            <span>000</span>
          </div>
        </div>
        <div className="amount-show amount-font">
          <div >GST (18%)</div>
          <div>
            <span>₹ </span>
            <span>000</span>
          </div>
        </div>
        <div className="amount-show amount-font">
          <div >Stamp Duty (0.015%)</div>
          <div>
            <span>₹ </span>
            <span>000</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EquityBuyG;
