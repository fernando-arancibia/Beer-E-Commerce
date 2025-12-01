


import axios from "axios";
import { IProduct } from "@/interfaces/IProduct";
import { IProductDetailPageProps } from "@/interfaces/IProductDetail";
import Link from "next/link";
import ProductNotFound from "@/components/ProductNotFound";
import AddToCartButton from "@/components/AddToCartButton";


export default async function ProductDetailPage({ params }: IProductDetailPageProps) {
    const { id } = await params;

    const fetchedData = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);

    const products: IProduct[] = fetchedData.data;

    const product: IProduct | undefined = products.find((prod) => {
        return prod.id == Number(id);
    });

    if (!product) {
        return <ProductNotFound />;
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Header Section - Similar to Home */}
            <section className="relative bg-gradient-to-br from-white via-gray-50 to-white py-16">
                {/* Premium pattern overlay */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1),transparent_50%)]"></div>
                </div>
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb Navigation */}
                    <nav className="flex items-center justify-center space-x-2 text-sm mb-8">
                        <Link href="/home" className="text-amber-600 hover:text-amber-700 transition-colors font-medium">
                            🏠 Inicio
                        </Link>
                        <span className="text-gray-400">•</span>
                        <Link href="/home" className="text-amber-600 hover:text-amber-700 transition-colors font-medium">
                            Productos
                        </Link>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600 truncate font-medium">{product.name}</span>
                    </nav>

                    <div className="text-center">
                        
                        
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            <span className="block text-gray-900">DETALLE DEL</span>
                            <span className="block bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                                PRODUCTO
                            </span>
                        </h1>
                        
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Descubre todos los detalles de este producto premium seleccionado especialmente para ti.
                            <span className="block mt-2 text-amber-600 font-semibold">
                                Calidad garantizada, experiencia única.
                            </span>
                        </p>

                        {/* Stats - Similar to Home */}
                        <div className="flex justify-center items-center space-x-8 pt-8 border-t border-gray-200 max-w-md mx-auto">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-amber-600">⭐</div>
                                <div className="text-sm text-gray-500">Premium</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-amber-600">✅</div>
                                <div className="text-sm text-gray-500">En Stock</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-amber-600">🚚</div>
                                <div className="text-sm text-gray-500">Envío Gratis</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-0">
                        {/* Product Image - Same style as Home */}
                        <div className="group relative p-8">
                            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 group-hover:-translate-y-2">
                                {/* Product Image Container */}
                                <div className="aspect-square relative overflow-hidden bg-gray-50">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    
                                    {/* Overlay on hover - Same as Home */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    
                                    
                                    
                                    {/* Stock Indicator - Additional feature for detail page */}
                                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-green-500/90 backdrop-blur-sm rounded-full px-3 py-1">
                                            <span className="text-white text-xs font-semibold">✅ {product.stock} en stock</span>
                                        </div>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>

                        {/* Product Info - Home Style */}
                        <div className="p-8 lg:p-12 space-y-8">
                            {/* Title & Rating - Similar to Home Product Cards */}
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight group-hover:text-amber-600 transition-colors duration-300">
                                        {product.name}
                                    </h1>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-1 text-amber-400">
                                            <span className="text-sm">⭐⭐⭐⭐⭐</span>
                                            <span className="text-xs text-gray-500 ml-2">(4.8)</span>
                                        </div>
                                        <span className="text-green-600 font-semibold text-sm">En Stock: {product.stock} unidades</span>
                                    </div>
                                    <div className="text-sm text-gray-500">127 reseñas • Envío gratis</div>
                                </div>
                            </div>

                            {/* Price - Similar to Home Product Cards */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-3xl lg:text-4xl font-bold text-amber-600">
                                            ${product.price}
                                        </span>
                                        
                                    </div>
                                    <div className="text-right">
                                        <span className="inline-block px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full mb-2">
                                            -20%
                                        </span>
                                        <div className="text-sm text-green-600 font-semibold">
                                            🚚 Envío gratis
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                    📝 Descripción del producto
                                </h3>
                                <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-amber-500">
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        {product.description}
                                    </p>
                                </div>
                            </div>

                            

                            {/* Actions */}
                            <div className="space-y-6 pt-8 border-t border-gray-200">
                                

                                {/* Main CTA */}
                                <div className="space-y-3">
                                    <AddToCartButton product={product} />
                                    
                                    <button className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25 text-lg">
                                        <Link href="/home">Volver al Catálogo</Link> 
                                    </button>
                                </div>
                                
                                
                                
                                {/* Trust Badges */}
                                <div className="flex items-center justify-center gap-6 pt-6 border-t border-gray-200">
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <span className="text-green-500">🔒</span>
                                        <span>Pago Seguro</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <span className="text-blue-500">🛡️</span>
                                        <span>Protección al Comprador</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <span className="text-amber-500">✅</span>
                                        <span>Calidad Premium</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
}

