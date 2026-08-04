import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import Header, { type HeaderProps } from "../../components/header";
import Images, { type ImagesProps } from "../../components/images";
import Notes, { type NotesProps } from "../../components/notes";
import Procedure from "../../components/procedure";

type BuchananTowerProps = {
  buildingInfo: HeaderProps;
  routeToGen: ImagesProps;
  notes: NotesProps;
};

function BuchananTower({ buildingInfo, notes, routeToGen }: BuchananTowerProps) {
  return (
    <div className="building">
      <Header {...buildingInfo} />
      <Images {...routeToGen} />
      <Notes {...notes} />
      <Checklist />
      <ATSInspection atsKind="ASCO 300" />
      <Procedure />
    </div>
  );
}

export default BuchananTower;
export type { BuchananTowerProps };
