import { redirect } from "react-router-dom";

const URL = import.meta.env.VITE_API_URL;

const AuthLoader = async () => {
  try {
    const response = await fetch(`${URL}/auth`, {
      method: "GET",
      credentials: "include",
    });
    if (response.status === 401) {
      return redirect("/connexion");
    }
    return null;
  } catch (err) {
    return console.error("Fetch profile error:", err);
  }
};

export default AuthLoader;
