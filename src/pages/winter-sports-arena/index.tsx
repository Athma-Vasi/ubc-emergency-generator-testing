import Checklist from "../../components/checklist";
import type { HeaderProps } from "../../components/header";
import Header from "../../components/header";
import type { ImagesProps } from "../../components/images";
import Images from "../../components/images";
import Procedure from "../../components/procedure";

type WinterSportsArenaProps = {
  headerProps: HeaderProps;
  routeToGeneratorAndATS: ImagesProps;
};

function WinterSportsArena({ headerProps, routeToGeneratorAndATS }: WinterSportsArenaProps) {
  return (
    <div className="building">
      <Header {...headerProps} />
      <Images {...routeToGeneratorAndATS} />
      <Checklist atsKind="TSC 80" />
      <Procedure />
    </div>
  );
}

export default WinterSportsArena;
export type { WinterSportsArenaProps };
