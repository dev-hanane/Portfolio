export const projects = [
  {
    id: 1,
    title: "DocTaza",
    description: "Plateforme web de gestion des rendez-vous médicaux à Taza. Permet aux utilisateurs de prendre et gérer leurs rendez-vous médicaux en ligne.",
    details: "DocTaza est une application web complète permettant aux patients de consulter la disponibilité des médecins, prendre rendez-vous, et recevoir des rappels. Les médecins peuvent gérer leur agenda et leurs patients.",
    technologies: "Bootstrap pour l'interface utilisateur, JavaScript pour l'interactivité, PHP pour le backend, MySQL pour la base de données",
    tags: ["Bootstrap", "JavaScript", "PHP", "MySQL"],
    type: "PFE - Projet de Fin d'Études",
    img: "/projet1.png",
    githubLink: "https://github.com/dev-hanane/PFE_2025",
    screenshots: [
      "prj1/img1.png", "prj1/img2.png", "prj1/img3.png", "prj1/img4.png",
      "prj1/img5.png", "prj1/img6.png", "prj1/img7.png", "prj1/img8.png",
      "prj1/img9.png", "prj1/img10.png", "prj1/img11.png", "prj1/img12.png",
      "prj1/img13.png",
    ],
    buttons: [
      { text: "Détails", type: "details", action: "modal" },
      { text: "GitHub", type: "github", link: "https://github.com/dev-hanane/PFE_2025" }
    ]
  },
  {
    id: 2,
    title: "Archinova",
    description: "Plateforme de gestion des archives d'entreprises. Solution complète pour digitaliser et organiser les archives d'entreprises et administrations.",
    details: "Archinova offre une solution de gestion documentaire complète permettant aux entreprises de centraliser, organiser et retrouver facilement leurs archives. Système de recherche avancé et gestion des accès utilisateur.",
    technologies: "Bootstrap pour le design responsive, JavaScript pour les fonctionnalités interactives, PHP pour le backend, MySQL pour le stockage",
    tags: ["Bootstrap", "JavaScript", "PHP", "MySQL"],
    type: "Projet de Stage 2025",
    img: "/projet2.png",
    screenshots: [
      "/prj2/img1.png", "/prj2/img2.png", "/prj2/img3.png", "/prj2/img4.png"
    ],
    buttons: [
      { text: "Détails", type: "details", action: "modal" }
    ]
  },
  {
    id: 3,
    title: "PROGRESSIA",
    description: "Plateforme de gestion des objectifs personnels. Application pour fixer, suivre et atteindre ses objectifs personnels avec analytics.",
    details: "PROGRESSIA aide les utilisateurs à définir des objectifs SMART, suivre leur progression avec des graphiques et statistiques, et obtenir des suggestions pour améliorer leur productivité.",
    technologies: "Python pour la logique métier, Streamlit pour l'interface web interactive et moderne",
    tags: ["Python", "Streamlit"],
    type: "Projet Académique",
    img: "/projet3.png",
    githubLink: "https://github.com/dev-hanane/Projet-FinM",
    buttons: [
      { text: "Démo", type: "demo", link: "https://progressia.streamlit.app/" },
      { text: "GitHub", type: "github", link: "https://github.com/dev-hanane/Projet-FinM" }
    ]
  },
  {
    id: 4,
    title: "SenceGrid",
    description: "Application JavaFX de simulation de capteurs urbains. Simule et visualise le comportement de capteurs IoT dans un environnement urbain.",
    details: "SenceGrid simule un réseau de capteurs IoT dans une ville, affiche leur localisation sur une grille, et permet d'analyser les données collectées en temps réel. Visualisation interactive des données.",
    technologies: "Java pour la logique, JavaFX pour l'interface graphique, OpenCSV pour l'import/export de données",
    tags: ["Java", "JavaFX", "OpenCSV"],
    type: "Projet Académique",
    img: "/projet4.png",
    buttons: [
      { text: "GitHub", type: "github", link: "https://github.com/dev-hanane/SenseGrid" }
    ]
  },
  {
    id: 5,
    title: "BalekShell",
    description: "Intelligent Linux Security Layer - Couche de sécurité intelligente pour Ubuntu. Système de sécurité avancé pour environnements Linux.",
    details: "BalekShell est un système de sécurité pour Ubuntu qui monitore les activités système, détecte les menaces potentielles, et bloque les accès non autorisés. Implémenté en bash et scripts shell.",
    technologies: "Ubuntu Linux comme OS, Bash pour les scripts, VirtualBox pour l'environnement de test",
    tags: ["Ubuntu", "Bash", "VirtualBox"],
    type: "Projet Académique",
    img: "/projet5.png",
    buttons: [
      { text: "GitHub", type: "github", link: "https://github.com/dev-hanane" }
    ]
  }
];
