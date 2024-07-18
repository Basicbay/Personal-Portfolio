import { Icon } from "@iconify/react";
import Alert from "../components/common/alert";
import { useState } from "react";
import avatar from '../assets/avatar/capture.png'
import resume from '../assets/pdf/resume.pdf'

function Profile() {
  const [alertVisible, setAlertVisible] = useState(false);

  const handleClose = () => {
    var phonenumber = "+66867499315";
    navigator.clipboard.writeText(phonenumber);
    setAlertVisible(false);
  };

  return (
    <div className="flex flex-col gap-y-5 items-center xl:items-start">
      <img
        className="w-48 h-48 rounded-full p-1 ring-2 ring-gray-300 mb-2 "
        src={avatar}
        alt="avatar"
      />
      <div className="flex flex-col gap-y-5 items-center xl:items-start">
        <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-1 text-center">
          Frontend Developer
        </button>
        <div className="font-bold text-3xl text-nowrap ">
          Nattagrit Ridtikhab
        </div>
        <div className=" text-gray-500 dark:text-gray-400  text-center xl:text-left">
          I would love to change the world, <br />
          but they won't give me the source code.
        </div>
      </div>
      <div className="flex gap-x-2">
        <a
          className=" bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-bold rounded-lg text-lg px-2.5 py-1 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200"
          href={resume} target="_blank"
        >
          Resume
        </a>
        <a
          href="https://github.com/Basicbay"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-2.5 py-1 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#24292F]/50"
        >
          <Icon icon="mdi:github" style={{ fontSize: "28px" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/nattagrit-ridtikhab-83894b2a0/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-2.5 py-1 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50"
        >
          <Icon icon="cib:linkedin-in" style={{ fontSize: "24px" }} />
        </a>
      </div>
      <div className="flex flex-row xl:flex-col gap-5">
        <button
          className="flex items-center gap-x-2 hover:underline"
          onClick={() => setAlertVisible(true)}
        >
          <Icon icon="fluent:call-12-filled" />
          +66867499315
        </button>
        <a
          href="mailto: nattagrit.r@gmail.com"
          className="flex items-center gap-x-2 hover:underline"
        >
          <Icon icon="tabler:mail-filled" />
          nattagrit.r@gmail.com
        </a>

        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 text-sm z-50 text-nowrap ">
          {alertVisible && (
            <Alert
              message="You Copied PhoneNumber"
              type="success"
              onClose={handleClose}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
