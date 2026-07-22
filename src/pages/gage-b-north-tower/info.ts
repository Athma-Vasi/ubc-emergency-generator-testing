import type { GageBNorthTowerProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import type { NotesProps } from "../../components/notes";
import egiSheet1 from "./assets/gage-b-north-tower-egi-sheet-1.jpeg";
import egiSheet2 from "./assets/gage-b-north-tower-egi-sheet-2.jpeg";
import generatorLocation1 from "./assets/gage-b-north-tower-generator-location-1.jpeg";

const building_info: HeaderProps = {
  accountNumber: 5064,
  address: "5959 Student Union Mall Vancouver, BC",
  floors: [],
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Gage B North Tower",
  sectionLinks: [],
};

const emergency_generator_information: ImagesProps = {
  description: "Here is the emergency generator information for the Gage B North Tower building.",
  name: "Emergency Generator Information",
  images: [
    {
      alt: "Emergency Generator Information Sheet 1",
      caption: "Emergency Generator Information Sheet 1",
      src: egiSheet1,
    },
    {
      alt: "Emergency Generator Information Sheet 2",
      caption: "Emergency Generator Information Sheet 2",
      src: egiSheet2,
    },
  ],
};

const generator_location: ImagesProps = {
  description:
    "Here is the location of the emergency generator located outside the Gage B North Tower building.",
  name: "Emergency Generator Location",
  images: [
    {
      alt: "Generator Location",
      caption: "Generator is located inside room labelled with N4 & N5 stickers.",
      src: generatorLocation1,
    },
  ],
};

const notes: NotesProps = {
  additional: [
    "Need ME2 keys and Ving card from front desk.",
    "Call Sonny from housing and inform him about the test prior to start.",
    "The generator is located inside a room (TODO : add room number) next to elevators.",
    "The Fire Alarm Panel and ATS are located nearby the elevators close to the generator (TODO: add room number).",
  ],
};

const gage_b_north_tower_props: GageBNorthTowerProps = {
  buildingInfo: building_info,
  emergencyGeneratorInformation: emergency_generator_information,
  generatorLocation: generator_location,
  notes: notes,
};

export { gage_b_north_tower_props };
