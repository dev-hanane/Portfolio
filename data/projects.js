import { projects } from '@/data/projects'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Projects(){
  const [selectedProject, setSelectedProject] = useState(null)

  return(
    <section className="px-4 md:px-20 py-24 border-b border-transparent shadow-md">
      <h2 className="text-3xl md:text-5xl mb-10 font-semibold text-gray-800">
        Mes Projets
      </h2>

      <p className="text-gray-500 mb-8 text-sm md:text-base">
        Voici les projets que j'ai réalisés au cours de ma formation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
        {projects.map((project) => (
          <Project
            key={project.id}
            project={project}
            onSelect={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" 
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-2xl p-6 max-w-6xl w-full max-h-[95vh] overflow-y-auto" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-4">
                {/* Image principale réduite - logo seulement */}
                <img src={selectedProject.img} className="rounded-lg w-16 h-14 object-contain"/>
                <h2 className="text-3xl font-semibold text-gray-800">{selectedProject.title}</h2>
              </div>
              <button 
                onClick={() => setSelectedProject(null)} 
                className="text-gray-500 hover:text-gray-800 text-2xl"
              >
                ✕
              </button>
            </div>

            <span className="text-sm bg-blue-600/30 text-blue-800 px-3 py-1 rounded-full font-medium mb-4 inline-block">
              {selectedProject.type}
            </span>

            <div className="flex gap-2 mb-6">
              {selectedProject.tags?.map((tag,i) => (
                <span 
                  key={i} 
                  className="text-sm bg-gray-200 text-gray-700 px-3 py-1 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description et Détails en colonnes */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {selectedProject.description}
                </p>
              </div>

              {selectedProject.details && (
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Détails du Projet</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {selectedProject.details}
                  </p>
                </div>
              )}
            </div>

            {selectedProject.technologies && (
              <div className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-5 border border-blue-200 hidden">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Technologies Utilisées</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {selectedProject.technologies}
                </p>
              </div>
            )}

            {/* Screenshots Gallery */}
            {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Démonstration - Captures d'écran</h3>
                <div className="grid grid-cols-1 gap-4">
                  {selectedProject.screenshots.map((screenshot, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className="relative group"
                    >
                      <img 
                        src={screenshot} 
                        alt={`Screenshot ${i + 1}`}
                        className="rounded-lg w-full h-auto min-h-96 object-cover border-2 border-gray-200 group-hover:border-blue-500 transition cursor-pointer"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-lg transition flex items-center justify-center">
                        <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100">{i + 1}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Boutons d'action */}
            <div className={`flex gap-4 pt-6 border-t ${selectedProject.githubLink ? 'flex-row' : 'flex-col'}`}>
              {selectedProject.githubLink && (
                <a 
                  href={selectedProject.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition text-center"
                >
                  GitHub →
                </a>
              )}
              <button 
                onClick={() => setSelectedProject(null)}
                className={`${selectedProject.githubLink ? 'flex-1' : 'w-full'} px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition`}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function Project({project, onSelect}){
  return(
    <div className="bg-white/10 backdrop-blur p-6 rounded-2xl shadow-lg hover:shadow-xl transition border border-white/20">
      <span className="text-xs bg-blue-600/30 text-blue-800 px-3 py-1 rounded-full font-medium mb-2 inline-block">
        {project.type}
      </span>

      <div className="flex gap-2 mb-4">
        {project.tags?.map((tag,i) => (
          <span 
            key={i} 
            className="text-xs bg-white/20 text-gray-700 px-3 py-1 rounded-full font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      <img src={project.img} className="rounded-lg mb-4 w-full object-contain h-56"/>

      <h3 className="text-xl mb-3 font-semibold text-gray-800">
        {project.title}
      </h3>

      <p className="text-gray-600 mb-6 text-sm leading-relaxed">
        {project.description}
      </p>

      <div className="flex gap-4">
        {project.buttons?.map((button, i) => (
          <button 
            key={i}
            onClick={button.type === 'details' ? onSelect : () => window.open(button.link, '_blank')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition border ${
              button.type === 'details' 
                ? 'bg-white/20 backdrop-blur hover:bg-white/30 border-white/30' 
                : 'bg-blue-600/20 backdrop-blur hover:bg-blue-600/30 border-blue-600/30'
            }`}
          >
            {button.text} →
          </button>
        ))}
      </div>
    </div>
  )
}
