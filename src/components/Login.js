import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const checkSignIn = () => {
    setIsSignIn(!isSignIn);
    email.current.value = "";
    password.current.value = "";
  };

  const handleClick = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const message = validateData(emailValue, passwordValue);
    setErrorMessage(message);
  };
  return (
    <div className="w-screen min-h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_medium.jpg')]">
      <Header />
      <div className="flex justify-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="bg-black/80 px-14 py-6  w-4/12 flex flex-wrap justify-center rounded-md"
        >
          <h2 className="text-white w-full mb-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h2>
          {!isSignIn && (
            <input
              className="w-full mb-4 bg-stone-700 text-stone-500 p-3 rounded-sm"
              type="text"
              placeholder="Enter Name"
            ></input>
          )}
          <input
            ref={email}
            className="w-full mb-4 bg-stone-700 text-stone-500 p-3 rounded-sm"
            type="text"
            placeholder="Email Address"
          ></input>
          <input
            ref={password}
            className="w-full mb-4 bg-stone-700 text-stone-500 p-3 rounded-sm"
            type="password"
            placeholder="Password"
          ></input>
          <button
            className="w-full bg-red-600 text-white mb-4 p-3 rounded-sm"
            type="submit"
            onClick={handleClick}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="m-3 text-red-500 text-base">
            {errorMessage !== null ? errorMessage : ""}
          </p>
          <p
            onClick={checkSignIn}
            className="text-stone-500 m-3 cursor-pointer"
          >
            {!isSignIn
              ? "Already a user? Sign In"
              : "New to Netflix? Sign Up Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
