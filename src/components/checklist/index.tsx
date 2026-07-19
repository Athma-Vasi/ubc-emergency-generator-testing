function Checklist() {
  const pre_and_post_test = {
    visual_inspection: [
      "Check for visible leaks (fuel, oil, coolant, exhaust, etc.).",
      "Inspect belts and hoses for wear or damage.",
      "Check for any loose or missing bolts, nuts, or fasteners.",
      "Look for corrosion on terminals and ensure connections are secure.",
      "Check exhaust system for blockages.",
      "Inspect the air filter for cleanliness.",
    ],

    fluid_inspection: [
      "Check engine oil level (dipstick) - should be at full mark.",
      "Check coolant level in the radiator and overflow tank - should be at proper level.",
      "Check fuel level - ensure there is enough fuel for operation.",
      "Check oil/coolant condition - look for discoloration or contamination.",
      "Check for any fluid leaks under the generator.",
    ],

    electrical_inspection: [
      "Check battery voltage and connections - should be clean and tight.",
      "Inspect control panel for any error codes or warning lights.",
      "Check for loose or frayed wiring and ensure all connections are secure.",
      "Ground connections secure and clean.",
    ],

    mechanical_inspection: [
      "Engine cooling fan and belts are in good condition.",
      "Inspect the generator housing for any damage or wear.",
      "Ensure that all guards and covers are in place and secure.",
      "Inspect the exhaust system for leaks or damage.",
    ],
  };

  const during_test = {
    generator_inspection: [
      "Monitor generator output voltage and frequency.",
      "Check for unusual noises or vibrations during operation.",
      "Ensure that the generator is running smoothly without any warning lights or error codes.",
      "Observe the exhaust for excessive smoke or unusual color.",
      "Check for any leaks or drips during operation.",
    ],

    planon_items: [
      "Note generator fuel level.",
      "Note L1, L2, L3 voltage readings.",
      "Note L1, L2, L3 current readings.",
      "Note generator frequency reading.",
      "Note generator oil level reading.",
      "Note generator coolant level reading.",
      "Note generator battery charger voltage reading.",
      "Note generator oil pressure reading.",
      "Note generator coolant temperature reading.",
      "Note generator run time reading.",
      "Note generator battery voltage reading.",
    ],
  };

  return (
    <section>
      <h2>Checklist</h2>
      <ChecklistSection title="Pre-And-Post Test" checklist={pre_and_post_test} />
      <ChecklistSection title="During Test" checklist={during_test} />
    </section>
  );
}

function ChecklistSection({
  title,
  checklist,
}: {
  title: string;
  checklist: Record<string, string[]>;
}) {
  return (
    <section>
      <h3>{title}</h3>
      <ul>
        {Object.entries(checklist).map(([category, categoryItems], category_index) => (
          <li key={`${category_index}-${category}`}>
            <strong>{category.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}</strong>
            <ul>
              {categoryItems.map((item, items_index) => (
                <li key={`${items_index}-${item}`}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Checklist;
