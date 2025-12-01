


import { IProduct } from "@/interfaces/IProduct";
import ProductCard from "@/components/ProductCard";
import axios from "axios";
import Link from "next/link";

export default async function HomePage() {
    const fethchedData = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
    const products: IProduct[] = fethchedData.data;

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Header Section */}
            <section className="relative bg-gradient-to-br from-white via-gray-50 to-white py-16">
                {/* Premium pattern overlay */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1),transparent_50%)]"></div>
                </div>
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-6">
                        <span className="inline-block px-4 py-2 bg-amber-500/20 text-amber-600 rounded-full text-sm font-medium border border-amber-500/30">
                            ✨ CATÁLOGO PREMIUM
                        </span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        <span className="block text-blue-800">NUESTROS</span>
                        <span className="block bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                            PRODUCTOS
                        </span>
                    </h1>
                    
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Explora nuestra colección exclusiva de productos premium seleccionados especialmente para ti.
                        <span className="block mt-2 text-amber-600 font-semibold">
                            Calidad garantizada, experiencia única.
                        </span>
                    </p>

                    {/* Stats */}
                    <div className="flex justify-center items-center space-x-8 pt-8 border-t border-gray-200 max-w-md mx-auto">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-amber-600">{products.length}+</div>
                            <div className="text-sm text-gray-500">Productos</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-amber-600">100%</div>
                            <div className="text-sm text-gray-500">Premium</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-amber-600">24/7</div>
                            <div className="text-sm text-gray-500">Soporte</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter/Search Section */}
            <section className="py-8 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-600 font-medium">Mostrando {products.length} productos</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Grid Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                        
                        {products.map((product) => {
                            return (
                        <Link href={`/productdetail/${product.id}`} key={product.id}
                         className="group block">
                            <ProductCard name={product.name} price={product.price} img={product.image} />
                        </Link>);
                        })}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-amber-500/10 to-yellow-500/10 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            ¿No encontraste lo que buscabas?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Contáctanos y te ayudaremos a encontrar el producto perfecto para ti
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105">
                                📞 Contactar Soporte
                            </button>
                            <button className="px-8 py-4 border-2 border-amber-500 hover:bg-amber-500 text-amber-600 hover:text-white font-bold rounded-lg transition-all duration-300">
                                💬 Chat en Vivo
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}