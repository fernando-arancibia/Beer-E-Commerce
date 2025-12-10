
import Link from "next/link";
import Image from 'next/image';

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section - Beerwulf Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
        {/* Light gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>
        
        {/* Premium pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1),transparent_50%)]"></div>
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 md:gap-16 py-8 md:py-0">
          
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="block text-blue-800">CERVEZA ONLINE</span>
              <span className="block bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                PREMIUM
              </span>
            </h1>
          </div>

          {/* Video Section */}
          <div className="relative w-full">
            {/* Background decoration */}
            <div className="absolute -inset-4 md:-inset-8 bg-gradient-to-r from-amber-500/10 via-yellow-500/15 to-amber-500/10 rounded-2xl md:rounded-3xl blur-2xl"></div>

            {/* Video container */}
            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-amber-200/30 mx-auto max-w-6xl">
              <div className="aspect-[16/9] md:aspect-[21/9] w-full">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/beer.mp4" type="video/mp4" />
                  <Image
                    src={"/cervezas.png"}
                    alt={"Premium Beer Collection"}
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </video>
              
                {/* Texto overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="text-center text-white px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 md:mb-4 drop-shadow-lg">
                      DESCUBRE LA EXPERIENCIA
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl opacity-90 drop-shadow-md">
                      Cervezas premium de calidad mundial
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="text-center max-w-5xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl text-blue-600 mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto px-4">
              Descubre una selección exclusiva de cervezas premium. 
              <span className="block mt-2 text-amber-600 font-semibold">
                Calidad excepcional, experiencia única.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12 justify-center px-4">
              <Link href="/home" className="w-full sm:w-auto">
                <button className="w-full group relative px-6 md:px-8 py-3 md:py-4 bg-amber-500 hover:bg-amber-400 text-blue-700 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25">
                  <span className="flex items-center justify-center gap-2">
                    EXPLORAR PRODUCTOS
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </Link>
              
              <Link href="/register" className="w-full sm:w-auto">
                <button className="w-full px-6 md:px-8 py-3 md:py-4 border-2 border-blue-400 hover:border-amber-500 text-blue-700 hover:text-amber-600 font-semibold rounded-lg transition-all duration-300">
                  CREAR CUENTA
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-4 md:pt-5 border-t border-gray-300 max-w-2xl mx-auto mb-6 md:mb-9 px-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-amber-600">500+</div>
                <div className="text-xs md:text-sm text-gray-500">Productos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-amber-600">24/7</div>
                <div className="text-xs md:text-sm text-gray-500">Soporte</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-amber-600">100%</div>
                <div className="text-xs md:text-sm text-gray-500">Calidad</div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Section Experiencia premium*/}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-400 via-gray-500 to-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              EXPERIENCIA
              <span className="block bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                PREMIUM
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {/* Cuadro envio express */}
            <div className="group text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-900/80 to-black/80 backdrop-blur-sm border border-gray-800 hover:border-amber-500/50 transition-all duration-500">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl md:text-3xl">🚚</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 group-hover:text-amber-400 transition-colors">
                ENVÍO EXPRESS
              </h3>
              <p className="text-sm md:text-base text-gray-100 leading-relaxed">
                Entrega gratuita en 24-48h para compras superiores a $75. Seguimiento en tiempo real.
              </p>
            </div>

            {/* Pago seguro */}
            <div className="group text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-900/80 to-black/80 backdrop-blur-sm border border-gray-800 hover:border-amber-500/50 transition-all duration-500">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl md:text-3xl">🔒</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 group-hover:text-amber-400 transition-colors">
                PAGO SEGURO
              </h3>
              <p className="text-sm md:text-base text-gray-100 leading-relaxed">
                Transacciones protegidas con encriptación SSL. Múltiples métodos de pago disponibles.
              </p>
            </div>

            {/* Garantia total */}
            <div className="group text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-800 hover:border-amber-500/50 transition-all duration-500 sm:col-span-2 md:col-span-1">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl md:text-3xl">⭐</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 group-hover:text-amber-400 transition-colors">
                GARANTÍA TOTAL
              </h3>
              <p className="text-sm md:text-base text-gray-100 leading-relaxed">
                30 días de garantía de devolución. Soporte premium 24/7 para todos nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      

      {/* Newsletter & CTA Section */}
        <div className="max-w-7xl mt-6 md:mt-8 mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-0">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Newsletter */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
                SUSCRÍBETE A NUESTRO
                <span className="block bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  NEWSLETTER
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white mb-6 md:mb-8 leading-relaxed">
                Recibe ofertas exclusivas, nuevos productos y contenido premium directamente en tu inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 px-4 md:px-6 py-3 md:py-4 bg-gray-700 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                />
                <button className="px-6 md:px-8 py-3 md:py-4 bg-amber-500 hover:bg-amber-400 text-blue-700 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                  SUSCRIBIRSE
                </button>
              </div>
              
              <p className="text-xs md:text-sm text-white">
                Al suscribirte aceptas nuestros términos y condiciones. Puedes cancelar en cualquier momento.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



