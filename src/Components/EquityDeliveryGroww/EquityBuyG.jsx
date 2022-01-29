import "./equityGroww.css";
function EquityBuyG() {
  return (
    <div className="main-output">
      <div className="output-container">
        <div className="order-charge">
          <div>Total Order Value</div>
          <span>₹</span>
          <span>Amount</span>
        </div>
        <div className="order-charge">
          <div>Total charges</div>
          <span>₹</span>
          <span>Amount</span>
        </div>
        <div className="order-charge">
          <div>Net Value</div>
          <span>₹</span>
          <span>Amount</span>
        </div>
      </div>
      <div className="charge-breakup">
        <div>Breakup Charges</div>
        <div>Groww Charges</div>
        <div>
          <div>Brokerage</div>
          <div>
            <span className="">₹</span>
            <span>0.05</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EquityBuyG;
