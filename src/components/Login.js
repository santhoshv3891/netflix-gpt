import React, { useRef, useState } from "react";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { validateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
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
    if (message) return;

    if (!isSignIn) {
      console.log("Working fine");
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      console.log("Going here");
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_URL} alt="background" />
      </div>

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
              ref={name}
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
