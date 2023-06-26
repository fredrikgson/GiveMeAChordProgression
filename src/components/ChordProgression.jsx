const ChordProgression = ({ chordProgression }) => {
  return (
    <div className="chord-progression-wrapper">
      {chordProgression.length > 0
        ? chordProgression.map((chord) => {
            return (
              <div className="chord" key={crypto.randomUUID()}>
                <h2>{chord.chord + (chord.isMinor ? "m" : "")}</h2>
                <p>{chord.relative}</p>
              </div>
            );
          })
        : ""}
    </div>
  );
};
export default ChordProgression;
