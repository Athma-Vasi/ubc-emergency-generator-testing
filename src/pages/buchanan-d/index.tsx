import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import type { NotesProps } from "../../components/notes";
import Notes from "../../components/notes";
import Procedure from "../../components/procedure";

type BuchananDProps = {
  buildingInfo: HeaderProps;
  emergencyGeneratorInformation: ImagesProps;
  generatorLocation: ImagesProps;
  routeToATSAndFirePanel: ImagesProps;
  notes: NotesProps;
};

function BuchananD({
  buildingInfo,
  emergencyGeneratorInformation,
  generatorLocation,
  notes,
  routeToATSAndFirePanel,
}: BuchananDProps) {
  return (
    <div className="building">
      <Header {...buildingInfo} />
      <Images {...emergencyGeneratorInformation} />
      <Images {...generatorLocation} />
      <Images {...routeToATSAndFirePanel} />
      <Checklist />
      <ATSInspection atsKind="Unknown" />
      <Notes {...notes} />
      <Procedure />
    </div>
  );
}

export default BuchananD;
export type { BuchananDProps };
