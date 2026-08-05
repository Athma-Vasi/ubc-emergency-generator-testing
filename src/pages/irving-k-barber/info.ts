import type { IrvingKBarberProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import egiSheet1 from "./assets/irving-k-barber-egi-sheet-1.jpeg";
import egiSheet2 from "./assets/irving-k-barber-egi-sheet-2.jpeg";
import genATSAndFPRoute1 from "./assets/irving-k-barber-gen-ats-fp-route-1.jpeg";
import genATSAndFPRoute2 from "./assets/irving-k-barber-gen-ats-fp-route-2.jpeg";
import genATSAndFPRoute3 from "./assets/irving-k-barber-gen-ats-fp-route-3.jpeg";
import genATSAndFPRoute4 from "./assets/irving-k-barber-gen-ats-fp-route-4.jpeg";
import genATSAndFPRoute5 from "./assets/irving-k-barber-gen-ats-fp-route-5.jpeg";
import genATSAndFPRoute6 from "./assets/irving-k-barber-gen-ats-fp-route-6.jpeg";
import genATSAndFPRoute7 from "./assets/irving-k-barber-gen-ats-fp-route-7.jpeg";
import genATSAndFPRoute8 from "./assets/irving-k-barber-gen-ats-fp-route-8.jpeg";
import genATSAndFPRoute9 from "./assets/irving-k-barber-gen-ats-fp-route-9.jpeg";

const building_info: HeaderProps = {
  accountNumber: 6007,
  address: "1961 East Mall Vancouver, BC Canada V6T 1Z1",
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Irving K. Barber Learning Centre",
};

const emergency_generator_information: ImagesProps = {
  description: "Irving K. Barber Learning Centre Emergency Generator Information",
  name: "Irving K. Barber Learning Centre Emergency Generator Information",
  images: [
    {
      alt: "Irving K. Barber Learning Centre Emergency Generator Information Sheet 1",
      caption: "Irving K. Barber Learning Centre Emergency Generator Information Sheet: page 1",
      src: egiSheet1,
    },
    {
      alt: "Irving K. Barber Learning Centre Emergency Generator Information Sheet 2",
      caption: "Irving K. Barber Learning Centre Emergency Generator Information Sheet: page 2",
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
      caption: "Generator, FP and ATS location.",
      src: genATSAndFPRoute1,
    },
    {
      alt: "Route to Generator, ATS and Fire Panel",
      caption: "Generator room entrance.",
      src: genATSAndFPRoute2,
    },
    {
      alt: "Route to Generator, ATS and Fire Panel",
      caption: "ATS and FP gate entrance.",
      src: genATSAndFPRoute3,
    },
    {
      alt: "Route to Generator, ATS and Fire Panel",
      caption: "Key X2X for door access.",
      src: genATSAndFPRoute4,
    },
    {
      alt: "Route to Generator, ATS and Fire Panel",
      caption: "Go down the stairs.",
      src: genATSAndFPRoute5,
    },
    {
      alt: "Route to Generator, ATS and Fire Panel",
      caption: "Door on the left at the bottom of stairs.",
      src: genATSAndFPRoute6,
    },
    {
      alt: "Route to Generator, ATS and Fire Panel",
      caption: "ATS and FP door entrance.",
      src: genATSAndFPRoute7,
    },
    {
      alt: "Route to Generator, ATS and Fire Panel",
      caption: "Entrance gate to ATS and FP is designed to be opened from inside only.",
      src: genATSAndFPRoute8,
    },
    {
      alt: "Route to Generator, ATS and Fire Panel",
      caption: "Method to open the gate from outside.",
      src: genATSAndFPRoute9,
    },
  ],
};

const irving_k_barber_props: IrvingKBarberProps = {
  buildingInfo: building_info,
  emergencyGeneratorInformation: emergency_generator_information,
  routeToGenATSAndFP: route_to_gen_ats_and_fp,
};

export { irving_k_barber_props };
