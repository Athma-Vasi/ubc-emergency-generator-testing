import type { BRDFProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import type { NotesProps } from "../../components/notes";
import atsGenRoute1 from "../lower-mall-research/assets/lower-mall-research-gen-ats-fp-route-1.jpeg";
import atsGenRoute2 from "../lower-mall-research/assets/lower-mall-research-gen-ats-fp-route-2.jpeg";
import atsGenRoute3 from "../lower-mall-research/assets/lower-mall-research-gen-ats-fp-route-3.jpeg";
import atsGenRoute4 from "./assets/brdf-ats-gen-route-4.jpeg";
import atsGenRoute5 from "./assets/brdf-ats-gen-route-5.jpeg";
import atsGenRoute6 from "./assets/brdf-ats-gen-route-6.jpeg";
import atsGenRoute7 from "./assets/brdf-ats-gen-route-7.jpeg";

const building_info: HeaderProps = {
  accountNumber: 9999_9999,
  address: "2337 Lower Mall, Vancouver, BC",
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Bioenergy Research and Demonstration Facility (BRDF)",
};

const ats_gen_route: ImagesProps = {
  description:
    "Here is the route to reach the Fire Panel, ATS and Generator located inside the Bioenergy Research and Demonstration Facility (BRDF) building.",
  name: "Route to Fire Panel, ATS and Generator",
  images: [
    {
      alt: "Fire Panel, ATS and Generator Route 1",
      caption: "Start from the main entrance of Lower Mall Research building.",
      src: atsGenRoute1,
    },
    {
      alt: "Fire Panel, ATS and Generator Route 2",
      caption: "Take a left inside the lobby.",
      src: atsGenRoute2,
    },
    {
      alt: "Fire Panel, ATS and Generator Route 3",
      caption: "Take a right past the doors.",
      src: atsGenRoute3,
    },
    {
      alt: "Fire Panel, ATS and Generator Route 4",
      caption: "Head to the end of the hallway.",
      src: atsGenRoute4,
    },
    {
      alt: "Fire Panel, ATS and Generator Route 5",
      caption: "Head through the door in the stairwell.",
      src: atsGenRoute5,
    },
    {
      alt: "Fire Panel, ATS and Generator Route 6",
      caption: "ATS inside this green enclosure. Generator is right behind this ATS.",
      src: atsGenRoute6,
    },
    {
      alt: "Fire Panel, ATS and Generator Route 7",
      caption: "Generator inside this green enclosure.",
      src: atsGenRoute7,
    },
  ],
};

const notes: NotesProps = {
  additional: [
    "No need to call monitoring company.",
    "As fire alarm panel located inside BRDF, need to notify their ops team prior to starting test.",
  ],
};

const brdf_props: BRDFProps = {
  buildingInfo: building_info,
  atsGenRoute: ats_gen_route,
  notes,
};

export { brdf_props };
