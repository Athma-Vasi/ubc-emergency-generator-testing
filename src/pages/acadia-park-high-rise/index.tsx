import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import Procedure from "../../components/procedure";

type AcadiaParkHighRiseProps = {
  headerProps: HeaderProps;
  emergencyGeneratorInformation: ImagesProps;
  routeToGenerator: ImagesProps;
  routeToATSAndFireAlarmPanel: ImagesProps;
};

function AcadiaParkHighRise({
  headerProps,
  emergencyGeneratorInformation,
  routeToATSAndFireAlarmPanel,
  routeToGenerator,
}: AcadiaParkHighRiseProps) {
  return (
    <div className="building">
      <Header {...headerProps} />
      <Images {...emergencyGeneratorInformation} />
      <Images {...routeToGenerator} />
      <Images {...routeToATSAndFireAlarmPanel} />
      <Checklist />
      <ATSInspection atsKind="ASCO 300" />
      <Procedure />
    </div>
  );
}

export default AcadiaParkHighRise;
export type { AcadiaParkHighRiseProps };
