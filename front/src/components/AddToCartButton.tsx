"use client";

import { useAppContext } from "@/contexts/AppContext";
import { IProduct } from "@/interfaces/IProduct";


export default function AddToCartButton ({product}:{product:IProduct}) {
    const {addProductToCart, isIncludedInCart, removeProductFromCart, authAction} = 
    useAppContext();

    const productIncluded = isIncludedInCart(product.id);

    const clickHandler = () => {
        return productIncluded 
        ? authAction(() => {removeProductFromCart(product.id);
        })
        : authAction(() => {addProductToCart(product);
        
        });

    };

    return (
        <div className="w-full">
            <button
                onClick={clickHandler}
                className={`w-full py-3 px-6 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    productIncluded
                        ? 'bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-red-200'
                        : 'bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-green-200'
                }`}
            >
                <span className="text-lg">
                    {productIncluded ? '🗑️' : '🛒'}
                </span>
                {productIncluded ? "Remover del Carrito" : "Agregar al Carrito"}
            </button>
        </div>
    )
}