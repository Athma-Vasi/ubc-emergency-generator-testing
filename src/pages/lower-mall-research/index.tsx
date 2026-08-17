import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import Header, { type HeaderProps } from "../../components/header";
import Images, { type ImagesProps } from "../../components/images";
import Procedure from "../../components/procedure";

type LowerMallResearchProps = {
  buildingInfo: HeaderProps;
  fpAtsGenRoute: ImagesProps;
};

function LowerMallResearch({ buildingInfo, fpAtsGenRoute }: LowerMallResearchProps) {
  return (
    <div className="building">
      <Header {...buildingInfo} />
      <Images {...fpAtsGenRoute} />
      <Checklist />
      <ATSInspection atsKind="TSC 800" />
      <Procedure />
    </div>
  );
}

export default LowerMallResearch;
export type { LowerMallResearchProps };
