import CSS from '/icon/CSS.svg'
import HTML from '/icon/HTML.svg'
import JavaScript from '/icon/JavaScript.svg'
import TypeScript from '/icon/TypeScript.svg'
import React from '/icon/React.svg'
import NextJS from '/icon/NextJS.svg'
import Redux from '/icon/Redux.svg'
import NodeJS from '/icon/NodeJS.svg'
import TailwindCSS from '/icon/TailwindCSS.svg'
import Mui from '/icon/Mui.svg'
import Git from '/icon/Git.svg'
import Figma from '/icon/Figma.svg'

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