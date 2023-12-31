import { createContext, useState } from "react";

export const CartContext = createContext()


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (item, quantity) =>{
        if(isInCart(item.id)){
            setCart(cart.map((products)=>{
                if(products.id === item.id){
                    return {...products, quantity: products.quantity + quantity}
                }else{
                    return products
                }
            }))
        }
        else{
            setCart([...cart, {...item, quantity}])
        }
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some((item)=> item.id === id)
    }

    const deleteItem = (id) => {
        setCart(cart.filter((item)=> item.id !== id))
    }

    const cartQuantity = () => {
        return cart.reduce((acc, item)=> acc + item.quantity, 0)
    }

    const totalPay = () => {
        return cart.reduce((acc, item)=> acc + item.quantity * item.precio, 0)
    }

    return (
        <CartContext.Provider value={{cart, addItem, clear, deleteItem, cartQuantity, totalPay}}>
            {children}
        </CartContext.Provider>
    )
}