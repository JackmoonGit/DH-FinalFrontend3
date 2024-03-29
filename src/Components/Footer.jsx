import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const Footer = () => {
  const { state } = useContext(GlobalContext);

  const themeLogo = `/images/dh-${state.theme}.svg`;

  return (
    <footer className="flex flex-row mt-auto items-center justify-center py-9 dark:bg-slate-800">
      <span className="dark:text-white">Powered by</span>
      <img className="pl-2 max-w-48" src={themeLogo} alt="DH-logo" />
    </footer>
  );
};

export default Footer;
