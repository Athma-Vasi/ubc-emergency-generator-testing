import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import type { NotesProps } from "../../components/notes";
import Notes from "../../components/notes";
import Procedure from "../../components/procedure";

type GageBNorthTowerProps = {
  buildingInfo: HeaderProps;
  emergencyGeneratorInformation: ImagesProps;
  generatorLocation: ImagesProps;
  notes: NotesProps;
};

function GageBNorthTower({
  buildingInfo,
  emergencyGeneratorInformation,
  generatorLocation,
  notes,
}: GageBNorthTowerProps) {
  return (
    <div className="building">
      <Header {...buildingInfo} />
      <Images {...emergencyGeneratorInformation} />
      <Images {...generatorLocation} />
      <Checklist />
      <ATSInspection atsKind="Unknown" />
      <Notes {...notes} />
      <Procedure />
    </div>
  );
}

export default GageBNorthTower;
export type { GageBNorthTowerProps };
