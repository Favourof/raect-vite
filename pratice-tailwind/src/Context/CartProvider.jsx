import { useState } from "react";
import { CartContext } from "./context";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(["book", "pen", "paper"]);


    const addToCart = (item) => {
        setCart((prev) => [...prev, item])
    }


    const clearCart = () => {
        setCart([])
    }



    return <CartContext.Provider value={{ cart, addToCart, clearCart }}>{children}</CartContext.Provider>
}