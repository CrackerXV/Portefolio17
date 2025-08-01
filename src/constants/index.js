import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  java,
  html,
  css,
  reactjs,
  C,
  tailwind,
  nodejs,
  php,
  git,
  figma,
  docker,
  monnoyeur,
  jacques_feyder,
  suez,
  balzac,
  snake,
  morpion,
  EDev,
  threejs,
  iris,
  shopify_website,
  IosCalculatrice,
  BookIn,
  AppBookIn,
  sncf,

  cgi1, cgi2, cgi3,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "A propos",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "Technology_monitoring",
    title: "Veille technologique",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Developpeur logiciel & web",
    icon: web,
  },
  {
    title: "Portefolio by REACT",
    icon: mobile,
  },
  {
    title: "Fiable & engagé",
    icon: backend,
  },
  {
    title: "Iris Etudiant",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "C++",
    icon: C,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Php",
    icon: php,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Elève au lycée",
    company_name: "Jacques Feyder",
    icon: jacques_feyder,
    iconBg: "#E6DEDD",
    date: "Septembre 2021 - Août 2023",
    points: [
      "Bonne maîtrise des fondamentaux en mathématiques, physique et chimie approfondies.",
      "Résolution de problèmes : Compétences renforcées grâce aux études.",
      "Expérience en laboratoire : Acquisition des bases en manipulation d'équipements de laboratoire.",    ],
  },
  {
    title: "Assistant RH",
    company_name: "Balzac Intérim",
    icon: balzac,
    iconBg: "#383E56",
    date: "Septembre 2023 - Octobre 2023",
    points: [
      "Gestion administrative du personnel : Suivi rigoureux des dossiers salariés, saisie des heures et gestion des contrats pour assurer une administration du personnel fluide et conforme aux exigences légales.",
      "Communication et écoute active : Réception et traitement des demandes des intérimaires avec professionnalisme, en assurant un dialogue clair et une réponse adaptée à chaque situation.",
      "Recrutement et sélection des profils : Participation au processus de recrutement en présélectionnant les candidats selon les besoins des clients, garantissant un bon ajustement poste-profil.",
      "Polyvalence et réactivité : Capacité à jongler entre différentes tâches RH dans un environnement dynamique, en apportant des solutions rapides et efficaces aux urgences quotidiennes.",
    ],
  },
  {
    title: "Ripeur",
    company_name: "Suez",
    icon: suez,
    iconBg: "#E6DEDD",
    date: "Juillet 2023 - Août 2023",
    points: [
      "Endurance physique et résilience : Capacité démontrée à effectuer des tâches exigeantes dans toutes les conditions climatiques, en assurant une collecte et une élimination des déchets ponctuelles.",
      "Travail d'équipe et collaboration : Travail efficace en équipe pour coordonner les itinéraires et garantir une collecte des déchets efficace, mettant en avant des compétences solides en communication et en coordination.",
      "Respect des normes de santé et sécurité : Respect strict des réglementations de santé et sécurité pour prévenir les accidents et les blessures, en maintenant un environnement de travail sûr.",
      "Planification des itinéraires et gestion du temps : Gestion des itinéraires et des horaires quotidiens pour optimiser les temps de collecte et améliorer l'efficacité opérationnelle.",
    ],
  },
  {
    title: "Assistant système Informatique",
    company_name: "Monnoyeur",
    icon: monnoyeur,
    iconBg: "#383E56",
    date: "Octobre 2023 - Août 2025",
    points: [
      "Connaissances techniques : Maîtrise de la gestion du matériel, des logiciels et des réseaux.",
      "Communication : Capacité à expliquer clairement les problèmes techniques au personnel non technique.",
      "Résolution de problèmes : Dépannage rapide et efficace des problèmes informatiques.",
      "Gestion de projet : Gestion des projets informatiques en respectant les délais fixés.",
    ],
  },
  {
    title: "BTS SIO Slam",
    company_name: "Iris",
    icon: iris,
    iconBg: "#E6DEDD",
    date: "Octobre 2023 - Avril 2025",
    points: [
      "Nous avons commencé par examiner tous les aspects de l'informatique,",
      "Choisi l'option SLAM,",
      "Travail en groupe sur plusieurs projets de développement,",
      "Participation à des masterclasses avec des développeurs expérimentés pour apprendre d'eux.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
        "Je pensais qu'il était impossible de rendre nos visions aussi réalistes que la réalité elle-même, mais la CGI m'a prouvé le contraire.",
    name: "InfraCGI",
    designation: "Consultant",
    company: "Infra",
    image: "src/assets/CGI/xcgi1.jpeg",
  },
  {
    testimonial:
        "Je n'ai jamais rencontré de graphistes CGI aussi engagés à donner vie à notre imagination que cette équipe.",
    name: "CGI_Global",
    designation: "CEO",
    company: "CGI",
    image: "src/assets/CGI/xcgi2.jpeg",
  },
  {
    testimonial:
        "Après avoir intégré la CGI, notre engagement visuel a grimpé en flèche, augmentant de manière spectaculaire. Nous sommes extrêmement reconnaissants !",
    name: "SpitfireCGI",
    designation: "Developer CGI",
    company: "SpitfireAviation",
    image: "src/assets/CGI/xcgi3.png",
  },
];

