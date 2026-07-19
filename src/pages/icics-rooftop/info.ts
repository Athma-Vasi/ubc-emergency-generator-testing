import type { ICICSRooftopProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import egiSheet1 from "./assets/icics-rooftop-egi-sheet-1.jpeg";
import egiSheet2 from "./assets/icics-rooftop-egi-sheet-2.jpeg";
import atsFirePanelGeneratorLocation1 from "./assets/icics-rooftop-gen-ats-fire-panel-location-1.jpeg";
import atsFirePanelGeneratorLocation2 from "./assets/icics-rooftop-gen-ats-fire-panel-location-2.jpeg";

const headerProps: HeaderProps = {
  accountNumber: 4011,
  address: "289-2366 Main Mall Vancouver, BC  V6T 1Z4 Canada",
  floors: [1, 2, 3, 4],
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "ICICS (Rooftop)",
  sectionLinks: [],
};

const emergencyGeneratorInformation: ImagesProps = {
  description: "Here is the emergency generator information for the ICICS (Rooftop) building.",
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

const routeToGeneratorAndATS: ImagesProps = {
  description:
    "Here is the location of the emergency generator and ATS located outside the ICICS (Rooftop) building.",
  name: "Route to Emergency Generator and ATS",
  images: [
    {
      alt: "ICICS (Rooftop) Generator and ATS Location",
      caption:
        "ATS and Fire Alarm Panel are located inside this building. Generator (barely visible green enclosure top left in photo) is located on the rooftop.",
      src: atsFirePanelGeneratorLocation1,
    },
    {
      alt: "Generator and ATS Location",
      caption:
        "Stairs to reach the rooftop generator. Stairs are located just to the left of same building.",
      src: atsFirePanelGeneratorLocation2,
    },
  ],
};

const icics_rooftop_props: ICICSRooftopProps = {
  headerProps: headerProps,
  emergencyGeneratorInformation: emergencyGeneratorInformation,
  routeToGeneratorAndATS: routeToGeneratorAndATS,
};

export { icics_rooftop_props };
