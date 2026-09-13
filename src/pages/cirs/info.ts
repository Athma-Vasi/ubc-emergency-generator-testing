import type { CIRSProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import gen_fp_ats_route_1 from "./assets/cirs-gen-fp-ats-route-1.jpeg";
import gen_fp_ats_route_2 from "./assets/cirs-gen-fp-ats-route-2.jpeg";
import gen_fp_ats_route_3 from "./assets/cirs-gen-fp-ats-route-3.jpeg";
import gen_fp_ats_route_4 from "./assets/cirs-gen-fp-ats-route-4.jpeg";

const building_info: HeaderProps = {
  accountNumber: 999999999,
  address: "2260 West Mall, Vancouver, BC V6T 1Z4",
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "CIRS",
};

const gen_fp_ats_route: ImagesProps = {
  description: "CIRS Generator and Fire Pump ATS Route.",
  images: [
    {
      alt: "CIRS Generator and Fire Pump ATS Route 1",
      src: gen_fp_ats_route_1,
      caption: "Head towards the north facing side alley of the building.",
    },
    {
      alt: "CIRS Generator and Fire Pump ATS Route 2",
      src: gen_fp_ats_route_2,
      caption: "The generator is inside the loading bay situated in Loading Level L.",
    },
    {
      alt: "CIRS Generator and Fire Pump ATS Route 3",
      src: gen_fp_ats_route_3,
      caption: "Head to basement and along this hallway.",
    },
    {
      alt: "CIRS Generator and Fire Pump ATS Route 4",
      src: gen_fp_ats_route_4,
      caption: "ATS and FP are located inside room B1344.",
    },
  ],
  name: "CIRS Generator and Fire Pump ATS Route",
};

const cirs_props: CIRSProps = {
  buildingInfo: building_info,
  genFpAtsRoute: gen_fp_ats_route,
};

export { cirs_props };
