"use client"

import { motion } from "framer-motion"

export default function Hero(){

return(

<section className="grid grid-cols-1 md:grid-cols-2 items-start px-4 md:px-20 py-12 pt-32 border-b border-transparent shadow-md">

<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
>

<h1 className="text-2xl md:text-4xl font-semibold mb-4 text-gray-800">
Salut, je suis <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Hanane Chaaouan</span>.
</h1>

<h2 className="text-base md:text-lg text-gray-500 mb-4">
Élève ingénieure en informatique
</h2>

<p className="text-gray-500 mb-6 leading-relaxed text-sm md:text-base">
passionnée par le développement et les nouvelles technologies.
Compétente en développement informatique, et actuellement en préparation pour me
spécialiser en Big Data et Cloud Computing.
</p>

<div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:0.8,delay:0.2}}
className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20"
>
<div className="text-xl mb-1">
<svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
</div>
<h3 className="font-semibold text-gray-800 mb-1 text-sm">Travail d'Équipe</h3>
<p className="text-xs text-gray-600">Collaboration efficace</p>
</motion.div>

<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:0.8,delay:0.3}}
className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20"
>
<div className="text-xl mb-1">
<svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>
</div>
<h3 className="font-semibold text-gray-800 mb-1 text-sm">Communication</h3>
<p className="text-xs text-gray-600">Expression claire</p>
</motion.div>

<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:0.8,delay:0.4}}
className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20"
>
<div className="text-xl mb-1">
<svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
</div>
<h3 className="font-semibold text-gray-800 mb-1 text-sm">Résolution de Problèmes</h3>
<p className="text-xs text-gray-600">Penser analytique</p>
</motion.div>

<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:0.8,delay:0.5}}
className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20"
>
<div className="text-xl mb-1">
<svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M7 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-4C5.9 6 5 6.9 5 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6-10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
</div>
<h3 className="font-semibold text-gray-800 mb-1 text-sm">Adaptabilité</h3>
<p className="text-xs text-gray-600">Flexibilité au changement</p>
</motion.div>
</div>

<div className="flex items-center gap-6">
<button className="bg-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition font-medium" onClick={() => window.open('/CV_CHAAOUAN.pdf', '_blank')}>
Mon CV →
</button>

<div className="flex gap-4">
<a href="https://github.com/dev-hanane" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:shadow-lg transition" title="GitHub">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
</a>
<a href="https://www.linkedin.com/in/hanane-chaaouan/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:shadow-lg transition" title="LinkedIn">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.436-.103.249-.129.597-.129.946v5.423h-3.554s.05-8.736 0-9.646h3.554v1.364c.429-.662 1.196-1.608 2.902-1.608 2.12 0 3.71 1.388 3.71 4.373v5.517zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.706 0-.955.77-1.703 1.963-1.703 1.192 0 1.914.748 1.938 1.703 0 .948-.746 1.706-1.986 1.706zm1.581 11.597H3.715V9.806h3.203v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
</a>
<a href="mailto:Chaaouanhanane18@gmail.com" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:shadow-lg transition" title="Email">
<span className="text-sm text-gray-800 font-bold">@</span>
</a>
</div>
</div>

</motion.div>

<motion.div
initial={{opacity:0,x:40}}
animate={{opacity:1,x:0}}
transition={{duration:1}}
className="hidden md:flex justify-end items-start -mt-10"
>
<div className="relative" style={{width: '450px', height: '500px'}}>
{/* Photo au centre - Desktop */}
<div className="absolute left-1/2 top-[42%] transform -translate-x-1/2 -translate-y-1/2">
<img
src="/WhatsApp Image 2026-06-22 at 10.09.35.png"
style={{width: '230px', height: '230px', objectFit: 'cover', borderRadius: '50%'}}
className="shadow-2xl"
/>
</div>

{/* React - Top (0°) */}
<div className="absolute w-12 h-12 rounded-full border-2 border-blue-600 flex items-center justify-center" style={{left: '201px', top: '20px'}} title="React">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-6 h-6"/>
</div>

{/* Python - 45° */}
<div className="absolute w-12 h-12 rounded-full border-2 border-blue-400 flex items-center justify-center" style={{left: '321px', top: '70px'}} title="Python">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-6 h-6"/>
</div>

{/* JavaScript - Right (90°) */}
<div className="absolute w-12 h-12 rounded-full border-2 border-yellow-400 flex items-center justify-center" style={{left: '371px', top: '190px'}} title="JavaScript">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-6 h-6"/>
</div>

{/* Node.js - 135° */}
<div className="absolute w-12 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center" style={{left: '321px', top: '310px'}} title="Flask">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" className="w-6 h-6"/>
</div>

{/* SQL - Bottom (180°) */}
<div className="absolute w-12 h-12 rounded-full border-2 border-blue-700 flex items-center justify-center" style={{left: '201px', top: '360px'}} title="SQL">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" className="w-6 h-6"/>
</div>

{/* MongoDB - 225° */}
<div className="absolute w-12 h-12 rounded-full border-2 border-blue-600 flex items-center justify-center" style={{left: '81px', top: '310px'}} title="PostgreSQL">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="w-6 h-6"/>
</div>

{/* Bootstrap - Left (270°) */}
<div className="absolute w-12 h-12 rounded-full border-2 border-purple-600 flex items-center justify-center" style={{left: '31px', top: '190px'}} title="Bootstrap">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="w-6 h-6"/>
</div>

{/* Java - 315° */}
<div className="absolute w-12 h-12 rounded-full border-2 border-red-700 flex items-center justify-center" style={{left: '81px', top: '70px'}} title="Java">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-6 h-6"/>
</div>

</div>

</motion.div>

</section>

)

}
