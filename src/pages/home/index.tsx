import Safety from "../../components/safety";

function Home() {
  const building_links = [
    { name: "Pharmacy", path: "/pharmacy" },
    { name: "Tennis Centre", path: "/tennis-centre" },
    { name: "Doug Mitchell Thunderbird Sports Centre", path: "/winter-sports-arena" },
    { name: "Health Sciences Parkade", path: "/health-sciences-parkade" },
    { name: "Fairview Crescent", path: "/fairview-crescent" },
    { name: "Acadia Park High Rise", path: "/acadia-park-high-rise" },
    { name: "Gateway Health", path: "/gateway-health" },
    { name: "Forest Sciences Centre", path: "/forest-sciences-centre" },
    { name: "ICICS Ground", path: "/icics-ground" },
    { name: "ICICS Rooftop", path: "/icics-rooftop" },
    { name: "Brimacombe", path: "/brimacombe" },
    { name: "Bio Sciences North", path: "/bio-sciences-north" },
    { name: "Bio Sciences South", path: "/bio-sciences-south" },
  ];

  return (
    <section>
      <h1>UBC Emergency Generator Testing</h1>
      <Safety />
      <p>
        Welcome to the UBC Emergency Generator Testing web application. This application is designed
        to provide information and resources related to emergency generator testing at UBC
        Vancouver.
      </p>

      <p>
        Please select a building from the list below to access specific information about emergency
        generator testing procedures, safety guidelines, and other relevant details.
      </p>

      <ul>
        {building_links.map((link, index) => (
          <li key={`${index}-${link.name}`}>
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Home;
