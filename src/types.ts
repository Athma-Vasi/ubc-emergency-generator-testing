type BuildingName = "Pharmacy" | "Life Sciences" | "Chemistry";

type LocationName = "UBC Vancouver" | "UBC Okanagan";

type SectionLinks = { id: string; name: string };

type BuildingInfo = {
  name: BuildingName;
  locationName: LocationName;
  address: string;
  floors: Array<number>;
  accountNumber: number;
  monitoringCompany: string;
  monitoringCompanyContact: string;
  sectionLinks: Array<SectionLinks>;
};

type SafetyInformation = {
  disclaimer: string;
  electricalHazards: Array<string>;
  personnelSafety: Array<string>;
  personalProtectiveEquipment: Array<string>;
  codeCompliance: string;
  requiredCertification: string;
  emergencyContact: string;
};

type PreTestRequirements = {};

type emergencyGeneratorInformation = Array<{
  src: string;
  alt: string;
  caption: string;
}>;

type GeneratorRoutePhotos = Array<{
  src: string;
  alt: string;
  caption: string;
}>;

type ATSRoutePhotos = Array<{
  src: string;
  alt: string;
  caption: string;
}>;

type FireAlarmPanelRoutePhotos = Array<{
  src: string;
  alt: string;
  caption: string;
}>;

type PreStartGenInspection = Array<string>;

type PreStartPlanonChecklist = Array<string>;

export type {
  ATSRoutePhotos,
  BuildingInfo,
  BuildingName,
  emergencyGeneratorInformation,
  FireAlarmPanelRoutePhotos,
  GeneratorRoutePhotos,
  LocationName,
  PreStartGenInspection,
  PreStartPlanonChecklist,
  PreTestRequirements,
  SafetyInformation,
  SectionLinks,
};
