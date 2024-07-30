import DescAbout from "./descAbout";
import DescCertificate from "./descCertificate";
import DescEducation from "./descEducation";
import DescExperience from "./descExperience";
import { ExperienceItem } from "../experience/config";
import DescProject from "./descProject";
import DescSkills from "./descSkills";

const Link = (
  <p className="inline-flex items-center font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700">
    See all
    <svg
      className=" w-2.5 h-2.5 ms-2 rtl:rotate-180"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 6 10"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m1 9 4-4-4-4"
      />
    </svg>
  </p>
);

interface CardItem {
  icon?: string;
  key: string;
  desc: JSX.Element;
  link?: JSX.Element;
}

export const CardItem: CardItem[] = [
  {
    key: "Hello,",
    desc: <DescAbout />,
  },
  {
    icon: "tabler:arrow-up",
    key: "Experience",
    desc: <DescExperience items={ExperienceItem} />,
    link: Link,
  },
  {
    icon: "tabler:arrow-up",
    key: "Projects",
    desc: <DescProject />,
    link: Link,
  },
  {
    key: "Skills",
    desc: <DescSkills />,
    link: Link,
  },
  {
    key: "Education",
    desc: <DescEducation />,
  },
  {
    key: "Certificate",
    desc: <DescCertificate />,
  },
];
