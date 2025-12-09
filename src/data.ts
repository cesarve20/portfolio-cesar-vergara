import { Github, Linkedin, Mail } from "lucide-react";
// Importamos los logos oficiales (cambiamos Postman por Insomnia)
import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, 
  SiReact, SiMysql, SiSpring, SiPhp, SiLaravel, 
  SiGit, SiEclipseide, SiNodedotjs, SiMongodb, 
  SiKotlin, SiAndroid, SiBootstrap, SiInsomnia
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const profile = {
  personal: {
    name: "Cesar Vergara",
    role: "Full Stack Developer & Systems Analyst Student",
    location: "CABA, Buenos Aires",
    email: "cesarvergaragu@gmail.com",
    availability: "Disponible para nuevas oportunidades",
    socials: [
      { name: "GitHub", url: "https://github.com/cesarve20", icon: Github },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/cesarvergara20/", icon: Linkedin },
      { name: "Email", url: "mailto:cesarvergaragu@gmail.com", icon: Mail },
    ]
  },
  about: {
    title: "Sobre Mí",
    description: "Desarrollador Web Junior y estudiante avanzado de Análisis de Sistemas (5° semestre). Me especializo en transformar problemas complejos en soluciones lógicas utilizando Java, PHP y el ecosistema JavaScript. Mi enfoque combina la capacidad analítica con una rápida adaptación a nuevas tecnologías.",
  },
  education: [
    {
      degree: "Tecnicatura en Análisis de Sistemas",
      institution: "Escuela Da Vinci",
      period: "2022 - 2026 (En curso)",
      desc: "Promedio destacado. Enfoque en arquitectura de software y POO."
    },
    {
      degree: "Certificación Desarrollo Web",
      institution: "CoderHouse",
      period: "2024",
      desc: "Diploma certificado en tecnologías frontend modernas."
    },
     {
      degree: "Certificación Estudio lengua Inglés",
      institution: "Distrito lenguas",
      period: "2024",
      desc: "Diploma certificado en alcanzar el nivel B2."
    }
  ],
  skills: [
    // --- BACKEND ---
    { name: "Java", type: "Backend", icon: FaJava },
    { name: "Spring Boot", type: "Backend", icon: SiSpring },
    { name: "Node.js", type: "Backend", icon: SiNodedotjs },
    { name: "PHP", type: "Backend", icon: SiPhp },
    { name: "Laravel", type: "Backend", icon: SiLaravel },
    
    // --- FRONTEND ---
    { name: "JavaScript", type: "Frontend", icon: SiJavascript },
    { name: "TypeScript", type: "Frontend", icon: SiTypescript },
    { name: "React", type: "Frontend", icon: SiReact },
    { name: "HTML5", type: "Frontend", icon: SiHtml5 },
    { name: "CSS3", type: "Frontend", icon: SiCss3 },
    { name: "Bootstrap", type: "Frontend", icon: SiBootstrap },

    // --- MOBILE ---
    { name: "Kotlin", type: "Mobile", icon: SiKotlin },
    { name: "Android SDK", type: "Mobile", icon: SiAndroid },

    // --- DATA & TOOLS ---
    { name: "MySQL", type: "Database", icon: SiMysql },
    { name: "MongoDB", type: "Database", icon: SiMongodb },
    { name: "Git/GitHub", type: "Tools", icon: SiGit },
    { name: "Insomnia", type: "Tools", icon: SiInsomnia },   // <--- ¡Aquí está el cambio!
    { name: "Eclipse", type: "Tools", icon: SiEclipseide },
  ],
  projects: [
    {
      title: "VitalDent (Ver 1.0)",
      desc: "Sistema integral de gestión para consultorio odontológico. Incluye gestión de pacientes y turnos.",
      tech: ["React", "Node.js", "MySQL"],
      link: "https://vital-dent-app.vercel.app/",
      type: "Full Stack"
    },
    {
      title: "Sistema Bancario",
      desc: "Simulación de cajero automático (ATM) con operaciones transaccionales y gestión de usuarios.",
      tech: ["Java", "MySQL", "Eclipse"],
      link: "https://github.com/cesarve20",
      type: "Desktop"
    },
    {
      title: "Ensobrados",
      desc: "Aplicación nativa Android para gestión logística y optimización de rutas.",
      tech: ["Android Studio", "Java/Kotlin"],
      link: "#",
      type: "Mobile"
    },
    {
      title: "Biblioteca Digital",
      desc: "Gestión de préstamos y devoluciones con interfaz gráfica JFrame y persistencia de datos.",
      tech: ["Java", "Swing", "MySQL"],
      link: "https://github.com/cesarve20/BibliotecaDigital",
      type: "Desktop"
    },
    {
      title: "Ibit Website",
      desc: "Plataforma web de guías y estrategias para impulsar campañas de publicidad digital.",
      tech: ["React", "Tailwind"],
      link: "https://ibit-website.vercel.app/",
      type: "Web App"
    },
    {
      title: "Antigravity System",
      desc: "Aplicación de gestión de tareas (To-Do List) con interfaz minimalista. Permite crear, marcar y eliminar tareas dinámicamente.",
      tech: ["React", "Vite", "CSS Modules"], 
      link: "https://antigravity-system.vercel.app/",
      type: "Web App"
    }
  ]
};