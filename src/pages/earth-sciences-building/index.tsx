import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import Procedure from "../../components/procedure";

type EarthSciencesBuildingProps = {
  buildingInfo: HeaderProps;
  generatorRoute: ImagesProps;
  fpATSRoute: ImagesProps;
};

function EarthSciencesBuilding({
  buildingInfo,
  fpATSRoute,
  generatorRoute,
}: EarthSciencesBuildingProps) {
  return (
    <div className="building">
      <Header {...buildingInfo} />
      <Images {...generatorRoute} />
      <Images {...fpATSRoute} />
      <Checklist />
      <ATSInspection atsKind="Cummins OPTC A" />
      <Procedure />
    </div>
  );
}

export default EarthSciencesBuilding;
export type { EarthSciencesBuildingProps };
