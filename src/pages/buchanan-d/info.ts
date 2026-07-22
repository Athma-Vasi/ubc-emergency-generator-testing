import type { BuchananDProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import type { NotesProps } from "../../components/notes";
import atsFirePanelRoute1 from "./assets/buchanan-d-ats-fire-panel-route-1.jpeg";
import atsFirePanelRoute2 from "./assets/buchanan-d-ats-fire-panel-route-2.jpeg";
import atsFirePanelRoute3 from "./assets/buchanan-d-ats-fire-panel-route-3.jpeg";
import egiSheet1 from "./assets/buchanan-d-egi-sheet-1.jpeg";
import egiSheet2 from "./assets/buchanan-d-egi-sheet-2.jpeg";
import generatorLocation1 from "./assets/buchanan-d-generator-location-1.jpeg";

const building_info: HeaderProps = {
  accountNumber: 6006,
  address: "1866 Main Mall Vancouver, BC",
  floors: [],
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Buchanan D",
  sectionLinks: [],
};

const emergency_generator_information: ImagesProps = {
  description: "Here is the emergency generator information for the Buchanan D building.",
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
    "Here is the location of the emergency generator located outside the Buchanan D building.",
  name: "Emergency Generator Location",
  images: [
    {
      alt: "Generator Location",
      caption:
        "Generator is located outside the Buchanan D building front of the north facing windows. The enclosure is painted with green leaves.",
      src: generatorLocation1,
    },
  ],
};

const route_to_ats_and_fire_panel: ImagesProps = {
  description:
    "Here is the route to reach the ATS and fire panel located inside the Buchanan D building.",
  name: "Route to ATS and Fire Panel",
  images: [
    {
      alt: "Route to ATS and Fire Panel",
      caption:
        "Turn right after the main entrance and head down the stairs. Go down to Level B West Stairs.",
      src: atsFirePanelRoute1,
    },
    {
      alt: "Route to ATS and Fire Panel",
      caption: "Mechanical Room D032.",
      src: atsFirePanelRoute2,
    },
    {
      alt: "Route to ATS and Fire Panel",
      caption: "Electrical Room D033.",
      src: atsFirePanelRoute3,
    },
  ],
};

const notes: NotesProps = {
  additional: [
    "Fire Alarm panel is located in Mechanical Room B100 in Buchanan B.",
    "Fire Alarm Panel is located in the Buchanan A Block basement Electrical Room B011.",
    "Shut off AHU-1 before test as it is located near generator exhaust.",
    "See receptionist at front desk and inform about test and have them shut all North facing windows in the rooms (if they are not occupied).",
  ],
};

const buchanan_d_props: BuchananDProps = {
  buildingInfo: building_info,
  emergencyGeneratorInformation: emergency_generator_information,
  generatorLocation: generator_location,
  routeToATSAndFirePanel: route_to_ats_and_fire_panel,
  notes: notes,
};

export { buchanan_d_props };
