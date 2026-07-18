import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import Procedure from "../../components/procedure";

type TennisCentreProps = {
  headerProps: HeaderProps;
  routeToFireAlarmPanel: ImagesProps;
  routeToGeneratorAndATS: ImagesProps;
};

function TennisCentre({
  headerProps,
  routeToFireAlarmPanel,
  routeToGeneratorAndATS,
}: TennisCentreProps) {
  return (
    <div className="building">
      <Header {...headerProps} />
      <Images {...routeToGeneratorAndATS} />
      <Images {...routeToFireAlarmPanel} />
      <Checklist atsKind="ASCO 7000" />
      <Procedure />
    </div>
  );
}

export default TennisCentre;
