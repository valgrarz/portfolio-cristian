// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offset = 60; // Ajuste para la altura de la barra de navegación
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('¡Gracias por tu mensaje! Te responderé pronto.');
        this.reset();
    });
}

// Add active class to navigation links on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Función para detectar cuando un elemento es visible en la pantalla
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return (
        rect.top <= windowHeight * 0.85 && // Aumentamos el trigger point
        rect.bottom >= 0
    );
}

// Función para añadir animaciones a los elementos
function handleScrollAnimations() {
    const elements = document.querySelectorAll('section, h2, .about-content, .about-stats, .skill-card, .project-card, .contact-content');
    
    elements.forEach((element, index) => {
        if (isElementInViewport(element)) {
            // Reducimos el delay y lo hacemos más progresivo
            const delay = Math.min(index * 50, 300); // Máximo delay de 300ms
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, delay);
        }
    });
}

// Inicializar animaciones
function initializeAnimations() {
    const elements = document.querySelectorAll('section, h2, .about-content, .about-stats, .skill-card, .project-card, .contact-content');
    
    // Establecer estado inicial
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)'; // Reducimos la distancia de la animación
        element.style.transition = 'all 0.5s ease'; // Reducimos el tiempo de transición
    });

    // Activar animaciones iniciales inmediatamente
    handleScrollAnimations();
}

// Event Listeners para las animaciones
document.addEventListener('DOMContentLoaded', initializeAnimations);
window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('resize', handleScrollAnimations);

// Typing effect para el subtítulo
function initTypeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Iniciar efecto de typing cuando la página carga
document.addEventListener('DOMContentLoaded', () => {
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
        const originalText = subtitle.textContent;
        initTypeWriter(subtitle, originalText);
    }
});

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    // Cargar el tema guardado al iniciar
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon', savedTheme === 'light');
    icon.classList.toggle('fa-sun', savedTheme === 'dark');

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        const icon = themeToggle.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });
}

// Language toggle functionality
const languageToggle = document.getElementById('language-toggle');
const languageText = languageToggle.querySelector('.language-text');

// Check for saved language preference
let currentLanguage = localStorage.getItem('language') || 'es';
document.documentElement.setAttribute('lang', currentLanguage);
languageText.textContent = currentLanguage === 'es' ? 'EN' : 'ES';

