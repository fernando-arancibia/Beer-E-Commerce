import Link from "next/link";
import Image from 'next/image';

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900 w-full overflow-x-hidden">
      {/* Hero Section - Beerwulf Style */}
      <section className="relative min-h-screen w-full">
        {/* Light gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>
        
        {/* Premium pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1),transparent_50%)]"></div>
        </div>

        {/* Main Hero Content Container - 100% width but centered */}
        <div className="relative z-10 w-full min-h-screen flex items-center justify-center py-8 md:py-12 px-4 sm:px-6 lg:px-8">
          
          {/* Inner container with max width limit */}
          <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            
            {/* Title Section */}
            <div className="w-full text-center pt-10">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                <span className="block text-blue-800">CERVEZA ONLINE</span>
                <span className="block bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                  PREMIUM
                </span>
              </h1>
            </div>

            {/* Video Section - Full width within max-w-7xl */}
            <div className="w-full relative">
              {/* Background decoration */}
              <div className="absolute -inset-3 sm:-inset-4 md:-inset-6 lg:-inset-8 bg-gradient-to-r from-amber-500/10 via-yellow-500/15 to-amber-500/10 rounded-xl sm:rounded-2xl md:rounded-3xl blur-xl sm:blur-2xl"></div>

              {/* Video container */}
              <div className="relative w-full bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg sm:shadow-2xl overflow-hidden border border-amber-200/30">
                <div className="aspect-[4/3] xs:aspect-[16/9] md:aspect-[21/9] w-full">
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
                      width={1200}
                      height={675}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </video>
                
                  {/* Text overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 px-4">
                    <div className="text-center text-white w-full max-w-4xl">
                      <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-2 md:mb-4 drop-shadow-lg">
                        DESCUBRE LA EXPERIENCIA
                      </h2>
                      <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl opacity-90 drop-shadow-md">
                        Cervezas premium de calidad mundial
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full text-center px-2">
              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-blue-600 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                Descubre una selección exclusiva de cervezas premium. 
                <span className="block mt-1 sm:mt-2 text-amber-600 font-semibold">
                  Calidad excepcional, experiencia única.
                </span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-12 justify-center">
                <Link href="/home" className="w-full xs:w-auto">
                  <button className="w-full group relative px-4 xs:px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-amber-500 hover:bg-amber-400 text-blue-700 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25 text-sm sm:text-base">
                    <span className="flex items-center justify-center gap-1 sm:gap-2">
                      EXPLORAR PRODUCTOS
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </Link>
                
                <Link href="/register" className="w-full xs:w-auto">
                  <button className="w-full px-4 xs:px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 border-2 border-blue-400 hover:border-amber-500 text-blue-700 hover:text-amber-600 font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base">
                    CREAR CUENTA
                  </button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 pt-3 sm:pt-4 md:pt-5 border-t border-gray-300 max-w-xs sm:max-w-sm md:max-w-2xl mx-auto mb-4 sm:mb-6 md:mb-9">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-600">500+</div>
                  <div className="text-xs sm:text-sm text-gray-500">Productos</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-600">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-500">Soporte</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-600">100%</div>
                  <div className="text-xs sm:text-sm text-gray-500">Calidad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Experiencia premium */}
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-400 via-gray-500 to-gray px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="w-full text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
              EXPERIENCIA
              <span className="block bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                PREMIUM
              </span>
            </h2>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Cuadro envio express */}
            <div className="w-full group text-center p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-900/80 to-black/80 backdrop-blur-sm border border-gray-800 hover:border-amber-500/50 transition-all duration-500">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl sm:text-2xl md:text-3xl">🚚</span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 md:mb-4 group-hover:text-amber-400 transition-colors">
                ENVÍO EXPRESS
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-100 leading-relaxed">
                Entrega gratuita en 24-48h para compras superiores a $75. Seguimiento en tiempo real.
              </p>
            </div>

            {/* Pago seguro */}
            <div className="w-full group text-center p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-900/80 to-black/80 backdrop-blur-sm border border-gray-800 hover:border-amber-500/50 transition-all duration-500">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl sm:text-2xl md:text-3xl">🔒</span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 md:mb-4 group-hover:text-amber-400 transition-colors">
                PAGO SEGURO
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-100 leading-relaxed">
                Transacciones protegidas con encriptación SSL. Múltiples métodos de pago disponibles.
              </p>
            </div>

            {/* Garantia total */}
            <div className="w-full group text-center p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-800 hover:border-amber-500/50 transition-all duration-500 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-xl sm:text-2xl md:text-3xl">⭐</span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 md:mb-4 group-hover:text-amber-400 transition-colors">
                GARANTÍA TOTAL
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-100 leading-relaxed">
                30 días de garantía de devolución. Soporte premium 24/7 para todos nuestros clientes.
              </p>
            </div>
          </div>

          {/* Newsletter & CTA Section */}
          <div className="w-full mt-6 sm:mt-8 md:mt-10 lg:mt-12">
            <div className="w-full grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
              {/* Newsletter */}
              <div className="w-full text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
                  SUSCRÍBETE A NUESTRO
                  <span className="block bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                    NEWSLETTER
                  </span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                  Recibe ofertas exclusivas, nuevos productos y contenido premium directamente en tu inbox.
                </p>
                
                <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full flex-1 px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 bg-gray-700 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm sm:text-base"
                  />
                  <button className="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-amber-500 hover:bg-amber-400 text-blue-700 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-sm sm:text-base">
                    SUSCRIBIRSE
                  </button>
                </div>
                
                <p className="text-xs sm:text-sm text-white opacity-80">
                  Al suscribirte aceptas nuestros términos y condiciones. Puedes cancelar en cualquier momento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


