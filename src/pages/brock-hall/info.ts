import type { BrockHallProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import type { NotesProps } from "../../components/notes";
import atsAndFPLocation1 from "./assets/brock-hall-ats-fp-location-1.jpeg";
import atsAndFPLocation2 from "./assets/brock-hall-ats-fp-location-2.jpeg";
import atsAndFPLocation3 from "./assets/brock-hall-ats-fp-location-3.jpeg";
import egiSheet1 from "./assets/brock-hall-egi-sheet-1.jpeg";
import egiSheet2 from "./assets/brock-hall-egi-sheet-2.jpeg";
import genLocation1 from "./assets/brock-hall-gen-location-1.jpeg";
import secondATSAndFPRoute1 from "./assets/brock-hall-second-ats-fp-route-1.jpeg";
import secondATSAndFPRoute2 from "./assets/brock-hall-second-ats-fp-route-2.jpeg";
import secondATSAndFPRoute3 from "./assets/brock-hall-second-ats-fp-route-3.jpeg";
import secondATSAndFPRoute4 from "./assets/brock-hall-second-ats-fp-route-4.jpeg";
import secondATSAndFPRoute5 from "./assets/brock-hall-second-ats-fp-route-5.jpeg";
import secondATSAndFPRoute6 from "./assets/brock-hall-second-ats-fp-route-6.jpeg";
import thirdFirePanelRoute1 from "./assets/brock-hall-third-fire-panel-route-1.jpeg";
import thirdFirePanelRoute2 from "./assets/brock-hall-third-fire-panel-route-2.jpeg";
import thirdFirePanelRoute3 from "./assets/brock-hall-third-fire-panel-route-3.jpeg";
import thirdFirePanelRoute4 from "./assets/brock-hall-third-fire-panel-route-4.jpeg";
import thirdFirePanelRoute5 from "./assets/brock-hall-third-fire-panel-route-5.jpeg";
import thirdFirePanelRoute6 from "./assets/brock-hall-third-fire-panel-route-6.jpeg";

const building_info: HeaderProps = {
  accountNumber: 5086_7031_7006,
  address: "1200-1874 East Mall, Vancouver BC V6T 1Z3, Canada",
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Brock Hall",
};

const emergency_generator_information: ImagesProps = {
  description: "Brock Hall Emergency Generator Information",
  name: "Brock Hall Emergency Generator Information",
  images: [
    {
      alt: "Brock Hall Emergency Generator Information Sheet 1",
      caption: "Brock Hall Emergency Generator Information Sheet: page 1",
      src: egiSheet1,
    },
    {
      alt: "Brock Hall Emergency Generator Information Sheet 2",
      caption: "Brock Hall Emergency Generator Information Sheet: page 2",
      src: egiSheet2,
    },
  ],
};

const generator_location: ImagesProps = {
  description: "Brock Hall Emergency Generator Location",
  name: "Brock Hall Emergency Generator Location",
  images: [
    {
      alt: "Brock Hall Emergency Generator Location",
      caption: "Brock Hall Emergency Generator Location",
      src: genLocation1,
    },
  ],
};

const ats_and_fire_panel_location: ImagesProps = {
  description: "Brock Hall ATS and Fire Panel Location",
  name: "Brock Hall ATS and Fire Panel Location",
  images: [
    {
      alt: "Brock Hall ATS and Fire Panel Location",
      caption: "Brock Commons South requires access card.",
      src: atsAndFPLocation1,
    },
    {
      alt: "Brock Hall ATS and Fire Panel Location",
      caption: "Head down Level B Stair 4.",
      src: atsAndFPLocation2,
    },
    {
      alt: "Brock Hall ATS and Fire Panel Location",
      caption: "Two ATS' and Fire Panel located inside B1102, key 31R-11.",
      src: atsAndFPLocation3,
    },
  ],
};

const second_ats_and_fire_panel_route: ImagesProps = {
  description: "Brock Hall Second ATS and Fire Panel Route",
  name: "Brock Hall Second ATS and Fire Panel Route",
  images: [
    {
      alt: "Brock Hall Second ATS and Fire Panel Route",
      caption: "Go to side entrance Brock Commons South.",
      src: secondATSAndFPRoute1,
    },
    {
      alt: "Brock Hall Second ATS and Fire Panel Route",
      caption: "Head through these doors in the lobby.",
      src: secondATSAndFPRoute2,
    },
    {
      alt: "Brock Hall Second ATS and Fire Panel Route",
      caption: "Head inside these doors.",
      src: secondATSAndFPRoute3,
    },
    {
      alt: "Brock Hall Second ATS and Fire Panel Route",
      caption: "Head to level B from these green elevators.",
      src: secondATSAndFPRoute4,
    },
    {
      alt: "Brock Hall Second ATS and Fire Panel Route",
      caption: "Take a left at these doors from the elevator.",
      src: secondATSAndFPRoute5,
    },
    {
      alt: "Brock Hall Second ATS and Fire Panel Route",
      caption:
        "Third ATS and Fire Alarm Panel are located inside Room F100. This panel must be silenced when starting the test from the other ATS, must head fast here!",
      src: secondATSAndFPRoute6,
    },
  ],
};

const third_fire_panel_route: ImagesProps = {
  description: "Brock Hall Third Fire Panel Route",
  name: "Brock Hall Third Fire Panel Route",
  images: [
    {
      alt: "Brock Hall Third Fire Panel Route",
      caption: "Take a right from the green elevators.",
      src: thirdFirePanelRoute1,
    },
    {
      alt: "Brock Hall Third Fire Panel Route",
      caption: "Take a left here.",
      src: thirdFirePanelRoute2,
    },
    {
      alt: "Brock Hall Third Fire Panel Route",
      caption: "Go through these doors.",
      src: thirdFirePanelRoute3,
    },
    {
      alt: "Brock Hall Third Fire Panel Route",
      caption: "Go up these stairs.",
      src: thirdFirePanelRoute4,
    },
    {
      alt: "Brock Hall Third Fire Panel Route",
      caption: "Take a right at a hallway of lockers.",
      src: thirdFirePanelRoute5,
    },
    {
      alt: "Brock Hall Third Fire Panel Route",
      caption: "Third Fire Alarm Panel is located inside Electrical Room 120.",
      src: thirdFirePanelRoute6,
    },
  ],
};

const notes: NotesProps = {
  additional: [
    "Need to go to entrance for brock commons north to get access card from security desk, also let them know about gen test, and that you need to go to the basement.",
    "Pin for white card: 6177",
    "Call all three UN numbers: 5086,7031,7006",
    "Brock hall has 2 fire panels (east and west)",
    "Call BMS to shutdown AHU 1 & 2 before test",
    "Gen location behind brock commons south",
    "Brock hall fire panel located just behind the three elevators",
    "Once transfer test from south: After ack alarm, go back up stairs then to brock commons south entrance go through entrance and past the other doors to other round enclosure entrance, to green elevator to basement take left to f100 room and ack alarm, then start test for other ats in same room. Then go to 120 electrical room and double check fire panel.",
    "Post test, check fire panel in lobby.",
  ],
};

const brock_hall_props: BrockHallProps = {
  buildingInfo: building_info,
  emergencyGeneratorInformation: emergency_generator_information,
  generatorLocation: generator_location,
  atsAndFirePanelLocation: ats_and_fire_panel_location,
  secondATSAndFirePanelRoute: second_ats_and_fire_panel_route,
  thirdFirePanelRoute: third_fire_panel_route,
  notes: notes,
};

export { brock_hall_props };
