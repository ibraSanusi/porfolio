export const experiences = [
  {
    name: 'Recomiend.app',
    title: 'Desarrollador Frontend',
    date: 'Abril - Junio 2024',
    description: [
      'Desarrollé una aplicación web con Next.js para optimizar fotos de perfil de profesionales para Recomiend.app, que emplea AI y servicios de AWS. Trabajé en un equipo técnico que operaba con metodologías SCRUM utilizando Figma como herramienta de diseño, además de GitHub para control de versiones, Vercel para despliegue y VS Code como herramienta de desarrollo.',
    ],
  },
  {
    name: 'TDP Soluciones',
    title: 'Técnico de sistemas y mantenimiento',
    date: 'Abril - December 2022',
    description: [
      'Desarrollé habilidades técnicas informáticas, resolviendo problemas y garantizar un funcionamiento eficiente de los sistemas.',
    ],
  },
]

export const ListOfProjects = [
  {
    title: 'Photo Scorer - Analiza y mejora tus fotos',
    description:
      'Servicio ofrecido por la startup Recomiend.app. Tras subir tu foto de perfil recibes un feedback de la IA para mejorar tu foto.',
    href: 'https://recomiend.app/analizador-foto-perfil-ia',
    images: [
      '/images/recomiend-app-landing-vertical.png',
      '/images/recomiend-app-upload-image.png',
      '/images/recomiend-app-score.png',
    ],
    isGithub: false,
  },
  {
    title: 'URLShorter - Acorta y gestiona tus enlaces',
    description:
      'Aplicación web full stack para acortar URLs, generar slugs personalizados y gestionar enlaces desde un panel privado. Desarrollado con Next.js 14, tRPC, Prisma y autenticación con NextAuth. Deploy en Vercel y base de datos PostgreSQL.',
    href: 'https://urlshorter-orcin.vercel.app',
    images: [
      // '/images/urlshorter-dashboard.png',
      // '/images/urlshorter-login.png',
      '/images/urlshorter-create.png',
    ],
    isGithub: true,
    gitHubUrl: 'https://github.com/ibraSanusi/urlshorter',
  },
]
