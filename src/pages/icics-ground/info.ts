import type { ICICSGroundProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import type { NotesProps } from "../../components/notes";
import egiSheet1 from "./assets/icics-ground-egi-sheet-1.jpeg";
import egiSheet2 from "./assets/icics-ground-egi-sheet-2.jpeg";
import firePanelATSRoute1 from "./assets/icics-ground-fire-panel-ats-route-1.jpeg";
import firePanelATSRoute2 from "./assets/icics-ground-fire-panel-ats-route-2.jpeg";
import firePanelATSRoute3 from "./assets/icics-ground-fire-panel-ats-route-3.jpeg";
import firePanelATSRoute4 from "./assets/icics-ground-fire-panel-ats-route-4.jpeg";
import firePanelATSRoute5 from "./assets/icics-ground-fire-panel-ats-route-5.jpeg";
import routeToGenerator1 from "./assets/icics-ground-route-to-generator-1.jpeg";
import routeToGenerator2 from "./assets/icics-ground-route-to-generator-2.jpeg";

const header_props: HeaderProps = {
  accountNumber: 4011,
  address: "289-2366 Main Mall Vancouver, BC  V6T 1Z4 Canada",
  floors: [1, 2, 3, 4],
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "ICICS (Ground)",
  sectionLinks: [],
};

const emergency_generator_information: ImagesProps = {
  description: "Here is the emergency generator information for the ICICS (Ground) building.",
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

const route_to_generator: ImagesProps = {
  description:
    "Here is the route to reach the emergency generator located outside the ICICS (Ground) building.",
  name: "Route to Emergency Generator",
  images: [
    {
      alt: "ICICS (Ground) Parking",
      caption:
        "Generator is inside the green enclosure located outside the ICICS (Ground) building. Parking is available along the road.",
      src: routeToGenerator1,
    },
    {
      alt: "Generator Location",
      caption: "Alternate view of generator location.",
      src: routeToGenerator2,
    },
  ],
};

const fire_alarm_panel_ats_route: ImagesProps = {
  description:
    "Here is the route to reach the fire alarm panel and ATS located inside the ICICS (Ground) building.",
  name: "Route to Fire Alarm Panel and ATS",
  images: [
    {
      alt: "ICICS (Ground) Fire Alarm Panel and ATS Route",
      caption:
        "Entrance to the ICICS (Ground) building. The fire alarm panel and ATS are located inside the building.",
      src: firePanelATSRoute1,
    },
    {
      alt: "ICICS (Ground) Fire Alarm Panel and ATS Route",
      caption: "Entrance to Stair 2 Fire Door.",
      src: firePanelATSRoute2,
    },
    {
      alt: "ICICS (Ground) Fire Alarm Panel and ATS Route",
      caption: "Take a right at this entrance.",
      src: firePanelATSRoute3,
    },
    {
      alt: "ICICS (Ground) Fire Alarm Panel and ATS Route",
      caption: "Head down this hallway past the HATCH door.",
      src: firePanelATSRoute4,
    },
    {
      alt: "ICICS (Ground) Fire Alarm Panel and ATS Route",
      caption: "Fire alarm panel and ATS are located inside Electrical Room 046.",
      src: firePanelATSRoute5,
    },
  ],
};

const notes_props: NotesProps = {
  additional: [
    "Have BMS shutdown AHU 1-5 and the chiller before starting test.",
    "Ensure to reset the small chiller in the server Room 155.",
    "After testing, ensure AHU 1-5 and chiller are turned back on.",
  ],
};

const icics_ground_props: ICICSGroundProps = {
  headerProps: header_props,
  emergencyGeneratorInformation: emergency_generator_information,
  routeToGenerator: route_to_generator,
  routeToFireAlarmPanelAndATS: fire_alarm_panel_ats_route,
  notesProps: notes_props,
};

export { icics_ground_props };
