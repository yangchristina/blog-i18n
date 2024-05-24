type Project = {
  title: string
  description: string
  imgSrc: string
  href: string
}

type ProjectsData = {
  [locale: string]: Project[]
}

const projectsData: ProjectsData = {
  en: [
    {
      title: 'Planda',
      description: `Online calendar and task-management system for students, with course syllabus
        parsing via OpenAI API, a 2-way Google calendar sync, task organizing views, and productivity
        tracking.`,
      imgSrc: '/static/images/planda-cover-photo.png',
      href: 'https://www.planda.ca',
    },
    {
      title: 'Celebrate This Mortal',
      description: `Cards = Clutter. But throwing them away is SOO hard.

      Don't create a hard choice.

      \nCelebrate someone special with a collage of messages and photos from their friends and family, with us.
      All cards free for a limited time.`,
      imgSrc: '/static/images/mortal-cover-photo.png',
      href: 'https://www.celebratethismortal.com',
    },
  ],

  // fr: [
  //   {
  //     title: 'Un moteur de recherche',
  //     description: `Et si vous pouviez rechercher n'importe quelle information dans le monde ? Pages Web, images, vidéos
  //       et plus. Google propose de nombreuses fonctionnalités pour vous aider à trouver exactement ce que vous cherchez.`,
  //     imgSrc: '/static/images/google.png',
  //     href: 'https://www.celebratethismortal.com',
  //   },
  //   {
  //     title: 'La Machine à remonter le temps',
  //     description: `Imaginez pouvoir voyager dans le temps ou vers le futur. Tournez simplement le bouton
  //       à la date souhaitée et appuyez sur "Go". Ne vous inquiétez plus des clés perdues ou
  //       écouteurs oubliés avec cette solution simple mais abordable.`,
  //     imgSrc: '/static/images/time-machine.jpg',
  //     href: '/blog/articles/la-machine-a-remonter-le-temps',
  //   },
  // ],
}

export default projectsData
