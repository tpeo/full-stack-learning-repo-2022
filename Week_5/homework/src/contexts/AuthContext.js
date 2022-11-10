// based on the tutorial from https://usehooks.com/useAuth/

import { useWindowEvent } from "@mantine/hooks";
import { createContext, useState } from "react";
// a bug with this hook prevented me from using it 😢
// import { useLocalStorage } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

let AuthContext = createContext();

// This is what we export from this file
export default AuthContext;

// Provider hook that creates auth object and handles state
export function useProvideAuth() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(
    window.localStorage.getItem("loggedIn")
  );

  async function login(values, form) {
    // Homework TODO: Add Backend Support
    const response = await fetch("https://tpeo-todo.herokuapp.com/auth/login", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-orgin",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({ email: values.email, password: values.password })
    })
      .then((response) => {
        console.log(response.status);
        if (response.status !== 200) {
          throw new Error();
        }
        return response.json();
      })
      .then((response) => {
        setLoggedIn(true);
        window.localStorage.setItem("loggedIn", true);
        window.localStorafe.setItem("token", response.token);
        window.localStorage.setItem("username", response.username);
        navigate("../");
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
    //console.log(response.json())
    /*
    const validEmail = "tpeorocks@roblox.com";
    const validPassword = "angularbad";

    if (values.email === validEmail && values.password === validPassword) {
      setLoggedIn(true);
      window.localStorage.setItem("loggedIn", true);
      // Navigate towards / page, which is relatively one directory back
      navigate("../");
    } else {
      // sets and error with the form
      form.setErrors({ email: true, password: "Invalid login" });
    }
    */
  }

  function logout() {
    // In Class TODO: Implement this function
    window.localStorage.clear("loggedIn");
    setLoggedIn(false);
    console.log(loggedIn);
  }

  return {
    loggedIn,
    login,
    logout
  };
}
