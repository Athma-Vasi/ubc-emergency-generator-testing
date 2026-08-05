import type { HenryAngusProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import type { NotesProps } from "../../components/notes";
import atsAndFPLocation1 from "./assets/henry-angus-ats-fp-location-1.jpeg";
import atsAndFPLocation2 from "./assets/henry-angus-ats-fp-location-2.jpeg";
import atsAndFPLocation3 from "./assets/henry-angus-ats-fp-location-3.jpeg";
import atsAndFPLocation4 from "./assets/henry-angus-ats-fp-location-4.jpeg";
import genLocation1 from "./assets/henry-angus-generator-location-1.jpeg";

const building_info: HeaderProps = {
  accountNumber: 9999_9999,
  address: "2053 Main Mall, Vancouver BC V6T 1Z2, Canada",
  floors: [],
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Henry Angus",
  sectionLinks: [],
};

const generator_location: ImagesProps = {
  description:
    "Here is the location of the emergency generator located outside the Henry Angus building.",
  name: "Emergency Generator Location",
  images: [
    {
      alt: "Generator Location",
      caption: "Head inside the gate.",
      src: genLocation1,
    },
  ],
};

const ats_and_fp_location: ImagesProps = {
  description:
    "Here is the location of the ATS and Fire Panel located inside the Henry Angus building.",
  name: "ATS and Fire Panel Location",
  images: [
    {
      alt: "ATS and Fire Panel Location",
      caption: "Take a right down this ramp.",
      src: atsAndFPLocation1,
    },
    {
      alt: "ATS and Fire Panel Location",
      caption: "Door to the ATS and FP.",
      src: atsAndFPLocation2,
    },
    {
      alt: "ATS and Fire Panel Location",
      caption: "ATS and Fire Panel inside mechanical room 058A.",
      src: atsAndFPLocation3,
    },
    {
      alt: "ATS and Fire Panel Location",
      caption: "Turn key to test and back to auto post test.",
      src: atsAndFPLocation4,
    },
  ],
};

const notes: NotesProps = {
  additional: [
    "Need to call plumbers in radio. Channel: plumbing.",
    "Let them know start test time and they will be ready at bypass panel.",
    "Once key inserted into panel and turned to test, and timer starts (20s), radio them and let them know to bypass now.",
    "Once key turned to auto, tden timer will start from 3 mins. Once timer reaches 30 seconds, radio plumber and let them know.",
  ],
};

const henry_angus_props: HenryAngusProps = {
  buildingInfo: building_info,
  generatorLocation: generator_location,
  atsAndFPLocation: ats_and_fp_location,
  notes: notes,
};

export { henry_angus_props };
