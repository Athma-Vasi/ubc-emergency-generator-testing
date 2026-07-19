import type { AcadiaParkHighRiseProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import atsAndFireAlarmPanelLocation1 from "./assets/acadia-park-high-rise-ats-fire-alarm-panel-route-1.jpeg";
import atsAndFireAlarmPanelLocation2 from "./assets/acadia-park-high-rise-ats-fire-alarm-panel-route-2.jpeg";
import atsAndFireAlarmPanelLocation3 from "./assets/acadia-park-high-rise-ats-fire-alarm-panel-route-3.jpeg";
import atsAndFireAlarmPanelLocation4 from "./assets/acadia-park-high-rise-ats-fire-alarm-panel-route-4.jpeg";
import atsAndFireAlarmPanelLocation5 from "./assets/acadia-park-high-rise-ats-fire-alarm-panel-route-5.jpeg";
import generatorLocation1 from "./assets/acadia-park-high-rise-generator-location-1.jpeg";
import generatorLocation2 from "./assets/acadia-park-high-rise-generator-location-2.jpeg";

const header_props: HeaderProps = {
  accountNumber: 5025,
  address: "2725 Melfa Road, Vancouver, BC",
  floors: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Acadia Park High Rise",
  sectionLinks: [],
};

const route_to_generator: ImagesProps = {
  description:
    "Here is the route to reach the emergency generator located outside the Acadia Park High Rise building.",
  name: "Route to Emergency Generator",
  images: [
    {
      alt: "Acadia Park High Rise Parking",
      caption:
        "Generator is inside the green enclosure located outside the Acadia Park High Rise building. Parking is available along the road.",
      src: generatorLocation1,
    },
    {
      alt: "Generator Location",
      caption: "Generator is located to the left of the building from the parking lot.",
      src: generatorLocation2,
    },
  ],
};

const route_to_ats_and_fire_alarm_panel: ImagesProps = {
  description:
    "Here is the route to reach the ATS and fire alarm panel located inside the Acadia Park High Rise building.",
  name: "Route to ATS and Fire Alarm Panel",
  images: [
    {
      alt: "Route to ATS and Fire Alarm Panel",
      caption: "Take a left up here for the building entrance.",
      src: atsAndFireAlarmPanelLocation1,
    },
    {
      alt: "Route to ATS and Fire Alarm Panel",
      caption: "Entrance to the building.",
      src: atsAndFireAlarmPanelLocation2,
    },
    {
      alt: "Route to ATS and Fire Alarm Panel",
      caption: "Take a right when facing the elevators inside the lobby.",
      src: atsAndFireAlarmPanelLocation3,
    },
    {
      alt: "Route to ATS and Fire Alarm Panel",
      caption: "The door to the ATS and fire alarm panel is on the right - Electrical Room 112.",
      src: atsAndFireAlarmPanelLocation4,
    },
    {
      alt: "Route to ATS and Fire Alarm Panel",
      caption: "Entrance to service desk. If required, unlock access can be obtained from here.",
      src: atsAndFireAlarmPanelLocation5,
    },
  ],
};

const acadia_park_high_rise_props: AcadiaParkHighRiseProps = {
  headerProps: header_props,
  routeToGenerator: route_to_generator,
  routeToATSAndFireAlarmPanel: route_to_ats_and_fire_alarm_panel,
};

export { acadia_park_high_rise_props };
