import { Route, Routes } from "react-router";
import AcadiaParkHighRise from "./pages/acadia-park-high-rise";
import { acadia_park_high_rise_props } from "./pages/acadia-park-high-rise/info";
import BioSciencesNorth from "./pages/bio-sciences-north";
import { bio_sciences_north_props } from "./pages/bio-sciences-north/info";
import BioSciencesSouth from "./pages/bio-sciences-south";
import { bio_sciences_south_props } from "./pages/bio-sciences-south/info";
import Brimacombe from "./pages/brimacombe";
import { brimacombe_props } from "./pages/brimacombe/info";
import FairviewCrescent from "./pages/fairview-crescent";
import { fairview_crescent_props } from "./pages/fairview-crescent/info";
import ForestSciencesCentre from "./pages/forest-sciences-centre";
import { forest_sciences_centre_props } from "./pages/forest-sciences-centre/info";
import GatewayHealth from "./pages/gateway-health";
import { gateway_health_props } from "./pages/gateway-health/info";
import HealthSciencesParkade from "./pages/health-sciences-parkade";
import { health_sciences_parkade_props } from "./pages/health-sciences-parkade/info";
import Home from "./pages/home";
import ICICSGround from "./pages/icics-ground";
import { icics_ground_props } from "./pages/icics-ground/info";
import ICICSRooftop from "./pages/icics-rooftop";
import { icics_rooftop_props } from "./pages/icics-rooftop/info";
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
        <Route
          path="/acadia-park-high-rise"
          element={<AcadiaParkHighRise {...acadia_park_high_rise_props} />}
        />
        <Route path="/gateway-health" element={<GatewayHealth {...gateway_health_props} />} />
        <Route
          path="/forest-sciences-centre"
          element={<ForestSciencesCentre {...forest_sciences_centre_props} />}
        />
        <Route path="/icics-ground" element={<ICICSGround {...icics_ground_props} />} />
        <Route path="/icics-rooftop" element={<ICICSRooftop {...icics_rooftop_props} />} />
        <Route path="/brimacombe" element={<Brimacombe {...brimacombe_props} />} />
        <Route
          path="/bio-sciences-north"
          element={<BioSciencesNorth {...bio_sciences_north_props} />}
        />
        <Route
          path="/bio-sciences-south"
          element={<BioSciencesSouth {...bio_sciences_south_props} />}
        />
      </Routes>
    </div>
  );
}

export default App;
