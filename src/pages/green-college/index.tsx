import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import type { NotesProps } from "../../components/notes";
import Notes from "../../components/notes";
import Procedure from "../../components/procedure";

type GreenCollegeProps = {
  buildingInfo: HeaderProps;
  emergencyGeneratorInformation: ImagesProps;
  routeToGenATSAndFP: ImagesProps;
  notes: NotesProps;
};

function GreenCollege({
  buildingInfo,
  emergencyGeneratorInformation,
  notes,
  routeToGenATSAndFP,
}: GreenCollegeProps) {
  return (
    <div className="building">
      <Header {...buildingInfo} />
      <Images {...emergencyGeneratorInformation} />
      <Images {...routeToGenATSAndFP} />
      <Checklist />
      <ATSInspection atsKind="TS 753MCJL-250A-600" />
      <Notes {...notes} />
      <Procedure />
    </div>
  );
}

export default GreenCollege;
export type { GreenCollegeProps };
