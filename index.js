// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')
const languageToggleButtons = document.querySelectorAll('[data-lang-switch]')

const supportedLanguages = ['en', 'es']
const defaultLanguage = 'en'
const languageStorageKey = 'preferred-language'

let activeLanguage = defaultLanguage
let caseStudyImages = []
let galleryRefs = null

const translations = {
  en: {
    'meta.title': 'Juan Canseco Portfolio',
    'meta.description':
      'Portfolio of Juan Canseco, a software developer focused on backend development, REST APIs, and SQL, with projects in .NET, Spring Boot, and Angular.',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'hero.description':
      'Software developer focused on backend development, REST APIs, and SQL databases. I have professional experience in Java/Android and service integration, and build projects with C#/.NET, Spring Boot, and Angular/TypeScript. I currently investigate and resolve system issues using SQL Server. I am open to learning and working with other technologies to meet the needs of each project.',
    'hero.cta': 'View Projects',
    'about.heading': 'About Me',
    'about.subheading':
      'Experience in software development, service integration, and technical support, with a focus on solving problems and building maintainable solutions.',
    'about.title': 'Get to know me',
    'about.paragraph1':
      'I\'m <strong>Juan Canseco</strong>, a software developer with professional experience in <strong>Java/Android and REST API integration</strong>. In my current IT Assistant role at <strong>CADISA</strong>, I support a fuel volume monitoring platform, investigating and resolving issues through <strong>SQL Server queries, stored procedures, and log analysis</strong>. My experience as a <strong>Service Desk Team Leader</strong> has also involved coordinating teams and communicating with clients during critical incidents.',
    'about.paragraph2':
      'In my projects, I build solutions with <strong>C#/.NET, Java/Spring Boot, and Angular/TypeScript</strong>, using JWT authentication, SQL databases, Redis, and automated tests. I apply <strong>Clean Architecture, Vertical Slice, and CQRS-style flows</strong> to organize responsibilities and support maintainability. I am open to learning new languages and frameworks, bringing this foundation to the technologies each team and project needs.',
    'about.cta': 'See My Work',
    'about.skills': 'Core Skills',
    'projects.heading': 'Projects',
    'projects.subheading':
      'Projects that demonstrate backend development, frontend integration, data management, and code refactoring to address specific needs.',
    'projects.gamehub.description':
      'Multi-channel chat application built with ASP.NET Core and Blazor. It combines real-time communication through SignalR and Redis Backplane, JWT authentication, and asynchronous messaging with RabbitMQ. Built with Clean Architecture and automated tests.',
    'projects.inventory.description':
      'Inventory system with a Spring Boot API and an Angular/TypeScript frontend. Includes JWT authentication, permissions, reporting, and MySQL persistence. I refactored the backend from a layered architecture to Vertical Slice and the frontend using NgRx, Signals, and lazy loading.',
    'projects.schedule.description':
      'Desktop application developed and delivered for a secondary school using C#, .NET, Windows Forms, and SQLite. Manages teachers, subjects, groups, classrooms, and weekly timetables, with algorithms to prevent scheduling conflicts.',
    'projects.status': 'Live demo: work in progress',
    'projects.caseStudy': 'Case Study',
    'footer.social': 'Social',
    'footer.description':
      'Backend development, API integration, and solutions built with SQL, .NET, Spring Boot, and Angular. Open to learning and working with new technologies.',
    'footer.copyright': '\u00A9 Copyright 2026. Juan Canseco',
    'common.projectOverview': 'Project Overview',
    'common.videoWalkthrough': 'Video Walkthrough',
    'common.screenshots': 'Screenshots',
    'common.toolsUsed': 'Tools Used',
    'common.projectLinks': 'Project Links',
    'common.viewCode': 'View Code',
    'common.frontendCode': 'Frontend Code',
    'common.apiCode': 'API Code',
    'common.playWalkthrough': 'Play walkthrough',
    'common.galleryDialog': 'Project image gallery',
    'common.galleryClose': 'Close',
    'common.galleryCloseAria': 'Close image gallery',
    'common.galleryPrev': 'Prev',
    'common.galleryPrevAria': 'Previous image',
    'common.galleryNext': 'Next',
    'common.galleryNextAria': 'Next image',
    'common.galleryOpenFor': 'Open project image gallery for',
    'common.galleryFallbackImage': 'Project image',
    'common.videoFallbackTitle': 'Project walkthrough',
    'project1.meta.title': 'GameHub Case Study',
    'project1.meta.description':
      'GameHub: real-time chat with ASP.NET Core, SignalR, Redis Backplane, JWT authentication, asynchronous messaging, and automated tests.',
    'project1.hero.description':
      'Multi-channel chat application built with ASP.NET Core and Blazor, combining real-time communication, JWT authentication, and asynchronous messaging within Clean Architecture.',
    'project1.hero.status': 'Live demo in progress',
    'project1.showcase.alt': 'GameHub application screenshot',
    'project1.overview.paragraph1':
      'GameHub is a multi-channel chat application built with <strong>ASP.NET Core</strong> and <strong>Blazor WebAssembly</strong>. It combines <strong>JWT authentication</strong> with real-time communication through <strong>SignalR and Redis Backplane</strong>, integrating backend services with an interactive frontend.',
    'project1.overview.paragraph2':
      'The backend uses <strong>Clean Architecture</strong> and a <strong>CQRS-style flow</strong> to separate responsibilities and organize application operations. Asynchronous messaging uses <strong>RabbitMQ and MassTransit</strong>, while data persistence uses <strong>SQL Server and Entity Framework Core</strong>.',
    'project1.overview.paragraph3':
      'I added automated tests with <strong>xUnit and Testcontainers</strong> to validate application behavior. The project brings together authentication, persistence, and messaging, with an emphasis on <strong>maintainability and separation of responsibilities</strong>.',
    'project1.video.iframeTitle': 'GameHub walkthrough',
    'project1.video.previewAlt': 'GameHub walkthrough preview',
    'project1.video.title':
      'Watch the GameHub demo directly from this case study.',
    'project1.screenshots.image1': 'GameHub screenshot 1',
    'project1.screenshots.image2': 'GameHub screenshot 2',
    'project1.screenshots.image3': 'GameHub screenshot 3',
    'project1.screenshots.image4': 'GameHub screenshot 4',
    'project1.screenshots.image5': 'GameHub screenshot 5',
    'project1.screenshots.image6': 'GameHub screenshot 6',
    'project1.screenshots.image7': 'GameHub screenshot 7',
    'project1.screenshots.image8': 'GameHub screenshot 8',
    'project1.screenshots.image9': 'GameHub screenshot 9',
    'project1.screenshots.image10': 'GameHub screenshot 10',
    'project1.links.status':
      'Live demo is still a work in progress while I continue polishing the application and deployment story.',
    'project1.footer.description':
      'Backend development with authentication, real-time communication, asynchronous messaging, and automated tests.',
    'project2.meta.title': 'Inventory App Case Study',
    'project2.meta.description':
      'Inventory App: Spring Boot API and Angular frontend with JWT authentication, MySQL, and refactoring toward Vertical Slice Architecture.',
    'project2.hero.description':
      'Inventory system with a Spring Boot API and Angular/TypeScript frontend, featuring JWT authentication, permissions, reporting, and MySQL persistence. Refactored to organize code by feature.',
    'project2.hero.status': 'Live demo in progress',
    'project2.showcase.alt': 'Inventory App screenshot',
    'project2.overview.paragraph1':
      'Inventory App is a full-stack inventory management application with a <strong>Spring Boot API</strong> and an <strong>Angular/TypeScript frontend</strong>. It includes authentication, permissions, reporting, and data persistence in <strong>MySQL</strong>.',
    'project2.overview.paragraph2':
      'On the frontend, I refactored the <strong>CoreUI</strong> Angular template toward a <strong>feature-based structure</strong>. It uses <strong>NgRx, Signals, and lazy loading</strong>, along with guards, facades, filters, pagination, and administrative workflows.',
    'project2.overview.paragraph3':
      'On the backend, I refactored the API from a layered architecture to <strong>Vertical Slice Architecture</strong>, grouping code by feature. The API uses <strong>Spring Security and JWT</strong> for authentication, <strong>MySQL</strong> for persistence, and <strong>Testcontainers</strong> for automated testing. The application remains under development.',
    'project2.video.iframeTitle': 'Inventory App walkthrough',
    'project2.video.previewAlt': 'Inventory App walkthrough preview',
    'project2.video.title':
      'Watch the Inventory App demo directly from this page.',
    'project2.screenshots.image1': 'Inventory App screenshot 1',
    'project2.screenshots.image2': 'Inventory App screenshot 2',
    'project2.screenshots.image3': 'Inventory App screenshot 3',
    'project2.screenshots.image4': 'Inventory App screenshot 4',
    'project2.screenshots.image5': 'Inventory App screenshot 5',
    'project2.screenshots.image6': 'Inventory App screenshot 6',
    'project2.screenshots.image7': 'Inventory App screenshot 7',
    'project2.screenshots.image8': 'Inventory App screenshot 8',
    'project2.screenshots.image8': 'Inventory App screenshot 9',
    'project2.links.status':
      'Live demo is still a work in progress while I finish remaining modules and deployment.',
    'project2.footer.description':
      'API development, frontend integration, SQL persistence, and refactoring to support maintainability.',
    'project3.meta.title': 'Sistema de Horarios Case Study',
    'project3.meta.description':
      'School scheduling application delivered for a secondary school, built with C#, Windows Forms, and SQLite, with scheduling conflict prevention.',
    'project3.hero.description':
      'Desktop application developed and delivered for a secondary school using C#, .NET, Windows Forms, and SQLite, with academic data management and scheduling conflict prevention.',
    'project3.hero.status': 'Live demo in progress',
    'project3.showcase.alt': 'Sistema de Horarios screenshot',
    'project3.overview.paragraph1':
      'Sistema de Horarios is a desktop application I developed for a secondary school using <strong>C#, .NET, and Windows Forms</strong>. It manages teachers, subjects, groups, classrooms, and weekly timetables, with data stored in <strong>SQLite</strong>.',
    'project3.overview.paragraph2':
      'The system includes <strong>algorithms to prevent scheduling conflicts</strong>, supporting the organization of weekly academic activities. It was <strong>completed and delivered</strong> to address a real school scheduling need.',
    'project3.overview.paragraph3':
      'The project uses a <strong>layered architecture and dependency injection</strong>. Delivering it helped me better understand the relationship between scheduling rules, data persistence, and the user workflow, and informed my approach to separating responsibilities in later projects.',
    'project3.video.iframeTitle': 'Sistema de Horarios walkthrough',
    'project3.video.previewAlt': 'Sistema de Horarios walkthrough preview',
    'project3.video.title':
      'Watch the Sistema de Horarios demo directly from this case study.',
    'project3.screenshots.image1': 'Sistema de Horarios screenshot 1',
    'project3.screenshots.image2': 'Sistema de Horarios screenshot 2',
    'project3.screenshots.image3': 'Sistema de Horarios screenshot 3',
    'project3.screenshots.image4': 'Sistema de Horarios screenshot 4',
    'project3.screenshots.image5': 'Sistema de Horarios screenshot 5',
    'project3.screenshots.image6': 'Sistema de Horarios screenshot 6',
    'project3.screenshots.image7': 'Sistema de Horarios screenshot 7',
    'project3.screenshots.image8': 'Sistema de Horarios screenshot 8',
    'project3.links.status':
      'Live demo is shown as a work in progress because this project was built as a desktop application rather than a deployed web app.',
    'project3.footer.description':
      'Software built around user needs, scheduling rules, and data management, from implementation to delivery.',
  },
  es: {
    'meta.title': 'Portafolio de Juan Canseco',
    'meta.description':
      'Portafolio de Juan Canseco, desarrollador de software enfocado en backend, APIs REST y SQL, con proyectos en .NET, Spring Boot y Angular.',
    'nav.home': 'Inicio',
    'nav.about': 'Sobre m\u00ED',
    'nav.projects': 'Proyectos',
    'hero.description':
      'Desarrollador de software enfocado en backend, APIs REST y bases de datos SQL. Cuento con experiencia profesional en Java/Android e integración de servicios, y desarrollo proyectos con C#/.NET, Spring Boot y Angular/TypeScript. Actualmente trabajo en diagnóstico y corrección de incidencias con SQL Server. Estoy abierto a aprender y trabajar con otras tecnologías según las necesidades de cada proyecto.',
    'hero.cta': 'Ver Proyectos',
    'about.heading': 'Sobre M\u00ED',
    'about.subheading':
      'Experiencia en desarrollo de software, integración de servicios y soporte técnico, con un enfoque en resolver problemas y construir soluciones mantenibles.',
    'about.title': 'Con\u00F3ceme',
    'about.paragraph1':
      'Soy <strong>Juan Canseco</strong>, desarrollador de software con experiencia profesional en <strong>Java/Android e integración de APIs REST</strong>. Actualmente, como Auxiliar de TI en <strong>CADISA</strong>, brindo soporte a una plataforma de control volumétrico: investigo y corrijo incidencias mediante <strong>consultas SQL en SQL Server, procedimientos almacenados, logs y bitácoras</strong>. Mi experiencia como <strong>Líder de Mesa de Servicio</strong> también me ha permitido coordinar equipos y mantener la comunicación con clientes durante incidencias críticas.',
    'about.paragraph2':
      'En mis proyectos desarrollo soluciones con <strong>C#/.NET, Java/Spring Boot y Angular/TypeScript</strong>, utilizando autenticación JWT, bases de datos SQL, Redis y pruebas automatizadas. Aplico <strong>Clean Architecture, Vertical Slice y flujos de estilo CQRS</strong> para organizar responsabilidades y facilitar el mantenimiento. Estoy abierto a aprender nuevos lenguajes y frameworks, y a trasladar esta base a las tecnologías que cada equipo y proyecto necesiten.',
    'about.cta': 'Ver Mi Trabajo',
    'about.skills': 'Habilidades Clave',
    'projects.heading': 'Proyectos',
    'projects.subheading':
      'Proyectos que muestran desarrollo backend, integración con frontend, gestión de datos y refactorización de código para resolver necesidades concretas.',
    'projects.gamehub.description':
      'Aplicación de chat multicanal con ASP.NET Core y Blazor. Integra comunicación en tiempo real con SignalR y Redis Backplane, autenticación JWT y mensajería asíncrona con RabbitMQ. Implementa Clean Architecture y pruebas automatizadas.',
    'projects.inventory.description':
      'Sistema de inventario con una API en Spring Boot y frontend en Angular/TypeScript. Incluye autenticación JWT, permisos, reportes y persistencia en MySQL. Refactoricé el backend de una arquitectura por capas a Vertical Slice y el frontend con NgRx, Signals y carga diferida.',
    'projects.schedule.description':
      'Aplicación de escritorio desarrollada y entregada para una escuela secundaria con C#, .NET, Windows Forms y SQLite. Administra docentes, materias, grupos, salones y horarios semanales, con algoritmos para prevenir conflictos de horarios.',
    'projects.status': 'Demo en vivo: en progreso',
    'projects.caseStudy': 'Caso de Estudio',
    'footer.social': 'Redes',
    'footer.description':
      'Desarrollo backend, integración de APIs y soluciones con SQL, .NET, Spring Boot y Angular. Abierto a aprender y trabajar con nuevas tecnologías.',
    'footer.copyright': '\u00A9 Copyright 2026. Juan Canseco',
    'common.projectOverview': 'Resumen del Proyecto',
    'common.videoWalkthrough': 'Recorrido en Video',
    'common.screenshots': 'Capturas',
    'common.toolsUsed': 'Herramientas Usadas',
    'common.projectLinks': 'Enlaces del Proyecto',
    'common.viewCode': 'Ver C\u00F3digo',
    'common.frontendCode': 'C\u00F3digo Frontend',
    'common.apiCode': 'C\u00F3digo API',
    'common.playWalkthrough': 'Ver recorrido',
    'common.galleryDialog': 'Galer\u00EDa de im\u00E1genes del proyecto',
    'common.galleryClose': 'Cerrar',
    'common.galleryCloseAria': 'Cerrar galer\u00EDa de im\u00E1genes',
    'common.galleryPrev': 'Anterior',
    'common.galleryPrevAria': 'Imagen anterior',
    'common.galleryNext': 'Siguiente',
    'common.galleryNextAria': 'Imagen siguiente',
    'common.galleryOpenFor': 'Abrir galer\u00EDa de im\u00E1genes del proyecto para',
    'common.galleryFallbackImage': 'Imagen del proyecto',
    'common.videoFallbackTitle': 'Recorrido del proyecto',
    'project1.meta.title': 'Caso de Estudio de GameHub',
    'project1.meta.description':
      'GameHub: chat en tiempo real con ASP.NET Core, SignalR, Redis Backplane, autenticación JWT, mensajería asíncrona y pruebas automatizadas.',
    'project1.hero.description':
      'Aplicación de chat multicanal con ASP.NET Core y Blazor que integra comunicación en tiempo real, autenticación JWT y mensajería asíncrona bajo Clean Architecture.',
    'project1.hero.status': 'Demo en vivo en progreso',
    'project1.showcase.alt': 'Captura de la aplicaci\u00F3n GameHub',
    'project1.overview.paragraph1':
      'GameHub es una aplicación de chat multicanal construida con <strong>ASP.NET Core</strong> y <strong>Blazor WebAssembly</strong>. Combina <strong>autenticación JWT</strong> con comunicación en tiempo real mediante <strong>SignalR y Redis Backplane</strong>, integrando los servicios backend con un frontend interactivo.',
    'project1.overview.paragraph2':
      'El backend utiliza <strong>Clean Architecture</strong> y un <strong>flujo de estilo CQRS</strong> para separar responsabilidades y organizar las operaciones de la aplicación. La mensajería asíncrona utiliza <strong>RabbitMQ y MassTransit</strong>, mientras que la persistencia de datos se implementa con <strong>SQL Server y Entity Framework Core</strong>.',
    'project1.overview.paragraph3':
      'Incorporé pruebas automatizadas con <strong>xUnit y Testcontainers</strong> para validar el comportamiento de la aplicación. El proyecto reúne autenticación, persistencia y mensajería, con énfasis en la <strong>mantenibilidad y la separación de responsabilidades</strong>.',
    'project1.video.iframeTitle': 'Recorrido de GameHub',
    'project1.video.previewAlt': 'Vista previa del recorrido de GameHub',
    'project1.video.title':
      'Mira la demo de GameHub directamente desde este caso de estudio.',
    'project1.screenshots.image1': 'Captura de GameHub 1',
    'project1.screenshots.image2': 'Captura de GameHub 2',
    'project1.screenshots.image3': 'Captura de GameHub 3',
    'project1.screenshots.image4': 'Captura de GameHub 4',
    'project1.screenshots.image5': 'Captura de GameHub 5',
    'project1.screenshots.image6': 'Captura de GameHub 6',
    'project1.screenshots.image7': 'Captura de GameHub 7',
    'project1.screenshots.image8': 'Captura de GameHub 8',
    'project1.screenshots.image9': 'Captura de GameHub 9',
    'project1.screenshots.image10': 'Captura de GameHub 10',
    'project1.links.status':
      'La demo en vivo sigue en progreso mientras contin\u00FAo puliendo la aplicaci\u00F3n y la estrategia de despliegue.',
    'project1.footer.description':
      'Desarrollo backend con autenticación, comunicación en tiempo real, mensajería asíncrona y pruebas automatizadas.',
    'project2.meta.title': 'Caso de Estudio de Inventory App',
    'project2.meta.description':
      'Inventory App: API en Spring Boot y frontend en Angular con autenticación JWT, MySQL y refactorización hacia Vertical Slice Architecture.',
    'project2.hero.description':
      'Sistema de inventario con una API en Spring Boot y frontend en Angular/TypeScript, con autenticación JWT, permisos, reportes y persistencia en MySQL. Refactorizado para organizar el código por funcionalidad.',
    'project2.hero.status': 'Demo en vivo en progreso',
    'project2.showcase.alt': 'Captura de Inventory App',
    'project2.overview.paragraph1':
      'Inventory App es una aplicación full stack de gestión de inventario con una <strong>API en Spring Boot</strong> y un <strong>frontend en Angular/TypeScript</strong>. Incluye autenticación, permisos, reportes y persistencia de datos en <strong>MySQL</strong>.',
    'project2.overview.paragraph2':
      'En el frontend, refactoricé la plantilla de Angular de <strong>CoreUI</strong> hacia una <strong>estructura basada en funcionalidades</strong>. Utiliza <strong>NgRx, Signals y carga diferida</strong>, junto con guards, facades, filtros, paginación y flujos administrativos.',
    'project2.overview.paragraph3':
      'En el backend, refactoricé la API de una arquitectura por capas a <strong>Vertical Slice Architecture</strong>, agrupando el código por funcionalidad. La API utiliza <strong>Spring Security y JWT</strong> para autenticación, <strong>MySQL</strong> para persistencia y <strong>Testcontainers</strong> para pruebas automatizadas. La aplicación continúa en desarrollo.',
    'project2.video.iframeTitle': 'Recorrido de Inventory App',
    'project2.video.previewAlt': 'Vista previa del recorrido de Inventory App',
    'project2.video.title':
      'Mira la demo de Inventory App directamente desde esta p\u00E1gina.',
    'project2.screenshots.image1': 'Captura de Inventory App 1',
    'project2.screenshots.image2': 'Captura de Inventory App 2',
    'project2.screenshots.image3': 'Captura de Inventory App 3',
    'project2.screenshots.image4': 'Captura de Inventory App 4',
    'project2.screenshots.image5': 'Captura de Inventory App 5',
    'project2.screenshots.image6': 'Captura de Inventory App 6',
    'project2.screenshots.image7': 'Captura de Inventory App 7',
    'project2.screenshots.image8': 'Captura de Inventory App 8',
    'project2.screenshots.image9': 'Captura de Inventory App 9',
    'project2.links.status':
      'La demo en vivo sigue en progreso mientras continúo puliendo la aplicación y la estrategia de despliegue.',
    'project2.footer.description':
      'Desarrollo de APIs, integración con frontend, persistencia SQL y refactorización para facilitar el mantenimiento.',
    'project3.meta.title': 'Caso de Estudio de Sistema de Horarios',
    'project3.meta.description':
      'Sistema de horarios entregado para una escuela secundaria, construido con C#, Windows Forms y SQLite, con prevención de conflictos de horarios.',
    'project3.hero.description':
      'Aplicación de escritorio desarrollada y entregada para una escuela secundaria con C#, .NET, Windows Forms y SQLite, con gestión de datos académicos y prevención de conflictos de horarios.',
    'project3.hero.status': 'Demo en vivo en progreso',
    'project3.showcase.alt': 'Captura de Sistema de Horarios',
    'project3.overview.paragraph1':
      'Sistema de Horarios es una aplicación de escritorio que desarrollé para una escuela secundaria con <strong>C#, .NET y Windows Forms</strong>. Administra docentes, materias, grupos, salones y horarios semanales, con persistencia de datos en <strong>SQLite</strong>.',
    'project3.overview.paragraph2':
      'El sistema incluye <strong>algoritmos para prevenir conflictos de horarios</strong>, facilitando la organización de las actividades académicas semanales. Fue <strong>terminado y entregado</strong> para atender una necesidad real de planificación escolar.',
    'project3.overview.paragraph3':
      'El proyecto utiliza una <strong>arquitectura por capas e inyección de dependencias</strong>. Su entrega me permitió comprender mejor la relación entre las reglas de horarios, la persistencia de datos y el flujo de uso, y orientó mi forma de separar responsabilidades en proyectos posteriores.',
    'project3.video.iframeTitle': 'Recorrido de Sistema de Horarios',
    'project3.video.previewAlt':
      'Vista previa del recorrido de Sistema de Horarios',
    'project3.video.title':
      'Mira la demo de Sistema de Horarios directamente desde este caso de estudio.',
    'project3.screenshots.image1': 'Captura de Sistema de Horarios 1',
    'project3.screenshots.image2': 'Captura de Sistema de Horarios 2',
    'project3.screenshots.image3': 'Captura de Sistema de Horarios 3',
    'project3.screenshots.image4': 'Captura de Sistema de Horarios 4',
    'project3.screenshots.image5': 'Captura de Sistema de Horarios 5',
    'project3.screenshots.image6': 'Captura de Sistema de Horarios 6',
    'project3.screenshots.image7': 'Captura de Sistema de Horarios 7',
    'project3.screenshots.image8': 'Captura de Sistema de Horarios 8',
    'project3.links.status':
      'La demo en vivo aparece como trabajo en progreso porque este proyecto fue construido como una aplicaci\u00F3n de escritorio y no como una app web desplegada.',
    'project3.footer.description':
      'Software desarrollado a partir de necesidades de usuarios, reglas de horarios y gestión de datos, desde la implementación hasta la entrega.',
  },
}

