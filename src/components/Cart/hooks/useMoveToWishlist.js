import { useCart } from "../../../contexts/CartContext/CartContext";
import { toast } from "react-toastify";
import { toastConfig } from "../../../utils";
import { apiMoveToWishlist } from "../../../api";
import { useAuth } from "../../../contexts";
import { useWishlist } from "../../../contexts/WishlistContext/WishlistContext";
import axios from "axios";

export const moveToWishlistStates = {
  pending: "Moving to wishlist",
  success: "Moved to wishlist",
  error: "Could not move to wishlist",
};

export const useMoveToWishlist = () => {
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();
  const { userId } = useAuth();
  const getUserId = () => userId;

  const onMoveToWishlistClicked = async (product) => {
    try {
      const { data } = await toast.promise(
        axios.post(apiMoveToWishlist(getUserId(), product._id)),
        moveToWishlistStates,
        toastConfig
      );
      console.log("MOVE TO WISHLIST RESPONSE", data);

      if (data.updatedWishlist) {
        wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: product });
        cartDispatch({
          type: "REMOVE_FROM_CART",
          payload: product._id,
        });
      }
    } catch (error) {
      console.error(error.message);
      toast.error(error.message, toastConfig);
    }
  };

  return { onMoveToWishlistClicked };
};
