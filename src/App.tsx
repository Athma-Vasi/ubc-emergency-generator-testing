import { Route, Routes } from "react-router";
import AcadiaParkHighRise from "./pages/acadia-park-high-rise";
import { acadia_park_high_rise_props } from "./pages/acadia-park-high-rise/info";
import AllardHall from "./pages/allard-hall";
import { allard_hall_props } from "./pages/allard-hall/info";
import BeatyBiodiversityCentre from "./pages/beaty-biodiversity-centre";
import { beaty_biodiversity_centre_props } from "./pages/beaty-biodiversity-centre/info";
import BioSciencesNorth from "./pages/bio-sciences-north";
import { bio_sciences_north_props } from "./pages/bio-sciences-north/info";
import BioSciencesSouth from "./pages/bio-sciences-south";
import { bio_sciences_south_props } from "./pages/bio-sciences-south/info";
import BioSciencesWest from "./pages/bio-sciences-west";
import { bio_sciences_west_props } from "./pages/bio-sciences-west/info";
import Brimacombe from "./pages/brimacombe";
import { brimacombe_props } from "./pages/brimacombe/info";
import BrockHall from "./pages/brock-hall";
import { brock_hall_props } from "./pages/brock-hall/info";
import BuchananD from "./pages/buchanan-d";
import { buchanan_d_props } from "./pages/buchanan-d/info";
import BuchananTower from "./pages/buchanan-tower";
import { buchanan_tower_props } from "./pages/buchanan-tower/info";
import ChanCentre from "./pages/chan-centre";
import { chan_centre_props } from "./pages/chan-centre/info";
import ChemicalPhysics from "./pages/chemical-physics";
import { chemical_physics_props } from "./pages/chemical-physics/info";
import FairviewCrescent from "./pages/fairview-crescent";
import { fairview_crescent_props } from "./pages/fairview-crescent/info";
import ForestSciencesCentre from "./pages/forest-sciences-centre";
import { forest_sciences_centre_props } from "./pages/forest-sciences-centre/info";
import GageASouthTower from "./pages/gage-a-south-tower";
import { gage_a_south_tower_props } from "./pages/gage-a-south-tower/info";
import GageBNorthTower from "./pages/gage-b-north-tower";
import { gage_b_north_tower_props } from "./pages/gage-b-north-tower/info";
import GageBlockDAndE from "./pages/gage-block-d-and-e";
import { gage_block_d_and_e_props } from "./pages/gage-block-d-and-e/info";
import GageTowerEast from "./pages/gage-tower-east";
import { gage_tower_east_props } from "./pages/gage-tower-east/info";
import GatewayHealth from "./pages/gateway-health";
import { gateway_health_props } from "./pages/gateway-health/info";
import GreenCollege from "./pages/green-college";
import { green_college_props } from "./pages/green-college/info";
import HealthSciencesParkade from "./pages/health-sciences-parkade";
import { health_sciences_parkade_props } from "./pages/health-sciences-parkade/info";
import HenryAngus from "./pages/henry-angus";
import { henry_angus_props } from "./pages/henry-angus/info";
import Home from "./pages/home";
import ICICSGround from "./pages/icics-ground";
import { icics_ground_props } from "./pages/icics-ground/info";
import ICICSRooftop from "./pages/icics-rooftop";
import { icics_rooftop_props } from "./pages/icics-rooftop/info";
import IrvingKBarber from "./pages/irving-k-barber";
import { irving_k_barber_props } from "./pages/irving-k-barber/info";
import KoernerLibrary from "./pages/koerner-library";
import { koerner_library_props } from "./pages/koerner-library/info";
import LeonardSKlinck from "./pages/leonard-s-klinck";
import { leonard_s_klinck_props } from "./pages/leonard-s-klinck/info";
import MuseumOfAnthropology from "./pages/museum-of-anthropology";
import { museum_of_anthropology_props } from "./pages/museum-of-anthropology/info";
import Pharmacy from "./pages/pharmacy";
import { pharmacy_props } from "./pages/pharmacy/info";
import RoseGardenParkade from "./pages/rose-garden-parkade";
import { rose_garden_parkade_props } from "./pages/rose-garden-parkade/info";
import TallwoodHouse from "./pages/tallwood-house";
import { tallwood_house_props } from "./pages/tallwood-house/info";
import TennisCentre from "./pages/tennis centre";
import { tennis_centre_props } from "./pages/tennis centre/info";
import WinterSportsArena from "./pages/winter-sports-arena";
import { winter_sports_arena_props } from "./pages/winter-sports-arena/info";

