import "./cart-styles.css";
import { useCart } from "../../contexts/CartContext/CartContext";
import { v4 as uuidv4 } from "uuid";

export const QuantitySelector = ({ qty, productId, setShowQtyModal }) => {
  const { onSelectQty } = useCart();
  const avaialableQuantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className={`quantity-selector`} onClick={(e) => e.stopPropagation()}>
      <div className={`text-select-qty`}>
        <p className={`font-bold`}>{`Select quantity`} </p>
      </div>
      <ul className={`available-quantities`}>
        {avaialableQuantities.map((qtyNum) => (
          <li
            key={uuidv4()}
            className={`available-quantities__quantity ${
              qtyNum === qty && `highlight-qty`
            }`}
            onClick={() => onSelectQty(productId, qtyNum)}
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
    </div>
  );
};
