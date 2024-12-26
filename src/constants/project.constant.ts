import imgAtomHub from '@/assets/images/projects/imgAtomHub.jpg'
import imgBVBank from '@/assets/images/projects/imgBVBank.jpg'
import imgForms from '@/assets/images/projects/imgForms.jpg'
import imgMokApi from '@/assets/images/projects/imgMokApi.png'
import imgMugiRecipe from '@/assets/images/projects/imgMugiRecipe.png'
import imgPortfolio from '@/assets/images/projects/imgPortfolio.jpg'
import imgQuizzes from '@/assets/images/projects/imgQuizzes.png'

export const PROJECTS_LIST = [
  {
    title: 'Aiden Portfolio',
    description:
      'Explore my creative journey, skills, and accomplishments! Here, you’ll find highlights of my work, passion projects, and the expertise I bring to every opportunity.',
    image: imgPortfolio,
    techList: ['Next.js', 'Typescript', 'Mantine', 'Framer Motion', 'EmailJs'],
    link: 'https://picsum.photos/id/10/200/200',
  },
  {
    title: 'Merchant Portal - BVBank',
    description:
      'A management platform for merchants, this is one of the payment infrastructures in the collaboration project between ATOM and Viet Capital Bank to support payment solutions.',
    image: imgBVBank,
    techList: ['React + Vite', 'Javascript', 'TailwindCSS'],
    link: 'https://picsum.photos/id/10/200/200',
  },
  {
    title: 'ATOM HUB',
    description:
      'A project for partner clients to explore, register, and test ATOM’s products and services, with a primary focus on API testing.',
    image: imgAtomHub,
    techList: ['Next.js', 'Typescript', 'TailwindCSS'],
    link: 'https://picsum.photos/id/10/200/200',
  },
  {
    title: 'Quizzes on-chain',
    description:
      'A decentralized application on the SUI platform. Players can participate to create and answer quizzes in realtime. All results are stored on the blockchain.',
    image: imgQuizzes,
    techList: ['Next.js', 'Typescript', 'TailwindCSS', 'Framer Motion'],
    link: 'https://picsum.photos/id/10/200/200',
  },
  // {
  //   title: 'Form Generator System',
  //   description:
  //     'Form generator and management system similar to Google Form, Microsoft Form but more specialized in data types for administrative documents in Vietnam such as linked data types, tabular data types,...',
  //   image: imgForms,
  //   techList: ['React', 'Typescript', 'Material UI'],
  //   link: 'https://picsum.photos/id/10/200/200',
  // },
]

export const PROJECTS_LIST_DETAIL = [
  {
    title: 'Aiden Portfolio',
    type: 'PERSONAL PROJECT',
    date: 'Dec 2024',
    color: 'green',
    description:
      'Explore my creative journey, skills, and accomplishments! Here, you’ll find highlights of my work, passion projects, and the expertise I bring to every opportunity.',
    image: imgPortfolio,
    techList: ['Next.js', 'Typescript', 'Mantine', 'Framer Motion', 'EmailJs'],
    link: 'https://picsum.photos/id/10/200/200',
    teamSize: 1,
    feTeam: 1,
  },
  {
    title: 'Merchant Portal - BVBank',
    type: 'PROJECT OF ATOM',
    date: 'Aug 2024 - Dec 2024',
    color: 'red',
    description:
      'A management platform for merchants, this is one of the payment infrastructures in the collaboration project between ATOM and Viet Capital Bank to support payment solutions.',
    image: imgBVBank,
    techList: [
      'React + Vite',
      'Javascript',
      'TailwindCSS',
      'Redux',
      'Redux Toolkit',
      'Socket.io',
      'React Hook Form',
      'Yup',
      'Chartjs',
      'React Table',
    ],
    link: 'https://picsum.photos/id/10/200/200',
    teamSize: 33,
    feTeam: 3,
  },
  {
    title: 'ATOM HUB',
    type: 'PROJECT OF ATOM',
    date: 'Jun 2024 - Aug 2024',
    color: 'red',
    description:
      'A project for partner clients to explore, register, and test ATOM’s products and services, with a primary focus on API testing.',
    image: imgAtomHub,
    techList: [
      'Next.js',
      'Typescript',
      'Framer Motion',
      'TailwindCSS',
      'React Query',
      'Zustand',
      'React Hook Form',
      'Yup',
      'I18next',
    ],
    link: 'https://picsum.photos/id/10/200/200',
    teamSize: 20,
    feTeam: 4,
  },
  {
    title: 'Quizzes on-chain',
    type: `PROJECT OF ATOM`,
    date: 'Apr 2024 - May 2024',
    color: 'red',
    description:
      'A decentralized application on the SUI platform. Players can participate to create and answer quizzes in realtime. All results are stored on the blockchain.',
    image: imgQuizzes,
    techList: [
      'Next.js',
      'Typescript',
      'zkLogin',
      'SUI blockchain',
      'TailwindCSS',
      'Framer Motion',
      'Socket.io',
      'Redux',
      'Redux Toolkit',
    ],
    link: 'https://picsum.photos/id/10/200/200',
    teamSize: 6,
    feTeam: 3,
  },
  {
    title: 'Form Generator System',
    type: 'GRADUATION THESIS',
    date: 'Oct 2023 - June 2024',
    color: 'blue',
    description:
      'Form generator and management system similar to Google Form, Microsoft Form but more specialized in data types for administrative documents in Vietnam such as linked data types, tabular data types,...',
    image: imgForms,
    techList: ['React', 'Typescript', 'Material UI'],
    link: 'https://picsum.photos/id/10/200/200',
    teamSize: 3,
    feTeam: 1,
  },
  {
    title: 'MugiRecipe (Mobile App)',
    type: 'UNIVERSITY ASSIGNMENT',
    date: 'Oct 2023 - Nov 2023',
    color: 'blue',
    description:
      "A mobile app that recommends recipes based on photos. It uses the Clarifai API to analyze user's photos and provide tailored recipe suggestions.",
    image: imgMugiRecipe,
    techList: ['React Native', 'Expo', 'Clarifai', 'MongoDB', 'NestJs'],
    link: 'https://picsum.photos/id/10/200/200',
    teamSize: 4,
    feTeam: 3,
  },
  {
    title: 'MOK APIS',
    type: 'PROJECT OF ATOM',
    date: 'Jun 2024',
    color: 'red',
    description:
      'An internal company project designed to create mock APIs and mock data for testing and development purposes.',
    image: imgMokApi,
    techList: ['Next.js', 'Typescript', 'TailwindCSS'],
    link: 'https://picsum.photos/id/10/200/200',
    teamSize: 6,
    feTeam: 3,
  },

  // Timeline, Team, Team size, Responsibilities
]

export type ProjectCardProps = (typeof PROJECTS_LIST)[number]
export type ProjectDetailProps = (typeof PROJECTS_LIST_DETAIL)[number]
