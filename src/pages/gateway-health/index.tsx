import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import type { NotesProps } from "../../components/notes";
import Notes from "../../components/notes";
import Procedure from "../../components/procedure";

type GatewayHealthProps = {
  headerProps: HeaderProps;
  routeToGenerator: ImagesProps;
  routeToATSAndFireAlarmPanel: ImagesProps;
  notesProps: NotesProps;
};

function GatewayHealth({
  headerProps,
  notesProps,
  routeToATSAndFireAlarmPanel,
  routeToGenerator,
}: GatewayHealthProps) {
  return (
    <div className="building">
      <Header {...headerProps} />
      <Images {...routeToGenerator} />
      <Images {...routeToATSAndFireAlarmPanel} />
      <Checklist />
      <ATSInspection atsKind="ASCO 7000" />
      <Notes {...notesProps} />
      <Procedure />
    </div>
  );
}

export default GatewayHealth;
export type { GatewayHealthProps };
