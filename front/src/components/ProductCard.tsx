import { IProductCardProps } from "@/interfaces/IProductCardProps"



export default function ProductCard ({ name, price, img}: IProductCardProps) { //props

    return ( 
    
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 group-hover:-translate-y-2">
                {/* Product Image */}
                        <div className="aspect-square relative overflow-hidden bg-gray-50">
                            <img 
                                src={img} 
                                 alt={name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />  
                             {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            </div>    
                        </div>
                                    
                                    {/* Product Info */}
                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300 line-clamp-2">
                                            {name}
                                        </h3>
                                        
                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-col">
                                                <span className="text-2xl font-bold text-amber-600">
                                                    ${price}
                                                </span>
                                                <span className="text-sm text-gray-500">
                                                    Envío gratis
                                                </span>
                                                
                                            </div>
                                            
                                            <div className="flex items-center space-x-1 text-amber-400">
                                                <span className="text-sm">⭐⭐⭐⭐⭐</span>
                                                <span className="text-xs text-gray-500">(4.8)</span>
                                            </div>
                                        </div>
                                        
                                        {/* Add to Cart Button */}
                                        <button className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-white font-semibold rounded-lg transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-amber-500/25">
                                            Ver Detalles
                                        </button>
                                    </div>
                                </div>
                            )}
                
            
                               