import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

interface HeadProps {
    name: string;
  }

  export default function Head({ name }: HeadProps) {
  return (
    <div className="flex items-center justify-between w-full  ">
      <p className="text-2xl font-bold">{name}</p>
      <Link to="/">
        <Icon
          icon="line-md:close"
          className="w-7 h-7 text-gray-500 dark:text-gray-400 hover:text-gray-50"
        />
      </Link>
    </div>
  );
}
