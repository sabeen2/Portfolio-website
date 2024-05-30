import React, { useState } from "react";
import { Drawer } from "antd";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

const NavBar: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [dark, setDark] = useState(true);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const menuProps = {
    className: "hover:bg-slate-100 duration-[300ms] py-2 px-4 rounded-lg",
  };

  const drawerProps = {
    className: " flex mb-4 text-lg  font-semibold ",
  };

  return (
    <>
      <div>
        <nav className="bg-white fixed top-0 w-full border-b-[1px] border-gray-200 py-[18px] flex justify-between items-center z-50">
          <div className="flex flex-row sm:gap-x-6 gap-x-4 sm:ml-[4rem] ml-[8px] text-[#4b55630] font-light text-gray-700">
            <a
              href="https://github.com/sabeen2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-[1.05] hover:text-black"
            >
              <GithubIcon className="text-3xl" />
            </a>
            <a
              href="https://twitter.com/iamsabeen30"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-[1.05] hover:text-black"
            >
              <TwitterIcon className="text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/sabin-pandey/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-[1.05]"
            >
              <LinkedinIcon className="text-3xl" />
            </a>
          </div>

          <div className="hidden 1115:flex text-gray-900 space-x-3 sm:mr-[4rem] mr-[10px]">
            <a {...menuProps} href="#">
              Home
            </a>
            <a {...menuProps} href="#projects">
              Projects
            </a>
            <a {...menuProps} href="#education">
              Education
            </a>
            <a {...menuProps} href="#skills">
              Skills & Technologies
            </a>
            <a {...menuProps} href="#work">
              Work Experience
            </a>
            <a {...menuProps} href="#contact">
              Contact Me
            </a>

            <div>
              <button> </button>
            </div>
          </div>

          <div className="1115:hidden mr-[10px]">
            <MenuIcon onClick={showDrawer} />
          </div>
        </nav>

        <Drawer
          placement="bottom"
          onClose={closeDrawer}
          open={drawerVisible}
          className="1115:hidden"
        >
          <a {...drawerProps} onClick={() => setDrawerVisible(false)} href="#">
            Home
          </a>
          <a
            {...drawerProps}
            onClick={() => setDrawerVisible(false)}
            href="#projects"
          >
            Projects
          </a>
          <a
            {...drawerProps}
            onClick={() => setDrawerVisible(false)}
            href="#education"
          >
            Education
          </a>
          <a
            {...drawerProps}
            onClick={() => setDrawerVisible(false)}
            href="#skills"
          >
            Skills & Technologies
          </a>
          <a
            {...drawerProps}
            onClick={() => setDrawerVisible(false)}
            href="#work"
          >
            Work Experience
          </a>
          <a
            {...drawerProps}
            onClick={() => setDrawerVisible(false)}
            href="#contact"
          >
            Contact Me
          </a>
        </Drawer>
      </div>
    </>
  );
};

export default NavBar;

function MenuIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function TwitterIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function LinkedinIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
