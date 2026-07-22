import type { ChemicalPhysicsProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import type { NotesProps } from "../../components/notes";
import egiSheet1 from "./assets/chemical-physics-egi-sheet-1.jpeg";
import egiSheet2 from "./assets/chemical-physics-egi-sheet-2.jpeg";
import firePanelRoute1 from "./assets/chemical-physics-fire-panel-route-1.jpeg";
import firePanelRoute2 from "./assets/chemical-physics-fire-panel-route-2.jpeg";
import firePanelRoute3 from "./assets/chemical-physics-fire-panel-route-3.jpeg";
import firePanelRoute4 from "./assets/chemical-physics-fire-panel-route-4.jpeg";
import secondATSRoute1 from "./assets/chemical-physics-second-ats-route-1.jpeg";
import secondATSRoute2 from "./assets/chemical-physics-second-ats-route-2.jpeg";

const building_info: HeaderProps = {
  accountNumber: 6011,
  address: "6221 University Boulevard Vancouver, BC",
  floors: [],
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Chemical Physics",
  sectionLinks: [],
};

const emergency_generator_information: ImagesProps = {
  description: "Here is the emergency generator information for the Chemical Physics building.",
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

const route_to_first_ats_and_fire_panel: ImagesProps = {
  description:
    "Here is the route to reach the first ATS and fire panel located inside the Chemical Physics building.",
  name: "Route to first ATS and Fire Panel",
  images: [
    {
      alt: "Route to Fire Panel",
      caption: "This entrance is located in the loading bay out back of the building.",
      src: firePanelRoute1,
    },
    {
      alt: "Route to Fire Panel",
      caption: "Head down the stairs.",
      src: firePanelRoute2,
    },
    {
      alt: "Route to Fire Panel",
      caption: "Head down this hallway.",
      src: firePanelRoute3,
    },
    {
      alt: "Route to Fire Panel",
      caption: "Emergency generator and fire panel are located in this room: A045.",
      src: firePanelRoute4,
    },
  ],
};

const route_to_second_ats: ImagesProps = {
  description:
    "Here is the route to reach the second ATS located inside the Chemical Physics building.",
  name: "Route to Second ATS",
  images: [
    {
      alt: "Route to Second ATS",
      caption: "Head down the stairwell to the left of the worker.",
      src: secondATSRoute1,
    },
    {
      alt: "Route to Second ATS",
      caption: "Head down the stairs to Room B158 on the right for the second ATS.",
      src: secondATSRoute2,
    },
  ],
};

const notes: NotesProps = {
  additional: [
    "There are two ATS panels which must both be tested. The first ATS is located in Room A045 and the second ATS is located in Room B158.",
  ],
};

const chemical_physics_props: ChemicalPhysicsProps = {
  buildingInfo: building_info,
  emergencyGeneratorInformation: emergency_generator_information,
  routeToFirstATSAndFirePanel: route_to_first_ats_and_fire_panel,
  routeToSecondATS: route_to_second_ats,
  notes: notes,
};

export { chemical_physics_props };
