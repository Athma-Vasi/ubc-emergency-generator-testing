import { Route, Routes } from "react-router";
import Home from "./pages/home";
import Pharmacy from "./pages/pharmacy";
import { pharmacy_props } from "./pages/pharmacy/info";
import TennisCentre from "./pages/tennis centre";
import { tennis_centre_props } from "./pages/tennis centre/info";
import WinterSportsArena from "./pages/winter-sports-arena";
import { winter_sports_arena_props } from "./pages/winter-sports-arena/info";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pharmacy" element={<Pharmacy {...pharmacy_props} />} />
        <Route path="/tennis-centre" element={<TennisCentre {...tennis_centre_props} />} />
        <Route
          path="/winter-sports-arena"
          element={<WinterSportsArena {...winter_sports_arena_props} />}
        />
      </Routes>
    </div>
  );
}

export default App;
