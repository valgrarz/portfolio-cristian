// Variables globales
let currentLanguage = localStorage.getItem('language') || 'es';
let currentTheme = localStorage.getItem('theme') || 'light';

// Inicialización al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    initializeLanguage();
    initializeMobileMenu();
    initializeAnimations();
    revealOnScroll();
});

// Función para inicializar el tema
function initializeTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    // Aplicar tema guardado
    html.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme === 'dark');
    
    // Configurar el botón de tema
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', currentTheme);
            html.setAttribute('data-theme', currentTheme);
            updateThemeIcon(currentTheme === 'dark');
        });
    }
}

// Función para actualizar el icono del tema
function updateThemeIcon(isDark) {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
}

// Traducciones básicas para las secciones principales
const translations = {
    es: {
        nav: ["Inicio", "Sobre mí", "Educación", "Certificaciones", "Experiencia", "Contacto"],
        hero: {
            subtitle: "Especialista en Ciberseguridad y Administración de Sistemas"
        },
        about: {
            title: "Sobre Mí",
            paragraphs: [
                "Soy un estudiante especializado en Ciberseguridad en entornos IT, con una sólida formación en Administración de Sistemas Informáticos en Red (ASIR). Mi experiencia profesional incluye haber trabajado como técnico de soporte en À Punt Mèdia, donde pude desarrollar habilidades clave en la gestión y solución de incidencias tecnológicas.",
                "Mi enfoque profesional se centra en la protección de infraestructuras digitales, con experiencia en áreas como el control de accesos, la gestión de identidades con Active Directory y el bastionado de sistemas para mitigar vulnerabilidades. Además, tengo experiencia en la monitorización de tráfico de red y en la detección y análisis de incidentes mediante tecnologías SIEM.",
                "Estoy comprometido con la mejora continua, no solo en ciberseguridad, sino también en la automatización de procesos mediante Python y en la computación en la nube, especialmente con Azure. Mi habilidad para combinar conocimientos técnicos con una mentalidad analítica y resolutiva me permite afrontar desafíos con enfoque y precisión.",
                "Me considero una persona responsable, orientada al trabajo en equipo y con un fuerte interés en aportar soluciones efectivas que optimicen la seguridad y fiabilidad de los sistemas. Mi objetivo es seguir creciendo en el ámbito de la ciberseguridad, contribuyendo activamente a la protección de los activos digitales en entornos IT."
            ]
        },
        stats: {
            years: "Años de Experiencia"
        },
        education: {
            title: "Educación",
            items: [
                {
                    date: "Septiembre 2024 - Junio 2026",
                    title: "Especialización en Ciberseguridad",
                    center: "IES El Caminás",
                    location: "Castellón, Comunidad Valenciana, España"
                },
                {
                    date: "Septiembre 2022 - Junio 2024",
                    title: "Administración de Sistemas Informáticos y Redes",
                    center: "IES Jaume I",
                    location: "Castellón, Comunidad Valenciana, España",
                    grade: "Nota: 8,93"
                },
                {
                    date: "Septiembre 2019 - Junio 2022",
                    title: "Bachillerato, Humanidades y Ciencias Sociales",
                    center: "IES Jaume I",
                    location: "Castellón, Comunidad Valenciana, España",
                    grade: "Nota: 8,4"
                }
            ]
        },
        certifications: {
            title: "Certificaciones",
            items: [
                {
                    date: "feb. 2025",
                    title: "Microsoft Certified: Aspectos básicos de Azure (AZ-900)",
                    center: "Microsoft",
                    link: "https://learn.microsoft.com/api/credentials/share/es-es/lvaroMesado-5048/46EE98A0E529A67F?sharingId=F14754A55D4400FA",
                    linkText: "Ver credencial"
                },
                {
                    date: "may. 2024",
                    title: "Certificado de Administración de Active Directory",
                    center: "Udemy",
                    link: "https://www.udemy.com/certificate/UC-d4e11f64-4f98-4980-ba01-7a085ad3651a/",
                    linkText: "Ver credencial"
                },
                {
                    date: "may. 2022",
                    title: "Ciberseguridad en el Teletrabajo",
                    center: "Google Actívate",
                    link: "https://drive.google.com/file/d/1NkNtRETzDFDlsYkQF5Hui8EFl5ho82Qz/view?usp=sharing",
                    linkText: "Ver credencial"
                },
                {
                    date: "dic. 2021",
                    title: "Certificado de Sistemas Operativos e instalación de software",
                    center: "Vortex Academy",
                    link: "https://drive.google.com/file/d/1uN2eK4okSAcl4YYJrsQGqCpixHYtusyQ/view?usp=sharing",
                    linkText: "Ver credencial"
                }
            ]
        },
        experience: {
            title: "Experiencia Laboral",
            items: [
                {
                    date: "feb. 2024 - jun. 2024 · 5 meses",
                    title: "Service Desk",
                    company: "À Punt Mèdia · Contrato de prácticas",
                    location: "Burjassot, Comunidad Valenciana, España · Presencial",
                    role: "Soporte Técnico de Primera Línea | Resolución de Incidencias IT",
                    description: "He realizado gestión de incidencias y solicitudes IT, garantizando tiempos de respuesta óptimos y soluciones efectivas para usuarios y equipos de trabajo.",
                    tasks: [
                        "Atención y asistencia técnica eficiente.",
                        "Resolución de problemas en equipos, sistemas y aplicaciones.",
                        "Implementación de buenas prácticas en IT para optimizar procesos."
                    ],
                    footer: "Siempre enfocado en ofrecer soluciones rápidas y eficaces para mantener la productividad y eficiencia en el entorno laboral."
                }
            ]
        },
        contact: {
            title: "Contacto",
            languages: "Idiomas",
            languageList: [
                { name: "Español", level: "Nativo" },
                { name: "Valenciano", level: "Nativo" },
                { name: "Inglés", level: "B1" }
            ]
        }
    },
    en: {
        nav: ["Home", "About", "Education", "Certifications", "Experience", "Contact"],
        hero: {
            subtitle: "Cybersecurity and Systems Administration Specialist"
        },
        about: {
            title: "About Me",
            paragraphs: [
                "I am a student specialized in IT Cybersecurity, with a solid background in Networked Computer Systems Administration (ASIR). My professional experience includes working as a support technician at À Punt Mèdia, where I developed key skills in managing and solving technological incidents.",
                "My professional focus is on protecting digital infrastructures, with experience in areas such as access control, identity management with Active Directory, and system hardening to mitigate vulnerabilities. I also have experience in network traffic monitoring and incident detection and analysis using SIEM technologies.",
                "I am committed to continuous improvement, not only in cybersecurity but also in process automation with Python and cloud computing, especially with Azure. My ability to combine technical knowledge with an analytical and problem-solving mindset allows me to tackle challenges with focus and precision.",
                "I consider myself a responsible person, team-oriented, and with a strong interest in providing effective solutions that optimize the security and reliability of systems. My goal is to continue growing in the field of cybersecurity, actively contributing to the protection of digital assets in IT environments."
            ]
        },
        stats: {
            years: "Years of Experience"
        },
        education: {
            title: "Education",
            items: [
                {
                    date: "September 2024 - June 2026",
                    title: "Specialization in Cybersecurity",
                    center: "IES El Caminás",
                    location: "Castellón, Valencian Community, Spain"
                },
                {
                    date: "September 2022 - June 2024",
                    title: "Administration of Computer Systems and Networks",
                    center: "IES Jaume I",
                    location: "Castellón, Valencian Community, Spain",
                    grade: "Grade: 8.93"
                },
                {
                    date: "September 2019 - June 2022",
                    title: "High School, Humanities and Social Sciences",
                    center: "IES Jaume I",
                    location: "Castellón, Valencian Community, Spain",
                    grade: "Grade: 8.4"
                }
            ]
        },
        certifications: {
            title: "Certifications",
            items: [
                {
                    date: "Feb. 2025",
                    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
                    center: "Microsoft",
                    link: "https://learn.microsoft.com/api/credentials/share/es-es/lvaroMesado-5048/46EE98A0E529A67F?sharingId=F14754A55D4400FA",
                    linkText: "View credential"
                },
                {
                    date: "May 2024",
                    title: "Active Directory Administration Certificate",
                    center: "Udemy",
                    link: "https://www.udemy.com/certificate/UC-d4e11f64-4f98-4980-ba01-7a085ad3651a/",
                    linkText: "View credential"
                },
                {
                    date: "May 2022",
                    title: "Cybersecurity in Remote Work",
                    center: "Google Actívate",
                    link: "https://drive.google.com/file/d/1NkNtRETzDFDlsYkQF5Hui8EFl5ho82Qz/view?usp=sharing",
                    linkText: "View credential"
                },
                {
                    date: "Dec. 2021",
                    title: "Operating Systems and Software Installation Certificate",
                    center: "Vortex Academy",
                    link: "https://drive.google.com/file/d/1uN2eK4okSAcl4YYJrsQGqCpixHYtusyQ/view?usp=sharing",
                    linkText: "View credential"
                }
            ]
        },
        experience: {
            title: "Work Experience",
            items: [
                {
                    date: "Feb. 2024 - Jun. 2024 · 5 months",
                    title: "Service Desk",
                    company: "À Punt Mèdia · Internship contract",
                    location: "Burjassot, Valencian Community, Spain · On-site",
                    role: "First Line Technical Support | IT Incident Resolution",
                    description: "I managed IT incidents and requests, ensuring optimal response times and effective solutions for users and work teams.",
                    tasks: [
                        "Efficient technical support and assistance.",
                        "Troubleshooting for equipment, systems, and applications.",
                        "Implementation of IT best practices to optimize processes."
                    ],
                    footer: "Always focused on providing quick and effective solutions to maintain productivity and efficiency in the workplace."
                }
            ]
        },
        contact: {
            title: "Contact",
            languages: "Languages",
            languageList: [
                { name: "Spanish", level: "Native" },
                { name: "Valencian", level: "Native" },
                { name: "English", level: "B1" }
            ]
        }
    }
};

