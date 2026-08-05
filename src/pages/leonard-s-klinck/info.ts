import type { LeonardSKlinckProps } from ".";
import type { HeaderProps } from "../../components/header";
import type { ImagesProps } from "../../components/images";
import type { NotesProps } from "../../components/notes";
import ahu1VfdLocation1 from "./assets/klinck-ahu1-vfd-location-1.jpeg";
import ahu1VfdLocation2 from "./assets/klinck-ahu1-vfd-location-2.jpeg";
import routeToFPAndGenAndATS1 from "./assets/klinck-route-to-gen-ats-fp-1.jpeg";
import routeToFPAndGenAndATS10 from "./assets/klinck-route-to-gen-ats-fp-10.jpeg";
import routeToFPAndGenAndATS11 from "./assets/klinck-route-to-gen-ats-fp-11.jpeg";
import routeToFPAndGenAndATS12 from "./assets/klinck-route-to-gen-ats-fp-12.jpeg";
import routeToFPAndGenAndATS13 from "./assets/klinck-route-to-gen-ats-fp-13.jpeg";
import routeToFPAndGenAndATS14 from "./assets/klinck-route-to-gen-ats-fp-14.jpeg";
import routeToFPAndGenAndATS2 from "./assets/klinck-route-to-gen-ats-fp-2.jpeg";
import routeToFPAndGenAndATS3 from "./assets/klinck-route-to-gen-ats-fp-3.jpeg";
import routeToFPAndGenAndATS4 from "./assets/klinck-route-to-gen-ats-fp-4.jpeg";
import routeToFPAndGenAndATS5 from "./assets/klinck-route-to-gen-ats-fp-5.jpeg";
import routeToFPAndGenAndATS6 from "./assets/klinck-route-to-gen-ats-fp-6.jpeg";
import routeToFPAndGenAndATS7 from "./assets/klinck-route-to-gen-ats-fp-7.jpeg";
import routeToFPAndGenAndATS8 from "./assets/klinck-route-to-gen-ats-fp-8.jpeg";
import routeToFPAndGenAndATS9 from "./assets/klinck-route-to-gen-ats-fp-9.jpeg";

const building_info: HeaderProps = {
  accountNumber: 9999_9999,
  address: "6356 Agricultural Road, Vancouver, BC V6T 1Z2",
  floors: [],
  locationName: "UBC Vancouver",
  monitoringCompany: "Accurate Monitoring",
  monitoringCompanyContact: "604-777-3425",
  name: "Leonard S. Klinck Building",
  sectionLinks: [],
};

const route_to_gen_ats_and_fp: ImagesProps = {
  description:
    "Here is the route to the emergency generator, ATS, and Fire Panel for the Leonard S. Klinck Building.",
  name: "Route to Emergency Generator, ATS, and Fire Panel",
  images: [
    {
      alt: "Route to Emergency Generator, ATS, and Fire Panel - Image 1",
      caption: "Start from the parking lot.",
      src: routeToFPAndGenAndATS1,
    },
    {
      alt: "Route to Emergency Generator, ATS, and Fire Panel - Image 2",
      caption: "Head inside the main entrance.",
      src: routeToFPAndGenAndATS2,
    },
    {
      alt: "Route to Emergency Generator, ATS, and Fire Panel - Image 3",
      caption: "Head up the stairs.",
      src: routeToFPAndGenAndATS3,
    },
    {
      alt: "Route to Emergency Generator, ATS, and Fire Panel - Image 4",
      caption: "Head inside these doors.",
      src: routeToFPAndGenAndATS4,
    },
    {
      alt: "Route to Emergency Generator, ATS, and Fire Panel - Image 5",
      caption: "Take stairs on the left down to basement.",
      src: routeToFPAndGenAndATS5,
    },
    {
      alt: "Route to Emergency Generator, ATS, and Fire Panel - Image 6",
      caption: "Take a right at the bottom of the stairs.",
      src: routeToFPAndGenAndATS6,
    },
    {
      alt: "Route to Emergency Generator, ATS, and Fire Panel - Image 7",
      caption: "Take a left here.",
      src: routeToFPAndGenAndATS7,
    },
    {
      alt: "Route to Emergency Generator, ATS, and Fire Panel - Image 8",
      caption: "Straight ahead for ATS and FP. Right for generators.",
      src: routeToFPAndGenAndATS8,
    },
    {
      alt: "Route to Emergency Generator, ATS, and Fire Panel - Image 9",
      caption: "Head through these doors for the generators.",
      src: routeToFPAndGenAndATS9,
    },
    {
      alt: "Route to Emergency Generator, ATS, and Fire Panel - Image 10",
      caption: "The two generators are located on the left out the door.",
      src: routeToFPAndGenAndATS10,
    },
    {
      alt: "Route to Emergency Generator, ATS, and Fire Panel - Image 11",
      caption: "From inside the Mechanical Room 109A, take a left.",
      src: routeToFPAndGenAndATS11,
    },
    {
      alt: "Route to Emergency Generator, ATS, and Fire Panel - Image 12",
      caption: "Head through this door.",
      src: routeToFPAndGenAndATS12,
    },
    {
      alt: "Route to Emergency Generator, ATS, and Fire Panel - Image 13",
      caption: "First ATS. Use panel on left to initiate test.",
      src: routeToFPAndGenAndATS13,
    },
    {
      alt: "Route to Emergency Generator, ATS, and Fire Panel - Image 14",
      caption: "Second ATS. Use panel on right to initiate test.",
      src: routeToFPAndGenAndATS14,
    },
  ],
};

const ahu1_vfd_location: ImagesProps = {
  description: "Here is the location of the AHU 1 VFD for the Leonard S. Klinck Building.",
  name: "AHU 1 VFD Location",
  images: [
    {
      alt: "AHU 1 VFD Location - Image 1",
      caption: "Head up and over this section to find the AHU 1 VFD.",
      src: ahu1VfdLocation1,
    },
    {
      alt: "AHU 1 VFD Location - Image 2",
      caption: "AHU 1 VFD.",
      src: ahu1VfdLocation2,
    },
  ],
};

const notes: NotesProps = {
  additional: [
    "AHU 1 must be shut off as intake next to generators.",
    "If AHU 1 is still running after BMS confirms off, then must manually turn off the VFD.",
  ],
};

const leonard_s_klinck_props: LeonardSKlinckProps = {
  buildingInfo: building_info,
  routeToGenATSAndFP: route_to_gen_ats_and_fp,
  ahu1VFDLocation: ahu1_vfd_location,
  notes: notes,
};

export { leonard_s_klinck_props };
