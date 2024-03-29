import { useContext } from "react";
import Card from "../Components/Card";
import { GlobalContext } from "../Context/GlobalContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useContext(GlobalContext);
  const { dentists } = state;

  console.log(dentists);
  return (
    <>
      <h1 className="text-2xl font-bold text-center my-6 dark:text-white">Home</h1>
      <div className="flex flex-row justify-center gap-10 flex-wrap">
        {dentists.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </>
  );
};

export default Home;