function updateLanguage(language) {
    // Navegación
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach((link, i) => {
        const icon = link.querySelector('i');
        const text = link.childNodes[1];
        if (translations[language].nav[i]) {
            text.textContent = translations[language].nav[i];
        }
    });

    // Hero subtitle
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) subtitle.textContent = translations[language].hero.subtitle;

    // About
    const aboutTitle = document.querySelector('#about h2');
    if (aboutTitle) aboutTitle.textContent = translations[language].about.title;
    
    const aboutParagraphs = document.querySelectorAll('.about-content p');
    translations[language].about.paragraphs.forEach((text, i) => {
        if (aboutParagraphs[i]) aboutParagraphs[i].textContent = text;
    });

    // Stats
    const statLabel = document.querySelector('.stat-label');
    if (statLabel) statLabel.textContent = translations[language].stats.years;

    // Education
    const eduTitle = document.querySelector('#education h2');
    if (eduTitle) eduTitle.textContent = translations[language].education.title;
    
    const eduItems = document.querySelectorAll('.education-item');
    translations[language].education.items.forEach((item, i) => {
        if (eduItems[i]) {
            const date = eduItems[i].querySelector('.education-date span');
            const title = eduItems[i].querySelector('.edu-title');
            const center = eduItems[i].querySelector('.edu-center');
            const location = eduItems[i].querySelector('.edu-location');
            const grade = eduItems[i].querySelector('.edu-grade');
            
            if (date) date.textContent = item.date;
            if (title) title.textContent = item.title;
            if (center) center.textContent = item.center;
            if (location) location.textContent = item.location;
            if (grade && item.grade) grade.textContent = item.grade;
        }
    });

    // Certifications
    const certTitle = document.querySelector('#certifications h2');
    if (certTitle) certTitle.textContent = translations[language].certifications.title;
    
    const certItems = document.querySelectorAll('.certification-item');
    translations[language].certifications.items.forEach((item, i) => {
        if (certItems[i]) {
            const date = certItems[i].querySelector('.certification-date span');
            const title = certItems[i].querySelector('.certification-content h3');
            const center = certItems[i].querySelector('.certification-content h4');
            const link = certItems[i].querySelector('.certification-content a');
            
            if (date) date.textContent = item.date;
            if (title) title.textContent = item.title;
            if (center) center.textContent = item.center;
            if (link) {
                link.textContent = item.linkText;
                link.href = item.link;
            }
        }
    });

    // Experience
    const expTitle = document.querySelector('#experience h2');
    if (expTitle) expTitle.textContent = translations[language].experience.title;
    
    const expItems = document.querySelectorAll('.experience-item');
    translations[language].experience.items.forEach((item, i) => {
        if (expItems[i]) {
            const date = expItems[i].querySelector('.experience-date span');
            const title = expItems[i].querySelector('.experience-content h3');
            const company = expItems[i].querySelector('.experience-content h4');
            const location = expItems[i].querySelector('.experience-content h5');
            const role = expItems[i].querySelector('.role-title');
            const desc = expItems[i].querySelector('.experience-description');
            const tasks = expItems[i].querySelectorAll('.experience-tasks li');
            const footer = expItems[i].querySelector('.experience-footer');
            
            if (date) date.textContent = item.date;
            if (title) title.textContent = item.title;
            if (company) company.textContent = item.company;
            if (location) location.textContent = item.location;
            if (role) role.textContent = item.role;
            if (desc) desc.textContent = item.description;
            if (tasks) item.tasks.forEach((t, j) => { if (tasks[j]) tasks[j].textContent = t; });
            if (footer) footer.textContent = item.footer;
        }
    });

    // Contact
    const contactTitle = document.querySelector('#contact h2');
    if (contactTitle) contactTitle.textContent = translations[language].contact.title;
    
    const langTitle = document.querySelector('.languages h3');
    if (langTitle) langTitle.textContent = translations[language].contact.languages;
    
    const langItems = document.querySelectorAll('.language-item');
    translations[language].contact.languageList.forEach((item, i) => {
        if (langItems[i]) {
            const name = langItems[i].querySelector('.language-name');
            const level = langItems[i].querySelector('.language-level');
            if (name) name.textContent = item.name;
            if (level) level.textContent = item.level;
        }
    });
}

