import type { NevilleScarfeProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import routeToGenAtsAndFP1 from "./assets/neville-scarfe-route-to-gen-ats-fp-1.jpeg";
import routeToGenAtsAndFP2 from "./assets/neville-scarfe-route-to-gen-ats-fp-2.jpeg";
import routeToGenAtsAndFP3 from "./assets/neville-scarfe-route-to-gen-ats-fp-3.jpeg";
import routeToGenAtsAndFP4 from "./assets/neville-scarfe-route-to-gen-ats-fp-4.jpeg";
import routeToGenAtsAndFP5 from "./assets/neville-scarfe-route-to-gen-ats-fp-5.jpeg";
import routeToGenAtsAndFP6 from "./assets/neville-scarfe-route-to-gen-ats-fp-6.jpeg";

const building_info: HeaderProps = {
  accountNumber: 4013,
  address: "2125 Main Mall, Vancouver BC V6T 1Z4, Canada",
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Neville Scarfe Building",
};

const route_to_gen_ats_and_fp: ImagesProps = {
  description: "Here is the route to the generator, ATS, and FP in the Neville Scarfe Building.",
  name: "Neville Scarfe Building Route to Generator, ATS, and FP",
  images: [
    {
      alt: "Route to generator, ATS, and FP - 1",
      src: routeToGenAtsAndFP1,
      caption: "Start at the south side of building in the alley.",
    },
    {
      alt: "Route to generator, ATS, and FP - 2",
      src: routeToGenAtsAndFP2,
      caption: "Take a left here at the garden.",
    },
    {
      alt: "Route to generator, ATS, and FP - 3",
      src: routeToGenAtsAndFP3,
      caption: "Head up this path in the garden.",
    },
    {
      alt: "Route to generator, ATS, and FP - 4",
      src: routeToGenAtsAndFP4,
      caption: "Take a left here.",
    },
    {
      alt: "Route to generator, ATS, and FP - 5",
      src: routeToGenAtsAndFP5,
      caption: "Head down the stairs.",
    },
    {
      alt: "Route to generator, ATS, and FP - 6",
      src: routeToGenAtsAndFP6,
      caption: "Door leads to FP and ATS. Fuel tank is to right of door.",
    },
  ],
};

const neville_scarfe_props: NevilleScarfeProps = {
  buildingInfo: building_info,
  routeToGenATSAndFP: route_to_gen_ats_and_fp,
};

export { neville_scarfe_props };
