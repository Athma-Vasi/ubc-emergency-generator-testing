import type { EarthSciencesBuildingProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import fpAtsRoute1 from "./assets/earth-sciences-building-fp-ats-route-1.jpeg";
import fpAtsRoute2 from "./assets/earth-sciences-building-fp-ats-route-2.jpeg";
import fpAtsRoute3 from "./assets/earth-sciences-building-fp-ats-route-3.jpeg";
import fpAtsRoute4 from "./assets/earth-sciences-building-fp-ats-route-4.jpeg";
import fpAtsRoute5 from "./assets/earth-sciences-building-fp-ats-route-5.jpeg";
import genRoute1 from "./assets/earth-sciences-building-gen-route-1.jpeg";
import genRoute2 from "./assets/earth-sciences-building-gen-route-2.jpeg";

const building_info: HeaderProps = {
  accountNumber: 4025,
  address: "2207 Main Mall, Vancouver, BC V6T 1Z4",
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Earth Sciences Building",
};

const gen_route: ImagesProps = {
  description: "Earth Sciences Building Generator Route.",
  images: [
    {
      alt: "Earth Sciences Building Generator Route 1",
      src: genRoute1,
      caption: "Head towards the east side of the loading bay.",
    },
    {
      alt: "Earth Sciences Building Generator Route 2",
      src: genRoute2,
      caption: "Generator is inside the green enclosure.",
    },
  ],
  name: "Earth Sciences Building Generator Route",
};

const fp_ats_route: ImagesProps = {
  description: "Earth Sciences Building Fire Pump ATS Route.",
  images: [
    {
      alt: "Earth Sciences Building Fire Pump ATS Route 1",
      src: fpAtsRoute1,
      caption: "Head back towards the loading bay facing away from the generator.",
    },
    {
      alt: "Earth Sciences Building Fire Pump ATS Route 2",
      src: fpAtsRoute2,
      caption: "Head up the loading bay towards a set of doors.",
    },
    {
      alt: "Earth Sciences Building Fire Pump ATS Route 3",
      src: fpAtsRoute3,
      caption: "Head through Room B1120.",
    },
    {
      alt: "Earth Sciences Building Fire Pump ATS Route 4",
      src: fpAtsRoute4,
      caption: "Take a right at the fork.",
    },
    {
      alt: "Earth Sciences Building Fire Pump ATS Route 5",
      src: fpAtsRoute5,
      caption: "FP and ATS are inside Room B1116.",
    },
  ],
  name: "Earth Sciences Building Fire Pump ATS Route",
};

const earth_sciences_building_props: EarthSciencesBuildingProps = {
  buildingInfo: building_info,
  generatorRoute: gen_route,
  fpATSRoute: fp_ats_route,
};

export { earth_sciences_building_props };
