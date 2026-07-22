import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import type { NotesProps } from "../../components/notes";
import Notes from "../../components/notes";
import Procedure from "../../components/procedure";

type GageASouthTowerProps = {
  buildingInfo: HeaderProps;
  emergencyGeneratorInformation: ImagesProps;
  propaneTankLocation: ImagesProps;
  routeToATSFirePanelAndGenerator: ImagesProps;
  notes: NotesProps;
};

function GageASouthTower({
  buildingInfo,
  emergencyGeneratorInformation,
  notes,
  propaneTankLocation,
  routeToATSFirePanelAndGenerator,
}: GageASouthTowerProps) {
  return (
    <div className="building">
      <Header {...buildingInfo} />
      <Images {...emergencyGeneratorInformation} />
      <Images {...propaneTankLocation} />
      <Images {...routeToATSFirePanelAndGenerator} />
      <Checklist />
      <ATSInspection atsKind="Unknown" />
      <Notes {...notes} />
      <Procedure />
    </div>
  );
}

export default GageASouthTower;
export type { GageASouthTowerProps };
