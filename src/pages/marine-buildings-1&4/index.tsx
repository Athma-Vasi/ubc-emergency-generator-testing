import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import Header, { type HeaderProps } from "../../components/header";
import Images, { type ImagesProps } from "../../components/images";
import Notes, { type NotesProps } from "../../components/notes";
import Procedure from "../../components/procedure";

type MarineBuildings1And4Props = {
  buildingInfo: HeaderProps;
  emergencyGeneratorInformation: ImagesProps;
  fpAtsGenLocation: ImagesProps;
  notes: NotesProps;
};

function MarineBuildings1And4({
  buildingInfo,
  emergencyGeneratorInformation,
  fpAtsGenLocation,
  notes,
}: MarineBuildings1And4Props) {
  return (
    <div className="building">
      <Header {...buildingInfo} />
      <Images {...emergencyGeneratorInformation} />
      <Images {...fpAtsGenLocation} />
      <Checklist />
      <ATSInspection atsKind="TSC 80" />
      <Notes {...notes} />
      <Procedure />
    </div>
  );
}

export default MarineBuildings1And4;
export type { MarineBuildings1And4Props };
