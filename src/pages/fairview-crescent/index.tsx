import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import type { NotesProps } from "../../components/notes";
import Notes from "../../components/notes";
import Procedure from "../../components/procedure";

type FairviewCrescentProps = {
  headerProps: HeaderProps;
  emergencyGeneratorInformation: ImagesProps;
  routeToGenerator: ImagesProps;
  routeToATSAndFireAlarmPanel: ImagesProps;
  notesProps: NotesProps;
};

function FairviewCrescent({
  headerProps,
  emergencyGeneratorInformation,
  routeToATSAndFireAlarmPanel,
  routeToGenerator,
  notesProps,
}: FairviewCrescentProps) {
  return (
    <div className="building">
      <Header {...headerProps} />
      <Images {...emergencyGeneratorInformation} />
      <Images {...routeToGenerator} />
      <Images {...routeToATSAndFireAlarmPanel} />
      <Checklist atsKind="TSC 80" />
      <Notes {...notesProps} />
      <Procedure />
    </div>
  );
}

export default FairviewCrescent;
export type { FairviewCrescentProps };
