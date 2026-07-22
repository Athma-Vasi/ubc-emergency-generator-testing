import type { GageASouthTowerProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import type { NotesProps } from "../../components/notes";
import atsFirePanelGenRoute1 from "./assets/gage-a-south-tower-ats-gen-fire-panel-route-1.jpeg";
import atsFirePanelGenRoute2 from "./assets/gage-a-south-tower-ats-gen-fire-panel-route-2.jpeg";
import egiSheet1 from "./assets/gage-a-south-tower-egi-sheet-1.jpeg";
import egiSheet2 from "./assets/gage-a-south-tower-egi-sheet-2.jpeg";
import propaneTankLocation1 from "./assets/gage-a-south-tower-propane-tank-location-1.jpeg";

const building_info: HeaderProps = {
  accountNumber: 5065,
  address: "5959 Student Union Mall Vancouver, BC",
  floors: [],
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Gage A South Tower",
  sectionLinks: [],
};

const emergency_generator_information: ImagesProps = {
  description: "Here is the emergency generator information for the Gage A South Tower building.",
  name: "Emergency Generator Information",
  images: [
    {
      alt: "Emergency Generator Information Sheet 1",
      caption: "Emergency Generator Information Sheet 1",
      src: egiSheet1,
    },
    {
      alt: "Emergency Generator Information Sheet 2",
      caption: "Emergency Generator Information Sheet 2",
      src: egiSheet2,
    },
  ],
};

const propane_tank_location: ImagesProps = {
  description:
    "Here is the location of the propane tank located outside the Gage A South Tower building.",
  name: "Propane Tank Location",
  images: [
    {
      alt: "Propane Tank Location",
      caption:
        "The propane tank is located outside the parking lot entrance. Housing key H is required to access.",
      src: propaneTankLocation1,
    },
  ],
};

const route_to_ats_fire_panel_and_generator: ImagesProps = {
  description:
    "Here is the route to reach the ATS, Fire Panel and Emergency Generator located inside the Gage A South Tower building.",
  name: "Route to ATS, Fire Panel and Emergency Generator",
  images: [
    {
      alt: "Route to ATS, Fire Panel and Emergency Generator",
      caption: "Access is through the parking lot on the south side of the building.",

      src: atsFirePanelGenRoute1,
    },
    {
      alt: "Route to ATS, Fire Panel and Emergency Generator",
      caption: "Head inside the path between stalls 64 and 65 for Electrical Room S20.",
      src: atsFirePanelGenRoute2,
    },
  ],
};

const notes: NotesProps = {
  additional: [
    "Need ME2 keys and Ving card from front desk.",
    "Call Sonny from housing and inform him about the test prior to start.",
    "The generator is located inside a room (TODO : add room number) next to elevators.",
    "The Fire Alarm Panel and ATS are located nearby the elevators close to the generator (TODO: add room number).",
  ],
};

const gage_a_south_tower_props: GageASouthTowerProps = {
  buildingInfo: building_info,
  emergencyGeneratorInformation: emergency_generator_information,
  propaneTankLocation: propane_tank_location,
  routeToATSFirePanelAndGenerator: route_to_ats_fire_panel_and_generator,
  notes: notes,
};

export { gage_a_south_tower_props };
