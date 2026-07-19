import type { ForestSciencesCentreProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import type { NotesProps } from "../../components/notes";
import genATSAndFireAlarmPanelRoute1 from "./assets/forest-sciences-centre-gen-ats-fire-panel-route-1.jpeg";
import genATSAndFireAlarmPanelRoute2 from "./assets/forest-sciences-centre-gen-ats-fire-panel-route-2.jpeg";
import genATSAndFireAlarmPanelRoute3 from "./assets/forest-sciences-centre-gen-ats-fire-panel-route-3.jpeg";
import egiSheet1 from "./assets/forestry-sciences-egi-sheet-1.jpeg";
import egiSheet2 from "./assets/forestry-sciences-egi-sheet-2.jpeg";

const header_props: HeaderProps = {
  accountNumber: 4018,
  address: "2424 Main Mall, Vancouver BC V6T 1Z4, Canada",
  floors: [],
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Forest Sciences Centre",
  sectionLinks: [],
};

const emergency_generator_information: ImagesProps = {
  description:
    "Here is the emergency generator information for the Forest Sciences Centre building.",
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

const generator_ats_and_fire_alarm_panel_route: ImagesProps = {
  description:
    "Here is the route to reach the emergency generator, ATS, and fire alarm panel located inside the Forest Sciences Centre building.",
  name: "Route to Emergency Generator, ATS', and Fire Alarm Panel",
  images: [
    {
      alt: "Forest Sciences Centre Entrance",
      caption: "Route to the generator and fire alarm panel and first ATS (Onan BT 600).",
      src: genATSAndFireAlarmPanelRoute1,
    },
    {
      alt: "Entrance to electrical room",
      caption: "Entrance to Electrical Room 0310.",
      src: genATSAndFireAlarmPanelRoute2,
    },
    {
      alt: "Second ATS location",
      caption: "Entrance to the second ATS (TornaTech TFR 600/125/18).",
      src: genATSAndFireAlarmPanelRoute3,
    },
  ],
};

const notes_props: NotesProps = {
  additional: [
    "Prelube the engine before starting the generator. Press the 'Engine Prelube Pump' button for few seconds. This prevents dry starts, reduces wear and improves reliability.",
    "Once the Onan BT 600 transfer switch is receiving power from the generator, head down to LL for the TornaTech TFR 600/125/18 transfer switch.",
  ],
};

const forest_sciences_centre_props: ForestSciencesCentreProps = {
  headerProps: header_props,
  emergencyGeneratorInformation: emergency_generator_information,
  routeToGeneratorAndATS: generator_ats_and_fire_alarm_panel_route,
  notesProps: notes_props,
};

export { forest_sciences_centre_props };
