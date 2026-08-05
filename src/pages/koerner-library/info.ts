import type { KoernerLibraryProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import type { NotesProps } from "../../components/notes";
import egiSheet1 from "./assets/koerner-library-egi-sheet-1.jpeg";
import egiSheet2 from "./assets/koerner-library-egi-sheet-2.jpeg";
import genATSAndFPRoute1 from "./assets/koerner-library-gen-ats-fp-route-1.jpeg";
import genATSAndFPRoute2 from "./assets/koerner-library-gen-ats-fp-route-2.jpeg";
import genATSAndFPRoute3 from "./assets/koerner-library-gen-ats-fp-route-3.jpeg";
import genATSAndFPRoute4 from "./assets/koerner-library-gen-ats-fp-route-4.jpeg";
import genATSAndFPRoute5 from "./assets/koerner-library-gen-ats-fp-route-5.jpeg";
import routeToElevators1 from "./assets/koerner-library-route-to-elevators-1.jpeg";
import routeToElevators2 from "./assets/koerner-library-route-to-elevators-2.jpeg";
import routeToElevators3 from "./assets/koerner-library-route-to-elevators-3.jpeg";

const building_info: HeaderProps = {
  accountNumber: 6024,
  address: "1961 East Mall Vancouver, BC Canada V6T 1Z1",
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Koerner Library",
};

const emergency_generator_information: ImagesProps = {
  description: "Koerner Library Emergency Generator Information",
  name: "Koerner Library Emergency Generator Information",
  images: [
    {
      alt: "Koerner Library Emergency Generator Information Sheet 1",
      caption: "Koerner Library Emergency Generator Information Sheet: page 1",
      src: egiSheet1,
    },
    {
      alt: "Koerner Library Emergency Generator Information Sheet 2",
      caption: "Koerner Library Emergency Generator Information Sheet: page 2",
      src: egiSheet2,
    },
  ],
};

const route_to_gen_ats_and_fp: ImagesProps = {
  description: "Route to Generator, ATS and Fire Panel",
  name: "Route to Generator, ATS and Fire Panel",
  images: [
    {
      alt: "Route to Generator, ATS and Fire Panel",
      caption: "Take this hallway from the elevators.",
      src: genATSAndFPRoute1,
    },
    {
      alt: "Route to Generator, ATS and Fire Panel",
      caption: "Enter inside this door.",
      src: genATSAndFPRoute2,
    },
    {
      alt: "Route to Generator, ATS and Fire Panel",
      caption: "Inside Mechanical Room 181, head up this hallway for the generator room.",
      src: genATSAndFPRoute3,
    },
    {
      alt: "Route to Generator, ATS and Fire Panel",
      caption: "ATS and Fire Alarm Panel are located inside this room.",
      src: genATSAndFPRoute4,
    },
    {
      alt: "Route to Generator, ATS and Fire Panel",
      caption: "Exhaust air plenum is located inside this room.",
      src: genATSAndFPRoute5,
    },
  ],
};

const route_to_elevators: ImagesProps = {
  description: "Route to Elevators",
  name: "Route to Elevators",
  images: [
    {
      alt: "Route to Elevators",
      caption: "Enter this door in the loading bay",
      src: routeToElevators1,
    },
    {
      alt: "Route to Elevators",
      caption: "Head inside these doors.",
      src: routeToElevators2,
    },
    {
      alt: "Route to Elevators",
      caption: "Head inside these doors.",
      src: routeToElevators3,
    },
  ],
};
const notes: NotesProps = {
  additional: ["Ensure to notify BMS to shutoff AHU-1 prior to starting test."],
};

const koerner_library_props: KoernerLibraryProps = {
  buildingInfo: building_info,
  emergencyGeneratorInformation: emergency_generator_information,
  routeToGenATSAndFP: route_to_gen_ats_and_fp,
  routeToElevators: route_to_elevators,
  notes: notes,
};

export { koerner_library_props };
