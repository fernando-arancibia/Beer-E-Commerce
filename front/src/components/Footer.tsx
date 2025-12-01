import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-400 via-grey to-gray-700 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 text-center lg:text-left">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                TU TIENDA PREMIUM
              </h3>
              <p className="text-white mt-2 mr-7 leading-relaxed">
                Descubre productos exclusivos con la mejor calidad y experiencia premium.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="group">
                <div className="w-10 h-10 bg-gray-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <span className="text-lg">📘</span>
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-10 h-10 bg-gray-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <span className="text-lg">📷</span>
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-10 h-10 bg-gray-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <span className="text-lg">🐦</span>
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-10 h-10 bg-gray-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <span className="text-lg">💼</span>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col ml-20 items-center lg:items-start">
            <h4 className="text-lg font-semibold text-white mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/home" className="text-white hover:text-amber-400 transition-colors duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">🛍️ Productos</span>
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-white hover:text-amber-400 transition-colors duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">🛒 Carrito</span>
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-white hover:text-amber-400 transition-colors duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">👤 Mi Cuenta</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-amber-400 transition-colors duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">❓ Ayuda</span>
                </Link>
              </li>
            </ul>
          </div>

          
          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Atención al Cliente</h4>
            <ul className="space-y-3">
              <li className="text-white flex items-center">
                <span className="mr-2">📞</span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="text-white flex items-center">
                <span className="mr-2">✉️</span>
                <span>soporte@tutienda.com</span>
              </li>
              <li className="text-white flex items-center">
                <span className="mr-2">🕒</span>
                <span>Lun-Vie 9:00-18:00</span>
              </li>
              <li className="text-white flex items-center">
                <span className="mr-2">📍</span>
                <span>Ciudad, País</span>
              </li>
            </ul>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-white mb-3">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-white focus:outline-none focus:border-amber-500 text-sm"
                />
                <button className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-r-lg transition-colors duration-300 text-sm">
                  ✉️
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Tu Tienda Premium. Todos los derechos reservados.
            </div>
            
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                Términos de Servicio
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
    