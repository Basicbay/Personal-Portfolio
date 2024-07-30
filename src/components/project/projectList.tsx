import React from "react";
import { twMerge } from "tailwind-merge";

interface ProjectItem {
  image: string;
  key: string;
  desc: String;
  tag: string;
  link: string;
}

interface ProjectListProps {
  items: ProjectItem[];
}

const ProjectList: React.FC<ProjectListProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((item) => (
        <a
          key={item.key}
          className=" flex flex-col gap-y-1 md:max-w-72 w-full rounded-xl transition ease-in-out xl:hover:scale-105 duration-100 border border-gray-200 dark:border-gray-800    "
          href={item.link}
          target="_blank"
        >
          <img src={item.image} alt={item.key} className=" rounded-t-xl" />
          <div className="flex flex-col gap-y-2 p-3 py-4">
            <span
              className={twMerge(
                "text-xs font-medium px-2.5 py-0.5 rounded-lg w-fit",
                item.tag === "Website"
                  ? "bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300"
                  : "", 
                  item.tag === "Web App"
                  ? "bg-sky-100 text-sky-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-sky-900 dark:text-sky-300"
                  : "",
                item.tag === "Application"
                  ? "bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300"
                  : "",
                item.tag === "Graduation project"
                  ? "bg-gray-300 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-800 dark:text-gray-300"
                  : ""
              )}
            >
              {item.tag}
            </span>
            <div>
              <p className="text-lg font-bold">{item.key}</p>
              <p className="xl:text-sm break-words text-gray-500 dark:text-gray-400 truncate ...">
                {item.desc}
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ProjectList;
