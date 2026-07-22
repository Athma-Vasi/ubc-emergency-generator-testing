import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import type { NotesProps } from "../../components/notes";
import Notes from "../../components/notes";
import Procedure from "../../components/procedure";

type ChemicalPhysicsProps = {
  buildingInfo: HeaderProps;
  emergencyGeneratorInformation: ImagesProps;
  routeToFirstATSAndFirePanel: ImagesProps;
  routeToSecondATS: ImagesProps;
  notes: NotesProps;
};

function ChemicalPhysics({
  buildingInfo,
  emergencyGeneratorInformation,
  routeToFirstATSAndFirePanel,
  routeToSecondATS,
  notes,
}: ChemicalPhysicsProps) {
  return (
    <div className="building">
      <Header {...buildingInfo} />
      <Images {...emergencyGeneratorInformation} />
      <Images {...routeToFirstATSAndFirePanel} />
      <Images {...routeToSecondATS} />
      <Checklist />
      <ATSInspection atsKind="Eaton ATC-300" />
      <Notes {...notes} />
      <Procedure />
    </div>
  );
}

export default ChemicalPhysics;
export type { ChemicalPhysicsProps };
