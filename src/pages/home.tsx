import { Outlet } from "react-router-dom";
import Profile from "./profile";

const Home = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-center lg:h-screen gap-16 py-10 xl:py-0 ">
      <Profile />
      <Outlet />
    </div>
  );
};

export default Home;
