import { Outlet } from "react-router-dom";
import Profile from "./profile";

const Home = () => {
  return (
    <div className="flex flex-col xl:flex-row items-center justify-center xl:h-screen xl:p-0 pt-20 gap-16">
      <Profile />
      <Outlet />
    </div>
  );
};

export default Home;
