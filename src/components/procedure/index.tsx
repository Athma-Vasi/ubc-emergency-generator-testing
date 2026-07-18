function Procedure() {
  // procedure should be in Action, Reason, Result for each step.

  return (
    <section>
      <h2>Procedure</h2>
      <ol>
        <li>Receive and follow the schedule outlined by the planning coordinator.</li>
        <li>Travel to site for the generator test.</li>
        <li>
          Contact Accurate Monitoring and let them know to put the system onto test for the allotted
          time.
        </li>
        <li>
          Perform a pre-start system inspection on the generator, and associated equipment. Refer to
          the Emergency Generator Information sheets for the building specific information to
          follow.
        </li>
        <li>
          Shut down any power to the equipment onsite that is affected by the transfer of power.
        </li>
        <li>Complete the pre-check list for generator and fuel tank on the Planon work order.</li>
        <li>Commence with starting the generator from the transfer switch location.</li>
        <li>
          Operate all the building transfer switches associated with the generator and run it for at
          least 60 minutes.
        </li>
        <li>
          Check back at the generator to confirm that the unit is running properly and record the
          coolant temperature and oil pressure.
        </li>
        <li>
          Check the building fire alarm panel, acknowledge any troubles or supervisory codes. Reset
          the fire panel if needed. Perform this action only once, and if the panel does not reset
          contact FLS for further investigation.
        </li>
        <li>
          Record the amperage readings on the gauges at the generator 30 minutes into the test.
        </li>
        <li>After one hour, transfer the load back to the building and turn the generator off.</li>
        <li>Call TELUS back and let them know to release the test on the system.</li>
        <li>
          Record all findings in logbook onsite and let your supervisor know of any issues found.
        </li>
      </ol>
    </section>
  );
}

export default Procedure;
