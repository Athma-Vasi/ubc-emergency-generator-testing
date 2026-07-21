import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import type { NotesProps } from "../../components/notes";
import Notes from "../../components/notes";
import Procedure from "../../components/procedure";

type BioSciencesSouthProps = {
  buildingInfo: HeaderProps;
  emergencyGeneratorInformation: ImagesProps;
  notes: NotesProps;
  routeToATS: ImagesProps;
  routeToFireAlarmPanel: ImagesProps;
};

function BioSciencesSouth({
  buildingInfo,
  emergencyGeneratorInformation,
  notes,
  routeToATS,
  routeToFireAlarmPanel,
}: BioSciencesSouthProps) {
  return (
    <div className="building">
      <Header {...buildingInfo} />
      <Images {...emergencyGeneratorInformation} />
      <Images {...routeToATS} />
      <Images {...routeToFireAlarmPanel} />
      <Checklist />
      <ATSInspection atsKind="ASCO 7000" />
      <Notes {...notes} />
      <Procedure />
    </div>
  );
}

export default BioSciencesSouth;
export type { BioSciencesSouthProps };
