import type { GageTowerEastProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import type { NotesProps } from "../../components/notes";
import routeToGenATSAndFP1 from "./assets/gage-tower-east-ats-fp-gen-route-1.jpeg";
import routeToGenATSAndFP2 from "./assets/gage-tower-east-ats-fp-gen-route-2.jpeg";
import routeToGenATSAndFP3 from "./assets/gage-tower-east-ats-fp-gen-route-3.jpeg";
import routeToGenATSAndFP4 from "./assets/gage-tower-east-ats-fp-gen-route-4.jpeg";
import routeToGenATSAndFP5 from "./assets/gage-tower-east-ats-fp-gen-route-5.jpeg";
import routeToGenATSAndFP6 from "./assets/gage-tower-east-ats-fp-gen-route-6.jpeg";
import routeToGenATSAndFP7 from "./assets/gage-tower-east-ats-fp-gen-route-7.jpeg";
import routeToGenATSAndFP8 from "./assets/gage-tower-east-ats-fp-gen-route-8.jpeg";
import egiSheet1 from "./assets/gage-tower-east-egi-sheet-1.jpeg";
import egiSheet2 from "./assets/gage-tower-east-egi-sheet-2.jpeg";
import routeToFrontDesk1 from "./assets/gage-tower-east-front-desk-route-1.jpeg";
import routeToFrontDesk2 from "./assets/gage-tower-east-front-desk-route-2.jpeg";
import routeToFrontDesk3 from "./assets/gage-tower-east-front-desk-route-3.jpeg";
import routeToFrontDesk4 from "./assets/gage-tower-east-front-desk-route-4.jpeg";

const building_info: HeaderProps = {
  accountNumber: 5062,
  address: "5959 Student Union Boulevard Vancouver, BC",
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Gage Tower East",
};

const emergency_generator_information: ImagesProps = {
  description: "Gage Tower East Emergency Generator Information",
  name: "Gage Tower East Emergency Generator Information",
  images: [
    {
      alt: "Gage Tower East Emergency Generator Information Sheet 1",
      caption: "Gage Tower East Emergency Generator Information Sheet: page 1",
      src: egiSheet1,
    },
    {
      alt: "Gage Tower East Emergency Generator Information Sheet 2",
      caption: "Gage Tower East Emergency Generator Information Sheet: page 2",
      src: egiSheet2,
    },
  ],
};

const route_to_front_desk: ImagesProps = {
  description: "Route to Front Desk",
  name: "Route to Front Desk",
  images: [
    {
      alt: "Route to Front Desk",
      caption: "Route to front desk from the loading bay out back.",
      src: routeToFrontDesk1,
    },
    {
      alt: "Route to Front Desk",
      caption: "Take a left here.",
      src: routeToFrontDesk2,
    },
    {
      alt: "Route to Front Desk",
      caption: "Head up this road and take another left.",
      src: routeToFrontDesk3,
    },
    {
      alt: "Route to Front Desk",
      caption: "Main entrance to Gage Tower East. Front desk is just inside to the right.",
      src: routeToFrontDesk4,
    },
  ],
};

const route_to_gen_ats_and_fp: ImagesProps = {
  description: "Route to Generator, ATS and Fire Panel",
  name: "Route to Generator, ATS and Fire Panel",
  images: [
    {
      alt: "Route to Generator, ATS and Fire Panel",
      caption: "Route to generator, ATS and fire panel from the front desk.",
      src: routeToGenATSAndFP1,
    },
    {
      alt: "Route to Generator, ATS and Fire Panel",
      caption: "Head inside these doors.",
      src: routeToGenATSAndFP2,
    },
    {
      alt: "Route to Generator, ATS and Fire Panel",
      caption: "Head up these small stairs and through this door.",
      src: routeToGenATSAndFP3,
    },
    {
      alt: "Route to Generator, ATS and Fire Panel",
      caption: "Go down the stairs.",
      src: routeToGenATSAndFP4,
    },
    {
      alt: "Route to Generator, ATS and Fire Panel",
      caption: "Take a right at the bottom of the stairs.",
      src: routeToGenATSAndFP5,
    },
    {
      alt: "Route to Generator, ATS and Fire Panel",
      caption:
        "Generator, ATS, and Fire Alarm Panel are located in the hallways next to the elevator.",
      src: routeToGenATSAndFP6,
    },
    {
      alt: "Route to Generator, ATS and Fire Panel",
      caption: "Hallway to generator room.",
      src: routeToGenATSAndFP7,
    },
    {
      alt: "Route to Generator, ATS and Fire Panel",
      caption: "ATS and Fire Alarm Panel room.",
      src: routeToGenATSAndFP8,
    },
  ],
};

const notes: NotesProps = {
  additional: [
    "Generator at room 004 key ME-2.",
    "Grab keycard from front desk.",
    "Turn the fan on before test. Right behind room 004 door.",
  ],
};

const gage_tower_east_props: GageTowerEastProps = {
  buildingInfo: building_info,
  emergencyGeneratorInformation: emergency_generator_information,
  routeToFrontDesk: route_to_front_desk,
  routeToGenATSAndFP: route_to_gen_ats_and_fp,
  notes,
};

export { gage_tower_east_props };
