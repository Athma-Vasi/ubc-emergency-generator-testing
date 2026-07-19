import ATSInspection from "../../components/atsInspection";
import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import Procedure from "../../components/procedure";

type ICICSRooftopProps = {
  headerProps: HeaderProps;
  emergencyGeneratorInformation: ImagesProps;
  routeToGeneratorAndATS: ImagesProps;
};

function ICICSRooftop({
  emergencyGeneratorInformation,
  headerProps,
  routeToGeneratorAndATS,
}: ICICSRooftopProps) {
  return (
    <div className="building">
      <Header {...headerProps} />
      <Images {...emergencyGeneratorInformation} />
      <Images {...routeToGeneratorAndATS} />
      <Checklist />
      <ATSInspection atsKind="Cummins OPTC A" />
      <Procedure />
    </div>
  );
}

export default ICICSRooftop;
export type { ICICSRooftopProps };
