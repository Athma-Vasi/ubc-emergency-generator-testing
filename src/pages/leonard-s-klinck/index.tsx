import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import type { NotesProps } from "../../components/notes";
import Notes from "../../components/notes";
import Procedure from "../../components/procedure";

type LeonardSKlinckProps = {
  buildingInfo: HeaderProps;
  routeToGenATSAndFP: ImagesProps;
  ahu1VFDLocation: ImagesProps;
  notes: NotesProps;
};

function LeonardSKlinck({
  buildingInfo,
  notes,
  ahu1VFDLocation,
  routeToGenATSAndFP,
}: LeonardSKlinckProps) {
  return (
    <div className="building">
      <Header {...buildingInfo} />
      <Images {...routeToGenATSAndFP} />
      <Images {...ahu1VFDLocation} />
      <Notes {...notes} />
      <Checklist />
      <ATSInspection atsKind="Unknown" />
      <Procedure />
    </div>
  );
}

export default LeonardSKlinck;
export type { LeonardSKlinckProps };
