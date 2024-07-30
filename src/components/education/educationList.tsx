import React from "react";

interface EducationItem {
  key: string;
  desc: String;
  date: string;
}

interface EducationListProps {
  items: EducationItem[];
}

const EducationList: React.FC<EducationListProps> = ({ items }) => {
  return (
    <ol className="flex flex-col gap-y-5 relative border-s border-gray-200 dark:border-gray-600 ">
      {items.map((item) => (
        <li className="ms-5">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-gray-300 dark:border-gray-500 dark:bg-gray-600"></div>
          <h3 className=" font-semibold ">{item.key}</h3>
          <p className=" font-normal text-gray-500 dark:text-gray-400  ">
            {item.desc}
          </p>
          <time className="mb-1 text-xs font-normal leading-none text-gray-500 dark:text-gray-400 ">
            {item.date}
          </time>
        </li>
      ))}
    </ol>
  );
};

export default EducationList;
