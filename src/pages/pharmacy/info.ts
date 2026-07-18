import type { PharmacyProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import electricalRoomRoute1 from "./assets/electrical-room-route-1.jpg";
import electricalRoomRoute2 from "./assets/electrical-room-route-2.jpg";
import electricalRoomRoute3 from "./assets/electrical-room-route-3.jpg";
import egi1a from "./assets/emergency-generator-information-pharmacy-1a.jpeg";
import egi1b from "./assets/emergency-generator-information-pharmacy-1b.jpeg";
import egi1c from "./assets/emergency-generator-information-pharmacy-1c.jpeg";
import egi2a from "./assets/emergency-generator-information-pharmacy-2a.jpeg";
import egi2b from "./assets/emergency-generator-information-pharmacy-2b.jpeg";
import egi2c from "./assets/emergency-generator-information-pharmacy-2c.jpeg";
import fireAlarmPanelPrePostState from "./assets/fire-alarm-panel-pre-post-normal.jpeg";
import fireAlarmPanelRoute1 from "./assets/fire-alarm-panel-room-entrance.jpg";
import fireAlarmPanelRoute2 from "./assets/fire-alarm-panel-room-inside-door.jpeg";
import generatorRoute1 from "./assets/generator-route-1.jpeg";
import generatorRoute2 from "./assets/generator-route-2.jpeg";

const header_props: HeaderProps = {
  accountNumber: 7009,
  address: "2405 Wesbrook Mall Vancouver, BC Canada V6T 1Z3",
  floors: [1, 2, 3, 4, 5],
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Pharmacy",
  sectionLinks: [
    { id: "safety", name: "Safety" },
    { id: "pre-test-requirements", name: "Pre-Test Requirements" },
    {
      id: "emergency-generator-information",
      name: "Emergency Generator Information",
    },
    { id: "generator-route-photos", name: "Generator Route Photos" },
    { id: "ats-route-photos", name: "ATS Route Photos" },
    {
      id: "fire-alarm-panel-route-photos",
      name: "Fire Alarm Panel Route Photos",
    },
    { id: "pre-start-gen-inspection", name: "Pre-Start Gen Inspection" },
    {
      id: "pre-start-planon-checklist",
      name: "Pre-Start Planon Checklist",
    },
  ],
};

const route_to_generators: ImagesProps = {
  description:
    "Here is the route to reach the emergency generators located in the Pharmacy building.",
  name: "Route to Emergency Generators",
  images: [
    {
      alt: "Entrance walkway to generators",
      caption:
        "The pharmacy building is on the right. Generators are located at the end of the ramp, on the left side.",
      src: generatorRoute1,
    },
    {
      alt: "Generator housing location.",
      caption:
        "Generators are located between the hedges on the left. The barely visible gray enclosure is a generator housing.",
      src: generatorRoute2,
    },
  ],
};

const route_to_fire_alarm_panel: ImagesProps = {
  description: "Here is the route to reach the fire alarm panel located in the Pharmacy building.",
  name: "Route to Fire Alarm Panel",
  images: [
    {
      alt: "Entrance to fire alarm panel room.",
      caption: "The Fire Alarm Panel Room 1102 is located in the main floor near the elevators.",
      src: fireAlarmPanelRoute1,
    },
    {
      alt: "Inside fire alarm panel room.",
      caption: "This is the inside door of the Fire Alarm Panel Room 1102A.",
      src: fireAlarmPanelRoute2,
    },
    {
      alt: "Fire alarm panel pre and post normal state.",
      caption: "This image shows the fire alarm panel in its pre and post normal state.",
      src: fireAlarmPanelPrePostState,
    },
  ],
};

const route_to_electrical_room: ImagesProps = {
  description: "Here is the route to reach the transfer switches located in the Pharmacy building.",
  name: "Route to Transfer Switches",
  images: [
    {
      alt: "Entrance to electrical room.",
      caption:
        "Go to the basement from the elevator.This is the view from the elevator in basement. Take a left turn.",
      src: electricalRoomRoute1,
    },
    {
      alt: "Inside electrical room.",
      caption: "You will come to Room B102: Electrical Room.",
      src: electricalRoomRoute2,
    },
    {
      alt: "Transfer switches location.",
      caption:
        "There is another door marked B104: Main Building Electrical Room. This is the door to the transfer switches.",
      src: electricalRoomRoute3,
    },
  ],
};

const emergency_generator_information_images: ImagesProps = {
  description:
    "This section provides information about the emergency generators, and associated auxiliary equipment such as: alternator, transfer switches, battery charger, fuel tank, loadbank testing, and other related components.",
  name: "Emergency Generator Information (EGI)",
  images: [
    {
      alt: "Pharmacy Unit #1 - EGI",
      caption: "This is the first page of the EGI Sheet for Pharmacy Unit #1.",
      src: egi1a,
    },
    {
      alt: "Pharmacy Unit #1 - EGI",
      caption: "This is the second page of the EGI Sheet for Pharmacy Unit #1.",
      src: egi1b,
    },
    {
      alt: "Pharmacy Unit #1 - EGI",
      caption: "This is the third page of the EGI Sheet for Pharmacy Unit #1.",
      src: egi1c,
    },
    {
      alt: "Pharmacy Unit #2 - EGI",
      caption: "This is the first page of the EGI Sheet for Pharmacy Unit #2.",
      src: egi2a,
    },
    {
      alt: "Pharmacy Unit #2 - EGI",
      caption: "This is the second page of the EGI Sheet for Pharmacy Unit #2.",
      src: egi2b,
    },
    {
      alt: "Pharmacy Unit #2 - EGI",
      caption: "This is the third page of the EGI Sheet for Pharmacy Unit #2.",
      src: egi2c,
    },
  ],
};

const pharmacy_props: PharmacyProps = {
  headerProps: header_props,
  routeToElectricalRoom: route_to_electrical_room,
  routeToFireAlarmPanel: route_to_fire_alarm_panel,
  routeToGenerators: route_to_generators,
  emergencyGeneratorInformation: emergency_generator_information_images,
};

export { pharmacy_props };
