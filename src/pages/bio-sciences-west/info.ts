import type { BioSciencesWestProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import type { NotesProps } from "../../components/notes";
import atsRoute1 from "./assets/bio-sciences-west-ats-route-1.jpeg";
import atsRoute2 from "./assets/bio-sciences-west-ats-route-2.jpeg";
import atsRoute3 from "./assets/bio-sciences-west-ats-route-3.jpeg";
import atsRoute4 from "./assets/bio-sciences-west-ats-route-4.jpeg";
import egiSheet1 from "./assets/bio-sciences-west-egi-sheet-1.jpeg";
import egiSheet2 from "./assets/bio-sciences-west-egi-sheet-2.jpeg";
import generatorRoute1 from "./assets/bio-sciences-west-generator-route-1.jpeg";
import generatorRoute2 from "./assets/bio-sciences-west-generator-route-2.jpeg";
import generatorRoute3 from "./assets/bio-sciences-west-generator-route-3.jpeg";

const building_info: HeaderProps = {
  accountNumber: 4006,
  address: "6270 University Boulevard Vancouver, BC",
  floors: [],
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Bio Sciences West",
  sectionLinks: [],
};

const emergency_generator_information: ImagesProps = {
  description: "Here is the emergency generator information for the Bio Sciences West building.",
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
    "Here is the route to reach the emergency generator located outside the Bio Sciences West building.",
  name: "Route to Emergency Generator",
  images: [
    {
      alt: "Bio Sciences West Generator Route 1",
      caption: "Head up the alleyway next to north and south generators.",
      src: generatorRoute1,
    },
    {
      alt: "Bio Sciences West Generator Route 2",
      caption: "Entrance is located behind the dumpster.",
      src: generatorRoute2,
    },
    {
      alt: "Bio Sciences West Generator Route 3",
      caption: "Head inside Generator Room 1295.",
      src: generatorRoute3,
    },
  ],
};

const route_to_ats_and_fire_panel: ImagesProps = {
  description:
    "Here is the route to reach the ATS and fire panel located inside the Bio Sciences West building.",
  name: "Route to ATS",
  images: [
    {
      alt: "Bio Sciences West ATS Route 1",
      caption:
        "Take a right at the dumpster in front of Generator Room 1295, and head up this road, past the main entrance.",
      src: atsRoute1,
    },
    {
      alt: "Bio Sciences West ATS Route 2",
      caption: "Head inside the unmarked door on the left side, just past the main entrance.",
      src: atsRoute2,
    },
    {
      alt: "Bio Sciences West ATS Route 3",
      caption: "Head down the stairs immediately to the right, for the door on the left.",
      src: atsRoute3,
    },
    {
      alt: "Bio Sciences West ATS Route 4",
      caption:
        "The two ASCO 7000 ATS' are located just around the corner from the fire panel pictured here.",
      src: atsRoute4,
    },
  ],
};

const notes: NotesProps = {
  additional: [
    "There are no shutdown of any units.",
    "Two ASCO 7000 ATS' : ATS-6EW (test first) and ATS-6LW.",
  ],
};

const bio_sciences_west_props: BioSciencesWestProps = {
  buildingInfo: building_info,
  emergencyGeneratorInformation: emergency_generator_information,
  routeToGenerator: route_to_generator,
  routeToATSAndFirePanel: route_to_ats_and_fire_panel,
  notes: notes,
};

export { bio_sciences_west_props };
