import CartList from "@/components/CartList";


export default function CartPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Header Section - Similar to Landing */}
            <section className="relative bg-gradient-to-br from-white via-gray-50 to-white py-16">
                {/* Premium pattern overlay */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1),transparent_50%)]"></div>
                </div>
                
                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
                    <div className="mb-6">
                        <span className="inline-block px-4 py-2 bg-amber-500/20 text-amber-600 rounded-full text-sm font-medium border border-amber-500/30">
                            🛒 TU CARRITO PREMIUM
                        </span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        <span className="block text-gray-900">CARRITO DE</span>
                        <span className="block bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                            COMPRAS
                        </span>
                    </h1>
                    
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Revisa tus productos seleccionados y finaliza tu compra con total seguridad.
                        <span className="block mt-2 text-amber-600 font-semibold">
                            Estás a un paso de obtener productos premium.
                        </span>
                    </p>

                    {/* Stats - Similar to Landing */}
                    <div className="flex justify-center items-center space-x-8 pt-8 border-t border-gray-200 max-w-md mx-auto">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-amber-600">🔒</div>
                            <div className="text-sm text-gray-500">Pago Seguro</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-amber-600">🚚</div>
                            <div className="text-sm text-gray-500">Envío Gratis</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-amber-600">✅</div>
                            <div className="text-sm text-gray-500">Garantía</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cart Info Bar - Similar to Home Filter Section */}
            <section className="py-8 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-600 font-medium">Tu selección premium</span>
                            <span className="text-gray-400">•</span>
                            <span className="text-green-600 font-semibold">✅ Productos verificados</span>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                                <span className="text-amber-500">🛡️</span>
                                <span>Compra protegida</span>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                                <button className="p-2 bg-amber-500 text-white rounded-lg hover:bg-amber-400 transition-colors">
                                    <span className="text-sm">💾</span>
                                </button>
                                <button className="p-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors">
                                    <span className="text-sm">📤</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content - Maintaining original structure with Landing styles */}
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="p-8">
                        <CartList />
                    </div>
                </div>
                
                {/* Trust Indicators - Similar to Landing */}
                <div className="mt-12 text-center">
                    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 border border-amber-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            🔒 Compra con Total Confianza
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-2xl">🛡️</span>
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">Pago Seguro</h4>
                                <p className="text-sm text-gray-600">Encriptación SSL y protección total</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-2xl">🚚</span>
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">Envío Express</h4>
                                <p className="text-sm text-gray-600">Entrega rápida y seguimiento en vivo</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-2xl">💝</span>
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2">Satisfacción Garantizada</h4>
                                <p className="text-sm text-gray-600">30 días para devoluciones gratuitas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}