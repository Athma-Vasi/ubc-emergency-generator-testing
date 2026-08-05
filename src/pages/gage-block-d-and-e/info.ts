import type { GageBlockDAndEProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import type { NotesProps } from "../../components/notes";
import genATSAndFPRoute1 from "./assets/gage-block-d-and-e-gen-ats-fp-route-1.jpeg";
import genATSAndFPRoute2 from "./assets/gage-block-d-and-e-gen-ats-fp-route-2.jpeg";

const building_info: HeaderProps = {
  accountNumber: 9999_9999,
  address: "5959 Student Union Boulevard Vancouver, BC",
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Gage Block D and E",
};

const route_to_gen_ats_and_fp: ImagesProps = {
  description:
    "Here is the route to the emergency generator, ATS, and Fire Panel for the Gage Block D and E building.",
  name: "Route to Emergency Generator, ATS, and Fire Panel",
  images: [
    {
      alt: "Route to Emergency Generator, ATS, and Fire Panel - Image 1",
      caption: "Entrance off to the side of the building.",
      src: genATSAndFPRoute1,
    },
    {
      alt: "Route to Emergency Generator, ATS, and Fire Panel - Image 2",
      caption: "Head down the stairs and take a right.",
      src: genATSAndFPRoute2,
    },
  ],
};

const notes: NotesProps = {
  additional: ["Key 31R-11 for all doors."],
};

const gage_block_d_and_e_props: GageBlockDAndEProps = {
  buildingInfo: building_info,
  routeToGenATSAndFP: route_to_gen_ats_and_fp,
  notes: notes,
};

export { gage_block_d_and_e_props };
