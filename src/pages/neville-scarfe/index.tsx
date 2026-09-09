import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import Procedure from "../../components/procedure";

type NevilleScarfeProps = {
  buildingInfo: HeaderProps;
  routeToGenATSAndFP: ImagesProps;
};

function NevilleScarfe({ buildingInfo, routeToGenATSAndFP }: NevilleScarfeProps) {
  <div className="building">
    <Header {...buildingInfo} />
    <Images {...routeToGenATSAndFP} />
    <Checklist />
    <ATSInspection atsKind="Unknown" />
    <Procedure />
  </div>;
}

export default NevilleScarfe;
export type { NevilleScarfeProps };
