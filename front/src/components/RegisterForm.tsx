"use client"

import { useState } from "react" 
import { IRegisterFormState } from "@/interfaces/IRegisterFormState"
import Swal from "sweetalert2";
import { RegisterDTO } from "@/interfaces/IRegisterDTO";
import axios from "axios";
import { useRouter } from "next/navigation";

const registerInitialState ={
name: "",
email: "",
password: "",
repeatPassword:"",
address: "",
phone: ""
};

export default function RegisterForm () {

    const router = useRouter();

    const [registerForm, setRegisterForm] = useState<IRegisterFormState>(registerInitialState);

    const [errors, setErrors]= useState({
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
        address: "",
        phone: ""


    });
    
    const changehandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        const property = e.target.name;
        const value = e.target.value;

        setRegisterForm ({
            ...registerForm,
            [property]: value,
        })
    }
    //registro post
    const postRegister = async (registerDto :RegisterDTO) => { 
        const result = await axios.post(`http://localhost:3001/users/register`, registerDto);
        return result.data;
    };  

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { password, repeatPassword, name, email, address, phone} = registerForm;

        // if (!password || !repeatPassword|| !name || !email || !address || !phone){
        //     return;
        // }

         // Limpiar errores previos
    setErrors({
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
        address: "",
        phone: ""
    });

    let hasErrors = false;

    // Validar nombre
    if (!name.trim()) {
        setErrors(prev => ({...prev, name: "El nombre es requerido"}));
        hasErrors = true;
    } else if (name.length < 2) {
        setErrors(prev => ({...prev, name: "Mínimo 2 caracteres"}));
        hasErrors = true;
    } else if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(name)) {
        setErrors(prev => ({...prev, name: "Solo letras permitidas"}));
        hasErrors = true;
    }

    // Validar email
    if (!email.trim()) {
        setErrors(prev => ({...prev, email: "El email es requerido"}));
        hasErrors = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setErrors(prev => ({...prev, email: "Email no válido"}));
        hasErrors = true;
    }

    // Validar contraseña
    if (!password) {
        setErrors(prev => ({...prev, password: "La contraseña es requerida"}));
        hasErrors = true;
    } else if (password.length < 6) {
        setErrors(prev => ({...prev, password: "Mínimo 6 caracteres"}));
        hasErrors = true;
    }

    // Validar repetir contraseña
    if (!repeatPassword) {
        setErrors(prev => ({...prev, repeatPassword: "Confirme su contraseña"}));
        hasErrors = true;
    } else if (password !== repeatPassword) {
        setErrors(prev => ({...prev, repeatPassword: "Las contraseñas no coinciden"}));
        hasErrors = true;
    }
    


    // Validar dirección
    if (!address.trim()) {
        setErrors(prev => ({...prev, address: "La dirección es requerida"}));
        hasErrors = true;
    } else if (address.length < 5) {
        setErrors(prev => ({...prev, address: "Mínimo 5 caracteres"}));
        hasErrors = true;
    }

    // Validar teléfono
    if (!phone.trim()) {
        setErrors(prev => ({...prev, phone: "El teléfono es requerido"}));
        hasErrors = true;
    } else {
        const phoneNumbers = phone.replace(/\D/g, '');
        if (phoneNumbers.length < 8) {
            setErrors(prev => ({...prev, phone: "Mínimo 8 dígitos"}));
            hasErrors = true;
        }
    }

    // Si hay errores, no continuar
    if (hasErrors) return;

     //arreglo de todos los valores del formulario

     const values = Object.values(registerForm)

     // every retornar true si la condicion se cumple para todos los alores del arreglo

     const completed: boolean = values.every((value) => {
        return !!value;
         });

         if(!completed) return Swal.fire("Faltan datos");

        try{ await postRegister(registerForm);
            setRegisterForm(registerInitialState);
            router.push("/login");
            Swal.fire("Registro completado con exito");
            console.log(registerForm);

        } catch (error) {
            Swal.fire("Hubo un error en el registro");
        }

    
    };
    return (
        <div className="flex items-center justify-center p-4">
            <form className="w-full max-w-md bg-white backdrop-blur-lg rounded-3xl shadow-2xl border border-amber-200/20 p-8" onSubmit={submitHandler}>
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-2">
                        Crear Cuenta
                    </h1>
                    <p className="text-gray-600">Completa tus datos para registrarte</p>
                </div>

                <div className="space-y-6">
                    {/* Name Input */}
                    <div className="space-y-2">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <input 
                                className={`w-full pl-12 pr-4 py-3 bg-gray-50 border rounded-xl outline-none transition-all duration-300 focus:bg-white focus:ring-2 focus:ring-amber-200 focus:border-amber-400 text-black placeholder-gray-500 ${errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}
                                type="text" 
                                placeholder="Nombre completo" 
                                value={registerForm.name} 
                                name="name" 
                                onChange={changehandler}
                            />
                        </div>
                        {errors.name && (<span className="text-red-500 text-sm flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.name}
                        </span>)}
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <input 
                                className={`w-full pl-12 pr-4 py-3 bg-gray-50 border rounded-xl outline-none transition-all duration-300 focus:bg-white focus:ring-2 focus:ring-amber-200 focus:border-amber-400 text-black placeholder-gray-500 ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}
                                type="email" 
                                placeholder="correo@ejemplo.com" 
                                value={registerForm.email} 
                                name="email" 
                                onChange={changehandler}
                            />
                        </div>
                        {errors.email && (<span className="text-red-500 text-sm flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.email}
                        </span>)}
                    </div>

                    {/* Password Input */}
                    <div className="space-y-2">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <input 
                                className={`w-full pl-12 pr-4 py-3 bg-gray-50 border rounded-xl outline-none transition-all duration-300 focus:bg-white focus:ring-2 focus:ring-amber-200 focus:border-amber-400 text-black placeholder-gray-500 ${errors.password ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}
                                type="password" 
                                placeholder="Contraseña" 
                                value={registerForm.password} 
                                name="password" 
                                onChange={changehandler}
                            />
                        </div>
                        {errors.password && (<span className="text-red-500 text-sm flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.password}
                        </span>)}
                    </div>

                    {/* Repeat Password Input */}
                    <div className="space-y-2">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <input 
                                className={`w-full pl-12 pr-4 py-3 bg-gray-50 border rounded-xl outline-none transition-all duration-300 focus:bg-white focus:ring-2 focus:ring-amber-200 focus:border-amber-400 text-black placeholder-gray-500 ${errors.repeatPassword ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}
                                type="password" 
                                placeholder="Confirmar contraseña" 
                                value={registerForm.repeatPassword} 
                                name="repeatPassword" 
                                onChange={changehandler}
                            />
                        </div>
                        {errors.repeatPassword && (<span className="text-red-500 text-sm flex items-center gap-1">
                            <svg className="w-4 h-4" fill="text-black" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.repeatPassword}
                        </span>)}
                    </div>

                    {/* Address Input */}
                    <div className="space-y-2">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <input 
                                className={`w-full pl-12 pr-4 py-3 bg-gray-50 border rounded-xl outline-none transition-all duration-300 focus:bg-white focus:ring-2 focus:ring-amber-200 focus:border-amber-400 text-black placeholder-gray-500 ${errors.address ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}
                                type="text" 
                                placeholder="Dirección completa" 
                                value={registerForm.address} 
                                name="address" 
                                onChange={changehandler}
                            />
                        </div>
                        {errors.address && (<span className="text-red-500 text-sm flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.address}
                        </span>)}
                    </div>

                    {/* Phone Input */}
                    <div className="space-y-2">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <input 
                                className={`w-full pl-12 pr-4 py-3 bg-gray-50 border rounded-xl outline-none transition-all duration-300 focus:bg-white focus:ring-2 focus:ring-amber-200 focus:border-amber-400 text-black placeholder-gray-500 ${errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}
                                type="tel" 
                                placeholder="Número de teléfono" 
                                value={registerForm.phone} 
                                name="phone" 
                                onChange={changehandler}
                            />
                        </div>
                        {errors.phone && (<span className="text-red-500 text-sm flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.phone}
                        </span>)}
                    </div>

                    {/* Submit Button */}
                    <button 
                        className="w-full py-3 px-6 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2"
                        type="submit"
                    >
                        <span className="flex items-center justify-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                            Crear Cuenta
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );
}