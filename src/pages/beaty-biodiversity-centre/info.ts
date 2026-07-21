import type { BeatyBiodiversityCentreProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import type { NotesProps } from "../../components/notes";
import egiSheet1 from "./assets/beaty-biodiversity-centre-egi-sheet-1.jpeg";
import egiSheet2 from "./assets/beaty-biodiversity-centre-egi-sheet-2.jpeg";
import genATSFirePanelRoute1 from "./assets/beaty-biodiversity-centre-gen-ats-fire-panel-route-1.jpeg";
import genATSFirePanelRoute2 from "./assets/beaty-biodiversity-centre-gen-ats-fire-panel-route-2.jpeg";
import genATSFirePanelRoute3 from "./assets/beaty-biodiversity-centre-gen-ats-fire-panel-route-3.jpeg";
import genATSFirePanelRoute4 from "./assets/beaty-biodiversity-centre-gen-ats-fire-panel-route-4.jpeg";
import genATSFirePanelRoute5 from "./assets/beaty-biodiversity-centre-gen-ats-fire-panel-route-5.jpeg";

const building_info: HeaderProps = {
  accountNumber: 4004,
  address: "2212 Main Mall Vancouver, BC Canada V6T 1Z4",
  floors: [],
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Beaty Biodiversity Centre",
  sectionLinks: [],
};

const emergency_generator_information: ImagesProps = {
  description:
    "Here is the emergency generator information for the Beaty Biodiversity Centre building.",
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

const route_to_gen_ats_fire_alarm_panel: ImagesProps = {
  description:
    "Here is the route to reach the emergency generator and ATS/Fire Alarm Panel located inside the Beaty Biodiversity Centre building.",
  name: "Route to Emergency Generator and ATS/Fire Alarm Panel",
  images: [
    {
      alt: "Route to Emergency Generator and ATS/Fire Alarm Panel",
      caption: "Head to Door 151 in the loading bay.",
      src: genATSFirePanelRoute1,
    },
    {
      alt: "Route to Emergency Generator and ATS/Fire Alarm Panel",
      caption: "Go past these red doors.",
      src: genATSFirePanelRoute2,
    },
    {
      alt: "Route to Emergency Generator and ATS/Fire Alarm Panel",
      caption: "Head down Level 1 Stair#3.",
      src: genATSFirePanelRoute3,
    },
    {
      alt: "Route to Emergency Generator and ATS/Fire Alarm Panel",
      caption: "Take a right at the open door ahead.",
      src: genATSFirePanelRoute4,
    },
    {
      alt: "Route to Emergency Generator and ATS/Fire Alarm Panel",
      caption: "The emergency generator and ATS/Fire Alarm Panel are located in this room.",
      src: genATSFirePanelRoute5,
    },
  ],
};

const notes: NotesProps = {
  additional: [
    "There are two ASCO 7000 series ATS panels which must both be tested.",
    "Mechanical room is 081. Plaque can be found on the floor.",
  ],
};

const beaty_biodiversity_centre_props: BeatyBiodiversityCentreProps = {
  buildingInfo: building_info,
  emergencyGeneratorInformation: emergency_generator_information,
  routeToGenATSFireAlarmPanel: route_to_gen_ats_fire_alarm_panel,
  notes: notes,
};

export { beaty_biodiversity_centre_props };
