import { useCartContext } from "../context/CartContext";

const CartWidget = () => {
  const { totalProducts } = useCartContext();

  return (
    <>
      <i className="fa-solid fa-cart-shopping"></i>
      <span>{totalProducts() || ""}</span>
    </>
  );
};
export default CartWidget;
