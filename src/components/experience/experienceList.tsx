import React from "react";

interface ExperienceItem {
  img?: string;
  key: string;
  desc: String;
  date: string;
}

interface ExperienceListProps {
  items: ExperienceItem[];
}

const ExperienceList: React.FC<ExperienceListProps> = ({ items }) => {
  return (
    <ol className="flex flex-col gap-y-10 relative border-s border-gray-200 dark:border-gray-600 ml-24">
      {items.map((item) => (
        <li className="ms-5  ">
          <img
            src={item.img}
            alt={item.img}
            className="absolute w-14 h-14 -start-20 rounded-full border border-gray-200 dark:border-none "
          />
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-gray-300 dark:border-gray-500 dark:bg-gray-600 "></div>
          <div className="transition ease-in-out xl:hover:scale-105 duration-100">
            <h3 className=" font-semibold ">{item.key}</h3>
            <p className=" font-normal text-gray-500 dark:text-gray-400  ">
              {item.desc}
            </p>
            <time className="mb-1 text-xs font-normal leading-none text-gray-500 dark:text-gray-400 ">
              {item.date}
            </time>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default ExperienceList;
