import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { AuthProvider } from "./UseContext/AuthContext";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000000000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        closeButton:true
        draggable
        pauseOnHover
        theme="dark"
      />
      <AuthProvider>
        <NavBar />
        <Outlet />
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
