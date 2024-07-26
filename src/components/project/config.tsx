import project from "../../assets/pdf/project.pdf";

interface ProjectItem {
  image: string;
  key: string;
  desc: String;
  tag: string;
  link: string;
}

export const ProjectItem: ProjectItem[] = [
  {
    image: "src/assets/images/project/fwx.png",
    tag: "Website",
    key: "FWX Finance",
    desc: "Integrate the new landing page with Next.js Integrate the new landing page with Next.js",
    link: "https://fwx.finance",
  },
  {
    image: "src/assets/images/project/faucet.png",
    tag: "Website",
    key: "Faucet Website",
    desc: "Integrate the new landing page with Next.js Integrate the new landing page with Next.js",
    link: "https://fwx.finance",
  },
  {
    image: "src/assets/images/project/user.png",
    tag: "Website",
    key: "User Management",
    desc: "Integrate the new landing page with Next.js Integrate the new landing page with Next.js",
    link: "https://user-management-az98.onrender.com",
  },
  {
    image: "src/assets/images/project/mern.png",
    tag: "Website",
    key: "Employee Database",
    desc: "Integrate the new landing page with Next.js Integrate the new landing page with Next.js",
    link: "https://mern-stack-crud-m2qd.onrender.com",
  },
  {
    image: "src/assets/images/project/app.png",
    tag: "Application",
    key: "Game Application",
    desc: "Integrate the new landing page with Next.js Integrate the new landing page with Next.js",
    link: "https://apps.apple.com/th/developer/nattagrit-ridtikhab/id1288981567?see-all=i-phonei-pad-apps",
  },
  {
    image: "src/assets/images/project/drone.png",
    tag: "Graduation project",
    key: "Computer Vision",
    desc: "Surveys the changing landscape by UAV Surveys the changing landscape by UAV",
    link: project,
  },
];
