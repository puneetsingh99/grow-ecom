import { QuantitySelector } from "./QuantitySelector";
import "./cart-styles.css";
import { AlertHandler } from "../";

export const QuantitySelectorModal = ({
  showQtyModal,
  setShowQtyModal,
  qty,
  operation,
  userId,
  productId,
  setAlert,
  alert,
  userDispatch,
  inCart
}) => {
  return (
    <div
      className={`modal-container`}
      onClick={() => {
        setShowQtyModal(() => false);
      }}
    >
      <div className="modal">
        <QuantitySelector
          qty={qty}
          showQtyModal={showQtyModal}
          setShowQtyModal={setShowQtyModal}
          userId={userId}
          productId={productId}
          setAlert={setAlert}
          userDispatch={userDispatch}
          inCart={inCart}
        />
      </div>
    </div>
  );
};
