import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import type { NotesProps } from "../../components/notes";
import Notes from "../../components/notes";
import Procedure from "../../components/procedure";

type RoseGardenParkadeProps = {
  buildingInfo: HeaderProps;
  emergencyGeneratorInformation: ImagesProps;
  routeToGenATSAndFP: ImagesProps;
  notes: NotesProps;
};

function RoseGardenParkade({
  buildingInfo,
  emergencyGeneratorInformation,
  notes,
  routeToGenATSAndFP,
}: RoseGardenParkadeProps) {
  return (
    <div className="building">
      <Header {...buildingInfo} />
      <Images {...emergencyGeneratorInformation} />
      <Images {...routeToGenATSAndFP} />
      <Checklist />
      <ATSInspection atsKind="ASCO 300" />
      <Notes {...notes} />
      <Procedure />
    </div>
  );
}

export default RoseGardenParkade;
export type { RoseGardenParkadeProps };
