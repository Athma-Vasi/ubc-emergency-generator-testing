import type { RoseGardenParkadeProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import type { NotesProps } from "../../components/notes";
import egiSheet1 from "./assets/rose-garden-parkade-egi-sheet-1.jpeg";
import egiSheet2 from "./assets/rose-garden-parkade-egi-sheet-2.jpeg";
import genATSAndFPRoute1 from "./assets/rose-garden-parkade-gen-ats-fp-route-1.jpeg";
import genATSAndFPRoute2 from "./assets/rose-garden-parkade-gen-ats-fp-route-2.jpeg";
import genATSAndFPRoute3 from "./assets/rose-garden-parkade-gen-ats-fp-route-3.jpeg";

const building_info: HeaderProps = {
  accountNumber: 6042,
  address: "6278 North West Marine Drive Vancouver, BC",
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Rose Garden Parkade",
};

const emergency_generator_information: ImagesProps = {
  description: "Rose Garden Parkade Emergency Generator Information",
  name: "Rose Garden Parkade Emergency Generator Information",
  images: [
    {
      alt: "Rose Garden Parkade Emergency Generator Information Sheet 1",
      caption: "Rose Garden Parkade Emergency Generator Information Sheet: page 1",
      src: egiSheet1,
    },
    {
      alt: "Rose Garden Parkade Emergency Generator Information Sheet 2",
      caption: "Rose Garden Parkade Emergency Generator Information Sheet: page 2",
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
      caption:
        "Parking available at the top of the Rose Garden next to elevators. Take a right down the stairs.",
      src: genATSAndFPRoute1,
    },
    {
      alt: "Route to Generator, ATS and Fire Panel",
      caption: "Take a left at the bottom of the stairs for the Level 5 parkade entrance.",
      src: genATSAndFPRoute2,
    },
    {
      alt: "Route to Generator, ATS and Fire Panel",
      caption:
        "Inside the parkade, both the generator Room P-503 and Fire Panel Room P-502 are located on the right.",
      src: genATSAndFPRoute3,
    },
  ],
};

const notes: NotesProps = {
  additional: ["Enter password: 1111 at the ATS for the generator to start."],
};

const rose_garden_parkade_props: RoseGardenParkadeProps = {
  buildingInfo: building_info,
  emergencyGeneratorInformation: emergency_generator_information,
  routeToGenATSAndFP: route_to_gen_ats_and_fp,
  notes: notes,
};

export { rose_garden_parkade_props };
