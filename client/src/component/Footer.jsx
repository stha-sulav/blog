import { Footer } from "flowbite-react";
import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <Footer container className="border boder-t-8 border-gray-300">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="text-sm sm:text-lg font-semibold dark:text-white"
            >
              <span className="px-2 py-1 ">Blogger</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup>
                <Footer.Link href="/about">About us</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="w-4/5">
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Link to="#" className="flex items-center">
                  <FaGithub className="w-6 h-6 mr-1" />
                  Github
                </Link>
                <Link to="#" className="flex items-center">
                  <FaInstagram className="w-6 h-6 mr-1" />
                  Instagram
                </Link>
                <Link to="#" className="flex items-center">
                  <BsTwitterX className="w-6 h-6 mr-1" />
                  Twitter
                </Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Trems &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="">
          <Footer.Copyright
            href="#"
            by="Blogger"
            year={new Date().getFullYear()}
          />
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