const getStoredLanguage = () => {
  try {
    return localStorage.getItem(languageStorageKey)
  } catch (error) {
    return null
  }
}

const saveLanguage = (language) => {
  try {
    localStorage.setItem(languageStorageKey, language)
  } catch (error) {
    // Ignore storage errors and keep the in-memory selection.
  }
}

const getTranslation = (language, key) =>
  translations[language]?.[key] ?? translations[defaultLanguage]?.[key] ?? ''

const updateLanguageButtons = (language) => {
  languageToggleButtons.forEach((button) => {
    const isActive = button.dataset.langSwitch === language
    button.classList.toggle('lang-toggle__btn--active', isActive)
    button.setAttribute('aria-pressed', String(isActive))
  })
}

const updateGalleryTriggerLabels = () => {
  if (!caseStudyImages.length) {
    return
  }

  const openLabel = getTranslation(activeLanguage, 'common.galleryOpenFor')
  const fallbackLabel = getTranslation(
    activeLanguage,
    'common.galleryFallbackImage'
  )

  caseStudyImages.forEach((image) => {
    const imageLabel = image.alt || fallbackLabel
    image.setAttribute('aria-label', `${openLabel} ${imageLabel}`)
  })
}

const updateGalleryUiTranslations = () => {
  if (!galleryRefs) {
    return
  }

  const {
    closeGalleryButton,
    gallery,
    galleryCaption,
    galleryDialog,
    galleryImage,
    nextGalleryButton,
    previousGalleryButton,
  } = galleryRefs

  galleryDialog.setAttribute(
    'aria-label',
    getTranslation(activeLanguage, 'common.galleryDialog')
  )
  closeGalleryButton.textContent = getTranslation(
    activeLanguage,
    'common.galleryClose'
  )
  closeGalleryButton.setAttribute(
    'aria-label',
    getTranslation(activeLanguage, 'common.galleryCloseAria')
  )
  previousGalleryButton.textContent = getTranslation(
    activeLanguage,
    'common.galleryPrev'
  )
  previousGalleryButton.setAttribute(
    'aria-label',
    getTranslation(activeLanguage, 'common.galleryPrevAria')
  )
  nextGalleryButton.textContent = getTranslation(
    activeLanguage,
    'common.galleryNext'
  )
  nextGalleryButton.setAttribute(
    'aria-label',
    getTranslation(activeLanguage, 'common.galleryNextAria')
  )

  if (gallery.classList.contains('project-gallery--open')) {
    galleryCaption.textContent =
      galleryImage.alt ||
      getTranslation(activeLanguage, 'common.galleryFallbackImage')
  }
}

