import Link from "next/link";

export default function ProductNotFound() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>
            
            {/* Premium pattern overlay */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1),transparent_50%)]"></div>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Icon */}
                <div className="mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                        <span className="text-4xl text-white">📦</span>
                    </div>
                </div>

                {/* Main Message */}
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                        <span className="block text-gray-900">PRODUCTO</span>
                        <span className="block bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                            NO ENCONTRADO
                        </span>
                    </h1>
                    
                    <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                        Lo sentimos, el producto que buscas no existe o ha sido removido de nuestro catálogo.
                        <span className="block mt-2 text-amber-600 font-semibold">
                            Te invitamos a explorar nuestros otros productos premium.
                        </span>
                    </p>
                </div>

                {/* Error Details */}
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-6 mb-8">
                    <div className="flex items-center justify-center space-x-2 text-amber-700">
                        <span className="text-2xl">⚠️</span>
                        <span className="font-semibold">Error 404</span>
                    </div>
                    <p className="text-sm text-amber-600 mt-2">
                        El ID del producto solicitado no se encuentra en nuestra base de datos
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <Link href="/home">
                        <button className="group relative px-8 py-4 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25">
                            <span className="flex items-center justify-center gap-2">
                                🏠 VOLVER AL CATÁLOGO
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </button>
                    </Link>
                    
                    <Link href="/">
                        <button className="px-8 py-4 border-2 border-amber-500 hover:border-amber-400 text-amber-600 hover:text-amber-500 font-semibold rounded-lg transition-all duration-300">
                            IR AL INICIO
                        </button>
                    </Link>
                </div>

                {/* Helpful Links */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-gray-200">
                    <Link href="/home" className="group text-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
                        <div className="text-2xl mb-2">🛍️</div>
                        <div className="text-sm font-semibold text-gray-700 group-hover:text-amber-600">
                            Explorar Productos
                        </div>
                    </Link>
                    
                    <div className="group text-center p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                        <div className="text-2xl mb-2">📞</div>
                        <div className="text-sm font-semibold text-gray-700 group-hover:text-amber-600">
                            Contactar Soporte
                        </div>
                    </div>
                    
                    <Link href="/cart" className="group text-center p-4 rounded-xl hover:bg-gray-50 transition-colors">
                        <div className="text-2xl mb-2">🛒</div>
                        <div className="text-sm font-semibold text-gray-700 group-hover:text-amber-600">
                            Ver Carrito
                        </div>
                    </Link>
                </div>

               
            </div>
        </div>
    );
}