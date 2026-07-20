import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import egiSheet1 from "./assets/bio-sciences-north-egi-sheet-1.jpeg";
import egiSheet2 from "./assets/bio-sciences-north-egi-sheet-2.jpeg";
import generatorLocation1 from "./assets/bio-sciences-north-generator-location-1.jpeg";

const header_props: HeaderProps = {
  accountNumber: 99999999,
  address: "6270 University Boulevard Vancouver, BC",
  floors: [],
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Bio Sciences North",
  sectionLinks: [],
};

const emergency_generator_information: ImagesProps = {
  description: "Here is the emergency generator information for the Bio Sciences North building.",
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
    "Here is the route to reach the emergency generator located outside the Bio Sciences North building.",
  name: "Route to Emergency Generator",
  images: [
    {
      alt: "Bio Sciences North Parking",
      caption:
        "North Generator is the one on the left, South on the right. Both are located outside the Bio Sciences building. Parking is available in the alley to loading bay.",
      src: generatorLocation1,
    },
  ],
};
