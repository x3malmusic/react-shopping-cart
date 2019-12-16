import React from "react";

import history from "../router/history";
import "../css/confirm.css";

const ConfirmBuy = ({ total }) => {
  const confirmBuy = () => {
    history.push("/shipping");
  };
  return (
    <div className="confirm-buy">
      <div className="total-price">{`${total} $`}</div>
      <button
        disabled={!total}
        onClick={e => confirmBuy()}
        className={total > 0 ? "buy-btn buy-btn-active" : "buy-btn"}
      >
        buy
      </button>
    </div>
  );
};

export default ConfirmBuy;
