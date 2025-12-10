"use client";
import { useAppContext } from "@/contexts/AppContext";
import { LoginDto } from "@/interfaces/ILoginDto";
import { LoginFormState } from "@/interfaces/LoginFormState";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";


const formInitialState ={
email: "",
password: "",
};


export default function LoginForm () {
    const { setLogin } = useAppContext();
    const router = useRouter();
    const [loginForm, setLoginForm] = useState<LoginFormState>(formInitialState);

    const changehandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        const property = e.target.name;
        const value = e.target.value;

        setLoginForm({
            ...loginForm,
            [property]: value,
        })
    }

    const postLogin = async (loginDto:LoginDto) => {
    const result = await axios.post (`${process.env.NEXT_PUBLIC_API_URL}/users/login`,loginDto

        );
        return result.data;
    };

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
    const values = Object.values(loginForm)
    
        
    
         const completed: boolean = values.every((value) => {
            return !!value;
             });
    
             if(!completed) return Swal.fire("Faltan datos");
    
             try {
                const loginInfo = await postLogin(loginForm);
                Swal.fire({title:"Sesion iniciada con exito",
                    confirmButtonColor: "#f59e0b",
                })
                setLoginForm(formInitialState)
                router.push("/home")
                setLogin(loginInfo.user, loginInfo.token);
             } catch {
                Swal.fire({title:"Hubo un error en al iniciar sesion",
                            confirmButtonColor: "#f59e0b", // amber-500
             })
             }

    };
    
    return (
        <div className="flex items-center justify-center pt-10">
            <form className="w-full max-w-md bg-white backdrop-blur-lg rounded-3xl shadow-2xl border border-amber-200/20 p-8" onSubmit={submitHandler}>
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-2">
                        Iniciar Sesión
                    </h1>
                    <p className="text-gray-600">Ingresa tus credenciales para continuar</p>
                </div>

                <div className="space-y-6">
                    {/* Email Input */}
                    <div className="space-y-2">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <input 
                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none transition-all duration-300 focus:bg-white focus:ring-2 focus:ring-amber-200 focus:border-amber-400 text-black placeholder-gray-500"
                                type="text" 
                                placeholder="Correo electrónico" 
                                value={loginForm.email} 
                                name="email" 
                                onChange={changehandler}
                            />
                        </div>
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
                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none transition-all duration-300 focus:bg-white focus:ring-2 focus:ring-amber-200 focus:border-amber-400 text-black placeholder-gray-500"
                                type="password" 
                                placeholder="Contraseña" 
                                value={loginForm.password} 
                                name="password" 
                                onChange={changehandler}
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button 
                        className="w-full py-3 px-6 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2"
                        type="submit"
                    >
                        <span className="flex items-center justify-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                            </svg>
                            Iniciar Sesión
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );

}