function App() {
  return (
    <Routes>
      <Route path="ubc-emergency-generator-testing">
        <Route index element={<Home />} />
        <Route path="pharmacy" element={<Pharmacy {...pharmacy_props} />} />
        <Route path="tennis-centre" element={<TennisCentre {...tennis_centre_props} />} />
        <Route
          path="winter-sports-arena"
          element={<WinterSportsArena {...winter_sports_arena_props} />}
        />
        <Route
          path="health-sciences-parkade"
          element={<HealthSciencesParkade {...health_sciences_parkade_props} />}
        />
        <Route
          path="fairview-crescent"
          element={<FairviewCrescent {...fairview_crescent_props} />}
        />
        <Route
          path="acadia-park-high-rise"
          element={<AcadiaParkHighRise {...acadia_park_high_rise_props} />}
        />
        <Route path="gateway-health" element={<GatewayHealth {...gateway_health_props} />} />
        <Route
          path="forest-sciences-centre"
          element={<ForestSciencesCentre {...forest_sciences_centre_props} />}
        />
        <Route path="icics-ground" element={<ICICSGround {...icics_ground_props} />} />
        <Route path="icics-rooftop" element={<ICICSRooftop {...icics_rooftop_props} />} />
        <Route path="brimacombe" element={<Brimacombe {...brimacombe_props} />} />
        <Route
          path="bio-sciences-north"
          element={<BioSciencesNorth {...bio_sciences_north_props} />}
        />
        <Route
          path="bio-sciences-south"
          element={<BioSciencesSouth {...bio_sciences_south_props} />}
        />
        <Route
          path="bio-sciences-west"
          element={<BioSciencesWest {...bio_sciences_west_props} />}
        />
        <Route
          path="beaty-biodiversity-centre"
          element={<BeatyBiodiversityCentre {...beaty_biodiversity_centre_props} />}
        />
        <Route path="chemical-physics" element={<ChemicalPhysics {...chemical_physics_props} />} />
        <Route path="buchanan-d" element={<BuchananD {...buchanan_d_props} />} />
        <Route
          path="gage-a-south-tower"
          element={<GageASouthTower {...gage_a_south_tower_props} />}
        />
        <Route
          path="gage-b-north-tower"
          element={<GageBNorthTower {...gage_b_north_tower_props} />}
        />
        <Route
          path="museum-of-anthropology"
          element={<MuseumOfAnthropology {...museum_of_anthropology_props} />}
        />
        <Route path="chan-centre" element={<ChanCentre {...chan_centre_props} />} />
        <Route path="green-college" element={<GreenCollege {...green_college_props} />} />
        <Route
          path="rose-garden-parkade"
          element={<RoseGardenParkade {...rose_garden_parkade_props} />}
        />
        <Route path="koerner-library" element={<KoernerLibrary {...koerner_library_props} />} />
        <Route path="allard-hall" element={<AllardHall {...allard_hall_props} />} />
        <Route path="brock-hall" element={<BrockHall {...brock_hall_props} />} />
        <Route path="tallwood-house" element={<TallwoodHouse {...tallwood_house_props} />} />
        <Route path="irving-k-barber" element={<IrvingKBarber {...irving_k_barber_props} />} />
        <Route path="gage-tower-east" element={<GageTowerEast {...gage_tower_east_props} />} />
        <Route
          path="gage-block-d-and-e"
          element={<GageBlockDAndE {...gage_block_d_and_e_props} />}
        />
        <Route path="buchanan-tower" element={<BuchananTower {...buchanan_tower_props} />} />
        <Route path="leonard-s-klinck" element={<LeonardSKlinck {...leonard_s_klinck_props} />} />
        <Route path="henry-angus" element={<HenryAngus {...henry_angus_props} />} />
      </Route>
    </Routes>
  );
}

export default App;