// Función para inicializar el idioma
function initializeLanguage() {
    const languageToggle = document.getElementById('language-toggle');
    const languageText = languageToggle?.querySelector('.language-text');
    if (languageText) {
        document.documentElement.setAttribute('lang', currentLanguage);
        languageText.textContent = currentLanguage === 'es' ? 'EN' : 'ES';
        updateLanguage(currentLanguage);
        languageToggle.addEventListener('click', () => {
            currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
            localStorage.setItem('language', currentLanguage);
            document.documentElement.setAttribute('lang', currentLanguage);
            languageText.textContent = currentLanguage === 'es' ? 'EN' : 'ES';
            updateLanguage(currentLanguage);
        });
    }
}

// Función para inicializar el menú móvil
function initializeMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const menuContainer = document.querySelector('.menu-container');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            menuContainer?.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Cerrar menú al hacer clic en un enlace
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    menuContainer?.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                navLinks.classList.remove('active');
                menuContainer?.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Cerrar menú al cambiar tamaño de pantalla
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navLinks.classList.remove('active');
                menuContainer?.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// Función para inicializar animaciones
function initializeAnimations() {
    const elements = document.querySelectorAll('section, h2, .about-content, .about-stats, .skill-card, .project-card, .contact-content');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.5s ease';
    });

    handleScrollAnimations();
    window.addEventListener('scroll', handleScrollAnimations);
    window.addEventListener('resize', handleScrollAnimations);
}

// Función para manejar animaciones al hacer scroll
function handleScrollAnimations() {
    const elements = document.querySelectorAll('section, h2, .about-content, .about-stats, .skill-card, .project-card, .contact-content');
    
    elements.forEach((element, index) => {
        if (isElementInViewport(element)) {
            const delay = Math.min(index * 50, 300);
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, delay);
        }
    });
}

// Función para detectar elementos en el viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= windowHeight * 0.85 && rect.bottom >= 0;
}

// Smooth scrolling para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offset = 60;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Efecto de scroll en la navbar
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

// Dropdown menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');

    // Handle dropdown toggle on mobile
    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
        
        dropdownToggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });

    // Close dropdowns when mobile menu is closed
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            if (!this.classList.contains('active')) {
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });
    }
});

// Animación automática al hacer scroll para secciones y tarjetas
function revealOnScroll() {
    const revealElements = document.querySelectorAll('section, .about-content, .skill-card, .project-card, .contact-content, .certification-item, .education-item, .experience-item, h2, h3');
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 60) {
            el.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('resize', revealOnScroll);
document.addEventListener('DOMContentLoaded', revealOnScroll); 