const translations = {
    es: {
        nav: {
            home: "Inicio",
            about: "Sobre mí",
            education: "Educación",
            experience: "Experiencia",
            skills: "Habilidades",
            projects: "Proyectos",
            contact: "Contacto"
        },
        hero: {
            subtitle: "Administrador de sistemas informáticos y Desarrollador Full Stack"
        },
        about: {
            title: "Sobre Mí",
            description: "Soy un administrador de sistemas informáticos con experiencia en la gestión, configuración y mantenimiento de infraestructuras tecnológicas. Actualmente, estoy especializándome en ciberseguridad, con el objetivo de proteger entornos digitales y aportar un valor estratégico a las organizaciones a través de soluciones seguras y confiables.",
            description2: "Además, desarrollo proyectos como full stack developer, utilizando tecnologías como JavaScript, React, Node.js y bases de datos relacionales como MySQL y PostgreSQL. Esta combinación de habilidades me brinda una visión integral de los sistemas, tanto desde el punto de vista operativo como en el desarrollo.",
            description3: "Me considero una persona disciplinada y creativa, con buenas habilidades para trabajar en equipo y una mentalidad enfocada en el aprendizaje constante. Estas cualidades me permiten adaptarme rápidamente a nuevos desafíos tecnológicos.",
            description4: "Mi objetivo profesional es seguir creciendo en el ámbito de la ciberseguridad, sin dejar de fortalecer mis competencias en desarrollo y administración de sistemas.",
            stats: {
                experience: "Años de Experiencia",
                projects: "Proyectos en Progreso",
                completed: "Proyectos Completados"
            }
        },
        education: {
            title: "Educación",
            institutions: {
                caminás: {
                    name: "IES El Caminás",
                    location: "Castellón, Comunidad Valenciana, España",
                    degree: "Especialización en Ciberseguridad",
                    date: "Septiembre 2024 - Junio 2026"
                },
                jaume1: {
                    name: "IES Jaume I",
                    location: "Castellón, Comunidad Valenciana, España",
                    degree1: "Administración de Sistemas Informáticos y Redes",
                    degree2: "Sistemas Microinformáticos y Redes",
                    date1: "Septiembre 2022 - Junio 2024",
                    date2: "Septiembre 2019 - Junio 2022"
                }
            }
        },
        experience: {
            title: "Experiencia Laboral",
            locations: {
                spain: "España"
            },
            positions: {
                orbys: {
                    title: "Técnico en sistemas informáticos y redes",
                    company: "ORBYS",
                    location: "Alquerías del Niño Perdido, Comunidad Valenciana, España",
                    date: "Noviembre 2024 - Enero 2025",
                    tasks: [
                        "Operación de funciones de llamada en centros educativos",
                        "Resolución de problemas a nivel de software y hardware",
                        "Desarrollo web y gestión de redes"
                    ]
                },
                digitalWap: {
                    title: "Administrador de sistemas informáticos",
                    company: "Digital Wap Business",
                    location: "Castellón, Comunidad Valenciana, España",
                    date: "Agosto 2024 - Noviembre 2024",
                    tasks: [
                        "Administración y control del departamento de informática",
                        "Desarrollo de proyectos de ciberseguridad y redes",
                        "Automatización de IA para funcionalidades empresariales",
                        "Control y administración de múltiples páginas web corporativas",
                        "Resolución de incidencias en diferentes sedes"
                    ]
                },
                burriana: {
                    title: "Administrador de sistemas y redes",
                    company: "Ayuntamiento De Burriana",
                    location: "Borriana, Comunidad Valenciana, España",
                    date: "Febrero 2024 - Agosto 2024",
                    tasks: [
                        "Control de la instalación de red de toda Burriana",
                        "Desarrollo web para páginas públicas",
                        "Gestión de firewalls Fortinet",
                        "Desarrollo y control de VLANs en todas las sedes",
                        "Resolución de incidencias para funcionarios"
                    ]
                },
                andamios: {
                    title: "Técnico de sistemas informáticos",
                    company: "Andamios Salvador",
                    location: "Borriana, Comunidad Valenciana, España",
                    date: "Enero 2022 - Julio 2022",
                    tasks: [
                        "Resolución de incidencias mediante sistema de tickets",
                        "Administración de la red empresarial",
                        "Gestión de sistemas informáticos"
                    ]
                }
            }
        },
        skills: {
            title: "Habilidades",
            descriptions: {
                html5: "Desarrollo web semántico y accesible con enfoque en SEO y estándares modernos.",
                css3: "Interfaces responsivas usando Flexbox, Grid y animaciones modernas.",
                javascript: "Desarrollo frontend interactivo, APIs y manipulación avanzada del DOM.",
                react: "SPAs escalables con Redux, hooks y optimización de rendimiento.",
                nodejs: "APIs RESTful, websockets y autenticación para aplicaciones en tiempo real.",
                database: "Diseño de bases de datos, consultas complejas y procedimientos almacenados.",
                network: "Configuración de redes empresariales, VLANs y firewalls.",
                php: "Desarrollo backend con frameworks modernos y APIs escalables.",
                python: "Automatización de procesos y scripts para administración de sistemas."
            }
        },
        projects: {
            title: "Proyectos",
            viewCode: "Ver código",
            project1: {
                title: "Buscador de películas y series - Cinevia",
                subtitle: "Buscador de películas y series",
                description: "Plataforma de busqueda de peliculas y series, con integración de APIs"
            },
            project2: {
                title: "Portfolios de clientes",
                subtitle: "Plataforma de portfolios personalizados",
                description: "Colección de portfolios personalizados para diferentes profesionales y empresas."
            },
            project3: {
                title: "Plataforma de juegos arcade - Retroburst",
                subtitle: "Plataforma de juegos arcade",
                description: "Menu con juegos clasicos arcade creados por mi."
            }
        },
        contact: {
            title: "Contacto",
            languages: "Idiomas",
            spanish: "Español",
            english: "Inglés",
            italian: "Italiano",
            nativeLevel: "Nativo",
            intermediateLevel: "Intermedio",
            basicLevel: "Básico"
        },
        footer: {
            copyright: "Todos los derechos reservados."
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            education: "Education",
            experience: "Experience",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact"
        },
        hero: {
            subtitle: "IT Systems Administrator & Full Stack Developer"
        },
        about: {
            title: "About Me",
            description: "I am an IT systems administrator with experience in managing, configuring, and maintaining technological infrastructures. Currently, I am specializing in cybersecurity, aiming to protect digital environments and provide strategic value to organizations through secure and reliable solutions.",
            description2: "Additionally, I develop projects as a full stack developer, using technologies such as JavaScript, React, Node.js, and relational databases like MySQL and PostgreSQL. This combination of skills provides me with a comprehensive view of systems, both from an operational and development perspective.",
            description3: "I consider myself a disciplined and creative person, with good teamwork abilities and a mindset focused on continuous learning. These qualities allow me to quickly adapt to new technological challenges.",
            description4: "My professional goal is to continue growing in the field of cybersecurity while strengthening my skills in development and systems administration.",
            stats: {
                experience: "Years of Experience",
                projects: "Ongoing Projects",
                completed: "Completed Projects"
            }
        },
        education: {
            title: "Education",
            institutions: {
                caminás: {
                    name: "IES El Caminás",
                    location: "Castellón, Valencian Community, Spain",
                    degree: "Cybersecurity Specialization",
                    date: "September 2024 - June 2026"
                },
                jaume1: {
                    name: "IES Jaume I",
                    location: "Castellón, Valencian Community, Spain",
                    degree1: "Computer Systems and Networks Administration",
                    degree2: "Microcomputer Systems and Networks",
                    date1: "September 2022 - June 2024",
                    date2: "September 2019 - June 2022"
                }
            }
        },
        experience: {
            title: "Work Experience",
            locations: {
                spain: "Spain"
            },
            positions: {
                orbys: {
                    title: "IT Systems and Network Technician",
                    company: "ORBYS",
                    location: "Alquerías del Niño Perdido, Valencian Community, Spain",
                    date: "November 2024 - January 2025",
                    tasks: [
                        "Operation of call functions in educational centers",
                        "Software and hardware troubleshooting",
                        "Web development and network management"
                    ]
                },
                digitalWap: {
                    title: "IT Systems Administrator",
                    company: "Digital Wap Business",
                    location: "Castellón, Valencian Community, Spain",
                    date: "August 2024 - November 2024",
                    tasks: [
                        "IT department administration and control",
                        "Cybersecurity and network projects development",
                        "AI automation for business functionalities",
                        "Management and administration of multiple corporate websites",
                        "Incident resolution across different locations"
                    ]
                },
                burriana: {
                    title: "Systems and Network Administrator",
                    company: "Burriana City Council",
                    location: "Borriana, Valencian Community, Spain",
                    date: "February 2024 - August 2024",
                    tasks: [
                        "Network installation control for all Burriana",
                        "Web development for public pages",
                        "Fortinet firewalls management",
                        "Development and control of VLANs across all locations",
                        "IT support for public servants"
                    ]
                },
                andamios: {
                    title: "IT Systems Technician",
                    company: "Andamios Salvador",
                    location: "Borriana, Valencian Community, Spain",
                    date: "January 2022 - July 2022",
                    tasks: [
                        "Incident resolution through ticket system",
                        "Enterprise network administration",
                        "IT systems management"
                    ]
                }
            }
        },
        skills: {
            title: "Skills",
            descriptions: {
                html5: "Semantic and accessible web development focusing on SEO and modern standards.",
                css3: "Responsive interfaces using Flexbox, Grid, and modern animations.",
                javascript: "Interactive frontend development, APIs, and advanced DOM manipulation.",
                react: "Scalable SPAs with Redux, hooks, and performance optimization.",
                nodejs: "RESTful APIs, websockets, and authentication for real-time applications.",
                database: "Database design, complex queries, and stored procedures.",
                network: "Enterprise network configuration, VLANs, and firewalls.",
                php: "Backend development with modern frameworks and scalable APIs.",
                python: "Process automation and system administration scripts."
            }
        },
        projects: {
            title: "Projects",
            viewCode: "View code",
            project1: {
                title: "Movie and Series Search Engine - Cinevia",
                subtitle: "Movie and Series Search Engine",
                description: "Movie and series search platform with API integration"
            },
            project2: {
                title: "Client Portfolios",
                subtitle: "Custom Portfolio Platform",
                description: "Collection of customized portfolios for various professionals and companies."
            },
            project3: {
                title: "Arcade Gaming Platform - Retroburst",
                subtitle: "Arcade Gaming Platform",
                description: "Menu with classic arcade games created by me."
            }
        },
        contact: {
            title: "Contact",
            languages: "Languages",
            spanish: "Spanish",
            english: "English",
            italian: "Italian",
            nativeLevel: "Native",
            intermediateLevel: "Intermediate",
            basicLevel: "Basic"
        },
        footer: {
            copyright: "All rights reserved."
        }
    }
};

