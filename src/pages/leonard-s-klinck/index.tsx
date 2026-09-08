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
  ahu1VFDLocation: ImagesProps;
  buildingInfo: HeaderProps;
  emergencyGeneratorInformation: ImagesProps;
  notes: NotesProps;
  routeToGenATSAndFP: ImagesProps;
};

function LeonardSKlinck({
  ahu1VFDLocation,
  buildingInfo,
  emergencyGeneratorInformation,
  notes,
  routeToGenATSAndFP,
}: LeonardSKlinckProps) {
  return (
    <div className="building">
      <Header {...buildingInfo} />
      <Images {...routeToGenATSAndFP} />
      <Images {...ahu1VFDLocation} />
      <Images {...emergencyGeneratorInformation} />
      <Notes {...notes} />
      <Checklist />
      <ATSInspection atsKind="Unknown" />
      <Procedure />
    </div>
  );
}

export default LeonardSKlinck;
export type { LeonardSKlinckProps };