const projects = [
  {
    name: "Shopify",
    description:
        "J'ai lancé avec succès une boutique en ligne sur Shopify, proposant une gamme de produits sélectionnés avec soin pour répondre aux préférences des clients et améliorer leur expérience d'achat.",    tags: [
      {
        name: "Cms",
        color: "white-text-gradient",
      },
      {
        name: "Plug-Ins",
        color: "green-text-gradient",
      },
    ],
    image: shopify_website,
    source_code_link: "https://github.com/CrackerXV/Cosm-tt-Shopify_Website",
  },
  {
    name: "Snake Game",
    description:
        "J'ai développé un jeu Snake en suivant des consignes précises, incluant la génération de trois pommes et un multiplicateur de vitesse (x2) pour plus de défi et de variété dans le gameplay.",    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
    ],
    image: snake,
    source_code_link: "https://github.com/CrackerXV/snake",
  },
  {
    name: "EDev",
    description:
        "Un portail éducatif qui présente le programme scolaire, les cours disponibles, les collaborations professionnelles, et offre des informations sur les parcours de carrière.",    tags: [
      {
        name: "Cms",
        color: "white-text-gradient",
      },
      {
        name: "WP",
        color: "pink-text-gradient",
      },
    ],
    image: EDev,
    source_code_link: "https://github.com/CrackerXV/E-developper_WebSite",
  },
  {
    name: "Morpion",
    description:
        "J'ai conçu un jeu de Morpion en Java en appliquant les principes de la programmation orientée objet, avec une interface intuitive permettant à deux joueurs de s'affronter sur une grille dynamique.",    tags: [
      {
        name: "Java",
        color: "text-gold-gradient",
      }
    ],
    image: morpion,
    source_code_link: "https://github.com/CrackerXV/Morpion",
  },

  {
    name: "Calculatrice",
    description:
        "J'ai conçu une calculatrice inspirée du style iOS en Java pour Android, en appliquant les principes de la programmation, avec une interface fluide permettant d’effectuer des opérations simples et avancées.",    tags: [
      {
        name: "Kotlin",
        color: "violet-gradient",
      },
    ],
    image: IosCalculatrice,
    source_code_link: "https://github.com/CrackerXV/calculatrice-java-android-app",
  },
  {
    name: "Android Survey",
    description:
        "J’ai développé un formulaire Android de satisfaction pour la SNCF, dédié aux RER, avec une interface intuitive permettant aux usagers d’évaluer leur expérience en plusieurs critères de satisfaction",    tags: [
      {
        name: "Kotlin",
        color: "violet-gradient",
      },

    ],
    image: sncf,
    source_code_link: "https://github.com/CrackerXV/MySNCF-Survey",
  },
  {
    name: "Book'in",
    description:

        "J’ai développé un site de bibliothèque en ligne en PHP et MySQL, avec un système de gestion fluide permettant l’emprunt et la recherche d’ouvrages.",    tags: [
      {
        name: "php",
        color: "text-gold-gradient",
      },
      {
        name: "sql",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "white-text-gradient",
      },
    ],
    image: BookIn,
    source_code_link: "https://github.com/CrackerXV/Book-in",
  },
  {
    name: "Application Book'in",
    description:
        "J’ai conçu une application lourde en Java reliée au site de bibliothèque, offrant une interface complète pour gérer les livres, les emprunts et les utilisateurs.",    tags: [
      {
        name: "java",
        color: "text-gold-gradient",
      },

    ],
    image: AppBookIn,
    source_code_link: "https://github.com/CrackerXV/Application-Book-in",
  },
];
const follow = [
  {
    name: "",
    description:
        "Three-dimensional (3D)\n" +
        "computer graphics ",
    tags: [
      {
        name: "Cms",
        color: "blue-text-gradient",
      },

    ],
    image: cgi1,
    source_code_link: "https://github.com/CrackerXV/Cosm-tt-Shopify_Website",
  },
  {
    name: "",
    description:
        "A fractal landscape created in Terragen",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
    ],
    image: cgi2,
    source_code_link: "https://github.com/rylesdev/projet_snake",
  },
  {
    name: "",
    description:
        "A computer-generated image featuring a house at sunset, made in Blender",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },

    ],
    image: cgi3,
    source_code_link: "https://github.com/",
  },

];

export { services, technologies, experiences, testimonials, projects, follow};
