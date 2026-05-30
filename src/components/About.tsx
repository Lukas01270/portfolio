function About() {
  return (
    <section id="sobre-mi" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Sobre mí</h2>
      <div className="grid md:grid-cols-2 gap-10 text-gray-300">
        <div>
          <p className="mb-4">
            Soy estudiante de Ingeniería Electrónica y Telecomunicaciones en la UMSS, 
            con una orientación hacia el desarrollo web y la infraestructura cloud.
          </p>
          <p className="mb-4">
            Me especializo en construir aplicaciones fullstack con React y Node.js, 
            automatizar procesos con n8n y Python, y desplegar soluciones en entornos Linux y AWS.
          </p>
          <p>
            Actualmente aprendiendo alemán con miras a oportunidades internacionales 
            en Europa, especialmente en el área de DevOps y Cloud Engineering.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-gray-900 rounded-lg p-4">
            <span className="text-blue-400 font-semibold"> Universidad</span>
            <p className="text-sm mt-1">Ing. Electrónica y Telecomunicaciones — UMSS</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-4">
            <span className="text-blue-400 font-semibold"> Ubicación</span>
            <p className="text-sm mt-1">Cochabamba, Bolivia</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-4">
            <span className="text-blue-400 font-semibold"> Idiomas</span>
            <p className="text-sm mt-1">Español (nativo) · Inglés (C1) · Alemán (en curso)</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-4">
            <span className="text-blue-400 font-semibold"> Enfoque actual</span>
            <p className="text-sm mt-1">DevOps · Cloud AWS · Automatización</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About