import { createContext, useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";

const URL = import.meta.env.VITE_API_URL;

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);
  const [update, setUpdate] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(`${URL}/auth`, {
        credentials: "include",
      });
      if (response.status === 200) {
        const data = await response.json();
        return setAuth(data);
      } 
      return setAuth(false);
      }
    catch (error) {
      return console.error("Error fetching data:", error);
    }}

  useEffect(() => {
    fetchData();
  }, [update]);


  const value = useMemo(() => ({ auth, update, setUpdate}), [auth, update]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthProvider, AuthContext };
