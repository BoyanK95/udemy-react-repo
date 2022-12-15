import CartContext from "./cart-context";

const CartProvider = (props) => {
    
  const addItemToCartHandler = (item) => {};

  const removeItemToCartHandler = (id) => {};

  const cartCtx = {
    items: [],
    totalAmount: 0,
    additem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartCtx}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
