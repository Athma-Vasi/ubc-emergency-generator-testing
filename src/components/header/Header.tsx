type BuildingName = "Pharmacy" | "Life Sciences" | "Chemistry";

type LocationName = "UBC Vancouver" | "UBC Okanagan";

type SectionLinks = { id: string; name: string };

type HeaderProps = {
  name: BuildingName;
  locationName: LocationName;
  address: string;
  floors: Array<number>;
  accountNumber: number;
  monitoringCompany: string;
  monitoringCompanyContact: string;
  sectionLinks: Array<SectionLinks>;
};

function Header({
  accountNumber,
  address,
  floors,
  locationName,
  monitoringCompany,
  monitoringCompanyContact,
  name,
  sectionLinks,
}: HeaderProps) {
  return (
    <header>
      <h1>Welcome to My Website</h1>
    </header>
  );
}

export default Header;