const updateInteractiveTranslations = () => {
  updateGalleryTriggerLabels()
  updateGalleryUiTranslations()
}

const applyLanguage = (language) => {
  const safeLanguage = supportedLanguages.includes(language)
    ? language
    : defaultLanguage

  activeLanguage = safeLanguage

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n
    element.textContent = getTranslation(safeLanguage, key)
  })

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const key = element.dataset.i18nHtml
    element.innerHTML = getTranslation(safeLanguage, key)
  })

  document.querySelectorAll('[data-i18n-content]').forEach((element) => {
    const key = element.dataset.i18nContent
    element.setAttribute('content', getTranslation(safeLanguage, key))
  })

  document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
    const mappings = element.dataset.i18nAttr
      .split(';')
      .map((mapping) => mapping.trim())
      .filter(Boolean)

    mappings.forEach((mapping) => {
      const [attribute, key] = mapping.split(':')

      if (!attribute || !key) {
        return
      }

      element.setAttribute(
        attribute.trim(),
        getTranslation(safeLanguage, key.trim())
      )
    })
  })

  document.documentElement.lang = safeLanguage === 'es' ? 'es-MX' : 'en'
  updateLanguageButtons(safeLanguage)
  updateInteractiveTranslations()
}

if (languageToggleButtons.length) {
  const storedLanguage = getStoredLanguage()
  const initialLanguage = supportedLanguages.includes(storedLanguage)
    ? storedLanguage
    : defaultLanguage

  applyLanguage(initialLanguage)

  languageToggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedLanguage = button.dataset.langSwitch

      if (!supportedLanguages.includes(selectedLanguage)) {
        return
      }

      applyLanguage(selectedLanguage)
      saveLanguage(selectedLanguage)
    })
  })
}

