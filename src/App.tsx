import { Route, Routes } from "react-router";
import FairviewCrescent from "./pages/fairview-crescent";
import { fairview_crescent_props } from "./pages/fairview-crescent/info";
import HealthSciencesParkade from "./pages/health-sciences-parkade";
import { health_sciences_parkade_props } from "./pages/health-sciences-parkade/info";
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
        <Route
          path="/health-sciences-parkade"
          element={<HealthSciencesParkade {...health_sciences_parkade_props} />}
        />
        <Route
          path="/fairview-crescent"
          element={<FairviewCrescent {...fairview_crescent_props} />}
        />
      </Routes>
    </div>
  );
}

export default App;
