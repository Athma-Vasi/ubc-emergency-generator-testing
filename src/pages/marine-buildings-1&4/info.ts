import type { MarineBuildings1And4Props } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import type { NotesProps } from "../../components/notes";
import fpAtsGenLocation1 from "./assets/marine-buildings-1&4-fp-ats-gen-location-1.jpeg";
import fpAtsGenLocation2 from "./assets/marine-buildings-1&4-fp-ats-gen-location-2.jpeg";
import fpAtsGenLocation3 from "./assets/marine-buildings-1&4-fp-ats-gen-location-3.jpeg";
import fpAtsGenLocation4 from "./assets/marine-buildings-1&4-fp-ats-gen-location-4.jpeg";
import egiSheet1 from "./assets/marine-buildings-1and4-egi-sheet-1.jpeg";
import egiSheet2 from "./assets/marine-buildings-1and4-egi-sheet-2.jpeg";

const building_info: HeaderProps = {
  accountNumber: 5066_5069,
  address: "2205 Lower Mall, Vancouver, B.C. V6T 1Z4",
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Marine Buildings 1&4",
};

const emergency_generator_information: ImagesProps = {
  description: "Marine Buildings 1&4 Emergency Generator Information",
  name: "Marine Buildings 1&4 Emergency Generator Information",
  images: [
    {
      alt: "Marine Buildings 1&4 Emergency Generator Information Sheet 1",
      caption: "Marine Buildings 1&4 Emergency Generator Information Sheet: page 1",
      src: egiSheet1,
    },
    {
      alt: "Marine Buildings 1&4 Emergency Generator Information Sheet 2",
      caption: "Marine Buildings 1&4 Emergency Generator Information Sheet: page 2",
      src: egiSheet2,
    },
  ],
};

const notes: NotesProps = {
  additional: [
    "Must radio elevator tech prior to test start.",
    "Ensure to let monitoring company know to bypass supervisory test and alarm for the duration of all marine buildings test.",
    "UN numbers for all marine buildings = B1: 5066; B2: 5067; B3: 5075; B4: 5069; B5: 5070; B6: 5071.",
    "Must grab access card from front desk, which is located in a separate building towards the centre of the complex.",
    "One generator shared between Marine Buildings 1&4.",
    "There are two ATS', one for each building. Alternate each ATS for short load test.",
    "Once the 2nd ATS is on, double check the generator to ensure normal operation before stopping the short load test.",
  ],
};

const fp_ats_gen_location: ImagesProps = {
  description:
    "Here is the location of the Fire Panel, ATS and Generator located inside the Marine Buildings 1&4.",
  name: "Location of Fire Panel, ATS and Generator",
  images: [
    {
      alt: "Fire Panel, ATS and Generator Location 1",
      caption: "Building #1 ATS located inside Electrical Room 010.",
      src: fpAtsGenLocation1,
    },
    {
      alt: "Fire Panel, ATS and Generator Location 2",
      caption: "Building #4 ATS located inside Electrical Room 008.",
      src: fpAtsGenLocation2,
    },
    {
      alt: "Fire Panel, ATS and Generator Location 3",
      caption: "Building #4 ATS",
      src: fpAtsGenLocation3,
    },
    {
      alt: "Fire Panel, ATS and Generator Location 4",
      caption: "Building #1 ATS",
      src: fpAtsGenLocation4,
    },
  ],
};

const marine_buildings_1_and_4_props: MarineBuildings1And4Props = {
  buildingInfo: building_info,
  emergencyGeneratorInformation: emergency_generator_information,
  fpAtsGenLocation: fp_ats_gen_location,
  notes,
};

export { marine_buildings_1_and_4_props };
