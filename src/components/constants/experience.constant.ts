import icXelex from "@/assets/icons/company-logo/Xelex.jpg";
import icAtom from "@/assets/icons/company-logo/Atom.png";

export const XELEX = {
  title: "Software Engineer Intern",
  company_name: "Xelex Corporation",
  logo: icXelex,
  location: "Ho Chi Minh City, Vietnam",
  date: "June 2023 - Aug 2023 • 3 mos",
  description: [
    "• Gained hands-on experience and expanded knowledge of Angular. Additionally, I explored TailwindCSS, MongoDB, and ASP.NET Core during my internship.",
    "• Collaborated on the Onboarding project: Worked closely with teammates and a mentor on a project inspired by the Monday App - a popular tool that helps users plan tasks and schedules.",
    "• Contributed to website development: Developed a user-friendly, responsive, and accessible interface, ensuring a seamless user experience.",
    // "• Technologies and skills: Angular 16, TailwindCSS, MongoDB, ASP.NET Core, collaboration, presentation.",
  ],
};

export const ATOM = {
  company_name: "ATOM Solution x Esol Labs",
  logo: icAtom,
  location: "Ho Chi Minh City, Vietnam",
  roles: [
    {
      title: "Frontend Developer",
      date: "Jul 2024 - Present • 5 mos",
      description: [
        "• Participated in the project to develop payment solutions for the banking sector.",
        "• Collaborated with the team to design and implement new features, ensuring seamless and scalability.",
      ],
    },
    {
      title: "Frontend Intern",
      date: "Apr 2024 - Jul 2024 • 4 mos",
      description: [
        "• Researched and learned about the latest technologies on blockchain, such as Ethereum, SUI and Aptos.",
        "• Collaborated with the team to develop a new feature of a decentralized web application (dApp) for creating and answering quizzes on-chain.",
        "• Workeded closely with the team to ensure the website was user-friendly and visually appealing.",
      ],
    },
  ],
};

export type SingleRoleExperienceProps = typeof XELEX;
export type MultiRoleExperienceProps = typeof ATOM;
