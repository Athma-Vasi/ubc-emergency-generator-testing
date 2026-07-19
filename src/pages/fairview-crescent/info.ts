import type { FairviewCrescentProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import type { NotesProps } from "../../components/notes";
import atsFireAlarmPanelLocation1 from "./assets/fairview-crescent-ats-fire-panel-route-1.jpeg";
import atsFireAlarmPanelLocation2 from "./assets/fairview-crescent-ats-fire-panel-route-2.jpeg";
import atsFireAlarmPanelLocation3 from "./assets/fairview-crescent-ats-fire-panel-route-3.jpeg";
import atsFireAlarmPanelLocation4 from "./assets/fairview-crescent-ats-fire-panel-route-4.jpeg";
import emergencyGeneratorInformation1 from "./assets/fairview-crescent-egi-sheet-1.jpeg";
import emergencyGeneratorInformation2 from "./assets/fairview-crescent-egi-sheet-2.jpeg";
import generatorLocation1 from "./assets/fairview-crescent-generator-location-1.jpeg";
import generatorLocation2 from "./assets/fairview-crescent-generator-location-2.jpeg";

const header_props: HeaderProps = {
  accountNumber: 5010,
  address: "2707 Tennis Crescent Vancouver, B.C. V6T 2C1",
  floors: [1],
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Fairview Crescent",
  sectionLinks: [],
};

const emergency_generator_information: ImagesProps = {
  description: "Here is the emergency generator information for the Fairview Crescent building.",
  name: "Emergency Generator Information",
  images: [
    {
      alt: "Emergency Generator Information Sheet 1",
      caption: "Emergency Generator Information Sheet 1",
      src: emergencyGeneratorInformation1,
    },
    {
      alt: "Emergency Generator Information Sheet 2",
      caption: "Emergency Generator Information Sheet 2",
      src: emergencyGeneratorInformation2,
    },
  ],
};

const route_to_generator: ImagesProps = {
  description:
    "Here is the route to reach the emergency generator located outside the Fairview Crescent building.",
  name: "Route to Emergency Generator",
  images: [
    {
      alt: "Fairview Crescent Parking",
      caption:
        "Generator is inside the green enclosure located outside the Fairview Crescent building. It is in the depression of stones next to the tree. Parking is available next to the generator.",
      src: generatorLocation1,
    },
    {
      alt: "Generator Location",
      caption: "Alternate view of generator location.",
      src: generatorLocation2,
    },
  ],
};

const route_to_ats_and_fire_alarm_panel: ImagesProps = {
  description:
    "Here is the route to reach the ATS and fire alarm panel located inside the Fairview Crescent building.",
  name: "Route to ATS and Fire Alarm Panel",
  images: [
    {
      alt: "Route to ATS and Fire Alarm Panel",
      caption: "Head up this road to the orange signage.",
      src: atsFireAlarmPanelLocation1,
    },
    {
      alt: "Route to ATS and Fire Alarm Panel",
      caption: "Take a right past this signage.",
      src: atsFireAlarmPanelLocation2,
    },
    {
      alt: "Route to ATS and Fire Alarm Panel",
      caption: "Head to this building.",
      src: atsFireAlarmPanelLocation3,
    },
    {
      alt: "Route to ATS and Fire Alarm Panel",
      caption: "ATS and fire alarm panel are located inside the door to the right.",
      src: atsFireAlarmPanelLocation4,
    },
  ],
};

const notes_props: NotesProps = {
  additional: ["Pumps 3 and 4 must be bypassed. The panel is located next to the ATS."],
};

const fairview_crescent_props: FairviewCrescentProps = {
  headerProps: header_props,
  emergencyGeneratorInformation: emergency_generator_information,
  routeToGenerator: route_to_generator,
  routeToATSAndFireAlarmPanel: route_to_ats_and_fire_alarm_panel,
  notesProps: notes_props,
};

export { fairview_crescent_props };
