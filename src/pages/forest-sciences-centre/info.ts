import type { ForestSciencesCentreProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import egiSheet1 from "./assets/forestry-sciences-egi-sheet-1.jpeg";
import egiSheet2 from "./assets/forestry-sciences-egi-sheet-2.jpeg";

const header_props: HeaderProps = {
  accountNumber: 4018,
  address: "2424 Main Mall, Vancouver BC V6T 1Z4, Canada",
  floors: [],
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Forest Sciences Centre",
  sectionLinks: [],
};

const emergency_generator_information: ImagesProps = {
  description:
    "Here is the emergency generator information for the Forest Sciences Centre building.",
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

const forest_sciences_centre_props: ForestSciencesCentreProps = {
  headerProps: header_props,
  emergencyGeneratorInformation: emergency_generator_information,
};

export { forest_sciences_centre_props };
