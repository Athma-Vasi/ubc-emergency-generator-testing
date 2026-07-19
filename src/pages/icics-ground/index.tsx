import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import type { NotesProps } from "../../components/notes";
import Notes from "../../components/notes";
import Procedure from "../../components/procedure";

type ICICSGroundProps = {
  headerProps: HeaderProps;
  emergencyGeneratorInformation: ImagesProps;
  routeToGenerator: ImagesProps;
  routeToFireAlarmPanelAndATS: ImagesProps;
  notesProps: NotesProps;
};

function ICICSGround({
  emergencyGeneratorInformation,
  headerProps,
  notesProps,
  routeToFireAlarmPanelAndATS,
  routeToGenerator,
}: ICICSGroundProps) {
  return (
    <div className="building">
      <Header {...headerProps} />
      <Images {...emergencyGeneratorInformation} />
      <Images {...routeToGenerator} />
      <Images {...routeToFireAlarmPanelAndATS} />
      <Checklist />
      <ATSInspection atsKind="TSC 800" />
      <Notes {...notesProps} />
      <Procedure />
    </div>
  );
}

export default ICICSGround;
export type { ICICSGroundProps };
