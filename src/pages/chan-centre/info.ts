import type { ChanCentreProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import type { NotesProps } from "../../components/notes";
import egiSheet1 from "./assets/chan-centre-egi-sheet-1.jpeg";
import egiSheet2 from "./assets/chan-centre-egi-sheet-2.jpeg";
import genATSRoute1 from "./assets/chan-centre-gen-ats-route-1.jpeg";
import genATSRoute2 from "./assets/chan-centre-gen-ats-route-2.jpeg";
import genATSRoute3 from "./assets/chan-centre-gen-ats-route-3.jpeg";
import mechRoomRoute1 from "./assets/chan-centre-mech-room-route-1.jpeg";
import mechRoomRoute2 from "./assets/chan-centre-mech-room-route-2.jpeg";
import mechRoomRoute3 from "./assets/chan-centre-mech-room-route-3.jpeg";
import mechRoomRoute4 from "./assets/chan-centre-mech-room-route-4.jpeg";
import mechRoomRoute5 from "./assets/chan-centre-mech-room-route-5.jpeg";

const building_info: HeaderProps = {
  accountNumber: 6010,
  address: "6265 Crescent Rd, Vancouver, BC V6T 1Z1",
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Chan Centre",
};

const emergency_generator_information: ImagesProps = {
  description: "Here is the emergency generator information for the Chan Centre building.",
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

const route_to_mech_room: ImagesProps = {
  description:
    "Here is the route to reach the mechanical room located inside the Chan Centre building.",
  name: "Route to Mechanical Room",
  images: [
    {
      alt: "Mechanical Room Route 1",
      caption: "Location of back entrance of Chan Centre, nearby the chillers location.",
      src: mechRoomRoute1,
    },
    {
      alt: "Mechanical Room Route 2",
      caption: "Head up this hallway from the back entrance.",
      src: mechRoomRoute2,
    },
    {
      alt: "Mechanical Room Route 3",
      caption: "Take a right at the end of the hallway.",
      src: mechRoomRoute3,
    },
    {
      alt: "Mechanical Room Route 4",
      caption: "Go down the stairwell inside this door.",
      src: mechRoomRoute4,
    },
    {
      alt: "Mechanical Room Route 5",
      caption: "Mechanical Room 70 is located at the bottom of the stairwell.",
      src: mechRoomRoute5,
    },
  ],
};

const route_to_gen_and_ats: ImagesProps = {
  description:
    "Here is the route to reach the generator and ATS located inside the Chan Centre building.",
  name: "Route to Generator and ATS",
  images: [
    {
      alt: "Generator and ATS Route 1",
      caption: "Take a left for the generator and ATS, right for the supply fan MCC.",
      src: genATSRoute1,
    },
    {
      alt: "Generator and ATS Route 2",
      caption: "Generator and ATS are located inside the mechanical room next to each other.",
      src: genATSRoute2,
    },
    {
      alt: "Generator and ATS Route 3",
      caption: "Turn dial to 'Hand' to start the fan, turn back to 'Off' after test is completed.",
      src: genATSRoute3,
    },
  ],
};

const notes: NotesProps = {
  additional: [
    "Notify front desk prior to test as Fire Alarm Panel was not able to be located.",
    "Ensure to turn on the supply fan prior to starting test, else will create negative pressure inside the mechanical room and may be difficult to open the doors.",
  ],
};

const chan_centre_props: ChanCentreProps = {
  buildingInfo: building_info,
  emergencyGeneratorInformation: emergency_generator_information,
  routeToMechanicalRoom: route_to_mech_room,
  routeToGeneratorAndATS: route_to_gen_and_ats,
  notes: notes,
};

export { chan_centre_props };
