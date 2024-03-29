import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { Link } from "react-router-dom";
import { routes } from "../utils/routes";

const Navbar = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const toggleTheme = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    dispatch({ type: "SET_THEME", payload: newTheme });
    document.body.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <nav className="bg-teal-500 dark:bg-teal-900 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <Link to="/" className="flex items-center py-5 px-2 text-white hover:text-gray-200">
                <span className="font-bold">DH Odonto</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/" className="py-5 px-3 text-white hover:text-gray-200">
                Home
              </Link>
              <Link to="/contacto" className="py-5 px-3 text-white hover:text-gray-200">
                Contacto
              </Link>
              <Link to="/favs" className="py-5 px-3 text-white hover:text-gray-200">
                Favoritos
              </Link>
            </div>
          </div>
          <div className="md:flex items-center">
            <button className="bg-teal-600 dark:bg-teal-800 text-white px-3 py-2 rounded-md hover:bg-teal-400 dark:hover:bg-teal-700 transition-colors" onClick={toggleTheme}>
              Cambiar Tema
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
