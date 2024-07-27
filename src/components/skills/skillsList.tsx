import CSS from "../../../public/icon/CSS.svg";
import HTML from "../../../public/icon/HTML.svg";
import JavaScript from "../../../public/icon/JavaScript.svg";
import TypeScript from "../../../public/icon/TypeScript.svg";
import React from "../../../public/icon/React.svg";
import NextJS from "../../../public/icon/NextJS.svg";
import Redux from "../../../public/icon/Redux.svg";
import NodeJS from "../../../public/icon/NodeJS.svg";
import Bun from "../../../public/icon/Bun.svg";
import Vite from "../../../public/icon/Vite.svg";
import Mui from "../../../public/icon/Mui.svg";
import Styled from "../../../public/icon/Styled.svg";
import TailwindCSS from "../../../public/icon/TailwindCSS.svg";
import Bootstrap from "../../../public/icon/Bootstrap.svg";
import Git from "../../../public/icon/Git.svg";
import Figma from "../../../public/icon/Figma.svg";

const skills = [
  { name: CSS, title: "CSS" },
  { name: HTML, title: "HTML" },
  { name: JavaScript, title: "JavaScript" },
  { name: TypeScript, title: "TypeScript" },
  { name: React, title: "React" },
  { name: NextJS, title: "NextJS" },
  { name: Redux, title: "Redux" },
  { name: NodeJS, title: "NodeJS" },
  { name: TailwindCSS, title: "Tailwind CSS" },
  { name: Mui, title: "Material UI" },
  { name: Bootstrap, title: "Bootstrap" },
  { name: Styled, title: "Styled Component" },
  { name: Bun, title: "Bun" },
  { name: Vite, title: "Vite" },
  { name: Git, title: "Version Control" },
  { name: Figma, title: "Figma" },
];

export default function SkillsList() {
  return (
    <div className="grid grid-cols-4 gap-x-5 gap-y-10">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center transition ease-in-out xl:hover:scale-110 duration-100">
          <img
            key={index}
            src={skill.name}
            alt={skill.title}
            className="w-14 h-14"
          />
          <p className="text-center mt-3 text-xs">{skill.title}</p>
        </div>
      ))}
    </div>
  );
}
