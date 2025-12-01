
import Link from "next/link";

export default function EmptyCart() {
    return (
        <div className="flex items-center justify-center min-h-[400px] p-8">
            <div className="text-center max-w-md mx-auto">
                {/* Icono de carrito vacío */}
                <div className="mb-8">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full mb-4">
                        <svg 
                            className="w-12 h-12 text-gray-400 dark:text-gray-500" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={1.5} 
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m4.5-5a2 2 0 104 0 2 2 0 00-4 0z"
                            />
                        </svg>
                    </div>
                </div>

                {/* Contenido principal */}
                <div className="space-y-4 mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                        🛒 Tu carrito está vacío
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Agrega productos para comenzar tu compra y disfruta de nuestras ofertas
                    </p>
                </div>

                {/* Botón de acción */}
                <Link href="/home">
                    <button className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        <svg 
                            className="w-5 h-5" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                            />
                        </svg>
                        Ver productos
                    </button>
                </Link>

                {/* Texto adicional */}
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
                    ¿Necesitas ayuda? Contacta con nuestro equipo de soporte
                </p>
            </div>
        </div>
    );
}