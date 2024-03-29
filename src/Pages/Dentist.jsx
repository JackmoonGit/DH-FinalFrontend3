import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../Context/GlobalContext";

const Dentist = () => {
  const [dentist, setDentist] = useState(null);
  const { id } = useParams();
  const { state, dispatch } = useContext(GlobalContext);
  const isFavorite = state.favorites.some((fav) => fav.id === parseInt(id));

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setDentist(response.data);
      } catch (error) {
        console.error("Error fetching dentist details:", error);
      }
    };

    fetchDentist();
  }, [id]);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: "REMOVE_FROM_FAVORITES", payload: { id: dentist.id } });
    } else {
      dispatch({ type: "ADD_TO_FAVORITES", payload: dentist });
    }
  };

  if (!dentist) {
    return <div className="text-center p-5">Cargando...</div>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden dark:bg-slate-700 my-5 mx-auto max-w-md">
      <div className="p-4">
        <img src="/images/doctor.jpg" alt="Doctor" className="w-full h-32 sm:h-48 object-cover rounded" />
        <h2 className="font-semibold text-lg my-2 dark:text-white">{dentist.name}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">Email: {dentist.email}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">Phone: {dentist.phone}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Website:{" "}
          <a href={`http://${dentist.website}`} className="text-blue-500 hover:text-blue-700" target="_blank" rel="noreferrer">
            {dentist.website}
          </a>
        </p>
      </div>
      <button onClick={handleFavorite} className={`w-full ${isFavorite ? "bg-red-500 hover:bg-red-700" : "bg-teal-500 hover:bg-teal-700"} text-white font-bold py-2 rounded-b-lg dark:${isFavorite ? "bg-red-800 hover:bg-red-900" : "bg-teal-800 hover:bg-teal-900"}`}>
        {isFavorite ? "Eliminar de Favoritos" : "Añadir a Favoritos"}
      </button>
    </div>
  );
};

export default Dentist;
