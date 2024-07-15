import React from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";

interface CardItem {
  icon?: string;
  key: string;
  desc: JSX.Element;
  link?: JSX.Element;
}

interface CardListProps {
  items: CardItem[];
}

const CardList: React.FC<CardListProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 xl:p-0 ">
      {items.map((item, index) => (
        <Link
          key={item.key}
          className={twMerge(
            "bg-cover relative flex flex-col gap-y-5 md:max-w-72 h-72 w-full p-7 rounded-xl transition ease-in-out xl:hover:scale-105 duration-100 bg-gray-50 xl:hover:bg-gray-100 border border-gray-200 shadow-md shadow-gray-200  dark:bg-gray-800 xl:hover:dark:bg-gray-700 dark:border-gray-700 dark:shadow-[#03071260] ",
            index === 0 &&
              "border-0 bg-[url('src/assets/backgrounds/day.jpg')] dark:bg-[url('src/assets/backgrounds/night.jpg')] cursor-default",
            index === 3 &&
              "border-0 bg-[url('src/assets/backgrounds/white.jpg')] dark:bg-[url('src/assets/backgrounds/black.jpg')] cursor-default",
            index === 4 && "cursor-default",
            index === 5 && "cursor-default"
          )}
          to={
            index === 2 ? "/projects" : "/" && index === 1 ? "/experience" : "/"
          }
        >
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold ">{item.key}</p>
            <p></p>
            {/* <Icon
              icon={item.icon}
              className=" w-5 h-5 rotate-45 text-gray-500 dark:text-gray-400"
            /> */}
          </div>
          <p className="xl:text-sm ">{item.desc}</p>
          <a href="#" className="xl:text-sm p-5 absolute right-0 bottom-0 ">
            {item.link}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default CardList;