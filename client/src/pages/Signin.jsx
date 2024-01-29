import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSolidError } from "react-icons/bi";

const Signin = () => {
  const [formData, setFormData] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      setErrorMsg("All fieds are required!");
    }

    try {
      setIsLoading(true);
      setErrorMsg(null);
      const res = await fetch("/api/v1/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        setErrorMsg(data.message);
      }

      if (res.ok) {
        navigate("/");
      }

      setIsLoading(false);
    } catch (error) {
      setErrorMsg(error.message);
      setIsLoading(false);
    }
  };

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
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="">
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="example@email.com"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="********"
                name="password"
                onChange={handleChange}
              />
            </div>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
          <div className="text-sm mt-4">
            <span>Don't have an account? </span>
            <Link to="/signup" className="text-blue-500 underline">
              Click here.
            </Link>
            {errorMsg && (
              <Alert className="mt-4" color="failure" icon={BiSolidError}>
                {errorMsg}
              </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
