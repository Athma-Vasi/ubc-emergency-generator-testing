type BuildingName =
  | "Pharmacy"
  | "Tennis Centre"
  | "Doug Mitchell Thunderbird Sports Centre"
  | "Health Sciences Parkade"
  | "Fairview Crescent";

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
      <h1>{`UBC Emergency Generator Testing - ${name}`}</h1>
      <section>
        <p>{`Location: ${locationName}`}</p>
        <p>{`Address: ${address}`}</p>
        <p>{`Floors: ${floors.join(", ")}`}</p>
        <p>{`Account Number: ${accountNumber}`}</p>
        <p>{`Monitoring Company: ${monitoringCompany}`}</p>
        <p>{`Monitoring Company Contact: ${monitoringCompanyContact}`}</p>
      </section>

      {/* <nav>
        <ul>
          {sectionLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav> */}
    </header>
  );
}

export default Header;
export type { HeaderProps };