function updateLanguage(language) {
    // Update navigation links
    document.querySelectorAll('.nav-links a').forEach(link => {
        const section = link.getAttribute('href').replace('#', '');
        if (translations[language].nav[section]) {
            link.textContent = translations[language].nav[section];
        }
    });

    // Update hero section
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
        subtitle.textContent = translations[language].hero.subtitle;
    }

    // Update about section
    const aboutTitle = document.querySelector('#about h2');
    const aboutParagraphs = document.querySelectorAll('.about-content p:not(.stat-label)');
    if (aboutTitle) aboutTitle.textContent = translations[language].about.title;
    if (aboutParagraphs.length > 0) {
        aboutParagraphs[0].textContent = translations[language].about.description;
        aboutParagraphs[1].textContent = translations[language].about.description2;
        aboutParagraphs[2].textContent = translations[language].about.description3;
        aboutParagraphs[3].textContent = translations[language].about.description4;
    }

    // Update stats
    const stats = document.querySelectorAll('.stat-label');
    if (stats.length > 0) {
        stats[0].textContent = translations[language].about.stats.experience;
        stats[1].textContent = translations[language].about.stats.projects;
        stats[2].textContent = translations[language].about.stats.completed;
    }

    // Update education section
    const educationTitle = document.querySelector('#education h2');
    if (educationTitle) educationTitle.textContent = translations[language].education.title;

    // Update education items
    const educationItems = document.querySelectorAll('.education-item');
    educationItems.forEach((item, index) => {
        const date = item.querySelector('.education-date span');
        const degree = item.querySelector('h3');
        const institution = item.querySelector('h4');
        const location = item.querySelector('h5');

        if (index === 0 && translations[language].education.institutions.caminás) {
            const data = translations[language].education.institutions.caminás;
            if (date) date.textContent = data.date;
            if (degree) degree.textContent = data.degree;
            if (institution) institution.textContent = data.name;
            if (location) location.textContent = data.location;
        } else if ((index === 1 || index === 2) && translations[language].education.institutions.jaume1) {
            const data = translations[language].education.institutions.jaume1;
            if (date) date.textContent = index === 1 ? data.date1 : data.date2;
            if (degree) degree.textContent = index === 1 ? data.degree1 : data.degree2;
            if (institution) institution.textContent = data.name;
            if (location) location.textContent = data.location;
        }
    });

    // Update experience section
    const experienceTitle = document.querySelector('#experience h2');
    if (experienceTitle) experienceTitle.textContent = translations[language].experience.title;

    // Update experience items
    const experienceItems = document.querySelectorAll('.experience-item');
    const positions = ['orbys', 'digitalWap', 'burriana', 'andamios'];
    
    experienceItems.forEach((item, index) => {
        const position = positions[index];
        if (position && translations[language].experience.positions[position]) {
            const data = translations[language].experience.positions[position];
            
            const date = item.querySelector('.experience-date span');
            const title = item.querySelector('h3');
            const company = item.querySelector('h4');
            const location = item.querySelector('p');
            const tasks = item.querySelectorAll('.experience-tasks li');
            
            if (date) date.textContent = data.date;
            if (title) title.textContent = data.title;
            if (company) company.textContent = data.company;
            if (location) location.textContent = data.location;
            if (tasks) {
                tasks.forEach((task, taskIndex) => {
                    if (data.tasks[taskIndex]) {
                        task.textContent = data.tasks[taskIndex];
                    }
                });
            }
        }
    });

    // Update skills section
    const skillsTitle = document.querySelector('#skills h2');
    if (skillsTitle) skillsTitle.textContent = translations[language].skills.title;

    // Update skills descriptions
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        const icon = card.querySelector('i');
        if (icon) {
            let skillType = '';
            if (icon.classList.contains('fa-html5')) skillType = 'html5';
            else if (icon.classList.contains('fa-css3-alt')) skillType = 'css3';
            else if (icon.classList.contains('fa-js')) skillType = 'javascript';
            else if (icon.classList.contains('fa-react')) skillType = 'react';
            else if (icon.classList.contains('fa-node-js')) skillType = 'nodejs';
            else if (icon.classList.contains('fa-database')) skillType = 'database';
            else if (icon.classList.contains('fa-network-wired')) skillType = 'network';
            else if (icon.classList.contains('fa-php')) skillType = 'php';
            else if (icon.classList.contains('fa-python')) skillType = 'python';

            const description = card.querySelector('p');
            if (description && skillType && translations[language].skills.descriptions[skillType]) {
                description.textContent = translations[language].skills.descriptions[skillType];
            }
        }
    });

    // Update projects section
    const projectsTitle = document.querySelector('#projects h2');
    if (projectsTitle) projectsTitle.textContent = translations[language].projects.title;

    // Update project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        const projectNum = `project${index + 1}`;
        if (translations[language].projects[projectNum]) {
            const title = card.querySelector('h3');
            const subtitle = card.querySelector('h4');
            const description = card.querySelector('p');
            const viewCodeLink = card.querySelector('.project-links a');

            if (title) title.textContent = translations[language].projects[projectNum].title;
            if (subtitle) subtitle.textContent = translations[language].projects[projectNum].subtitle;
            if (description) description.textContent = translations[language].projects[projectNum].description;
            if (viewCodeLink) viewCodeLink.title = translations[language].projects.viewCode;
        }
    });

    // Update contact section
    const contactTitle = document.querySelector('#contact h2');
    const languagesTitle = document.querySelector('.languages h3');
    if (contactTitle) contactTitle.textContent = translations[language].contact.title;
    if (languagesTitle) languagesTitle.textContent = translations[language].contact.languages;

    // Update language levels
    const languageItems = document.querySelectorAll('.language-item');
    if (languageItems.length > 0) {
        const languageNames = document.querySelectorAll('.language-name');
        const languageLevels = document.querySelectorAll('.language-level');

        if (languageNames[0]) languageNames[0].textContent = translations[language].contact.spanish + ':';
        if (languageNames[1]) languageNames[1].textContent = translations[language].contact.english + ':';
        if (languageNames[2]) languageNames[2].textContent = translations[language].contact.italian + ':';

        if (languageLevels[0]) languageLevels[0].textContent = translations[language].contact.nativeLevel;
        if (languageLevels[1]) languageLevels[1].textContent = translations[language].contact.intermediateLevel;
        if (languageLevels[2]) languageLevels[2].textContent = translations[language].contact.basicLevel;
    }

    // Update footer
    const footer = document.querySelector('footer p');
    if (footer) {
        footer.textContent = `© 2024 Cristian Vargas. ${translations[language].footer.copyright}`;
    }
}

