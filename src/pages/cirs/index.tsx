import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import Procedure from "../../components/procedure";

type CIRSProps = {
  buildingInfo: HeaderProps;
  genFpAtsRoute: ImagesProps;
};

function CIRS({ buildingInfo, genFpAtsRoute }: CIRSProps) {
  return (
    <div className="building">
      <Header {...buildingInfo} />
      <Images {...genFpAtsRoute} />
      <Checklist />
      <ATSInspection atsKind="ASCO 7000" />
      <Procedure />
    </div>
  );
}

export default CIRS;
export type { CIRSProps };
