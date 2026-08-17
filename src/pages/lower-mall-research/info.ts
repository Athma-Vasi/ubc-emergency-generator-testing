import type { LowerMallResearchProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import fpAtsGenRoute1 from "./assets/lower-mall-research-gen-ats-fp-route-1.jpeg";
import fpAtsGenRoute10 from "./assets/lower-mall-research-gen-ats-fp-route-10.jpeg";
import fpAtsGenRoute11 from "./assets/lower-mall-research-gen-ats-fp-route-11.jpeg";
import fpAtsGenRoute12 from "./assets/lower-mall-research-gen-ats-fp-route-12.jpeg";
import fpAtsGenRoute13 from "./assets/lower-mall-research-gen-ats-fp-route-13.jpeg";
import fpAtsGenRoute2 from "./assets/lower-mall-research-gen-ats-fp-route-2.jpeg";
import fpAtsGenRoute3 from "./assets/lower-mall-research-gen-ats-fp-route-3.jpeg";
import fpAtsGenRoute4 from "./assets/lower-mall-research-gen-ats-fp-route-4.jpeg";
import fpAtsGenRoute5 from "./assets/lower-mall-research-gen-ats-fp-route-5.jpeg";
import fpAtsGenRoute6 from "./assets/lower-mall-research-gen-ats-fp-route-6.jpeg";
import fpAtsGenRoute7 from "./assets/lower-mall-research-gen-ats-fp-route-7.jpeg";
import fpAtsGenRoute8 from "./assets/lower-mall-research-gen-ats-fp-route-8.jpeg";
import fpAtsGenRoute9 from "./assets/lower-mall-research-gen-ats-fp-route-9.jpeg";

const building_info: HeaderProps = {
  accountNumber: 4028,
  address: "2259 Lower Mall, Vancouver, BC",
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Lower Mall Research Building",
};

const fp_ats_gen_route: ImagesProps = {
  description:
    "Here is the route to reach the Fire Panel, ATS and Generator located inside the Lower Mall Research Building.",
  name: "Route to Fire Panel, ATS and Generator",
  images: [
    {
      alt: "Fire Panel, ATS and Generator Route 1",
      caption: "Head inside main building entrance.",
      src: fpAtsGenRoute1,
    },
    {
      alt: "Fire Panel, ATS and Generator Route 2",
      caption: "Take a left in the lobby.",
      src: fpAtsGenRoute2,
    },
    {
      alt: "Fire Panel, ATS and Generator Route 3",
      caption: "Take a right past the doors.",
      src: fpAtsGenRoute3,
    },
    {
      alt: "Fire Panel, ATS and Generator Route 4",
      caption: "Fuel Tank is located in Room 125.",
      src: fpAtsGenRoute4,
    },
    {
      alt: "Fire Panel, ATS and Generator Route 5",
      caption: "Take a right down the stairs.",
      src: fpAtsGenRoute5,
    },
    {
      alt: "Fire Panel, ATS and Generator Route 6",
      caption: "Take a left at the bottom of the stairs.",
      src: fpAtsGenRoute6,
    },
    {
      alt: "Fire Panel, ATS and Generator Route 7",
      caption: "Ensure the switch is ON.",
      src: fpAtsGenRoute7,
    },
    {
      alt: "Fire Panel, ATS and Generator Route 8",
      caption:
        "Fuel Tank is to the left of the pump. Level indicator is found upstairs next to the generator.",
      src: fpAtsGenRoute8,
    },
    {
      alt: "Fire Panel, ATS and Generator Route 9",
      caption:
        "Room 129/A-D is the outside entrance to generator, fire alarm panel and ATS. Located in the same hallway as the room to fuel tank.",
      src: fpAtsGenRoute9,
    },
    {
      alt: "Fire Panel, ATS and Generator Route 10",
      caption: "Room 129B is the inside entrance to generator, fire alarm panel and ATS.",
      src: fpAtsGenRoute10,
    },
    {
      alt: "Fire Panel, ATS and Generator Route 11",
      caption:
        "Main fuel pump switch. Ensure it is on. Fuel tank level indicator float is on the right.",
      src: fpAtsGenRoute11,
    },
    {
      alt: "Fire Panel, ATS and Generator Route 12",
      caption: "Follow the instructions posted to initiate the test.",
      src: fpAtsGenRoute12,
    },
    {
      alt: "Fire Panel, ATS and Generator Route 13",
      caption: "Ensure to acknowledge alarm in fire alarm panel once test is initiated.",
      src: fpAtsGenRoute13,
    },
  ],
};

const lower_mall_research_props: LowerMallResearchProps = {
  buildingInfo: building_info,
  fpAtsGenRoute: fp_ats_gen_route,
};

export { lower_mall_research_props };
