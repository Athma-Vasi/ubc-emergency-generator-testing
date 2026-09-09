import type { DouglasKennyProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import routeToFPAndATS1 from "./assets/douglas-kenny-route-to-ats-fp-1.jpeg";
import routeToFPAndATS2 from "./assets/douglas-kenny-route-to-ats-fp-2.jpeg";
import routeToFPAndATS3 from "./assets/douglas-kenny-route-to-ats-fp-3.jpeg";
import routeToFPAndATS4 from "./assets/douglas-kenny-route-to-ats-fp-4.jpeg";
import routeToFPAndATS5 from "./assets/douglas-kenny-route-to-ats-fp-5.jpeg";

const building_info: HeaderProps = {
  accountNumber: 4035,
  address: "2136 West Mall Vancouver, BC",
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Douglas Kenny Building",
};

const route_to_fp_and_ats: ImagesProps = {
  description: "Route to ATS and Fire Panel for Douglas Kenny Building",
  name: "Route to ATS and Fire Panel",
  images: [
    {
      alt: "Route to ATS and Fire Panel for Douglas Kenny Building",
      src: routeToFPAndATS1,
      caption: "Enter through the second door in the loading dock.",
    },
    {
      alt: "Route to ATS and Fire Panel for Douglas Kenny Building",
      src: routeToFPAndATS2,
      caption: "Head down to Level 1.",
    },
    {
      alt: "Route to ATS and Fire Panel for Douglas Kenny Building",
      src: routeToFPAndATS3,
      caption: "Take a left outside the elevator then left.",
    },
    {
      alt: "Route to ATS and Fire Panel for Douglas Kenny Building",
      src: routeToFPAndATS4,
      caption: "Take a right entering this hallway.",
    },
    {
      alt: "Route to ATS and Fire Panel for Douglas Kenny Building",
      src: routeToFPAndATS5,
      caption: "Take a left here.",
    },
  ],
};

const douglas_kenny_props: DouglasKennyProps = {
  buildingInfo: building_info,
  routeToFPAndATS: route_to_fp_and_ats,
};

export { douglas_kenny_props };
