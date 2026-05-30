const experience = [
  {
    title: "Desarrollador Web & Automatización",
    company: "ViaTalento",
    date: "Nov 2025",
    items: [
      "Diseñé y desarrollé la plataforma web corporativa con React y Node.js con PostgreSQL.",
      "Implementé flujos de automatización conectando la plataforma con WhatsApp Business.",
      "Gestioné el despliegue y configuración del entorno de producción.",
    ]
  }
]

const courses = [
  { name: "Reto AI 'De 0 al aire'", org: "LAB10", date: "Ene–Feb 2026" },
  { name: "Administración de Servidores Linux", org: "Platzi", date: "Ene 2026" },
  { name: "Curso Profesional de DevOps", org: "Platzi", date: "Mar 2026" },
  { name: "Automatización en Empresas con n8n", org: "Platzi", date: "Feb 2026" },
  { name: "Redes de Internet Profesional", org: "Platzi", date: "Feb 2026" },
  { name: "Redes Informáticas", org: "Platzi", date: "Feb 2026" },
]

function Experience() {
  return (
    <section id="experiencia" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Experiencia & Formación</h2>

      <div className="mb-12">
        <h3 className="text-xl font-semibold text-blue-400 mb-6">Experiencia</h3>
        {experience.map((exp) => (
          <div key={exp.title} className="bg-gray-900 rounded-xl p-6 mb-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-semibold">{exp.title}</h4>
                <p className="text-blue-400 text-sm">{exp.company}</p>
              </div>
              <span className="text-gray-500 text-sm">{exp.date}</span>
            </div>
            <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 mt-3">
              {exp.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-xl font-semibold text-blue-400 mb-6">Cursos & Certificaciones</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {courses.map((course) => (
            <div key={course.name} className="bg-gray-900 rounded-xl p-4 flex justify-between items-center">
              <div>
                <p className="font-medium text-sm">{course.name}</p>
                <p className="text-gray-500 text-xs">{course.org}</p>
              </div>
              <span className="text-gray-500 text-xs">{course.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience