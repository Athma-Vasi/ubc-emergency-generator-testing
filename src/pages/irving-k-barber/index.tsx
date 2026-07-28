import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import Procedure from "../../components/procedure";

type IrvingKBarberProps = {
  buildingInfo: HeaderProps;
  emergencyGeneratorInformation: ImagesProps;
  routeToGenATSAndFP: ImagesProps;
};

function IrvingKBarber({
  buildingInfo,
  emergencyGeneratorInformation,
  routeToGenATSAndFP,
}: IrvingKBarberProps) {
  return (
    <div className="building">
      <Header {...buildingInfo} />
      <Images {...emergencyGeneratorInformation} />
      <Images {...routeToGenATSAndFP} />
      <Checklist />
      <ATSInspection atsKind="Unknown" />
      <Procedure />
    </div>
  );
}

export default IrvingKBarber;
export type { IrvingKBarberProps };
