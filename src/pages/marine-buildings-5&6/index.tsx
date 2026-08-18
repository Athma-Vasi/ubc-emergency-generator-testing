import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import Header, { type HeaderProps } from "../../components/header";
import Images, { type ImagesProps } from "../../components/images";
import Notes, { type NotesProps } from "../../components/notes";
import Procedure from "../../components/procedure";

type MarineBuildings5And6Props = {
  buildingInfo: HeaderProps;
  fpAtsGenRoute: ImagesProps;
  notes: NotesProps;
};

function MarineBuildings5And6({ buildingInfo, fpAtsGenRoute, notes }: MarineBuildings5And6Props) {
  return (
    <div className="building">
      <Header {...buildingInfo} />
      <Images {...fpAtsGenRoute} />
      <Checklist />
      <ATSInspection atsKind="TSC 80" />
      <Notes {...notes} />
      <Procedure />
    </div>
  );
}

export default MarineBuildings5And6;
export type { MarineBuildings5And6Props };
