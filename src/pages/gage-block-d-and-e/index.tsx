import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import type { NotesProps } from "../../components/notes";
import Notes from "../../components/notes";
import Procedure from "../../components/procedure";

type GageBlockDAndEProps = {
  buildingInfo: HeaderProps;
  emergencyGeneratorInfo: ImagesProps;
  routeToGenATSAndFP: ImagesProps;
  notes: NotesProps;
};

function GageBlockDAndE({
  buildingInfo,
  emergencyGeneratorInfo,
  notes,
  routeToGenATSAndFP,
}: GageBlockDAndEProps) {
  return (
    <div className="building">
      <Header {...buildingInfo} />
      <Images {...routeToGenATSAndFP} />
      <Images {...emergencyGeneratorInfo} />
      <Notes {...notes} />
      <Checklist />
      <ATSInspection atsKind="ASCO 300" />
      <Procedure />
    </div>
  );
}

export default GageBlockDAndE;
export type { GageBlockDAndEProps };
