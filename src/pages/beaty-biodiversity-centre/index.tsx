import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import type { NotesProps } from "../../components/notes";
import Notes from "../../components/notes";
import Procedure from "../../components/procedure";

type BeatyBiodiversityCentreProps = {
  buildingInfo: HeaderProps;
  emergencyGeneratorInformation: ImagesProps;
  routeToGenATSFireAlarmPanel: ImagesProps;
  notes: NotesProps;
};

function BeatyBiodiversityCentre({
  buildingInfo,
  emergencyGeneratorInformation,
  notes,
  routeToGenATSFireAlarmPanel,
}: BeatyBiodiversityCentreProps) {
  return (
    <div className="building">
      <Header {...buildingInfo} />
      <Images {...emergencyGeneratorInformation} />
      <Images {...routeToGenATSFireAlarmPanel} />
      <Checklist />
      <ATSInspection atsKind="ASCO 7000" />
      <Notes {...notes} />
      <Procedure />
    </div>
  );
}

export default BeatyBiodiversityCentre;
export type { BeatyBiodiversityCentreProps };
