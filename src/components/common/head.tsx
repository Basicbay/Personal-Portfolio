import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

interface HeadProps {
    name: string;
  }

  export default function Head({ name }: HeadProps) {
  return (
    <div className="flex items-center justify-between w-full">
      <p className="text-2xl font-bold">{name}</p>
      <Link to="/" className=" hover:bg-purple-100 dark:hover:bg-purple-500/40 dark:hover:text-purple-300 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-purple-500 p-1 rounded-md">
        <Icon
          icon="line-md:close"
          className="w-7 h-7 "
        />
      </Link>
    </div>
  );
}
