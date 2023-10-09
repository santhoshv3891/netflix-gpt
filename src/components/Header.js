import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { getLanguage } from "../utils/languageSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showLangSelect = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGPTSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const changeLanguage = (e) => {
    dispatch(getLanguage(e.target.value));
  };

  return (
    <div className="w-screen bg-gradient-to-br from-black flex justify-between z-10 relative">
      <div className="">
        <img className="w-44 " src={LOGO} alt="logo" />
      </div>
      {user && (
        <div className="mr-8 mt-5 pb-3 flex font-bold">
          {showLangSelect && (
            <select
              className="text-black mr-4 rounded-lg"
              onChange={changeLanguage}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="text-white mr-2 p-1 rounded-lg bg-red-700"
            onClick={handleGPTSearch}
          >
            {!showLangSelect ? "GPT Search" : "Homepage"}
          </button>
          <button
            className="hover:underline text-white"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
