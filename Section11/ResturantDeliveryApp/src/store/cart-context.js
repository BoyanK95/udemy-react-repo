import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    additem: (item) => {},
    removeItem: (id) => {},
})

export default CartContext