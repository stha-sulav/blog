import React from "react";
import { Button, Navbar, NavbarToggle, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <Navbar className="border-b-2">
      <Link to="/" className="text-sm sm:text-xl font-semibold dark:text-white">
        <span className="px-2 py-1 ">Blogger</span>
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="text"
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 items-center md:order-2">
        <Button className="w-12 h-10 hidden lg:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/signin">
          <Button>Sign in</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={pathname === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={pathname === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={pathname === "/dashboard"} as={"div"}>
          <Link to="/dashboard">Dashboard</Link>
        </Navbar.Link>
        <Navbar.Link active={pathname === "/blogs"} as={"div"}>
          <Link to="/blogs">Blogs</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
