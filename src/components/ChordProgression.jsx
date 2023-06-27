const ChordProgression = ({ chordProgression }) => {
  return (
    <div className="chord-progression-wrapper">
      {chordProgression.length > 0
        ? chordProgression.map((chord) => {
            return (
              <div className="chord" key={crypto.randomUUID()}>
                <h2>{chord.chord + (chord.isMinor ? "m" : "")}</h2>
                <p id="relative">{chord.relative}</p>
                <p className="notes-in-chord">
                  {chord.notes.map((note) => {
                    return <span id={crypto.randomUUID()}>{note}</span>;
                  })}
                </p>
              </div>
            );
          })
        : ""}
    </div>
  );
};
export default ChordProgression;
