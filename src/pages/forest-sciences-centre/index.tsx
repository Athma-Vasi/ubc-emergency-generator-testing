import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import type { NotesProps } from "../../components/notes";
import Notes from "../../components/notes";
import Procedure from "../../components/procedure";

type ForestSciencesCentreProps = {
  headerProps: HeaderProps;
  emergencyGeneratorInformation: ImagesProps;
  routeToGeneratorAndATS: ImagesProps;
  notesProps: NotesProps;
};

function ForestSciencesCentre({
  emergencyGeneratorInformation,
  headerProps,
  notesProps,
  routeToGeneratorAndATS,
}: ForestSciencesCentreProps) {
  return (
    <div className="building">
      <Header {...headerProps} />
      <Images {...emergencyGeneratorInformation} />
      <Images {...routeToGeneratorAndATS} />
      <Checklist />
      <ATSInspection atsKind="Onan BT 600" />
      <ATSInspection atsKind="TornaTech TFR 600/125/18" />
      <Notes {...notesProps} />
      <Procedure />
    </div>
  );
}

export default ForestSciencesCentre;
export type { ForestSciencesCentreProps };