if (hamMenuBtn && smallMenu && headerHamMenuBtn && headerHamMenuCloseBtn) {
  hamMenuBtn.addEventListener('click', () => {
    if (smallMenu.classList.contains('header__sm-menu--active')) {
      smallMenu.classList.remove('header__sm-menu--active')
    } else {
      smallMenu.classList.add('header__sm-menu--active')
    }

    if (headerHamMenuBtn.classList.contains('d-none')) {
      headerHamMenuBtn.classList.remove('d-none')
      headerHamMenuCloseBtn.classList.add('d-none')
    } else {
      headerHamMenuBtn.classList.add('d-none')
      headerHamMenuCloseBtn.classList.remove('d-none')
    }
  })
}

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

if (headerLogoConatiner) {
  headerLogoConatiner.addEventListener('click', () => {
    location.href = 'index.html'
  })
}

// Inline YouTube embed support for project pages.
const projectVideoButtons = document.querySelectorAll('.project-video')

const buildYouTubeEmbedUrl = (button) => {
  const explicitEmbedUrl = button.dataset.youtubeSrc?.trim()

  if (explicitEmbedUrl) {
    const embedUrl = new URL(explicitEmbedUrl)
    embedUrl.searchParams.set('autoplay', '1')
    embedUrl.searchParams.set('rel', '0')
    return embedUrl.toString()
  }

  const youtubeId = button.dataset.youtubeId?.trim()

  if (!youtubeId) {
    return ''
  }

  return `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`
}

