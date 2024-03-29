import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./utils/routes";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Dentist from "./Pages/Dentist";
import Favs from "./Pages/Favs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="flex flex-col min-h-[84.4vh] justify-center px-1 dark:bg-slate-900">
        <Routes>
          <Route index path={routes.home} element={<Home />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path={routes.dentist} element={<Dentist />} />
          <Route path={routes.favs} element={<Favs />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
