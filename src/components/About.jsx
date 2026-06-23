'use client'

import { motion } from 'framer-motion'

export default function About(){

return(

<section className="px-4 md:px-20 py-24 border-b border-transparent shadow-md">

<div className="text-center mb-12 max-w-5xl mx-auto">

<h2 className="text-3xl md:text-5xl mb-4 mt-[-20px] font-semibold text-gray-800">
À Propos
</h2>

<p className="text-gray-500 mb-8 text-sm md:text-base">
Qui suis-je.
</p>

<p className="text-gray-600 mb-8 leading-relaxed">
Passionnée par l’informatique et les technologies numériques, je poursuis actuellement ma formation en cycle d’ingénieur en Big Data et Cloud Computing après l’obtention d’un BTS en Multimédia et Conception Web. Mon parcours a débuté avec un baccalauréat en Sciences et Technologies Électriques, me permettant d’acquérir une base solide dans les domaines techniques et informatiques.

Curieuse, rigoureuse et motivée, j’aime relever de nouveaux défis et développer des solutions innovantes à travers des projets académiques et personnels. Mon objectif est de continuer à approfondir mes compétences dans les domaines du développement logiciel, de la gestion des données et des technologies cloud tout en restant ouverte aux évolutions du secteur numérique.

</p>

</div>

<div className="flex justify-center mt-12">
  <SkillsVisualization />
</div>

</section>

)

}

function SkillsVisualization() {
  const skillsCategories = [
    {
      category: "Langages",
      color: "from-blue-500 to-blue-600",
      skills: ["Python", "JavaScript", "Java", "C", "PHP"]
    },
    {
      category: "Web",
      color: "from-purple-500 to-purple-600",
      skills: ["React", "Flask", "Bootstrap", "Tailwind CSS", "HTML5/CSS3", "Streamlit"]
    },
    {
      category: "Base de Données",
      color: "from-green-500 to-green-600",
      skills: ["MySQL", "PostgreSQL", "SQL", "SQLite"]
    },
    {
      category: "DevOps & Tools",
      color: "from-orange-500 to-orange-600",
      skills: ["Docker", "Linux", "Git/GitHub", "VirtualBox"]
    },
    {
      category: "Networking & Cloud",
      color: "from-pink-500 to-pink-600",
      skills: ["OSI model", "TCP/IP", "DNS", "HTTP", "DHCP", "Switching & Routing",]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const categoryVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <motion.div 
      className="w-full max-w-5xl"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsCategories.map((cat, index) => (
          <motion.div
            key={index}
            variants={categoryVariants}
            className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/20 hover:border-white/40 transition"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${cat.color}`}></div>
              <h3 className="font-semibold text-gray-800 text-sm">{cat.category}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className={`px-3 py-1 text-xs rounded-full font-medium text-white bg-gradient-to-r ${cat.color} shadow-lg hover:shadow-xl transition transform hover:scale-105`}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Expertise Level Circles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-400/30 col-span-full"
        >
          <h3 className="font-semibold text-gray-800 mb-4 text-sm">Niveaux de Maîtrise</h3>
          <div className="space-y-3">
            {[
              { label: "Développement", level: 85 },
              { label: "Base de Données", level: 60 },
              { label: "DevOps", level: 20 },
              { label: "Networking", level: 40 }
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-medium text-gray-700">{item.label}</span>
                  <span className="text-xs text-gray-500">{item.level}%</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
