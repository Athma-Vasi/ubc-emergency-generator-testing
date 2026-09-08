import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import Header, { type HeaderProps } from "../../components/header";
import Images, { type ImagesProps } from "../../components/images";
import Notes, { type NotesProps } from "../../components/notes";
import Procedure from "../../components/procedure";

type BuchananTowerProps = {
  buildingInfo: HeaderProps;
  emergencyGeneratorInfo: ImagesProps;
  routeToGen: ImagesProps;
  notes: NotesProps;
};

function BuchananTower({
  buildingInfo,
  emergencyGeneratorInfo,
  notes,
  routeToGen,
}: BuchananTowerProps) {
  return (
    <div className="building">
      <Header {...buildingInfo} />
      <Images {...routeToGen} />
      <Images {...emergencyGeneratorInfo} />
      <Notes {...notes} />
      <Checklist />
      <ATSInspection atsKind="ASCO 300" />
      <Procedure />
    </div>
  );
}

export default BuchananTower;
export type { BuchananTowerProps };
