// based on the tutorial from https://usehooks.com/useAuth/

import { createContext, useState } from "react";
// a bug with this hook prevented me from using it 😢
// import { useLocalStorage } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

let AuthContext = createContext();
export { AuthContext as default };

// Provider hook that creates auth object and handles state
export function useProvideAuth() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(
    window.localStorage.getItem("loggedIn") === "true"
  );

  async function login(values, form) {
    await fetch("https://tpeo-todo.herokuapp.com/auth/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ email: values.email, password: values.password }) // body data type must match "Content-Type" header
    })
      .then((data) => {
        if (data.status === 200) {
          const json = data.json();
          return json;
        } else {
          throw Error("Invalid");
        }
      })
      .then((json) => {
        setLoggedIn(true);
        window.localStorage.setItem("loggedIn", true);
        window.localStorage.setItem("username", json.username);
        window.localStorage.setItem("token", json.token); // Should be sent upon subsequent requests
        navigate("../");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function logout() {
    window.localStorage.clear();
    setLoggedIn(false);
  }

  return {
    loggedIn,
    login,
    logout
  };
}
