"use client"

import { useAppContext } from "@/contexts/AppContext"

export default function Userprofile() {
    const { user } = useAppContext();
    if(!user) return  <div>Cargando datos...</div>;
    return (
        <div className="bg-gradient-to-br from-white via-amber-50/30 to-yellow-50/50">
            {/* Header Section */}
            <div className="bg-white/90 backdrop-blur-sm border-b border-amber-200/50 sticky top-20 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-3 mb-2">
                            <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full"></div>
                            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-800 via-yellow-700 to-amber-900 bg-clip-text text-transparent">
                                Mi Perfil
                            </h1>
                            <div className="w-3 h-3 bg-gradient-to-r from-yellow-600 to-amber-500 rounded-full"></div>
                        </div>
                        <p className="text-lg text-gray-700 mb-2">
                            Información personal de tu cuenta
                        </p>
                        {/* Premium Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                            <span>Perfil Premium</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <div className="bg-white backdrop-blur-md rounded-2xl shadow-xl border border-amber-200/30 overflow-hidden">
                    <div className="p-4 md:p-6">
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                            {/* Nombre */}
                            <div className="bg-white backdrop-blur-sm rounded-xl shadow-lg border border-amber-200/30 p-6 hover:shadow-xl hover:border-amber-300/50 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="text-sm font-medium text-amber-600 uppercase tracking-wide">
                                            Nombre
                                        </span>
                                    </div>
                                </div>
                                <span className="text-xl font-bold text-gray-900">{user.name}</span>
                            </div>

                            {/* Email */}
                            <div className="bg-white backdrop-blur-sm rounded-xl shadow-lg border border-amber-200/30 p-6 hover:shadow-xl hover:border-amber-300/50 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="text-sm font-medium text-yellow-600 uppercase tracking-wide">
                                            Email
                                        </span>
                                    </div>
                                </div>
                                <span className="text-xl font-bold text-gray-900 break-all">{user.email}</span>
                            </div>

                            {/* Dirección */}
                            <div className="bg-white backdrop-blur-sm rounded-xl shadow-lg border border-amber-200/30 p-6 hover:shadow-xl hover:border-amber-300/50 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="text-sm font-medium text-amber-600 uppercase tracking-wide">
                                            Dirección
                                        </span>
                                    </div>
                                </div>
                                <span className="text-xl font-bold text-gray-900">{user.address}</span>
                            </div>

                            {/* Teléfono */}
                            <div className="bg-white backdrop-blur-sm rounded-xl shadow-lg border border-amber-200/30 p-6 hover:shadow-xl hover:border-amber-300/50 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <span className="text-sm font-medium text-yellow-600 uppercase tracking-wide">
                                            Teléfono
                                        </span>
                                    </div>
                                </div>
                                <span className="text-xl font-bold text-gray-900">{user.phone}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}