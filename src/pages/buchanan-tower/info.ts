import type { BuchananTowerProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import type { NotesProps } from "../../components/notes";
import genRoute1 from "./assets/buchanan-tower-generator-route-1.jpeg";
import genRoute2 from "./assets/buchanan-tower-generator-route-2.jpeg";

const building_info: HeaderProps = {
  accountNumber: 9999_9999,
  address: "1873 East Mall, Vancouver BC V6T 1Z1, Canada",
  floors: [],
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Buchanan Tower",
  sectionLinks: [],
};

const route_to_gen: ImagesProps = {
  description: "Here is the route to the emergency generator for the Buchanan Tower building.",
  name: "Route to Emergency Generator",
  images: [
    {
      alt: "Route to Emergency Generator - Image 1",
      caption: "Head right from the main entrance.",
      src: genRoute1,
    },
    {
      alt: "Route to Emergency Generator - Image 2",
      caption: "Generator is behind the containers.",
      src: genRoute2,
    },
  ],
};

const notes: NotesProps = {
  additional: [
    "Go to 12th floor and head inside the door next to placard that says 'Department of History'. Go up two floors for ATS.",
  ],
};

const buchanan_tower_props: BuchananTowerProps = {
  buildingInfo: building_info,
  routeToGen: route_to_gen,
  notes: notes,
};

export { buchanan_tower_props };
