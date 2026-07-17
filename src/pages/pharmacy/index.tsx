import Header from "../../components/header";
import type { HeaderProps } from "../../components/header";
import type { SafetyProps } from "../../components/safety";
import Safety from "../../components/safety";

type PharmacyProps = {
  headerProps: HeaderProps;
  safetyProps: SafetyProps;
};

function Pharmacy({ headerProps, safetyProps }: PharmacyProps) {
  return (
    <div>
      <Header {...headerProps} />
      <Safety {...safetyProps} />
    </div>
  );
}

export default Pharmacy;
export type { PharmacyProps };
