import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import type { NotesProps } from "../../components/notes";
import Notes from "../../components/notes";
import Procedure from "../../components/procedure";

type HealthSciencesParkadeProps = {
  headerProps: HeaderProps;
  routeToGeneratorAndATS: ImagesProps;
  routeToFireAlarmPanel: ImagesProps;
  notesProps: NotesProps;
};

function HealthSciencesParkade({
  headerProps,
  routeToGeneratorAndATS,
  routeToFireAlarmPanel,
  notesProps,
}: HealthSciencesParkadeProps) {
  return (
    <div className="building">
      <Header {...headerProps} />
      <Images {...routeToGeneratorAndATS} />
      <Images {...routeToFireAlarmPanel} />
      <Checklist atsKind="ASCO Health Sciences Parkade" />
      <Notes {...notesProps} />
      <Procedure />
    </div>
  );
}

export default HealthSciencesParkade;
export type { HealthSciencesParkadeProps };