projectVideoButtons.forEach((button) => {
  const youtubeId = button.dataset.youtubeId?.trim()
  const embedUrl = buildYouTubeEmbedUrl(button)
  const watchUrl =
    button.dataset.youtubeWatchUrl?.trim() ||
    (youtubeId ? `https://www.youtube.com/watch?v=${youtubeId}` : '')

  if (!embedUrl) {
    return
  }

  button.classList.add('project-video--ready')

  const badge = button.querySelector('.project-video__badge')
  if (badge) {
    badge.textContent = getTranslation(activeLanguage, 'common.playWalkthrough')
  }

  button.addEventListener('click', () => {
    if (window.location.protocol === 'file:' && watchUrl) {
      window.open(watchUrl, '_blank', 'noopener,noreferrer')
      return
    }

    const iframe = document.createElement('iframe')
    iframe.className = 'project-details__video-iframe'
    iframe.src = embedUrl
    iframe.title =
      button.dataset.videoTitle ||
      getTranslation(activeLanguage, 'common.videoFallbackTitle')
    iframe.allow =
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    iframe.referrerPolicy = 'strict-origin-when-cross-origin'
    iframe.allowFullscreen = true
    iframe.loading = 'lazy'

    button.replaceWith(iframe)
  })
})

// Click-to-open image carousel for case-study pages.
caseStudyImages = Array.from(
  document.querySelectorAll(
    '.project-details__showcase-img, .project-details__screenshot-img'
  )
)

