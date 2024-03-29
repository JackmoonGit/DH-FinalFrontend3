import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";

const Card = ({ dentist }) => {
  const { state, dispatch } = useContext(GlobalContext);

  const isFavorite = state.favorites.some((fav) => fav.id === dentist.id);

  const addFav = () => {
    dispatch({ type: "ADD_TO_FAVORITES", payload: dentist });
  };
  const removeFav = () => {
    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: { id: dentist.id } });
  };

  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden dark:bg-slate-700">
      <Link to={`/dentist/${dentist.id}`} className="no-underline text-black">
        <div className="p-4">
          <img src="/images/doctor.jpg" alt="Doctor" className="w-full h-32 sm:h-48 object-cover rounded" />
          <h2 className="card-name font-semibold text-lg my-2 dark:text-white">{dentist.name}</h2>
          <p className="card-username text-sm text-gray-600 dark:text-gray-400">@{dentist.username}</p>
        </div>
      </Link>
      {!isFavorite ? ( <button onClick={addFav} className="favButton w-full bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 rounded-b-lg dark:bg-teal-800 dark:hover:bg-teal-900">Añadir a Favoritos</button>) : (<button onClick={removeFav} className="favButton w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded-b-lg dark:bg-red-800 dark:hover:bg-red-900">Eliminar de Favoritos</button>
      )}
    </div>
  );
};

export default Card;
