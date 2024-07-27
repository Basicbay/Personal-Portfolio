import CSS from '../../../public/icon/CSS.svg'
import HTML from '../../../public/icon/HTML.svg'
import JavaScript from '../../../public/icon/JavaScript.svg'
import TypeScript from '../../../public/icon/TypeScript.svg'
import React from '../../../public/icon/React.svg'
import NextJS from '../../../public/icon/NextJS.svg'
import Redux from '../../../public/icon/Redux.svg'
import NodeJS from '../../../public/icon/NodeJS.svg'
import TailwindCSS from '../../../public/icon/TailwindCSS.svg'
import Mui from '../../../public/icon/Mui.svg'
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
  Mui,
  Git,
  Figma,
];

export default function DescSkills() {
  return (
    <div className="grid grid-cols-4 gap-5 ">
      {imageNames.map((imageName, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            key={index}
            src={imageName}
            alt="skill"
            className="w-9 h-9"
          />
        </div>
      ))}
    </div>
  );
}