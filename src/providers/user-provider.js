import React, { createContext, useState, useEffect } from "react";
import { signInWithUserAnPassword } from "../utilities/helpers/auth";


export const UserContext = createContext({ user: undefined });

const UserProvider = (props) => {
  const [user, setUser] = useState(undefined);

  const updateUserData = async (username, name) => {
    
  }

  const signIn = (username, password) => {
    setUser({data: signInWithUserAnPassword(username, password)})
  }

  const signOut = () => {
    setUser(null)
  }


  useEffect(() => {
    const user = {
      signIn,
      signOut,
      updateUserData
    }

    setUser(user)
  }, [])



  return (
    <UserContext.Provider value={user}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider