"use client"

import { IAppContext } from "@/interfaces/IAppContext";
import { IProduct } from "@/interfaces/IProduct";
import { IUser } from "@/interfaces/IUser";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState, useCallback } from "react";



const AppContext = createContext <IAppContext>({
    user: null,
    token: null,
    isAuthenticated: false,
    cart: [],
    setLogin:() => {},
    logout:() => {},
    addProductToCart: () => {},
    removeProductFromCart: () => {},
    clearCart: () => {},
    getProductsQuantity: () => 0,
    isIncludedInCart: () => false,
    getCartTotal: () => 0,
    authAction: () => {},
});

export default function AppContextProvider ({ 
    children,
}: {children: React.ReactNode;

}) {
    //estados
    const [user, setUser] = useState<IUser | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [cart, setCart] = useState<IProduct[]>([]);
    const router = useRouter();

    // console.log(user, "User del contexto");
    // console.log(token, "Token del contexto");

    const setLogin = (user: IUser, token: string) => {
        setUser(user);
        setToken(token);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
    };

    
    const logout = useCallback(() => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
        setToken(null);
        router.push("/"); // Redirigir al home
        
    }, [router]);
    
    const addProductToCart = (product:IProduct) => {
        if (!isIncludedInCart(product.id)) {
            setCart([...cart, product]);
        }
    };

    const isIncludedInCart = (id: number) => {
        const found = cart.find((prod) => prod.id == id);
        return !!found;
    };

    const removeProductFromCart = (id:number) => {
       setCart(cart.filter((prod) => prod.id !== id)); 
    };

    const clearCart = () => setCart([]);

    const getProductsQuantity = () => cart.length;

    const getCartTotal = () => 
        cart.reduce((sum, prod) => {
            return sum + prod.price;
        }, 0);
        
    //funcion de orden superior

    const authAction = (func: () => void) => {
        if (token && user) func();
        else router.push("/login");
    };

    useEffect (() => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if (!user || !token) {
            
            // setUser(null);
            // setToken(null);
            return logout();
        }

        setUser(JSON.parse(user));
        setToken(token);
    }, [logout]);

    return (<AppContext.Provider 
        value= {{
            user, 
            token, 
            isAuthenticated: !!user && !!token,
            cart, 
            setLogin, 
            logout,
            addProductToCart, 
            isIncludedInCart,
            removeProductFromCart,
            clearCart,
            getProductsQuantity,
            getCartTotal,  
            authAction,
            }}>
        {children}
            </AppContext.Provider>);
}

export const useAppContext = () => {
    return useContext(AppContext);
};