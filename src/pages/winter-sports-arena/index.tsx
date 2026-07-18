import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import Procedure from "../../components/procedure";

type WinterSportsArenaProps = {
  headerProps: HeaderProps;
  emergencyGeneratorInformation: ImagesProps;
  routeToGeneratorAndATS: ImagesProps;
};

function WinterSportsArena({
  headerProps,
  emergencyGeneratorInformation,
  routeToGeneratorAndATS,
}: WinterSportsArenaProps) {
  return (
    <div className="building">
      <Header {...headerProps} />
      <Images {...emergencyGeneratorInformation} />
      <Images {...routeToGeneratorAndATS} />
      <Checklist atsKind="TSC 80" />
      <Procedure />
    </div>
  );
}

export default WinterSportsArena;
export type { WinterSportsArenaProps };
