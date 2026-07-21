import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import type { NotesProps } from "../../components/notes";
import Notes from "../../components/notes";
import Procedure from "../../components/procedure";

type BioSciencesWestProps = {
  buildingInfo: HeaderProps;
  emergencyGeneratorInformation: ImagesProps;
  routeToGenerator: ImagesProps;
  routeToATSAndFirePanel: ImagesProps;
  notes: NotesProps;
};

function BioSciencesWest({
  buildingInfo,
  emergencyGeneratorInformation,
  notes,
  routeToATSAndFirePanel,
  routeToGenerator,
}: BioSciencesWestProps) {
  return (
    <div className="building">
      <Header {...buildingInfo} />
      <Images {...emergencyGeneratorInformation} />
      <Images {...routeToGenerator} />
      <Images {...routeToATSAndFirePanel} />
      <Checklist />
      <ATSInspection atsKind="ASCO 7000" />
      <Notes {...notes} />
      <Procedure />
    </div>
  );
}

export default BioSciencesWest;
export type { BioSciencesWestProps };
