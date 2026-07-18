type ChecklistProps = {
  atsKind: "ASCO 7000" | "TSC 80";
};

function Checklist({ atsKind }: ChecklistProps) {
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
    ats_inspection:
      atsKind === "ASCO 7000"
        ? [
            "Check for any error codes or warning lights on the ATS panel.",
            "Ensure that 'Transfer Switch Connected to Normal' light is on.",
            "Ensure that 'Normal Source Accepted' light is on.",
            "Ensure that 'Transfer Switch Connected to Emergency' light is off.",
            "Ensure that 'Emergency Source Accepted' light is off.",
          ]
        : [
            "Ensure that load is on utility power and not generator power.",
            "Ensure that utility-side indicators are green :'Utility Supply' light is on.",
            "Ensure that generator-side supply indicator is off: 'Generator Supply' light is off.",
            "Ensure that the load indicator is on: 'Load' light is on.",
            "Ensure that 'Utility Power Fail Test Mode' light is off.",
            "Ensure that 'Generator Exercise Timer' light is off.",
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
    ats_inspection:
      atsKind === "ASCO 7000"
        ? [
            "Monitor ATS operation and ensure it switches correctly between utility and generator power.",
            "Check for any error codes or warning lights on the ATS panel.",
            "Ensure that 'Transfer Switch Connected to Normal' light is off.",
            "Ensure that 'Normal Source Accepted' light is on.",
            "Ensure that 'Transfer Switch Connected to Emergency' light is on.",
            "Ensure that 'Emergency Source Accepted' light is on.",
            "Ensure that panel indicates a countdown timer starting with : 'TD Emerg>Normal: 0:59min59s'.",
          ]
        : [
            "Ensure that utility supply is available and stable during the test.",
            "Ensure that the generator is providing power to the load during the test.",
            "Ensure that the load is stable and not experiencing any interruptions during the test.",
            "Ensure that the ATS is functioning correctly and switching between utility and generator power as expected.",
            "Ensure that the transfer-position indicator near the generator side is red.",
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
    ],
  };

  return (
    <section>
      <h2>Checklist</h2>
      <ChecklistSection title="Pre-And-Post Test" items={pre_and_post_test} />
      <ChecklistSection title="During Test" items={during_test} />
    </section>
  );
}

function ChecklistSection({ title, items }: { title: string; items: Record<string, string[]> }) {
  return (
    <section>
      <h3>{title}</h3>
      <ul>
        {Object.entries(items).map(([category, categoryItems], category_index) => (
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
