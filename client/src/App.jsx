import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { AuthProvider } from "./UseContext/AuthContext";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <NavBar />
        <Outlet />
      <Footer />
      </AuthProvider>
  );
}

export default App;
