import type { BioSciencesNorthProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import type { NotesProps } from "../../components/notes";
import egiSheet1 from "./assets/bio-sciences-north-egi-sheet-1.jpeg";
import egiSheet2 from "./assets/bio-sciences-north-egi-sheet-2.jpeg";
import fireAlarmPanelRoute1 from "./assets/bio-sciences-north-fire-alarm-panel-route-1.jpeg";
import fireAlarmPanelRoute2 from "./assets/bio-sciences-north-fire-alarm-panel-route-2.jpeg";
import fireAlarmPanelRoute3 from "./assets/bio-sciences-north-fire-alarm-panel-route-3.jpeg";
import fireAlarmPanelRoute4 from "./assets/bio-sciences-north-fire-alarm-panel-route-4.jpeg";
import fireAlarmPanelRoute5 from "./assets/bio-sciences-north-fire-alarm-panel-route-5.jpeg";
import generatorLocation1 from "./assets/bio-sciences-north-generator-location-1.jpeg";

const building_info: HeaderProps = {
  accountNumber: 4044,
  address: "6270 University Boulevard Vancouver, BC",
  floors: [],
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Bio Sciences North",
  sectionLinks: [],
};

const emergency_generator_information: ImagesProps = {
  description: "Here is the emergency generator information for the Bio Sciences North building.",
  name: "Emergency Generator Information",
  images: [
    {
      alt: "Emergency Generator Information Sheet 1",
      caption: "Emergency Generator Information Sheet: page 1",
      src: egiSheet1,
    },
    {
      alt: "Emergency Generator Information Sheet 2",
      caption: "Emergency Generator Information Sheet: page 2",
      src: egiSheet2,
    },
  ],
};

const route_to_generator: ImagesProps = {
  description:
    "Here is the route to reach the emergency generator located outside the Bio Sciences North building.",
  name: "Route to Emergency Generator",
  images: [
    {
      alt: "Bio Sciences North Parking",
      caption:
        "North Generator is the one on the left, South on the right. Both are located outside the Bio Sciences building. Parking is available in the alley to loading bay.",
      src: generatorLocation1,
    },
  ],
};

const route_to_fire_alarm_panel: ImagesProps = {
  description:
    "Here is the route to reach the fire alarm panel located inside the Bio Sciences North building.",
  name: "Route to Fire Alarm Panels",
  images: [
    {
      alt: "Bio Sciences North Fire Alarm Panel Route 1",
      caption: "Head up the alleyway to the loading bay.",
      src: fireAlarmPanelRoute1,
    },
    {
      alt: "Bio Sciences North Fire Alarm Panel Route 2",
      caption: "Enter through the gray door in the loading bay.",
      src: fireAlarmPanelRoute2,
    },
    {
      alt: "Bio Sciences North Fire Alarm Panel Route 3",
      caption: "Head down the elevators to level B and take a left to reach Room 006.",
      src: fireAlarmPanelRoute3,
    },
    {
      alt: "Bio Sciences North Fire Alarm Panel Route 4",
      caption:
        "Go downstairs to Room 0320 Service Corridor to the 2nd fire panel that must be acknowledged.",
      src: fireAlarmPanelRoute4,
    },
    {
      alt: "Bio Sciences North Fire Alarm Panel Route 5",
      caption: "Head inside Electrical Room 0303 for the 2nd fire panel.",
      src: fireAlarmPanelRoute5,
    },
  ],
};

const notes_props: NotesProps = {
  additional: [
    "There are two fire alarm panels that must be acknowledged for the Bio Sciences North building. The first is located in Room 006, and the second is located in Electrical Room 0303.",
  ],
};

const bio_sciences_north_props: BioSciencesNorthProps = {
  buildingInfo: building_info,
  emergencyGeneratorInformation: emergency_generator_information,
  routeToGenerator: route_to_generator,
  routeToFireAlarmPanel: route_to_fire_alarm_panel,
  notes: notes_props,
};

export { bio_sciences_north_props };
