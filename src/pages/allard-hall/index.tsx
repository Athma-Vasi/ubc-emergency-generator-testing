import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import type { NotesProps } from "../../components/notes";
import Notes from "../../components/notes";
import Procedure from "../../components/procedure";

type AllardHallProps = {
  buildingInfo: HeaderProps;
  emergencyGeneratorInformation: ImagesProps;
  generatorAndParkingLocation: ImagesProps;
  routeToFirePanelAndATS: ImagesProps;
  notes: NotesProps;
};

function AllardHall({
  buildingInfo,
  emergencyGeneratorInformation,
  generatorAndParkingLocation,
  notes,
  routeToFirePanelAndATS,
}: AllardHallProps) {
  return (
    <div className="building">
      <Header {...buildingInfo} />
      <Images {...emergencyGeneratorInformation} />
      <Images {...generatorAndParkingLocation} />
      <Images {...routeToFirePanelAndATS} />
      <Checklist />
      <ATSInspection atsKind="ASCO 7000" />
      <Notes {...notes} />
      <Procedure />
    </div>
  );
}

export default AllardHall;
export type { AllardHallProps };
