import type { TallwoodHouseProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import egiSheet1 from "./assets/tallwood-house-egi-sheet-1.jpeg";
import egiSheet2 from "./assets/tallwood-house-egi-sheet-2.jpeg";
import atsAndFPRoute1 from "./assets/tallwood-house-fp-ats-route-1.jpeg";
import atsAndFPRoute2 from "./assets/tallwood-house-fp-ats-route-2.jpeg";
import atsAndFPRoute3 from "./assets/tallwood-house-fp-ats-route-3.jpeg";
import atsAndFPRoute4 from "./assets/tallwood-house-fp-ats-route-4.jpeg";
import atsAndFPRoute5 from "./assets/tallwood-house-fp-ats-route-5.jpeg";
import atsAndFPRoute6 from "./assets/tallwood-house-fp-ats-route-6.jpeg";
import atsAndFPRoute7 from "./assets/tallwood-house-fp-ats-route-7.jpeg";
import atsAndFPRoute8 from "./assets/tallwood-house-fp-ats-route-8.jpeg";

const building_info: HeaderProps = {
  accountNumber: 5084,
  address: "6088 Walter Gage Rd Vancouver",
  floors: [],
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Tallwood House",
  sectionLinks: [],
};

const emergency_generator_information: ImagesProps = {
  description: "Tallwood House Emergency Generator Information",
  name: "Tallwood House Emergency Generator Information",
  images: [
    {
      alt: "Tallwood House Emergency Generator Information Sheet 1",
      caption: "Tallwood House Emergency Generator Information Sheet: page 1",
      src: egiSheet1,
    },
    {
      alt: "Tallwood House Emergency Generator Information Sheet 2",
      caption: "Tallwood House Emergency Generator Information Sheet: page 2",
      src: egiSheet2,
    },
  ],
};

const route_to_ats_and_fp: ImagesProps = {
  description: "Route to ATS and Fire Panel",
  name: "Route to ATS and Fire Panel",
  images: [
    {
      alt: "Route to ATS and Fire Panel",
      caption: "Generator located just outside building.",
      src: atsAndFPRoute1,
    },
    {
      alt: "Route to ATS and Fire Panel",
      caption: "Head down this street from the generator.",
      src: atsAndFPRoute2,
    },
    {
      alt: "Route to ATS and Fire Panel",
      caption: "Entrance located on the same street.",
      src: atsAndFPRoute3,
    },
    {
      alt: "Route to ATS and Fire Panel",
      caption: "Head inside this entrance.",
      src: atsAndFPRoute4,
    },
    {
      alt: "Route to ATS and Fire Panel",
      caption: "Go inside these doors next to the elevators.",
      src: atsAndFPRoute5,
    },
    {
      alt: "Route to ATS and Fire Panel",
      caption: "Head down the hallway until you reach Room 111 Waste Sorting Area.",
      src: atsAndFPRoute6,
    },
    {
      alt: "Route to ATS and Fire Panel",
      caption: "Go inside Loading Bay 113.",
      src: atsAndFPRoute7,
    },
    {
      alt: "Route to ATS and Fire Panel",
      caption: "Go inside Electrical Room 112.",
      src: atsAndFPRoute8,
    },
  ],
};

const tallwood_house_props: TallwoodHouseProps = {
  buildingInfo: building_info,
  emergencyGeneratorInformation: emergency_generator_information,
  routeToATSAndFP: route_to_ats_and_fp,
};

export { tallwood_house_props };
