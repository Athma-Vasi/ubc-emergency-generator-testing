import type { HealthSciencesParkadeProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import fireAlarmPanelLocation1 from "./assets/health-sciences-parkade-fire-alarm-panel-location.jpeg";
import generatorATSLocation1 from "./assets/health-sciences-parkade-generator-ats-location.jpeg";
const header_props: HeaderProps = {
  accountNumber: 7016,
  address: "2250 Health Sciences Mall Vancouver, BC",
  floors: [1, 2, 3],
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Health Sciences Parkade",
  sectionLinks: [],
};

const route_to_fire_alarm_panel: ImagesProps = {
  description:
    "Here is the route to reach the fire alarm panel located inside the Health Sciences Parkade building.",
  name: "Route to Fire Alarm Panel",
  images: [
    {
      alt: "Health Sciences Parkade Parking",
      caption:
        "Fire Alarm Panel is located inside the Health Sciences Parkade building. It is visible from outside.",
      src: fireAlarmPanelLocation1,
    },
  ],
};

const route_to_generator_and_ats = {
  description:
    "Here is the route to reach the emergency generator and ATS located inside the Health Sciences Parkade building.",
  name: "Route to Emergency Generator and ATS",
  images: [
    {
      alt: "Health Sciences Parkade Parking",
      caption:
        "Generator and ATS are in the ground floor near the entrance. They are visible from outside.",
      src: generatorATSLocation1,
    },
  ],
};

const notes_props = {
  additional: [
    "Fire Alarm Panel reset not required. However recommend checking state is normal pre and post test.",
  ],
};

const health_sciences_parkade_props: HealthSciencesParkadeProps = {
  headerProps: header_props,
  routeToGeneratorAndATS: route_to_generator_and_ats,
  routeToFireAlarmPanel: route_to_fire_alarm_panel,
  notesProps: notes_props,
};

export { health_sciences_parkade_props };
