function Contact() {
  return (
    <section id="contacto" className="py-20 px-6 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Contacto</h2>
      <p className="text-gray-400 mb-10">
        ¿Tienes un proyecto o una oportunidad? Escríbeme.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <a href="mailto:andresfranciscoromero@gmail.com" className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition">
          Email
        </a>
        <a href="https://www.linkedin.com/in/andr%C3%A9s-francisco-romero-saravia-34b5a7220/" target="_blank" rel="noopener noreferrer" className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition">
          LinkedIn
        </a>
        <a href="https://github.com/Lukas01270" target="_blank" rel="noopener noreferrer" className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition">
          GitHub
        </a>
      </div>
    </section>
  )
}

export default Contact