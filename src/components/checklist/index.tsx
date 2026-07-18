import { useState } from "react";

type CheckedItems = Record<string, boolean>;

function Checklist() {
  const [checkedItems, setCheckedItems] = useState<CheckedItems>({});

  const pre_test_checklist = {
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

  const during_test_checklist = {
    gen_inspection: [
      "Monitor generator output voltage and frequency.",
      "Check for unusual noises or vibrations during operation.",
      "Ensure that the generator is running smoothly without any warning lights or error codes.",
      "Observe the exhaust for excessive smoke or unusual color.",
      "Check for any leaks or drips during operation.",
    ],
    ats_inspection: [
      "Monitor ATS operation and ensure it switches correctly between utility and generator power.",
      "Check for any error codes or warning lights on the ATS panel.",
      "Ensure that 'Transfer Switch Connected to Normal' light is off.",
      "Ensure that 'Normal Source Accepted' light is on.",
      "Ensure that 'Transfer Switch Connected to Emergency' light is on.",
      "Ensure that 'Emergency Source Accepted' light is on.",
      "Ensure that panel indicates a countdown timer starting with : 'TD Emerg>Normal: 0:59min59s'.",
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

  const handleCheckboxChange = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const ChecklistSection = ({
    title,
    items,
    sectionId,
  }: {
    title: string;
    items: string[];
    sectionId: string;
  }) => (
    <div className="checklist-section">
      <h3>{title}</h3>
      <fieldset className="checklist-fieldset">
        <legend className="sr-only">{title}</legend>
        {items.map((item, index) => {
          const checkboxId = `${sectionId}-${index}`;
          return (
            <div key={checkboxId} className="checklist-item">
              <input
                type="checkbox"
                id={checkboxId}
                checked={checkedItems[checkboxId] || false}
                onChange={() => handleCheckboxChange(checkboxId)}
                className="checklist-checkbox"
              />
              <label htmlFor={checkboxId} className="checklist-label">
                {item}
              </label>
            </div>
          );
        })}
      </fieldset>
    </div>
  );

  return (
    <div className="checklist">
      <section>
        <h2>Pre-Test Checklist</h2>
        <ChecklistSection
          title="Visual Inspection"
          items={pre_test_checklist.visual_inspection}
          sectionId="visual"
        />
        <ChecklistSection
          title="Fluid Inspection"
          items={pre_test_checklist.fluid_inspection}
          sectionId="fluid"
        />
        <ChecklistSection
          title="Electrical Inspection"
          items={pre_test_checklist.electrical_inspection}
          sectionId="electrical"
        />
        <ChecklistSection
          title="Mechanical Inspection"
          items={pre_test_checklist.mechanical_inspection}
          sectionId="mechanical"
        />
      </section>

      <section>
        <h2>During Test Checklist</h2>
        <ChecklistSection
          title="Generator Inspection"
          items={during_test_checklist.gen_inspection}
          sectionId="gen"
        />
        <ChecklistSection
          title="ATS Inspection"
          items={during_test_checklist.ats_inspection}
          sectionId="ats"
        />
        <ChecklistSection
          title="Planon Checklist"
          items={during_test_checklist.planon_items}
          sectionId="planon"
        />
      </section>
    </div>
  );
}

export default Checklist;
