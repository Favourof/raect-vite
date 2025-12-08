/* eslint-disable no-empty */
import { useState } from "react";
import { CartContext } from "./context";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    const addToCart = (item) => {
        setCart((prev) => {
            const existProduct = prev.find((exit) => exit.id == item.id)
            if (existProduct) {
                return prev.map((prod) => prod.id === existProduct.id ? { ...prod, quatity: (prod.quatity || 1) + 1 } : prod)
            } else {
                return [...prev, item]
            }


        })
        console.log(cart);

    }

    const RemoveFromCart = (id) => {
        if (cart.length == 0) return alert("cart is empty")
        setCart((prev) => prev.filter((item) => item.id !== id))
    }


    const clearCart = () => {
        setCart([])
    }



    return <CartContext.Provider value={{ cart, addToCart, clearCart, RemoveFromCart }}>{children}</CartContext.Provider>
}