// Add click event listener to language toggle
languageToggle.addEventListener('click', () => {
    // Cambiamos el idioma
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    localStorage.setItem('language', currentLanguage);
    document.documentElement.setAttribute('lang', currentLanguage);
    
    // Actualizamos el texto del botón para mostrar el idioma al que se puede cambiar
    languageText.textContent = currentLanguage === 'es' ? 'EN' : 'ES';
    
    // Actualizamos el contenido
    updateLanguage(currentLanguage);
});

// Initial language update
updateLanguage(currentLanguage);

// Efecto de fondo interactivo
const backgroundEffect = document.querySelector('.background-effect');
const backgroundGradient = document.querySelector('.background-gradient');
const backgroundShapes = document.querySelector('.background-shapes');

let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;
let isMoving = false;

// Función para actualizar la posición del gradiente
function updateGradientPosition(e) {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    backgroundGradient.style.setProperty('--mouse-x', `${x}%`);
    backgroundGradient.style.setProperty('--mouse-y', `${y}%`);
    
    if (!isMoving) {
        isMoving = true;
        backgroundGradient.classList.add('visible');
    }
    
    // Actualizar las posiciones objetivo para el parallax
    targetX = (e.clientX - window.innerWidth / 2) * 0.02;
    targetY = (e.clientY - window.innerHeight / 2) * 0.02;
}

// Función para animar el parallax suave
function animateParallax() {
    mouseX += (targetX - mouseX) * 0.1;
    mouseY += (targetY - mouseY) * 0.1;
    
    backgroundShapes.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    requestAnimationFrame(animateParallax);
}

// Event listeners
window.addEventListener('mousemove', updateGradientPosition);
window.addEventListener('mouseleave', () => {
    isMoving = false;
    backgroundGradient.classList.remove('visible');
});

// Iniciar la animación
animateParallax(); 