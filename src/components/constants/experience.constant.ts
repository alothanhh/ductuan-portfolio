import icXelex from "@/assets/icons/company-logo/Xelex.jpg";
import icAtom from "@/assets/icons/company-logo/Atom.png";

export const XELEX = {
  title: "Software Engineer Intern",
  company_name: "Xelex Corporation",
  logo: icXelex,
  location: "Ho Chi Minh City, Vietnam",
  date: "June 2023 - Aug 2023",
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
      date: "Jul 2024 - Present",
      description: [
        "• Developed the frontend of the website, ensuring it was user-friendly and visually appealing.",
        "• Collaborated with the team to design and implement new features, such as a chatbot for customer support and a mobile app for iOS and Android.",
      ],
    },
    {
      title: "Frontend Intern",
      date: "Apr 2024 - Jul 2024",
      description: [
        "• Contributed to the development of the website's data storage and retrieval, ensuring it was efficient and reliable.",
        "• Worked closely with the team to ensure the website's performance and security, addressing any issues that arose and implementing necessary updates to ensure it remained up-to-date and secure.",
      ],
    },
  ],
};

export type SingleRoleExperienceProps = typeof XELEX;
export type MultiRoleExperienceProps = typeof ATOM;
