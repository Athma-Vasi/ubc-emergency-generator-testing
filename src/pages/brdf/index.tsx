import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import Header, { type HeaderProps } from "../../components/header";
import Images, { type ImagesProps } from "../../components/images";
import Notes, { type NotesProps } from "../../components/notes";
import Procedure from "../../components/procedure";

type BRDFProps = {
  atsGenRoute: ImagesProps;
  buildingInfo: HeaderProps;
  emergencyGeneratorInfo: ImagesProps;
  notes: NotesProps;
};

function BRDF({ atsGenRoute, buildingInfo, emergencyGeneratorInfo, notes }: BRDFProps) {
  return (
    <div className="building">
      <Header {...buildingInfo} />
      <Images {...atsGenRoute} />
      <Images {...emergencyGeneratorInfo} />
      <Checklist />
      <ATSInspection atsKind="ASCO 7000" />
      <Notes {...notes} />
      <Procedure />
    </div>
  );
}

export default BRDF;
export type { BRDFProps };
