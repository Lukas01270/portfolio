const projects = [
  {
    title: "ViaTalento",
    description: "Plataforma web corporativa para empresa boliviana de capacitación profesional. Incluye automatización con WhatsApp Business para captación de clientes.",
    tech: ["React", "Node.js", "PostgreSQL", "n8n"],
    github: "https://github.com/Lukas01270/via-talento",
    type: "Freelance"
  },
  {
    title: "Sistema de Control de Acceso Biométrico",
    description: "Solución IoT con ESP32 y sensor de huella dactilar. Backend en Node.js con visualización en tiempo real desplegada en Vercel.",
    tech: ["ESP32", "Node.js", "React", "PostgreSQL", "Vercel"],
    github: "",
    type: "Universitario"
  },
  {
    title: "Laboratorio de Redes y Enrutamiento",
    description: "Arquitecturas de red complejas con protocolos OSPF, RIP y SNMP en entornos físicos (MikroTik) y virtuales (GNS3/Cisco). Segmentación con VLANs.",
    tech: ["MikroTik", "GNS3", "Cisco", "OSPF", "VLANs"],
    github: "",
    type: "Universitario"
  }
]

function Projects() {
  return (
    <section id="proyectos" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Proyectos</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.title} className="bg-gray-900 rounded-xl p-6 flex flex-col gap-4 hover:border hover:border-blue-600 transition">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <span className="text-xs bg-blue-900 text-blue-300 px-2 py-1 rounded">{project.type}</span>
            </div>
            <p className="text-gray-400 text-sm flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">{t}</span>
              ))}
            </div>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm hover:underline">
                Ver en GitHub →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects