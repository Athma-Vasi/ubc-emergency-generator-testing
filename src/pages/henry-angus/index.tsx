import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import type { NotesProps } from "../../components/notes";
import Notes from "../../components/notes";
import Procedure from "../../components/procedure";

type HenryAngusProps = {
  atsAndFPLocation: ImagesProps;
  buildingInfo: HeaderProps;
  emergencyGeneratorInfo: ImagesProps;
  generatorLocation: ImagesProps;
  notes: NotesProps;
};

function HenryAngus({
  atsAndFPLocation,
  buildingInfo,
  emergencyGeneratorInfo,
  generatorLocation,
  notes,
}: HenryAngusProps) {
  return (
    <div className="building">
      <Header {...buildingInfo} />
      <Images {...generatorLocation} />
      <Images {...atsAndFPLocation} />
      <Images {...emergencyGeneratorInfo} />
      <Checklist />
      <ATSInspection atsKind="Eaton ATC-300" />
      <Notes {...notes} />
      <Procedure />
    </div>
  );
}

export default HenryAngus;
export type { HenryAngusProps };
