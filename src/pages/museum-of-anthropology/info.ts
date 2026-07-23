import type { MuseumOfAnthropologyProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import type { NotesProps } from "../../components/notes";
import thirdATSAndFirePanelRoute1 from "./assets/museum-of-anthropology-3rd-ats-and-fire-panel-route-1.jpeg";
import thirdATSAndFirePanelRoute10 from "./assets/museum-of-anthropology-3rd-ats-and-fire-panel-route-10.jpeg";
import thirdATSAndFirePanelRoute11 from "./assets/museum-of-anthropology-3rd-ats-and-fire-panel-route-11.jpeg";
import thirdATSAndFirePanelRoute2 from "./assets/museum-of-anthropology-3rd-ats-and-fire-panel-route-2.jpeg";
import thirdATSAndFirePanelRoute3 from "./assets/museum-of-anthropology-3rd-ats-and-fire-panel-route-3.jpeg";
import thirdATSAndFirePanelRoute4 from "./assets/museum-of-anthropology-3rd-ats-and-fire-panel-route-4.jpeg";
import thirdATSAndFirePanelRoute5 from "./assets/museum-of-anthropology-3rd-ats-and-fire-panel-route-5.jpeg";
import thirdATSAndFirePanelRoute6 from "./assets/museum-of-anthropology-3rd-ats-and-fire-panel-route-6.jpeg";
import thirdATSAndFirePanelRoute7 from "./assets/museum-of-anthropology-3rd-ats-and-fire-panel-route-7.jpeg";
import thirdATSAndFirePanelRoute8 from "./assets/museum-of-anthropology-3rd-ats-and-fire-panel-route-8.jpeg";
import thirdATSAndFirePanelRoute9 from "./assets/museum-of-anthropology-3rd-ats-and-fire-panel-route-9.jpeg";
import ats1And2AndChillersRoute1 from "./assets/museum-of-anthropology-ats1&2-location-1.jpeg";
import ats1And2AndChillersRoute2 from "./assets/museum-of-anthropology-ats1&2-location-2.jpeg";
import egiSheet1 from "./assets/museum-of-anthropology-egi-sheet-1.jpeg";
import egiSheet2 from "./assets/museum-of-anthropology-egi-sheet-2.jpeg";
import generatorLocation1 from "./assets/museum-of-anthropology-gen-location.jpeg";

const building_info: HeaderProps = {
  accountNumber: 6030,
  address: "6393 NW Marine Drive Vancouver, BC, Canada V6T 1Z2",
  floors: [],
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Museum of Anthropology",
  sectionLinks: [],
};

const emergency_generator_information: ImagesProps = {
  description:
    "Here is the emergency generator information for the Museum of Anthropology building.",
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

const ats_1_and_2_location: ImagesProps = {
  description:
    "Here is the route to reach the ATS 1 and 2 and Chillers located inside the Museum of Anthropology building.",
  name: "Route to ATS 1 and 2 and Chillers",
  images: [
    {
      alt: "ATS 1 and 2 and Chillers Route 1",
      caption: "Head up the path from the generator location.",
      src: ats1And2AndChillersRoute1,
    },
    {
      alt: "ATS 1 and 2 and Chillers Route 2",
      caption: "Entrance to the ATS' and Chillers.",
      src: ats1And2AndChillersRoute2,
    },
  ],
};

const third_ats_and_fire_panel_route: ImagesProps = {
  description:
    "Here is the route to reach the 3rd ATS and Fire Panel located inside the Museum of Anthropology building.",
  name: "Route to 3rd ATS and Fire Panel",
  images: [
    {
      alt: "3rd ATS and Fire Panel Route 1",
      caption: "Head up the path from the generator, past the Chillers. Take a right at the fork.",
      src: thirdATSAndFirePanelRoute1,
    },
    {
      alt: "3rd ATS and Fire Panel Route 2",
      caption: "Entrance is ahead on the right.",
      src: thirdATSAndFirePanelRoute2,
    },
    {
      alt: "3rd ATS and Fire Panel Route 3",
      caption:
        "Entrance to the side door, where Access Card can be obtained from the security desk.",
      src: thirdATSAndFirePanelRoute3,
    },
    {
      alt: "3rd ATS and Fire Panel Route 4",
      caption: "Security desk is on the left of the Administration entrance.",
      src: thirdATSAndFirePanelRoute4,
    },
    {
      alt: "3rd ATS and Fire Panel Route 5",
      caption: "Take a left from the security desk. Head up the hallway.",
      src: thirdATSAndFirePanelRoute5,
    },
    {
      alt: "3rd ATS and Fire Panel Route 6",
      caption: "Go to the right of the Cedar Cafe.",
      src: thirdATSAndFirePanelRoute6,
    },
    {
      alt: "3rd ATS and Fire Panel Route 7",
      caption: "Go down ramp between Visitor Information and Admission desks.",
      src: thirdATSAndFirePanelRoute7,
    },
    {
      alt: "3rd ATS and Fire Panel Route 8",
      caption: "Take the first right here.",
      src: thirdATSAndFirePanelRoute8,
    },
    {
      alt: "3rd ATS and Fire Panel Route 9",
      caption: "Take a right at the kayak.",
      src: thirdATSAndFirePanelRoute9,
    },
    {
      alt: "3rd ATS and Fire Panel Route 10",
      caption:
        "Take a right at the two kayaks, with sign: Erika and Alan R Sawyer Latin American Gallery.",
      src: thirdATSAndFirePanelRoute10,
    },
    {
      alt: "3rd ATS and Fire Panel Route 11",
      caption:
        "Room 115 is on the right, requires the Access Card from the security desk to enter. Inside is Electrical Room 107, which contains the 3rd ATS and Fire Panel that must be acknowledged.",
      src: thirdATSAndFirePanelRoute11,
    },
  ],
};

const generator_location: ImagesProps = {
  description:
    "Here is the location of the emergency generator for the Museum of Anthropology building.",
  name: "Emergency Generator Location",
  images: [
    {
      alt: "Emergency Generator Location",
      caption: "Emergency Generator Location",
      src: generatorLocation1,
    },
  ],
};

const notes: NotesProps = {
  additional: [
    "Chillers 1 and 2 must be turned off prior to test.",
    "Grab Access Card from the security desk inside side entrance.",
    "During and Post test, must check chillers 1 and 2 that there is no alarm.",
  ],
};

const museum_of_anthropology_props: MuseumOfAnthropologyProps = {
  buildingInfo: building_info,
  emergencyGeneratorInformation: emergency_generator_information,
};

export { museum_of_anthropology_props };
