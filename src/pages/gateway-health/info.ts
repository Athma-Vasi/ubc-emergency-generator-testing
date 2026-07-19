import type { GatewayHealthProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import type { NotesProps } from "../../components/notes";
import atsFirePanelRoute1 from "./assets/gateway-health-route-to-ats-fire-panel-1.jpeg";
import atsFirePanelRoute2 from "./assets/gateway-health-route-to-ats-fire-panel-2.jpeg";
import atsFirePanelRoute3 from "./assets/gateway-health-route-to-ats-fire-panel-3.jpeg";
import generatorRoute1 from "./assets/gateway-health-route-to-generator-1.jpeg";
import generatorRoute2 from "./assets/gateway-health-route-to-generator-2.jpeg";
import generatorRoute3 from "./assets/gateway-health-route-to-generator-3.jpeg";
import generatorRoute4 from "./assets/gateway-health-route-to-generator-4.jpeg";

const header_props: HeaderProps = {
  accountNumber: 4048,
  address: "5955 University Blvd, Vancouver, BC",
  floors: [1, 2, 3, 4, 5, 6],
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Gateway Health",
  sectionLinks: [],
};

const route_to_generator: ImagesProps = {
  description:
    "Here is the route to reach the emergency generator located outside the Gateway Health building.",
  name: "Route to Emergency Generator",
  images: [
    {
      alt: "Gateway Health Entrance",
      caption:
        "Entrance to the Gateway Health building. Parking is available in the space across the building entrance.",
      src: generatorRoute1,
    },
    {
      alt: "Take a left at water fountain.",
      caption: "Take a left at the water fountain and follow the path to the generator.",
      src: generatorRoute2,
    },
    {
      alt: "Generator Location",
      caption: "Go inside the doors to the left of the accessible washroom.",
      src: generatorRoute3,
    },
    {
      alt: "Generator Location",
      caption: "Generator is located inside Room 1022.",
      src: generatorRoute4,
    },
  ],
};

const route_to_ats_and_fire_alarm_panel: ImagesProps = {
  description:
    "Here is the route to reach the ATS and fire alarm panel located inside the Gateway Health building.",
  name: "Route to ATS and Fire Alarm Panel",
  images: [
    {
      alt: "Gateway Health ATS and Fire Panel route",
      caption: "Head inside Room 1021 and go up the stairs.",
      src: atsFirePanelRoute1,
    },
    {
      alt: "Gateway Health ATS and Fire Panel route",
      caption: "Go to Floor 1.5 and Stair 3 for the Fire Alarm Panel and ATS.",
      src: atsFirePanelRoute2,
    },
    {
      alt: "Gateway Health ATS and Fire Panel route",
      caption: "Head inside Electrical Room M1002C for the Fire Alarm Panel and ATS.",
      src: atsFirePanelRoute3,
    },
  ],
};

const notes_props: NotesProps = {
  additional: [
    "After resetting the alarm, the Maglock door switch must be reset. It is located in the fire department box to the left of the annunciator. The key is on the Elec RM Ring in the proxy safe in Room 1023.",
    "Main entrance key is sitting on the Naval's desk.",
    "ProxSafe box is located in Room 1023 which has a construction keyset to access all service rooms in the building (Electrical, Generator, and Mechanical).",
    "Fire Alarm panel is located in Room M1002D. UN Account # 4048 and panel password is 000605.",
    "Contractor drawings and device list are on site by the Fire Alarm Panel.",
    "Doug (Site Safety Person) to contact FLS @ 604-617-2221 in the morning for a shutdown if needed. Doug contact info: 778-580-7583.",
    "Jeet and James B are working on to put in a shutdown.",
    "When doing a shutdown, disable the following devices and remind Doug to call back when the work is done: 1. All SDs and DSDs (L257 has 258 devices under the list). 2. All HDs (L258 has 10 devices under the list). 3. Beam Detectors (L259).",
  ],
};

const gateway_health_props: GatewayHealthProps = {
  headerProps: header_props,
  routeToGenerator: route_to_generator,
  routeToATSAndFireAlarmPanel: route_to_ats_and_fire_alarm_panel,
  notesProps: notes_props,
};

export { gateway_health_props };
