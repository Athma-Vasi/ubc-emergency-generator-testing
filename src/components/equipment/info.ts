import asco_300_brochure from "./assets/asco/300 series/ASCO 300 Series ATS Brochure.pdf";
import asco_300_data_bulletin from "./assets/asco/300 series/ASCO Data Bulletin | Basic Automatic Transfer Switch Functions (1.0).pdf";
import asco_300_group_g_controller from "./assets/asco/300 series/ASCO Group G Controller for Series 300 ATS.pdf";
import asco_300_transfer_switch_overview from "./assets/asco/300 series/ASCO Transfer Switch Overview (1.2).pdf";
import asco_300_operators_manual from "./assets/asco/300 series/ASCO | Operators Manual | Group G Controller for ASCO Automatic & Non-Automatic Transfer Switching Equipment.pdf";
import asco_300_data_sheet from "./assets/asco/300 series/Data Sheet | ASCO 300 SERIES Multi-voltage Power Transfer Switch (1.0).pdf";
import asco_300_motor_load_transfer_made_simple from "./assets/asco/300 series/Motor Load Transfer Made Simple (1.0).pdf";

import asco_7000_ats_d_design from "./assets/asco/7000 series/ASCO 7000 SERIES ATS Automatic Transfer Switches D design, 30 through 230 A.pdf";
import asco_7000_brochure from "./assets/asco/7000 series/ASCO 7000 SERIES Power Transfer Switch (2.0).pdf";
import asco_7000_overview from "./assets/asco/7000 series/ASCO Transfer Switch Overview.pdf";
import asco_7000_operators_manual from "./assets/asco/7000 series/ASCO | Operators Manual | Group 5 Controller for 4000 & 7000 Automatic Transfer Switches | 381333-126 (A).pdf";
import asco_7000_outline_drawing from "./assets/asco/7000 series/Outline Drawing | ASCO 7000 SERIES Automatic Transfer Switch | 30-230 Amps | Type 1 | D Frame | 719687 (1.1).pdf";

type EquipmentCategory = "prime mover" | "alternator" | "ats" | "battery charger";
type EquipmentManufacturer = "Cummins" | "ASCO" | "Eaton" | "Onan" | "TSC" | "Kohler";
type EquipmentInfo = {
  id: string;
  manufacturer: EquipmentManufacturer;
  category: EquipmentCategory;
  model: string;
  pdfUrls: Array<{ title: string; url: string }>;
  description: string;
  tags: Array<string>;
};

const asco_300_equipment_info: EquipmentInfo = {
  id: "asco-300",
  manufacturer: "ASCO",
  category: "ats",
  model: "300 Series",
  pdfUrls: [
    {
      title: "ASCO 300 Series ATS Brochure",
      url: asco_300_brochure,
    },
    {
      title: "ASCO Data Bulletin | Basic Automatic Transfer Switch Functions (1.0)",
      url: asco_300_data_bulletin,
    },
    {
      title: "ASCO Group G Controller for Series 300 ATS",
      url: asco_300_group_g_controller,
    },
    {
      title: "ASCO Transfer Switch Overview (1.2)",
      url: asco_300_transfer_switch_overview,
    },
    {
      title:
        "ASCO | Operators Manual | Group G Controller for ASCO Automatic & Non-Automatic Transfer Switching Equipment",
      url: asco_300_operators_manual,
    },
    {
      title: "Data Sheet | ASCO 300 SERIES Multi-voltage Power Transfer Switch (1.0)",
      url: asco_300_data_sheet,
    },
    {
      title: "Motor Load Transfer Made Simple (1.0)",
      url: asco_300_motor_load_transfer_made_simple,
    },
  ],
  description: "",
  tags: [
    "ats",
    "automatic transfer switch",
    "transfer switch",
    "power transfer switch",
    "power transfer",
    "switchgear",
    "switch gear",
    "300",
    "300 series",
    "ASCO 300",
  ],
};

const asco_7000_equipment_info: EquipmentInfo = {
  id: "asco-7000",
  manufacturer: "ASCO",
  category: "ats",
  model: "7000 Series",
  pdfUrls: [
    {
      title:
        "ASCO | Operators Manual | Group 5 Controller for 4000 & 7000 Automatic Transfer Switches | 381333-126 (A)",
      url: asco_7000_operators_manual,
    },
    {
      title: "ASCO 7000 SERIES ATS Automatic Transfer Switches D design, 30 through 230 A",
      url: asco_7000_ats_d_design,
    },
    {
      title: "ASCO 7000 SERIES Power Transfer Switch (2.0)",
      url: asco_7000_brochure,
    },
    {
      title: "ASCO Transfer Switch Overview",
      url: asco_7000_overview,
    },
    {
      title:
        "Outline Drawing | ASCO 7000 SERIES Automatic Transfer Switch | 30-230 Amps | Type 1 | D Frame | 719687 (1.1)",
      url: asco_7000_outline_drawing,
    },
  ],
  description: "",
  tags: [
    "ats",
    "automatic transfer switch",
    "transfer switch",
    "power transfer switch",
    "power transfer",
    "switchgear",
    "switch gear",
    "7000",
    "7000 series",
    "ASCO 7000",
  ],
};

const equipment_infos: Array<EquipmentInfo> = [asco_300_equipment_info, asco_7000_equipment_info];

export { asco_300_equipment_info, asco_7000_equipment_info, equipment_infos };
export type { EquipmentCategory, EquipmentInfo, EquipmentManufacturer };
