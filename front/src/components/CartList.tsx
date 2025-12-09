"use client"

import { useAppContext } from "@/contexts/AppContext";
import EmptyCart from "./EmptyCart";
import Swal from "sweetalert2";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from 'next/image';



export default function CartList() {
    const { cart, removeProductFromCart, getCartTotal, clearCart, token } = useAppContext();
    const router = useRouter();
    const clearHandler = () => {

        Swal.fire({
        title: "Estas Seguro?",
        text: "Esto no es Revertible!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#f59e0b", // amber-500
        cancelButtonColor: "#ef4444", // red-500
        confirmButtonText: "Si, Borrar!"
        }).then((result) => {
            if (result.isConfirmed) {
            clearCart();
            Swal.fire({
            title: "Borrado!",
            text: "Tu Carrito a Sido Borrado.",
            icon: "success"
            });
        }
    });
    };

    const postCheckout = async (body:{ products:number[] }) => {
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/orders`, body,{
            headers:{
                authorization:token},
            });
    };
    const checkoutHandler = async () => {
        if(!cart.length) return;
        
        // Primero mostrar confirmación ANTES de hacer la compra
        const result = await Swal.fire({
            title: "¿Confirmar compra?",
            text: "¿Estás seguro de que quieres finalizar esta compra?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#f59e0b", 
            cancelButtonColor: "#ef4444", 
            confirmButtonText: "Sí, comprar",
            cancelButtonText: "Cancelar"
        });

        // Solo proceder si el usuario confirmó
        if (!result.isConfirmed) return;

        const idsSet = new Set(cart.map((prod) => prod.id)); //set descarta los duplicados
        const idsArray = Array.from(idsSet);
       
        try { 
            await postCheckout({products: idsArray});

            
          if (cart.length >= 3) {
            alert("Eres un usuario destacado")}
        

            // Mostrar éxito y limpiar carrito
            await Swal.fire({
                title: "¡Compra realizada!",
                text: "Tu pedido ha sido procesado exitosamente",
                icon: "success",
                confirmButtonColor: "#f59e0b"
            });
            
            clearCart();
            router.push("/dashboard");
            
        } catch (error) {
            console.log(JSON.stringify(error));
            Swal.fire({
                title: "Error",
                text: "Hubo un problema al procesar tu compra",
                icon: "error",
                confirmButtonColor: "#ef4444"
            });
        }
    };


    if (cart.length === 0) {
        return <EmptyCart />;
    }
    
    
    
    
    return (
       
  
  <div className="flex flex-col lg:flex-row gap-8 p-6">
    {/* Cart List - Lado izquierdo */}
    <div className="flex-1">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Tu Carrito</h2>
        <button 
          onClick={clearHandler}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition duration-300"
        >
          Vaciar Carrito
        </button>
      </div>

      {cart.map((product, index) => (
        <div key={`${product.id}-${index}`}
          className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-2 mb-6"
        >
          <div className="p-6 flex gap-6">
            {/* Imagen a la izquierda - Estilo Home */}
            <div className="flex-shrink-0 w-32 h-32 relative overflow-hidden bg-gray-50 rounded-xl">
              <Image
                src={product.image}
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay on hover - Como en Home */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              
            </div>
            
            {/* Contenido a la derecha - Estilo Home */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                  {product.description}
                </p>
                
                {/* Precio - Estilo Home */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-amber-600">
                      ${product.price}
                    </span>
                    <span className="text-sm text-gray-500">
                      Envío gratis
                    </span>
                  </div>
                  
                  {/* Rating - Como en Home */}
                  <div className="flex items-center space-x-1 text-amber-400">
                    <span className="text-sm">⭐⭐⭐⭐⭐</span>
                    <span className="text-xs text-gray-500">(4.8)</span>
                  </div>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Stock: ✅ Disponible
                </div>
                <button 
                  className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  onClick={() => removeProductFromCart(product.id)}
                >
                  🗑️ Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Resumen del Pedido - Lado derecho */}
    <div className="lg:w-80 flex-shrink-0">
      <div className="sticky top-6 p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Resumen del Pedido</h2>
        
        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-600">
            <span className="text-gray-600 dark:text-gray-300">
              Subtotal ({cart.length} {cart.length === 1 ? 'producto' : 'productos'})
            </span>
            <span className="font-semibold text-gray-800 dark:text-white">
              ${getCartTotal().toLocaleString()}
            </span>
          </div>
          
          <div className="flex justify-between items-center text-lg font-bold">
            <span className="text-gray-800 dark:text-white">Total</span>
            <span className="text-green-600 dark:text-green-400">
              ${getCartTotal().toLocaleString()} 
            </span>
          </div>
        </div>

        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold transition duration-300 flex items-center justify-center"
        >
          <div className="w-full text-center"
          onClick={checkoutHandler}>
             Finalizar Compra
          </div>
        </button>
      </div>
    </div>
  </div>
);
}