import Card from "../Components/Card";
import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContext(GlobalContext);
  const { dentists, favorites } = state;

  // Filtrar solo los dentistas que están en favoritos
  const favoriteDentists = dentists.filter((dentist) => favorites.some((favorite) => favorite.id === dentist.id));

  return (
    <>
      <h1 className="text-2xl font-bold text-center my-6 dark:text-white">Favoritos</h1>

      {favoriteDentists.length > 0 ? (
        <div className="flex flex-row justify-center gap-10 flex-wrap">
          {favoriteDentists.map((dentist) => (
            <Card key={dentist.id} dentist={dentist} />
          ))}
        </div>
      ) : (
        <span className="text-center dark:text-white">No hay favoritos</span>
      )}
    </>
  );
};

export default Favs;
