type NotesProps = {
  additional: Array<string>;
};

function Notes({ additional }: NotesProps) {
  return (
    <section>
      <h2>Notes</h2>
      <ul>
        {additional.map((note, index) => (
          <li key={`${note}-${index}`}>{note}</li>
        ))}
      </ul>
    </section>
  );
}

export default Notes;
export type { NotesProps };
