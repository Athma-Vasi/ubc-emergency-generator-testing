import type { BrimacombeProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import type { NotesProps } from "../../components/notes";
import generatorLocation from "./assets/brimacombe-generator-location.jpeg";
import atsFirePanelRoute1 from "./assets/brimacombe-route-to-ats-fire-panel-1.jpeg";
import atsFirePanelRoute2 from "./assets/brimacombe-route-to-ats-fire-panel-2.jpeg";
import atsFirePanelRoute3 from "./assets/brimacombe-route-to-ats-fire-panel-3.jpeg";
import atsFirePanelRoute4 from "./assets/brimacombe-route-to-ats-fire-panel-4.jpeg";
import routeToRestOfATS1 from "./assets/brimacombe-route-to-rest-ats-1.jpeg";
import routeToRestOfATS2 from "./assets/brimacombe-route-to-rest-ats-2.jpeg";

const header_props: HeaderProps = {
  accountNumber: 9999999,
  address: "2355 East Mall Vancouver, BC",
  floors: [],
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Brimacombe",
  sectionLinks: [],
};

const route_to_ats_and_fire_panel: ImagesProps = {
  description:
    "Here is the route to reach the ATS and Fire Alarm Panel located inside the Brimacombe building.",
  name: "Route to ATS and Fire Alarm Panel",
  images: [
    {
      alt: "Brimacombe Building entrance",
      caption:
        "Entrance to the Brimacombe building. ATS and Fire Alarm Panel are inside this building.",
      src: atsFirePanelRoute1,
    },
    {
      alt: "Brimacombe Building hallway",
      caption: "Head down the hallway and enter a door marked 'Area of Refuge'.",
      src: atsFirePanelRoute2,
    },
    {
      alt: "Brimacombe Building stairs",
      caption: "Go down stairs until you reach Room B.",
      src: atsFirePanelRoute3,
    },
    {
      alt: "Brimacombe Building Room B",
      caption: "ATS and Fire Alarm Panel are located inside Transformer Room 42.",
      src: atsFirePanelRoute4,
    },
  ],
};

const generatorLocationImage: ImagesProps = {
  description: "Here is the emergency generator located outside the Brimacombe building.",
  name: "Emergency Generator Location",
  images: [
    {
      alt: "Brimacombe Building Generator Location",
      caption:
        "Generator is located outside the Brimacombe building. It is housed inside a yellow Kohler enclosure.",
      src: generatorLocation,
    },
  ],
};

const route_to_last_ats: ImagesProps = {
  description:
    "Here is the route to reach the other two ATS' located inside the Brimacombe building.",
  name: "Route to other two ATS'",
  images: [
    {
      alt: "Brimacombe Building",
      caption: "Head to Mechanical Room 46.",
      src: routeToRestOfATS1,
    },
    {
      alt: "Brimacombe Building Mechanical Room 46",
      caption: "Head inside the unmarked door to reach Main Electrical Room 70B.",
      src: routeToRestOfATS2,
    },
  ],
};

const notes_props: NotesProps = {
  additional: [
    "There are 4 ATS that need to be tested.",
    "ATS-1 (ASCO 300) and ATS-2 (ASCO 7000) are located in Room 42.",
    "The higher amperage ATS-2 (ASCO 7000) should be tested first, followed by the lower amperage ATS-1 (ASCO 300).",
    "The other two ATS' (ASCO 7000) are located in Main Electrical Room 70B.",
  ],
};

const brimacombe_props: BrimacombeProps = {
  headerProps: header_props,
  generatorLocation: generatorLocationImage,
  routeToATSAndFirePanel: route_to_ats_and_fire_panel,
  routeToLastATS: route_to_last_ats,
  notesProps: notes_props,
};

export { brimacombe_props };
