const imageNames = [
  "CSS.svg",
  "HTML.svg",
  "JavaScript.svg",
  "TypeScript.svg",
  "React.svg",
  "NextJS.svg",
  "Redux.svg",
  "NodeJS.svg",
  "TailwindCSS.svg",
  "Bootstrap.svg",
  "Git.svg",
  "Figma.svg",
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
            src={`src/assets/skills/${imageName}`}
            alt="skill"
            className="w-10 h-10"
          />
          {/* <p className="text-center mt-3 text-xs ">{imageTitles[index]}</p> */}
        </div>
      ))}
    </div>
  );
}
