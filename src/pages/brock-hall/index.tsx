import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import Header, { type HeaderProps } from "../../components/header";
import Images, { type ImagesProps } from "../../components/images";
import Notes, { type NotesProps } from "../../components/notes";
import Procedure from "../../components/procedure";

type BrockHallProps = {
  buildingInfo: HeaderProps;
  emergencyGeneratorInformation: ImagesProps;
  generatorLocation: ImagesProps;
  atsAndFirePanelLocation: ImagesProps;
  secondATSAndFirePanelRoute: ImagesProps;
  thirdFirePanelRoute: ImagesProps;
  notes: NotesProps;
};

function BrockHall({
  atsAndFirePanelLocation,
  buildingInfo,
  emergencyGeneratorInformation,
  generatorLocation,
  notes,
  secondATSAndFirePanelRoute,
  thirdFirePanelRoute,
}: BrockHallProps) {
  return (
    <div className="building">
      <Header {...buildingInfo} />
      <Images {...emergencyGeneratorInformation} />
      <Images {...generatorLocation} />
      <Images {...atsAndFirePanelLocation} />
      <Images {...secondATSAndFirePanelRoute} />
      <Images {...thirdFirePanelRoute} />
      <Checklist />
      <ATSInspection atsKind="ASCO 7000" />
      <Notes {...notes} />
      <Procedure />
    </div>
  );
}

export default BrockHall;
export type { BrockHallProps };
