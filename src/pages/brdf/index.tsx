import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import Header, { type HeaderProps } from "../../components/header";
import Images, { type ImagesProps } from "../../components/images";
import Notes, { type NotesProps } from "../../components/notes";
import Procedure from "../../components/procedure";

type BRDFProps = {
  buildingInfo: HeaderProps;
  atsGenRoute: ImagesProps;
  notes: NotesProps;
};

function BRDF({ buildingInfo, atsGenRoute, notes }: BRDFProps) {
  return (
    <div className="building">
      <Header {...buildingInfo} />
      <Images {...atsGenRoute} />
      <Checklist />
      <ATSInspection atsKind="ASCO 7000" />
      <Notes {...notes} />
      <Procedure />
    </div>
  );
}

export default BRDF;
export type { BRDFProps };
