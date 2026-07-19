import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import type { NotesProps } from "../../components/notes";
import Notes from "../../components/notes";
import Procedure from "../../components/procedure";

type BrimacombeProps = {
  headerProps: HeaderProps;
  generatorLocation: ImagesProps;
  routeToATSAndFirePanel: ImagesProps;
  routeToLastATS: ImagesProps;
  notesProps: NotesProps;
};

function Brimacombe({
  generatorLocation,
  headerProps,
  notesProps,
  routeToATSAndFirePanel,
  routeToLastATS,
}: BrimacombeProps) {
  return (
    <div className="building">
      <Header {...headerProps} />
      <Images {...generatorLocation} />
      <Images {...routeToATSAndFirePanel} />
      <Images {...routeToLastATS} />
      <Checklist />
      <ATSInspection atsKind="ASCO 7000" />
      <ATSInspection atsKind="ASCO 300" />
      <Notes {...notesProps} />
      <Procedure />
    </div>
  );
}

export default Brimacombe;
export type { BrimacombeProps };
