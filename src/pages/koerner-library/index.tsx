import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import type { NotesProps } from "../../components/notes";
import Notes from "../../components/notes";
import Procedure from "../../components/procedure";

type KoernerLibraryProps = {
  buildingInfo: HeaderProps;
  emergencyGeneratorInformation: ImagesProps;
  routeToGenATSAndFP: ImagesProps;
  routeToElevators: ImagesProps;
  notes: NotesProps;
};

function KoernerLibrary({
  buildingInfo,
  notes,
  routeToElevators,
  routeToGenATSAndFP,
  emergencyGeneratorInformation,
}: KoernerLibraryProps) {
  return (
    <div className="building">
      <Header {...buildingInfo} />
      <Images {...emergencyGeneratorInformation} />
      <Images {...routeToGenATSAndFP} />
      <Images {...routeToElevators} />
      <Checklist />
      <ATSInspection atsKind="TSBU-600V-250A" />
      <Notes {...notes} />
      <Procedure />
    </div>
  );
}

export default KoernerLibrary;
export type { KoernerLibraryProps };
