import "./cart-styles.css";
import { cartHandler } from "../../functions";
import { AlertHandler } from "../";

export const QuantitySelector = ({
  qty,
  userId,
  productId,
  setAlert,
  userDispatch,
  inCart,
  setShowQtyModal
}) => {
  const avaialableQuantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className={`quantity-selector`} onClick={(e) => e.stopPropagation()}>
      <div className={`text-select-qty`}>
        <p className={`font-bold`}>{`Select quantity`} </p>
      </div>
      <ul className={`available-quantities`}>
        {avaialableQuantities.map((qtyNum) => (
          <li
            className={`available-quantities__quantity ${
              qtyNum === qty && `highlight-qty`
            }`}
            onClick={() =>
              cartHandler(
                "updateQty",
                userId,
                productId,
                setAlert,
                userDispatch,
                inCart,
                qtyNum
              )
            }
          >
            <p> {qtyNum}</p>
          </li>
        ))}
      </ul>
      <div className={`btn-done-container`}>
        <button
          className="btn btn-add-to-cart btn-lg"
          onClick={() => {
            setShowQtyModal(() => false);
          }}
        >{`Done`}</button>
      </div>
      {alert.show && <AlertHandler {...alert} setAlert={setAlert} />}
    </div>
  );
};
