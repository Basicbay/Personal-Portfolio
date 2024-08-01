import CSS from "/icon/CSS.svg";
import HTML from "/icon/HTML.svg";
import JavaScript from "/icon/JavaScript.svg";
import TypeScript from "/icon/TypeScript.svg";
import React from "/icon/React.svg";
import NextJS from "/icon/NextJS.svg";
import Redux from "/icon/Redux.svg";
import NodeJS from "/icon/NodeJS.svg";
import Bun from "/icon/Bun.svg";
import Vite from "/icon/Vite.svg";
import Mui from "/icon/Mui.svg";
import Styled from "/icon/Styled.svg";
import TailwindCSS from "/icon/TailwindCSS.svg";
import Bootstrap from "/icon/Bootstrap.svg";
import Git from "/icon/Git.svg";
import Figma from "/icon/Figma.svg";
import Jira from "/icon/Jira.svg";
import Motion from "/icon/Motion.svg";

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
  { name: Motion, title: "Framer Motion" },
  { name: Bun, title: "Bun" },
  { name: Vite, title: "Vite" },
  { name: Figma, title: "Figma" },
  { name: Git, title: "Version Control" },
  { name: Jira, title: "Jira" },

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
          <p className="text-center mt-3 text-xs font-medium">{skill.title}</p>
        </div>
      ))}
    </div>
  );
}
