type SafetyProps = {
  disclaimer: string;
};

function Safety({ disclaimer }: SafetyProps) {
  return (
    <section>
      <aside className="safety-disclaimer" aria-label="Safety Disclaimer">
        <h2>⚠️ Safety Notice</h2>
        <p>
          <strong>This document is a learning aid and supplementary resource only.</strong> It does
          not replace UBC's official Safe Work Procedures, manufacturer documentation, or regulatory
          requirements. This procedure is compiled from field notes and observations and is not
          endorsed as an official UBC procedure. All personnel must follow current UBC SWPs and
          applicable legislation before operating emergency power systems. The author assumes no
          liability for misuse, injury, property damage, or regulatory non-compliance resulting from
          this document. When in doubt, consult your supervisor and official UBC procedures.
        </p>
      </aside>
    </section>
  );
}

export default Safety;
export type { SafetyProps };
