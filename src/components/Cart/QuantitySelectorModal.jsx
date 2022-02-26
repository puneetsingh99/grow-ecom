import { QuantitySelector } from "./QuantitySelector";
import "./cart-styles.css";

export const QuantitySelectorModal = (props) => {
  const { setShowQtyModal } = props;
  return (
    <div
      className={`modal-container`}
      onClick={() => {
        setShowQtyModal(() => false);
      }}
    >
      <div className="modal">
        <QuantitySelector {...props} />
      </div>
    </div>
  );
};
