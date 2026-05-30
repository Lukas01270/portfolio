const skills = {
  "Frontend": ["React", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  "Backend": ["Node.js", "PostgreSQL", "REST APIs"],
  "DevOps & Cloud": ["Linux", "Docker", "Git", "AWS", "n8n", "Python"],
  "Redes": ["Cisco", "MikroTik", "GNS3" , "Manejo físico" , "Ruteos"],
}

function Skills() {
  return (
    <section id="habilidades" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Habilidades</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-gray-900 rounded-xl p-6">
            <h3 className="text-blue-400 font-semibold mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span key={skill} className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills