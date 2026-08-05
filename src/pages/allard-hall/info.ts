import type { AllardHallProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import type { NotesProps } from "../../components/notes";
import egiSheet1 from "./assets/allard-hall-egi-sheet-1.jpeg";
import egiSheet2 from "./assets/allard-hall-egi-sheet-2.jpeg";
import firePanelAndATSRoute1 from "./assets/allard-hall-fire-panel-and-ats-route-1.jpeg";
import firePanelAndATSRoute2 from "./assets/allard-hall-fire-panel-and-ats-route-2.jpeg";
import firePanelAndATSRoute3 from "./assets/allard-hall-fire-panel-and-ats-route-3.jpeg";
import firePanelAndATSRoute4 from "./assets/allard-hall-fire-panel-and-ats-route-4.jpeg";
import firePanelAndATSRoute5 from "./assets/allard-hall-fire-panel-and-ats-route-5.jpeg";
import firePanelAndATSRoute6 from "./assets/allard-hall-fire-panel-and-ats-route-6.jpeg";
import firePanelAndATSRoute7 from "./assets/allard-hall-fire-panel-and-ats-route-7.jpeg";
import genAndParkingLocation from "./assets/allard-hall-parking-and-gen-location.jpeg";

const building_info: HeaderProps = {
  accountNumber: 7014,
  address: "1822 East Mall, Vancouver BC V6T 1Y1, Canada",
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Allard Hall",
};

const emergency_generator_information: ImagesProps = {
  description: "Allard Hall Emergency Generator Information",
  name: "Allard Hall Emergency Generator Information",
  images: [
    {
      alt: "Allard Hall Emergency Generator Information Sheet 1",
      caption: "Allard Hall Emergency Generator Information Sheet: page 1",
      src: egiSheet1,
    },
    {
      alt: "Allard Hall Emergency Generator Information Sheet 2",
      caption: "Allard Hall Emergency Generator Information Sheet: page 2",
      src: egiSheet2,
    },
  ],
};

const generator_and_parking_location: ImagesProps = {
  description: "Allard Hall Emergency Generator and Parking Location",
  name: "Allard Hall Emergency Generator and Parking Location",
  images: [
    {
      alt: "Allard Hall Emergency Generator and Parking Location",
      caption: "Allard Hall Emergency Generator and Parking Location",
      src: genAndParkingLocation,
    },
  ],
};

const route_to_fire_panel_and_ats: ImagesProps = {
  description: "Route to Fire Panel and ATS",
  name: "Route to Fire Panel and ATS",
  images: [
    {
      alt: "Allard Hall Route to Fire Panel and ATS",
      caption: "Head inside this entrance door nearby the parking lot and generator location.",
      src: firePanelAndATSRoute1,
    },
    {
      alt: "Allard Hall Route to Fire Panel and ATS",
      caption: "Head down this hallway just inside the entrance door.",
      src: firePanelAndATSRoute2,
    },
    {
      alt: "Allard Hall Route to Fire Panel and ATS",
      caption: "Take a right and down these stairs.",
      src: firePanelAndATSRoute3,
    },
    {
      alt: "Allard Hall Route to Fire Panel and ATS",
      caption: "Take a right at the bottom of the stairs.",
      src: firePanelAndATSRoute4,
    },
    {
      alt: "Allard Hall Route to Fire Panel and ATS",
      caption: "Take a left at the end of this hallway.",
      src: firePanelAndATSRoute5,
    },
    {
      alt: "Allard Hall Route to Fire Panel and ATS",
      caption: "Fire Panel and ATS are located inside Electrical Room B114.",
      src: firePanelAndATSRoute6,
    },
    {
      alt: "Allard Hall Route to Fire Panel and ATS",
      caption: "Fire Alarm Panel on the left and ATS on the right.",
      src: firePanelAndATSRoute7,
    },
  ],
};

const notes: NotesProps = {
  additional: ["If AHU trips, head to B104 Mechanical Room and reset breaker."],
};

const allard_hall_props: AllardHallProps = {
  buildingInfo: building_info,
  emergencyGeneratorInformation: emergency_generator_information,
  generatorAndParkingLocation: generator_and_parking_location,
  routeToFirePanelAndATS: route_to_fire_panel_and_ats,
  notes: notes,
};

export { allard_hall_props };
