import type { MarineBuildings5And6Props } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import type { NotesProps } from "../../components/notes";
import fpAtsGenRoute1 from "./assets/marine-buildings-5and6-fp-ats-gen-route-1.jpeg";
import fpAtsGenRoute2 from "./assets/marine-buildings-5and6-fp-ats-gen-route-2.jpeg";
import fpAtsGenRoute3 from "./assets/marine-buildings-5and6-fp-ats-gen-route-3.jpeg";
import fpAtsGenRoute4 from "./assets/marine-buildings-5and6-fp-ats-gen-route-4.jpeg";
import fpAtsGenRoute5 from "./assets/marine-buildings-5and6-fp-ats-gen-route-5.jpeg";
import fpAtsGenRoute6 from "./assets/marine-buildings-5and6-fp-ats-gen-route-6.jpeg";
import fpAtsGenRoute7 from "./assets/marine-buildings-5and6-fp-ats-gen-route-7.jpeg";
import fpAtsGenRoute8 from "./assets/marine-buildings-5and6-fp-ats-gen-route-8.jpeg";
import fpAtsGenRoute9 from "./assets/marine-buildings-5and6-fp-ats-gen-route-9.jpeg";

const building_info: HeaderProps = {
  accountNumber: 5070_5071,
  address: "2205 Lower Mall, Vancouver, B.C. V6T 1Z4",
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Marine Buildings 5&6",
};

const notes: NotesProps = {
  additional: [
    "Must radio elevator tech prior to test start.",
    "Ensure to let monitoring company know to bypass supervisory test and alarm for the duration of all marine buildings test.",
    "Must grab access card from front desk.",
    "One generator shared between Marine Buildings 1&4.",
    "There are two ATS', one for each building. Alternate each ATS for short load test.",
    "Once the 2nd ATS is on, double check the generator to ensure normal operation before stopping the short load test.",
  ],
};

const fp_ats_gen_route: ImagesProps = {
  description:
    "Here is the route to reach the Fire Panel, ATS and Generator located inside the Marine Buildings 5&6.",
  name: "Route to Fire Panel, ATS and Generator",
  images: [
    {
      alt: "Fire Panel, ATS and Generator Route 1",
      caption: "From elevator to basement level, take a right.",
      src: fpAtsGenRoute1,
    },
    {
      alt: "Fire Panel, ATS and Generator Route 2",
      caption: "Towards generator and ATS.",
      src: fpAtsGenRoute2,
    },
    {
      alt: "Fire Panel, ATS and Generator Route 3",
      caption:
        "This door will take you to the central hub, where you can go to other marine buildings.",
      src: fpAtsGenRoute3,
    },
    {
      alt: "Fire Panel, ATS and Generator Route 4",
      caption: "Building #5 ATS located in Electrical Room 009.",
      src: fpAtsGenRoute4,
    },
    {
      alt: "Fire Panel, ATS and Generator Route 5",
      caption: "Building #5 ATS.",
      src: fpAtsGenRoute5,
    },
    {
      alt: "Fire Panel, ATS and Generator Route 6",
      caption: "Building #6 ATS located in Electrical Room 013.",
      src: fpAtsGenRoute6,
    },
    {
      alt: "Fire Panel, ATS and Generator Route 7",
      caption: "Building #6 ATS.",
      src: fpAtsGenRoute7,
    },
    {
      alt: "Fire Panel, ATS and Generator Route 8",
      caption: "Generator located in Room 012.",
      src: fpAtsGenRoute8,
    },
    {
      alt: "Fire Panel, ATS and Generator Route 9",
      caption: "Fire Alarm Panel alarm which must be acknowledged.",
      src: fpAtsGenRoute9,
    },
  ],
};

const marine_buildings_5_and_6_props: MarineBuildings5And6Props = {
  buildingInfo: building_info,
  fpAtsGenRoute: fp_ats_gen_route,
  notes,
};

export { marine_buildings_5_and_6_props };
