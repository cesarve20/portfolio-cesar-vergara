import { profile } from './data';
import { Download, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-cream text-coffee p-4 md:p-8 font-sans selection:bg-caoba selection:text-white">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* HEADER / HERO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            className="md:col-span-2 bg-white rounded-3xl p-8 shadow-sm border border-sand/50 flex flex-col justify-center fade-in-up"
            style={{ animationDelay: '0ms' }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand-light text-caoba text-xs font-bold w-fit mb-4">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              {profile.personal.availability}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-coffee via-caoba to-coffee bg-clip-text text-transparent animate-gradient-x pb-2">
              {profile.personal.name}
            </h1>
            
            <h2 className="text-xl text-caoba font-medium mb-6">
              {profile.personal.role}
            </h2>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="/CV-Cesar-Vergara.pdf" 
                download 
                className="bg-coffee text-white px-6 py-3 rounded-xl font-medium hover:bg-caoba transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Download size={18} /> Descargar CV
              </a>
              <div className="flex gap-2">
                {profile.personal.socials.map((social) => (
                  <a 
                    key={social.name} 
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-sand-light rounded-xl hover:bg-sand transition-colors text-coffee"
                    title={social.name}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* TARJETA FOTO / ABOUT SHORT */}
          <div 
            className="bg-caoba text-cream rounded-3xl p-8 shadow-sm flex flex-col justify-between fade-in-up"
            style={{ animationDelay: '150ms' }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Ubicación</h3>
              <p className="opacity-90">{profile.personal.location}</p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-sm leading-relaxed">
                "{profile.about.description}"
              </p>
            </div>
          </div>
        </div>

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* COLUMNA IZQUIERDA: SKILLS & EDUCACION */}
          <div className="md:col-span-1 space-y-6">
            <div 
              className="bg-white rounded-3xl p-6 shadow-sm border border-sand/50 fade-in-up"
              style={{ animationDelay: '300ms' }}
            >
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                Stack Tecnológico
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <span key={skill.name} className="px-3 py-1.5 bg-sand-light rounded-lg text-xs font-medium text-coffee flex items-center gap-1.5 hover:bg-sand transition-colors cursor-default">
                    <skill.icon size={12} />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div 
              className="bg-white rounded-3xl p-6 shadow-sm border border-sand/50 fade-in-up"
              style={{ animationDelay: '450ms' }}
            >
              <h3 className="font-bold text-lg mb-4">Educación</h3>
              <div className="space-y-6">
                {/* CORRECCIÓN 1: key={edu.degree} en lugar de index */}
                {profile.education.map((edu) => (
                  <div key={edu.degree} className="relative pl-4 border-l-2 border-sand">
                    <h4 className="font-bold text-sm text-coffee">{edu.degree}</h4>
                    <p className="text-xs text-caoba font-medium mt-1">{edu.institution}</p>
                    <p className="text-xs text-gray-500 mt-1 mb-2">{edu.period}</p>
                    
                    {edu.link && edu.link !== "" && (
                      <a 
                        href={edu.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-1 text-[10px] font-bold text-white bg-caoba px-2 py-1 rounded hover:bg-coffee transition-colors"
                      >
                        Ver Credencial 📜
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: PROYECTOS */}
          <div 
            className="md:col-span-3 fade-in-up"
            style={{ animationDelay: '600ms' }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-sand/50 h-full">
              <h3 className="text-2xl font-bold mb-6 text-coffee">Proyectos Destacados</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* CORRECCIÓN 2: key={project.title} en lugar de index */}
                {profile.projects.map((project) => (
                  <div key={project.title} className="group relative bg-sand-light/30 rounded-2xl p-6 hover:bg-sand-light transition-all hover:scale-[1.02] hover:-translate-y-1 border border-transparent hover:border-sand flex flex-col h-full duration-300">
                    
                    {project.image && (
                      <div className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100 group-hover:mb-5">
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="block rounded-xl border border-sand/50 overflow-hidden"
                        >
                          <img 
                            src={project.image} 
                            alt={`Vista previa de ${project.title}`} 
                            className="w-full h-40 object-cover object-top hover:scale-105 transition-transform duration-500"
                          />
                        </a>
                      </div>
                    )}

                    <div className="flex justify-between items-start mb-4">
                      <span className="px-2 py-1 bg-white rounded-md text-[10px] font-bold text-caoba uppercase tracking-wider shadow-sm">
                        {project.type}
                      </span>
                      <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-caoba transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                    <h4 className="text-xl font-bold text-coffee mb-2 group-hover:text-caoba transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[10px] font-medium text-gray-500 bg-white px-2 py-1 rounded shadow-sm">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App;