import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import Procedure from "../../components/procedure";

type DouglasKennyProps = {
  buildingInfo: HeaderProps;
  routeToFPAndATS: ImagesProps;
};

function DouglasKenny({ buildingInfo, routeToFPAndATS }: DouglasKennyProps) {
  return (
    <div className="building">
      <Header {...buildingInfo} />
      <Images {...routeToFPAndATS} />
      <Checklist />
      <ATSInspection atsKind="ASCO 7000" />
      <Procedure />
    </div>
  );
}

export default DouglasKenny;
export type { DouglasKennyProps };
