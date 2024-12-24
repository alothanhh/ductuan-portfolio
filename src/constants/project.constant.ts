import imgAtomHub from '@/assets/images/projects/imgAtomHub.jpg'
import imgBVBank from '@/assets/images/projects/imgBVBank.jpg'
import imgForms from '@/assets/images/projects/imgForms.jpg'
import imgQuizzes from '@/assets/images/projects/imgQuizzes.png'

export const PROJECTS_LIST = [
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
  {
    title: 'Form Generator System',
    description:
      'Form generator and management system similar to Google Form, Microsoft Form but more specialized in data types for administrative documents in Vietnam such as linked data types, tabular data types,...',
    image: imgForms,
    techList: ['React', 'Typescript', 'Material UI'],
    link: 'https://picsum.photos/id/10/200/200',
  },
]

export const PROJECTS_LIST_DETAIL = [
  {
    title: 'Merchant Portal - BVBank',
    type: 'PROJECT OF ATOM',
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
  },
  {
    title: 'ATOM HUB',
    type: 'PROJECT OF ATOM',
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
  },
  {
    title: 'Quizzes on-chain',
    type: `PROJECT OF ATOM`,
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
  },
  {
    title: 'Form Generator System',
    type: 'GRADUATION THESIS',
    color: 'blue',
    description:
      'Form generator and management system similar to Google Form, Microsoft Form but more specialized in data types for administrative documents in Vietnam such as linked data types, tabular data types,...',
    image: imgForms,
    techList: ['React', 'Typescript', 'Material UI'],
    link: 'https://picsum.photos/id/10/200/200',
  },

  // Timeline, Team, Team size, Responsibilities

  // Aiden Portfolio
  // Mugicook (React Native App)
  // Monday App (Xelex intership)
  // MockAPI
  // 5+ assignments project in university
]

export type ProjectCardProps = (typeof PROJECTS_LIST)[number]
export type ProjectDetailProps = (typeof PROJECTS_LIST_DETAIL)[number]
