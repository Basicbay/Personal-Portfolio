import CSS from '../../../public/icon/CSS.svg'
import HTML from '../../../public/icon/HTML.svg'
import JavaScript from '../../../public/icon/JavaScript.svg'
import TypeScript from '../../../public/icon/TypeScript.svg'
import React from '../../../public/icon/React.svg'
import NextJS from '../../../public/icon/NextJS.svg'
import Redux from '../../../public/icon/Redux.svg'
import NodeJS from '../../../public/icon/NodeJS.svg'
import TailwindCSS from '../../../public/icon/TailwindCSS.svg'
import Bootstrap from '../../../public/icon/Bootstrap.svg'
import Git from '../../../public/icon/Git.svg'
import Figma from '../../../public/icon/Figma.svg'

const imageNames = [
  CSS,
  HTML,
  JavaScript,
  TypeScript,
  React,
  NextJS,
  Redux,
  NodeJS,
  TailwindCSS,
  Bootstrap,
  Git,
  Figma,
];

// const imageTitles = [
//   "CSS.svg",
//   "HTML.svg",
//   "JavaScript.svg",
//   "TypeScript.svg",
//   "React.svg",
//   "NextJS.svg",
//   "Redux.svg",
//   "NodeJS.svg",
//   "TailwindCSS.svg",
//   "Bootstrap.svg",
//   "Git.svg",
//   "Figma.svg",
// ];

export default function DescSkills() {
  return (
    <div className="grid grid-cols-4 gap-5 ">
      {imageNames.map((imageName, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            key={index}
            src={imageName}
            alt="skill"
            className="w-10 h-10"
          />
          {/* <p className="text-center mt-3 text-xs ">{imageTitles[index]}</p> */}
        </div>
      ))}
    </div>
  );
}