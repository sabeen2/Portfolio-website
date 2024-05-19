import React from "react";
import {
  GithubOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const NavBar: React.FC = () => {
  return (
    <>
      <div>
        <nav className="bg-white sticky border-b-[1px] border-gray-200 py-[18px] flex justify-between  flex-grow  flex-shrink ">
          <div className="flex flex-row sm:gap-x-6 gap-x-4 sm:ml-[4rem] ml-[10px] text-[#4b55630] font-light text-gray-700 flex-shrink">
            <a
              href="https://github.com/sabeen2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-[1.05] hover:text-black"
            >
              <GithubOutlined className="text-3xl" />
            </a>
            <a
              href="https://twitter.com/iamsabeen30"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-[1.05] hover:text-black"
            >
              <TwitterOutlined className="text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/sabin-pandey/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-[1.05]"
            >
              <LinkedinOutlined className="text-3xl" />
            </a>
          </div>
          {/* <button className=" text-white bg-black sm:px-4 px-2 sm:py-2 rounded-lg text-base hover:scale-[1.02] hover:bg-gray-800   flex-shrink ">
            Contact Me
          </button> */}

          <button className=" sm:mr-[4rem] mr-[10px] inline-flex h-10 items-center justify-center rounded-md bg-gray-900 sm:px-8 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
            Contact Me
          </button>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
