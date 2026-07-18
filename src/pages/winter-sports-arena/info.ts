import type { WinterSportsArenaProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import generatorAndAtsLocation from "./assets/winter-sports-arena-ats-location.jpeg";

const header_props: HeaderProps = {
  accountNumber: 7037,
  address: "2555 Wesbrook Mall Vancouver, BC Canada V6T 1Z3",
  floors: [1],
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Doug Mitchell Thunderbird Sports Centre",
  sectionLinks: [],
};

const route_to_generator_and_ats: ImagesProps = {
  description:
    "Here is the route to reach the emergency generator and ATS located outside the Doug Mitchell Thunderbird Sports Centre building.",
  name: "Route to Emergency Generator and ATS",
  images: [
    {
      alt: "Doug Mitchell Thunderbird Sports Centre Parking",
      caption: "Generator and ATS are inside this building, which is adjacent to the parking lot.",
      src: generatorAndAtsLocation,
    },
  ],
};

const winter_sports_arena_props: WinterSportsArenaProps = {
  headerProps: header_props,
  routeToGeneratorAndATS: route_to_generator_and_ats,
};

export { winter_sports_arena_props };
