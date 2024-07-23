import { createContext, useState, useEffect } from "react";
import {
  authChangeListner,
  setUserFromAuth,
} from "../utils/firebase/firebase.util";

export const userContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    return authChangeListner(async (user) => {
      if (user) {
        await setUserFromAuth(user);
      }
      setCurrentUser(user);
    });
  }, []);

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
