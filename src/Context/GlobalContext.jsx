import { createContext, useReducer } from "react";
import { appReducer } from "./AppReducer";
import { useEffect } from "react";
import axios from "axios";

const initialState = { theme: localStorage.getItem("theme") || "light", dentists: [], favorites: JSON.parse(localStorage.getItem("favorites")) || [] };
export const GlobalContext = createContext(initialState);

export function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    const loadDentists = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        dispatch({ type: "SET_DENTISTS", payload: response.data });
      } catch (error) {
        console.error("Error fetching dentists:", error);
      }
    };
    loadDentists();
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", state.theme);
    document.body.classList.toggle("dark", state.theme === "dark");
  }, [state.theme]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  }, [state.favorites]);

  const data = { state, dispatch };

  return <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>;
}