if (caseStudyImages.length) {
  const galleryItems = []
  const galleryIndexBySrc = new Map()

  const getGalleryAltBySrc = (src) => {
    const matchingImage = caseStudyImages.find((image) => {
      const imageSrc = image.currentSrc || image.src
      return imageSrc === src
    })

    return (
      matchingImage?.alt ||
      getTranslation(activeLanguage, 'common.galleryFallbackImage')
    )
  }

  caseStudyImages.forEach((image) => {
    const src = image.currentSrc || image.src

    if (!galleryIndexBySrc.has(src)) {
      galleryIndexBySrc.set(src, galleryItems.length)
      galleryItems.push({ src })
    }

    image.dataset.galleryIndex = galleryIndexBySrc.get(src)
    image.tabIndex = 0
    image.setAttribute('role', 'button')
  })

  updateGalleryTriggerLabels()

  const gallery = document.createElement('div')
  gallery.className = 'project-gallery'
  gallery.setAttribute('aria-hidden', 'true')
  gallery.innerHTML = `
    <div class="project-gallery__backdrop" data-gallery-close="true"></div>
    <div class="project-gallery__dialog" role="dialog" aria-modal="true">
      <div class="project-gallery__toolbar">
        <p class="project-gallery__counter" aria-live="polite"></p>
        <button class="project-gallery__close" type="button"></button>
      </div>
      <div class="project-gallery__viewport">
        <button class="project-gallery__nav project-gallery__nav--prev" type="button"></button>
        <img class="project-gallery__image" alt="" />
        <button class="project-gallery__nav project-gallery__nav--next" type="button"></button>
      </div>
      <p class="project-gallery__caption"></p>
    </div>
  `

  document.body.appendChild(gallery)

  const galleryDialog = gallery.querySelector('.project-gallery__dialog')
  const galleryImage = gallery.querySelector('.project-gallery__image')
  const galleryCaption = gallery.querySelector('.project-gallery__caption')
  const galleryCounter = gallery.querySelector('.project-gallery__counter')
  const closeGalleryButton = gallery.querySelector('.project-gallery__close')
  const previousGalleryButton = gallery.querySelector(
    '.project-gallery__nav--prev'
  )
  const nextGalleryButton = gallery.querySelector('.project-gallery__nav--next')

  galleryRefs = {
    closeGalleryButton,
    gallery,
    galleryCaption,
    galleryDialog,
    galleryImage,
    nextGalleryButton,
    previousGalleryButton,
  }

  let activeGalleryIndex = 0
  let activeGalleryTrigger = null

  const updateGallery = () => {
    const activeItem = galleryItems[activeGalleryIndex]
    const activeAlt = getGalleryAltBySrc(activeItem.src)

    galleryImage.src = activeItem.src
    galleryImage.alt = activeAlt
    galleryCaption.textContent = activeAlt
    galleryCounter.textContent = `${activeGalleryIndex + 1} / ${galleryItems.length}`

    const isSingleImageGallery = galleryItems.length === 1
    previousGalleryButton.disabled = isSingleImageGallery
    nextGalleryButton.disabled = isSingleImageGallery
  }

  const openGallery = (index, trigger) => {
    activeGalleryIndex = index
    activeGalleryTrigger = trigger
    updateGallery()
    gallery.classList.add('project-gallery--open')
    gallery.setAttribute('aria-hidden', 'false')
    document.body.classList.add('body--modal-open')
    closeGalleryButton.focus()
  }

  const closeGallery = () => {
    gallery.classList.remove('project-gallery--open')
    gallery.setAttribute('aria-hidden', 'true')
    document.body.classList.remove('body--modal-open')

    if (activeGalleryTrigger) {
      activeGalleryTrigger.focus()
    }
  }

  const showPreviousImage = () => {
    activeGalleryIndex =
      (activeGalleryIndex - 1 + galleryItems.length) % galleryItems.length
    updateGallery()
  }

  const showNextImage = () => {
    activeGalleryIndex = (activeGalleryIndex + 1) % galleryItems.length
    updateGallery()
  }

  caseStudyImages.forEach((image) => {
    const openImageGallery = () => {
      const imageIndex = Number(image.dataset.galleryIndex)
      openGallery(imageIndex, image)
    }

    image.addEventListener('click', openImageGallery)
    image.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        openImageGallery()
      }
    })
  })

  closeGalleryButton.addEventListener('click', closeGallery)
  previousGalleryButton.addEventListener('click', showPreviousImage)
  nextGalleryButton.addEventListener('click', showNextImage)

  gallery.addEventListener('click', (event) => {
    if (event.target.dataset.galleryClose === 'true') {
      closeGallery()
    }
  })

  document.addEventListener('keydown', (event) => {
    if (!gallery.classList.contains('project-gallery--open')) {
      return
    }

    if (event.key === 'Escape') {
      closeGallery()
    }

    if (event.key === 'ArrowLeft') {
      showPreviousImage()
    }

    if (event.key === 'ArrowRight') {
      showNextImage()
    }
  })

  updateInteractiveTranslations()
}
