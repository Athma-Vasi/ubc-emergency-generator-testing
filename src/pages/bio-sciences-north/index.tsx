import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import type { NotesProps } from "../../components/notes";
import Notes from "../../components/notes";
import Procedure from "../../components/procedure";

type BioSciencesNorthProps = {
  buildingInfo: HeaderProps;
  emergencyGeneratorInformation: ImagesProps;
  routeToGenerator: ImagesProps;
  routeToFireAlarmPanel: ImagesProps;
  notes: NotesProps;
};

function BioSciencesNorth({
  buildingInfo,
  emergencyGeneratorInformation,
  notes,
  routeToFireAlarmPanel,
  routeToGenerator,
}: BioSciencesNorthProps) {
  return (
    <div className="building">
      <Header {...buildingInfo} />
      <Images {...emergencyGeneratorInformation} />
      <Images {...routeToGenerator} />
      <Images {...routeToFireAlarmPanel} />
      <Checklist />
      <ATSInspection atsKind="ASCO 7000" />
      <Notes {...notes} />
      <Procedure />
    </div>
  );
}

export default BioSciencesNorth;
export type { BioSciencesNorthProps };
