import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import type { NotesProps } from "../../components/notes";
import Notes from "../../components/notes";
import Procedure from "../../components/procedure";

type MuseumOfAnthropologyProps = {
  buildingInfo: HeaderProps;
  emergencyGeneratorInformation: ImagesProps;
  routeToGenerator: ImagesProps;
  routeToATS1And2AndChillers: ImagesProps;
  routeTo3rdATSAndFirePanel: ImagesProps;
  notes: NotesProps;
};

function MuseumOfAnthropology({
  buildingInfo,
  emergencyGeneratorInformation,
  notes,
  routeTo3rdATSAndFirePanel,
  routeToATS1And2AndChillers,
  routeToGenerator,
}: MuseumOfAnthropologyProps) {
  return (
    <div className="building">
      <Header {...buildingInfo} />
      <Images {...emergencyGeneratorInformation} />
      <Images {...routeToGenerator} />
      <Images {...routeToATS1And2AndChillers} />
      <Images {...routeTo3rdATSAndFirePanel} />
      <Checklist />
      <ATSInspection atsKind="ASCO 7000" />
      <ATSInspection atsKind="ASCO 300" />
      <ATSInspection atsKind="TSC 80" />
      <Notes {...notes} />
      <Procedure />
    </div>
  );
}

export default MuseumOfAnthropology;
export type { MuseumOfAnthropologyProps };
