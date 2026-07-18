import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import Procedure from "../../components/procedure";

type PharmacyProps = {
  headerProps: HeaderProps;
  routeToElectricalRoom: ImagesProps;
  routeToGenerators: ImagesProps;
  routeToFireAlarmPanel: ImagesProps;
  emergencyGeneratorInformationImages: ImagesProps;
};

function Pharmacy({
  emergencyGeneratorInformationImages,
  headerProps,
  routeToElectricalRoom,
  routeToFireAlarmPanel,
  routeToGenerators,
}: PharmacyProps) {
  return (
    <div className="building">
      <Header {...headerProps} />
      <Images {...routeToGenerators} />
      <Images {...routeToFireAlarmPanel} />
      <Images {...routeToElectricalRoom} />
      <Images {...emergencyGeneratorInformationImages} />
      <Checklist atsKind="ASCO 7000" />
      <Procedure />
    </div>
  );
}

export default Pharmacy;
export type { PharmacyProps };
