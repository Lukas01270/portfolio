function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl font-bold mb-4">
        Andrés Romero
      </h1>
      <h2 className="text-xl text-blue-400 mb-6">
        Fullstack Developer & DevOps Engineer
      </h2>
      <p className="text-gray-400 max-w-xl mb-8">
        Ingeniero Electrónico especializado en desarrollo web, automatización e infraestructura cloud. 
        Construyo soluciones que conectan hardware, software y la nube.
      </p>
      <div className="flex gap-4">
        <a href="#proyectos" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">
          Ver proyectos
        </a>
        <a href="#contacto" className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition">
          Contacto
        </a>
      </div>
    </section>
  )
}

export default Hero