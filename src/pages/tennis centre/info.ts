import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import entrance1 from "./assets/tennis-centre-entrance-1.jpeg";
import entrance2 from "./assets/tennis-centre-entrance-2.jpeg";
import firePanelRoomRoute1 from "./assets/tennis-centre-entrance-to-fire-alarm-panel-room-1.jpeg";
import firePanelRoomRoute2 from "./assets/tennis-centre-entrance-to-fire-alarm-panel-room-2.jpeg";
import firePanelRoomRoute3 from "./assets/tennis-centre-entrance-to-fire-alarm-panel-room-3.jpeg";
import generatorATSLocation2 from "./assets/tennis-centre-generator-ats-location.jpeg";
import generatorATSLocation1 from "./assets/tennis-centre-parking-gen-location.jpeg";

const header_props: HeaderProps = {
  accountNumber: 7010,
  address: "6160 Thunderbird Blvd, Vancouver BC V6T 1Z3, Canada",
  floors: [1],
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Tennis Centre",
  sectionLinks: [],
};

const route_to_generator_and_ats: ImagesProps = {
  description:
    "Here is the route to reach the emergency generator and ATS located outside the Tennis Centre building.",
  name: "Route to Emergency Generator and ATS",
  images: [
    {
      alt: "Tennis Centre Parking",
      caption:
        "Generator is inside the green enclosure located outside the Tennis Centre. Parking is available along the road.",
      src: generatorATSLocation1,
    },
    {
      alt: "Generator and ATS Location",
      caption: "ATS is located on the right side of the generator inside the gray enclosure.",
      src: generatorATSLocation2,
    },
  ],
};

const route_to_fire_panel_room: ImagesProps = {
  description:
    "Here is the route to reach the fire alarm panel located in the Tennis Centre building.",
  name: "Route to Fire Alarm Panel",
  images: [
    {
      alt: "Entrance to Tennis Centre",
      caption: "Building is located opposite the generator and ATS.",
      src: entrance1,
    },
    {
      alt: "Entrance to Tennis Centre",
      caption: "Entrance to the building.",
      src: entrance2,
    },
    {
      alt: "Route to Fire Alarm Panel Room",
      caption: "Follow the hallway to the fire alarm panel room.",
      src: firePanelRoomRoute1,
    },
    {
      alt: "Route to Fire Alarm Panel Room",
      caption: "Continue down the hallway to reach the Utility Room 141.",
      src: firePanelRoomRoute2,
    },
    {
      alt: "Route to Fire Alarm Panel Room",
      caption: "Fire alarm panel room is located inside Electrical Room 141A.",
      src: firePanelRoomRoute3,
    },
  ],
};

const tennis_centre_props = {
  headerProps: header_props,
  routeToFireAlarmPanel: route_to_fire_panel_room,
  routeToGeneratorAndATS: route_to_generator_and_ats,
};

export { tennis_centre_props };
