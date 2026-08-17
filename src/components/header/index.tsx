type BuildingName =
  | "Pharmacy"
  | "Tennis Centre"
  | "Doug Mitchell Thunderbird Sports Centre"
  | "Health Sciences Parkade"
  | "Fairview Crescent"
  | "Acadia Park High Rise"
  | "Gateway Health"
  | "Forest Sciences Centre"
  | "ICICS (Ground)"
  | "ICICS (Rooftop)"
  | "Brimacombe"
  | "Bio Sciences North"
  | "Bio Sciences South"
  | "Bio Sciences West"
  | "Beaty Biodiversity Centre"
  | "Chemical Physics"
  | "Buchanan D"
  | "Gage A South Tower"
  | "Gage B North Tower"
  | "Museum of Anthropology"
  | "Chan Centre"
  | "Green College"
  | "Rose Garden Parkade"
  | "Koerner Library"
  | "Allard Hall"
  | "Brock Hall"
  | "Tallwood House"
  | "Irving K. Barber Learning Centre"
  | "Gage Tower East"
  | "Gage Block D and E"
  | "Buchanan Tower"
  | "Leonard S. Klinck Building"
  | "Henry Angus"
  | "Lower Mall Research Building"
  | "Bioenergy Research and Demonstration Facility (BRDF)";

type LocationName = "UBC Vancouver" | "UBC Okanagan";

type MonitoringCompany = "Accurate Monitoring" | "Telus Monitoring";

type HeaderProps = {
  name: BuildingName;
  locationName: LocationName;
  address: string;
  accountNumber: number;
  monitoringCompany: MonitoringCompany;
  monitoringCompanyContact: string;
};

function Header({
  accountNumber,
  address,
  locationName,
  monitoringCompany,
  monitoringCompanyContact,
  name,
}: HeaderProps) {
  return (
    <header>
      <h1>{`UBC Emergency Generator Testing - ${name}`}</h1>
      <section>
        <p>{`Location: ${locationName}`}</p>
        <p>{`Address: ${address}`}</p>
        <p>{`Account Number: ${accountNumber}`}</p>
        <p>{`Monitoring Company: ${monitoringCompany}`}</p>
        <p>{`Monitoring Company Contact: ${monitoringCompanyContact}`}</p>
      </section>
    </header>
  );
}

export default Header;
export type { HeaderProps };
