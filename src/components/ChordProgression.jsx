const ChordProgression = ({ chordProgression }) => {
  return (
    <div className="chord-progression-wrapper">
      {chordProgression.length > 0
        ? chordProgression.map((chord) => {
            return (
              <div
                className={`chord ${chord.isOne === "true" ? "one-chord" : ""}`}
                key={crypto.randomUUID()}
              >
                <h2>{chord.chord}</h2>
                <p id="relative">{chord.relative}</p>
              </div>
            );
          })
        : ""}
    </div>
  );
};
export default ChordProgression;
