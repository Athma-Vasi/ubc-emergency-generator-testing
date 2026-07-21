import type { BioSciencesSouthProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import type { NotesProps } from "../../components/notes";
import atsRoute1 from "./assets/bio-sciences-south-ats-route-1.jpeg";
import atsRoute2 from "./assets/bio-sciences-south-ats-route-2.jpeg";
import atsRoute3 from "./assets/bio-sciences-south-ats-route-3.jpeg";
import atsRoute4 from "./assets/bio-sciences-south-ats-route-4.jpeg";
import atsRoute5 from "./assets/bio-sciences-south-ats-route-5.jpeg";
import emergencyGeneratorInformation1 from "./assets/bio-sciences-south-egi-sheet-1.jpeg";
import emergencyGeneratorInformation2 from "./assets/bio-sciences-south-egi-sheet-2.jpeg";
import fireAlarmPanelRoute1 from "./assets/bio-sciences-south-fire-alarm-panel-route-1.jpeg";

const building_info: HeaderProps = {
  accountNumber: 4006,
  address: "6270 University Boulevard Vancouver, BC",
  floors: [],
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Bio Sciences South",
  sectionLinks: [],
};

const route_to_ats: ImagesProps = {
  description: "Here is the route to reach the ATS located inside the Bio Sciences South building.",
  name: "Route to ATS",
  images: [
    {
      alt: "Bio Sciences South ATS Route 1",
      caption: "Take a left next to the worker.",
      src: atsRoute1,
    },
    {
      alt: "Bio Sciences South ATS Route 2",
      caption: "Head inside the building entrance.",
      src: atsRoute2,
    },
    {
      alt: "Bio Sciences South ATS Route 3",
      caption: "Head down Fire Door Stair 5.",
      src: atsRoute3,
    },
    {
      alt: "Bio Sciences South ATS Route 4",
      caption: "Head inside Service Corridor 0320.",
      src: atsRoute4,
    },
    {
      alt: "Bio Sciences South ATS Route 5",
      caption: "Head inside Electrical Room 0324.",
      src: atsRoute5,
    },
  ],
};

const route_to_fire_alarm_panel: ImagesProps = {
  description:
    "Here is the route to reach the fire alarm panel located inside the Bio Sciences South building.",
  name: "Route to Fire Alarm Panel",
  images: [
    {
      alt: "Bio Sciences South Fire Alarm Panel Route 1",
      caption: "Head inside Storage 0322 hallway.",
      src: fireAlarmPanelRoute1,
    },
    {
      alt: "Bio Sciences South Fire Alarm Panel Route 2",
      caption:
        "Head inside Service Corridor 0320 to Electrical Room 0303 for the Fire Alarm Panel.",
      src: fireAlarmPanelRoute1,
    },
  ],
};

const emergency_generator_information: ImagesProps = {
  description: "Here is the emergency generator information for the Bio Sciences South building.",
  name: "Emergency Generator Information",
  images: [
    {
      alt: "Emergency Generator Information Sheet 1",
      caption: "Emergency Generator Information Sheet: page 1",
      src: emergencyGeneratorInformation1,
    },
    {
      alt: "Emergency Generator Information Sheet 2",
      caption: "Emergency Generator Information Sheet: page 2",
      src: emergencyGeneratorInformation2,
    },
  ],
};

const notes: NotesProps = {
  additional: [
    "AHU's must be shutdown for this test.",
    "There are two ASCO 7000 ATS units: ATS-6EW and ATS-6LW.",
    "Test higher amperage ATS-6EW first, then test lower amperage ATS-6LW.",
  ],
};

const bio_sciences_south_props: BioSciencesSouthProps = {
  buildingInfo: building_info,
  emergencyGeneratorInformation: emergency_generator_information,
  notes: notes,
  routeToATS: route_to_ats,
  routeToFireAlarmPanel: route_to_fire_alarm_panel,
};

export { bio_sciences_south_props };
