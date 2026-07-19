type ATSInspectionProps = {
  atsKind:
    | "ASCO 7000"
    | "ASCO 300"
    | "TSC 80"
    | "TSC 800"
    | "Onan BT 600"
    | "TornaTech TFR 600/125/18"
    | "Cummins OPTC A";
};

function ATSInspection({ atsKind }: ATSInspectionProps) {
  const pre_test_inspection =
    atsKind === "ASCO 7000"
      ? [
          "Check for any error codes or warning lights on the ATS panel.",
          "Ensure that 'Transfer Switch Connected to Normal' light is on.",
          "Ensure that 'Normal Source Accepted' light is on.",
          "Ensure that 'Transfer Switch Connected to Emergency' light is off.",
          "Ensure that 'Emergency Source Accepted' light is off.",
        ]
      : atsKind === "TSC 80" || atsKind === "TSC 800"
        ? [
            "Ensure that load is on utility power and not generator power.",
            "Ensure that utility-side indicators are green :'Utility Supply' light is on.",
            "Ensure that generator-side supply indicator is off: 'Generator Supply' light is off.",
            "Ensure that the load indicator is on: 'Load' light is on.",
            "Ensure that 'Utility Power Fail Test Mode' light is off.",
            "Ensure that 'Generator Exercise Timer' light is off.",
          ]
        : atsKind === "ASCO 300"
          ? [
              "Ensure that load is on utility power and not generator power.",
              "Ensure that controller display reads 'Normal OK' and 'Load On Normal'.",
              "Ensure that two green status LEDs are lit near the lower left of the controller, indicating normal operation.",
            ]
          : atsKind === "Onan BT 600"
            ? [
                "Ensure that 'Normal' indicators: 'Connected' and 'Available' are on.",
                "Ensure that 'Emergency' indicators: 'Connected' and 'Available' are off.",
              ]
            : atsKind === "TornaTech TFR 600/125/18"
              ? [
                  "Ensure that 'NORMAL POWER IN RIGHT PHASE SEQUENCE' indicator is on.",
                  "Ensure that 'TRANSFER SWITCH IN NORMAL POSITION' indicator is on.",
                  "Ensure that 'ALTERNATE POWER' indicator is on.",
                  "Ensure that 'TRANSFER SWITCH IN ALTERNATE POSITION' indicator is off.",
                ]
              : atsKind === "Cummins OPTC A"
                ? [
                    "Ensure that Source 1 (Utility) Connected light is on.",
                    "Ensure that Source 1 (Utility) Available light is on.",
                    "Ensure that Source 2 (Generator) Connected light is off.",
                    "Ensure that Source 2 (Generator) Available light is off.",
                  ]
                : [];

  const during_test_inspection =
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
      : atsKind === "TSC 80" || atsKind === "TSC 800"
        ? [
            "Ensure that utility supply is available and stable during the test.",
            "Ensure that the generator is providing power to the load during the test.",
            "Ensure that the load is stable and not experiencing any interruptions during the test.",
            "Ensure that the ATS is functioning correctly and switching between utility and generator power as expected.",
            "Ensure that the transfer-position indicator near the generator side is red.",
          ]
        : atsKind === "ASCO 300"
          ? [
              "Ensure that the display reads: 'Normal OK,' 'Emergency > Normal,' and a timer around '00h 59m 56s', with a prompt to 'Press Bypass Timer.'",
              "Ensure that the unit is in a transfer test and the load is currently being held on or moved to the emergency source path: red indicators on the emergency/generator side are on",
            ]
          : atsKind === "Onan BT 600"
            ? [
                "Ensure that the 'Normal' indicators: 'Connected' and 'Available' are off.",
                "Ensure that the 'Emergency' indicators: 'Connected' and 'Available' are on.",
              ]
            : atsKind === "TornaTech TFR 600/125/18"
              ? [
                  "Ensure that 'NORMAL POWER IN RIGHT PHASE SEQUENCE' indicator is on.",
                  "Ensure that 'TRANSFER SWITCH IN NORMAL POSITION' indicator is off.",
                  "Ensure that 'ALTERNATE POWER' indicator is on.",
                  "Ensure that 'TRANSFER SWITCH IN ALTERNATE POSITION' indicator is on.",
                ]
              : atsKind === "Cummins OPTC A"
                ? [
                    "Ensure that Source 1 (Utility) Connected light is off.",
                    "Ensure that Source 1 (Utility) Available light is on.",
                    "Ensure that Source 2 (Generator) Connected light is on.",
                    "Ensure that Source 2 (Generator) Available light is on.",
                  ]
                : [];

  return (
    <section>
      <h2>{`ATS Inspection - ${atsKind}`}</h2>

      <h3>Pre-Test Inspection</h3>
      <ul>
        {pre_test_inspection.map((item, index) => (
          <li key={`${index}-${item}`}>{item}</li>
        ))}
      </ul>

      <h3>During Test Inspection</h3>
      <ul>
        {during_test_inspection.map((item, index) => (
          <li key={`${index}-${item}`}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default ATSInspection;
export type { ATSInspectionProps };
