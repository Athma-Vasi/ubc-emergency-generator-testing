import type { GreenCollegeProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import type { NotesProps } from "../../components/notes";
import egiSheet1 from "./assets/green-college-egi-sheet-1.jpeg";
import egiSheet2 from "./assets/green-college-egi-sheet-2.jpeg";
import genATSAndFPRoute1 from "./assets/green-college-route-to-gen-ats-fp-1.jpeg";
import genATSAndFPRoute2 from "./assets/green-college-route-to-gen-ats-fp-2.jpeg";
import genATSAndFPRoute3 from "./assets/green-college-route-to-gen-ats-fp-3.jpeg";
import genATSAndFPRoute4 from "./assets/green-college-route-to-gen-ats-fp-4.jpeg";

const building_info: HeaderProps = {
  accountNumber: 5068,
  address: "6201 Cecil Green Park Road Vancouver, BC Canada V6T 1Z1",
  floors: [],
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Green College",
  sectionLinks: [],
};

const emergency_generator_information: ImagesProps = {
  description: "Green College Emergency Generator Information",
  name: "Green College Emergency Generator Information",
  images: [
    {
      alt: "Green College Emergency Generator Information Sheet 1",
      caption: "Green College Emergency Generator Information Sheet: page 1",
      src: egiSheet1,
    },
    {
      alt: "Green College Emergency Generator Information Sheet 2",
      caption: "Green College Emergency Generator Information Sheet: page 2",
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
      caption: "Route to front desk entrance from the parking lot.",
      src: genATSAndFPRoute1,
    },
    {
      alt: "Route to Generator, ATS and Fire Panel",
      caption: "Route to the generator, ATS and Fire Panel from the parking lot.",
      src: genATSAndFPRoute2,
    },
    {
      alt: "Route to Generator, ATS and Fire Panel",
      caption: "Fuel tank located to the right, rest down the stairs on the left.",
      src: genATSAndFPRoute3,
    },
    {
      alt: "Route to Generator, ATS and Fire Panel",
      caption:
        "Entrance to the generator, ATS and Fire Panel: Generator Room 11 - Key H/IG-7A. Electrical Room 13 - Key NC001",
      src: genATSAndFPRoute4,
    },
  ],
};

const notes: NotesProps = {
  additional: [
    "Not required to call monitoring company for this generator test.",
    "Ensure to notify front desk prior to testing the generator.",
  ],
};

const green_college_props: GreenCollegeProps = {
  buildingInfo: building_info,
  emergencyGeneratorInformation: emergency_generator_information,
  routeToGenATSAndFP: route_to_gen_ats_and_fp,
  notes: notes,
};

export { green_college_props };
