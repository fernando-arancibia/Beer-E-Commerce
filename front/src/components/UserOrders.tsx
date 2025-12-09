"use client";

import { useAppContext } from "@/contexts/AppContext";
import { IOrder } from "@/interfaces/Iorders";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from 'next/image';

export default function UserOrders () {
    const { token } = useAppContext();
    const [orders, setOrders] = useState<IOrder[]>([]);
    console.log(orders);

    useEffect(() => {
        if (!token) return;
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/orders`, {
     headers: {
         authorization: token,
        },
    })
    .then((res) => {setOrders(res.data)});
}, [token]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-amber-50/30 to-yellow-50/50">
            {/* Header Section */}
            <div className="bg-white/90 backdrop-blur-sm border-b border-amber-200/50 sticky top-20 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-800 via-yellow-700 to-amber-900 bg-clip-text text-transparent">
                                Mis Órdenes
                            </h1>
                            <div className="w-3 h-3 bg-gradient-to-r from-yellow-600 to-amber-500 rounded-full"></div>
                        </div>
                        <p className="text-lg text-gray-700 mb-4">
                            Historial de todas tus compras y pedidos
                        </p>
                        {/* Premium Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                            <span>Historial Premium</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white backdrop-blur-md rounded-2xl shadow-xl border border-amber-200/30 overflow-hidden">
                    {orders.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="max-w-md mx-auto">
                                <div className="w-24 h-24 bg-gradient-to-br from-amber-100 to-yellow-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                                    <svg className="w-12 h-12 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                                    No tienes órdenes aún
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Cuando realices tu primera compra, aparecerá aquí.
                                </p>
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                                    </svg>
                                    <span>¡Descubre nuestros productos!</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="p-6 space-y-6">
                            {orders.map((ord) => {
                                return (
                                    <div key={ord.id} className="bg-white backdrop-blur-sm rounded-xl shadow-lg border border-amber-200/30 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-amber-300/50">
                                        <div className="p-6">
                                            {/* Order Header */}
                                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                                            <span className="text-sm font-medium text-amber-600 uppercase tracking-wide">
                                                                Orden #
                                                            </span>
                                                        </div>
                                                        <p className="text-xl font-bold text-gray-900">
                                                            {orders.length} {orders.length === 1 ? 'orden' : 'órdenes'}
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center gap-3 text-gray-600">
                                                        <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a2 2 0 012 2v1.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 01-.293.707V17a2 2 0 01-2 2H9a2 2 0 01-2-2v-3.586a1 1 0 01.293-.707L13.707 7.293A1 1 0 0114 7h3z" />
                                                        </svg>
                                                        <p className="text-sm">
                                                            {new Date(ord.date).toLocaleDateString('es-ES', { 
                                                                year: 'numeric', 
                                                                month: 'long', 
                                                                day: 'numeric',
                                                                hour: '2-digit',
                                                                minute: '2-digit'
                                                            })}
                                                        </p>
                                                    </div>
                                                </div>
                                                
                                                <div className="flex justify-start md:justify-end">
                                                    <p className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wide shadow-sm ${
                                                        ord.status === 'approved' 
                                                            ? 'bg-green-100 text-green-800 border border-green-200' 
                                                            : ord.status === 'pending'
                                                            ? 'bg-amber-100 text-amber-800 border border-amber-200'
                                                            : 'bg-red-100 text-red-800 border border-red-200'
                                                    }`}>
                                                        <span className={`w-2 h-2 rounded-full mr-2 ${
                                                            ord.status === 'approved' 
                                                                ? 'bg-green-500' 
                                                                : ord.status === 'pending'
                                                                ? 'bg-amber-500'
                                                                : 'bg-red-500'
                                                        }`}></span>
                                                        {ord.status}
                                                    </p>
                                                </div>
                                            </div>
                                            
                                            {/* Products Section */}
                                            <div className="border-t border-amber-200/30 pt-6">
                                                <div className="flex items-center gap-2 mb-4">
                                                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                                    </svg>
                                                    <h3 className="text-lg font-semibold text-gray-900">
                                                        Productos ({ord.products.length})
                                                    </h3>
                                                </div>
                                                
                                                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                                    {ord.products.map((prod, index) => {
                                                        return (
                                                            <div key={index} className="bg-amber-50/50 rounded-lg p-4 border border-amber-200/30 hover:bg-amber-50 hover:border-amber-300/50 transition-all duration-200 hover:shadow-sm">
                                                                <div className="flex items-start gap-4">
                                                                    <div className="w-32 h-32 bg-white rounded-lg border border-amber-200/50 flex-shrink-0 overflow-hidden relative">
                                                                        <Image
                                                                            src={prod.image}
                                                                            alt={prod.name}
                                                                            fill
                                                                            className="object-cover"
                                                                        />
                                                                    </div>
                                                                    <div className="flex-1 min-w-0">
                                                                        <div className="text-gray-900 font-medium text-sm mb-1 truncate">
                                                                            {prod.name}
                                                                        </div>
                                                                        <div className="flex items-center gap-1">
                                                                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                                                                            <span className="text-xs text-amber-600 font-medium">Premium</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
    
}
