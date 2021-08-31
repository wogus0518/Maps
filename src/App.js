import React, { useState, useEffect } from "react";
import AppRouter from "./AppRouter";
import firebase from "./firebaseInit";
import Login from "./pages/login/Login";
const authService = firebase.auth();

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init
      ? 
        <AppRouter
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
        />
      : null
      }
    </>
  );
}

export default App;
