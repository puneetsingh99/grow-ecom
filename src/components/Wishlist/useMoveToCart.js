import { useCart } from "../../contexts/CartContext/CartContext";
import { toast } from "react-toastify";
import { toastConfig } from "../../utils";
import { apiMoveToCart } from "../../api";
import { useAuth } from "../../contexts";
import { useWishlist } from "../../contexts/WishlistContext/WishlistContext";
import axios from "axios";

export const moveToCartStates = {
  pending: "Moving to cart",
  success: "Moved to cart",
  error: "Could not move to cart",
};

export const useMoveToCart = () => {
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();
  const { userId } = useAuth();
  const getUserId = () => userId;

  const onMoveToCartClicked = async (product) => {
    try {
      const { data } = await toast.promise(
        axios.post(apiMoveToCart(getUserId(), product._id)),
        moveToCartStates,
        toastConfig
      );

      if (data.updatedCart) {
        cartDispatch({ type: "ADD_TO_CART", payload: { product, qty: 1 } });
        wishlistDispatch({
          type: "REMOVE_FROM_WISHLIST",
          payload: product._id,
        });
      }
    } catch (error) {
      console.error(error.message);
      toast.error(error.message, toastConfig);
    }
  };

  return { onMoveToCartClicked };
};
