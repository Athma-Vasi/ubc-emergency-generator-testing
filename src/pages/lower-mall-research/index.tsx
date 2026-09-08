import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import Header, { type HeaderProps } from "../../components/header";
import Images, { type ImagesProps } from "../../components/images";
import Procedure from "../../components/procedure";

type LowerMallResearchProps = {
  buildingInfo: HeaderProps;
  emergencyGeneratorInfo: ImagesProps;
  fpAtsGenRoute: ImagesProps;
};

function LowerMallResearch({
  buildingInfo,
  emergencyGeneratorInfo,
  fpAtsGenRoute,
}: LowerMallResearchProps) {
  return (
    <div className="building">
      <Header {...buildingInfo} />
      <Images {...fpAtsGenRoute} />
      <Images {...emergencyGeneratorInfo} />
      <Checklist />
      <ATSInspection atsKind="TSC 800" />
      <Procedure />
    </div>
  );
}

export default LowerMallResearch;
export type { LowerMallResearchProps };
