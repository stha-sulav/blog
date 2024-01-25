import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex flex-col md:flex-row md:items-center p-3 max-w-3xl mx-auto">
        <div className="flex-1">
          <Link to="/" className="text-4xl font-semibold dark:text-white">
            <span className="px-2 py-1 ">Blogger</span>
          </Link>
          <p className="text-sm mt-5">
            The Blogger app. Best bloging site in the world.
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div className="">
              <Label value="Username" />
              <TextInput type="text" placeholder="username" id="username" />
            </div>
            <div className="">
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="example@email.com"
                id="email"
              />
            </div>
            <div className="">
              <Label value="Password" />
              <TextInput type="password" placeholder="password" id="password" />
            </div>
            <Button type="submit">Sign Up</Button>
          </form>
          <div className="text-sm mt-4">
            <span>Already have an account? </span>
            <Link to="/signin" className="text-blue-500 underline">
              Click here.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
