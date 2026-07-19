import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import Procedure from "../../components/procedure";

type AcadiaParkHighRiseProps = {
  headerProps: HeaderProps;
  routeToGenerator: ImagesProps;
  routeToATSAndFireAlarmPanel: ImagesProps;
};

function AcadiaParkHighRise({
  headerProps,
  routeToATSAndFireAlarmPanel,
  routeToGenerator,
}: AcadiaParkHighRiseProps) {
  return (
    <div className="building">
      <Header {...headerProps} />
      <Images {...routeToGenerator} />
      <Images {...routeToATSAndFireAlarmPanel} />
      <Checklist atsKind="ASCO Health Sciences Parkade" />
      <Procedure />
    </div>
  );
}

export default AcadiaParkHighRise;
export type { AcadiaParkHighRiseProps };
