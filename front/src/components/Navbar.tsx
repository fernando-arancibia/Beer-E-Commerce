"use client";

import Link from 'next/link';
import React, { useEffect } from 'react';
import AuthButtons from './AuthButtons';
import { useAppContext } from '@/contexts/AppContext';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export default function Navbar () {
    const {isAuthenticated, logout, getProductsQuantity, authAction} =useAppContext();
    const productsQuantity = getProductsQuantity();
    const router = useRouter();

   

    const handleLogout = async () => {
        const result = await Swal.fire({
            title: "¿Estás Seguro?",
            text: "¿Quieres cerrar tu sesión?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#f59e0b", // amber-500
            cancelButtonColor: "#ef4444", // red-500
            confirmButtonText: "Sí, Cerrar Sesión",
            cancelButtonText: "Cancelar"
        });

        if (result.isConfirmed) {
            logout();
            await Swal.fire({
                title: "¡Sesión Cerrada!",
                text: "Has cerrado sesión exitosamente.",
                icon: "success",
                confirmButtonColor: "#f59e0b"
            });
            router.push("/");
        }
    };
    return (
        <nav className='fixed top-0 w-full flex items-center justify-between py-4 px-6 md:px-12 lg:px-24 border-b border-amber-200/30 bg-white/95 backdrop-blur-md shadow-lg z-50'>
            <Link href="/" className='flex items-center gap-3 transition duration-300 hover:scale-105'>
                <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                </div>
                <span className='font-bold text-xl bg-gradient-to-r from-amber-800 via-yellow-700 to-amber-900 bg-clip-text text-transparent'>
                    Mi Tienda
                    
                </span>
            </Link>

            <ul className='flex items-center space-x-8 text-gray-700'>
                <li>
                    <Link href="/home" className='flex items-center gap-2 px-4 py-2 rounded-full hover:bg-amber-50 hover:text-amber-700 transition-all duration-300 font-medium'>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Home
                    </Link>
                </li>
                <li onClick={() => {
                        authAction(() => {router.push("/dashboard");})
                     }} className='flex items-center gap-2 px-4 py-2 rounded-full hover:bg-amber-50 hover:text-amber-700 transition-all duration-300 font-medium cursor-pointer'>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        Dashboard
                </li>
                <li>
                    <div className='flex items-center gap-2 px-4 py-2 rounded-full hover:bg-amber-50 hover:text-amber-700 transition-all duration-300 font-medium cursor-pointer relative'
                    onClick={() => {
                        authAction(() => {router.push("/cart");})
                     }}
                     >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l-2.5 5M17 21a2 2 0 11-4 0 2 2 0 014 0zM9 21a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Cart
                        {!!productsQuantity && (
                        <span className='absolute -top-1 -right-1 bg-gradient-to-r from-amber-500 to-yellow-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg'>
                            {productsQuantity}
                        </span>)}
                    </div>
                </li>
            </ul>
            {isAuthenticated? (
                <div>
                    <button 
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-medium rounded-full hover:from-amber-600 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Cerrar Sesión
                    </button>
                </div>
            ) : <AuthButtons />}
        </nav>
    );
};
