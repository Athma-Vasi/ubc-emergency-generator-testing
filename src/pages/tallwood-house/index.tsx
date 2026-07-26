import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import Procedure from "../../components/procedure";

type TallwoodHouseProps = {
  buildingInfo: HeaderProps;
  emergencyGeneratorInformation: ImagesProps;
  routeToATSAndFP: ImagesProps;
};

function TallwoodHouse({
  buildingInfo,
  emergencyGeneratorInformation,
  routeToATSAndFP,
}: TallwoodHouseProps) {
  return (
    <div className="building">
      <Header {...buildingInfo} />
      <Images {...emergencyGeneratorInformation} />
      <Images {...routeToATSAndFP} />
      <Checklist />
      <ATSInspection atsKind="Thomson GCS" />
      <Procedure />
    </div>
  );
}

export default TallwoodHouse;
export type { TallwoodHouseProps };
