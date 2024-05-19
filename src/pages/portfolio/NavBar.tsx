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
        <nav className="bg-white border-b-[1px] border-gray-200 py-[18px] flex justify-between ">
          <div className="flex flex-row gap-x-6 ml-[4rem] text-[#4b55630] font-light text-gray-700  ">
            <div className=" hover:scale-[1.05] hover:text-black">
              {" "}
              <GithubOutlined className="text-3xl" />
            </div>
            <div className=" hover:scale-[1.05] hover:text-black">
              {" "}
              <TwitterOutlined className="text-3xl " />
            </div>
            <div className=" hover:scale-[1.05] hover:text-black">
              {" "}
              <LinkedinOutlined className="text-3xl" />
            </div>
          </div>
          <button className="mr-[4rem] text-white bg-black px-4 py-2 rounded-lg text-base hover:scale-[1.02] hover:bg-gray-800 ">
            Contact Me
          </button>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
