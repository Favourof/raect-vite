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
        setCart((prev) => {
            const item = prev.find((p) => p.id === id);

            if (!item) return prev;


            if (item.quantity > 1) {
                return prev.map((prod) =>
                    prod.id === id
                        ? { ...prod, quantity: prod.quantity - 1 }
                        : prod
                );
            }


            return prev.filter((prod) => prod.id !== id);
        });
    };


    const clearCart = () => {
        setCart([])
    }



    return <CartContext.Provider value={{ cart, addToCart, clearCart, RemoveFromCart }}>{children}</CartContext.Provider>
}