import project from "../../assets/pdf/project.pdf";
import fwx from "../../assets/images/project/fwx.png";
import faucet from "../../assets/images/project/faucet.png";
import user from "../../assets/images/project/user.png";
import mern from "../../assets/images/project/mern.png";
import app from "../../assets/images/project/app.png";
import drone from "../../assets/images/project/drone.png";

interface ProjectItem {
  image: string;
  key: string;
  desc: String;
  tag: string;
  link: string;
}

export const ProjectItem: ProjectItem[] = [
  {
    image: fwx,
    tag: "Website",
    key: "FWX Finance",
    desc: "Integrate the new landing page with the Figma design using Next.js.",
    link: "https://fwx.finance",
  },
  {
    image: faucet,
    tag: "Web App",
    key: "Faucet Website",
    desc: "Build an online platform that distributes small amounts of crypto to users for free.",
    link: "https://bsc-faucet.netlify.app/",
  },
  {
    image: user,
    tag: "Web App",
    key: "User Management",
    desc: "Developed a MERN stack application with full CRUD operations.",
    link: "https://user-management-az98.onrender.com",
  },
  {
    image: mern,
    tag: "Web App",
    key: "Employee Database",
    desc: "Developed a MERN stack application with full CRUD operations.",
    link: "https://mern-stack-crud-m2qd.onrender.com",
  },
  {
    image: app,
    tag: "Application",
    key: "Game Application",
    desc: "Developed gaming apps to generate revenue via Google AdMob ads.",
    link: "https://apps.apple.com/th/developer/nattagrit-ridtikhab/id1288981567?see-all=i-phonei-pad-apps",
  },
  {
    image: drone,
    tag: "Graduation project",
    key: "Computer Vision",
    desc: "The project is developed based on the principles of image processing.",
    link: project,
  },
];
