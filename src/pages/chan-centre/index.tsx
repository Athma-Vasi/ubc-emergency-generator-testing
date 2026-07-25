import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import type { NotesProps } from "../../components/notes";
import Notes from "../../components/notes";
import Procedure from "../../components/procedure";

type ChanCentreProps = {
  buildingInfo: HeaderProps;
  emergencyGeneratorInformation: ImagesProps;
  routeToMechanicalRoom: ImagesProps;
  routeToGeneratorAndATS: ImagesProps;
  notes: NotesProps;
};

function ChanCentre({
  buildingInfo,
  emergencyGeneratorInformation,
  notes,
  routeToGeneratorAndATS,
  routeToMechanicalRoom,
}: ChanCentreProps) {
  return (
    <div className="building">
      <Header {...buildingInfo} />
      <Images {...emergencyGeneratorInformation} />
      <Images {...routeToMechanicalRoom} />
      <Images {...routeToGeneratorAndATS} />
      <Checklist />
      <ATSInspection atsKind="TS 753MCJL-250A-600" />
      <Notes {...notes} />
      <Procedure />
    </div>
  );
}

export default ChanCentre;
export type { ChanCentreProps };
