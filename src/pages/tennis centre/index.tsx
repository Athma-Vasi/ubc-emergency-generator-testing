import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import Procedure from "../../components/procedure";

type TennisCentreProps = {
  headerProps: HeaderProps;
  emergencyGeneratorInformation: ImagesProps;
  routeToFireAlarmPanel: ImagesProps;
  routeToGeneratorAndATS: ImagesProps;
};

function TennisCentre({
  headerProps,
  emergencyGeneratorInformation,
  routeToFireAlarmPanel,
  routeToGeneratorAndATS,
}: TennisCentreProps) {
  return (
    <div className="building">
      <Header {...headerProps} />
      <Images {...emergencyGeneratorInformation} />
      <Images {...routeToGeneratorAndATS} />
      <Images {...routeToFireAlarmPanel} />
      <Checklist atsKind="ASCO 7000" />
      <Procedure />
    </div>
  );
}

export default TennisCentre;
export type { TennisCentreProps };
