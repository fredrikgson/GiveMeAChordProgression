const AdvancedSettings = ({
  forceOneChord,
  dimChords,
  probSeventhChords,
  probSusChords,
  probParallelKeyChords,
  setForceOneChord,
  setDimChords,
  setProbSeventhChords,
  setProbSusChords,
  setProbParallelKeyChords,
  isMinor,
}) => {
  return (
    <div className="settings-group">
      <div className="setting">
        <input
          className="custom-checkbox"
          id="one-chord"
          title="Force at least one instance of the one-chord (recommended)"
          type="checkbox"
          checked={forceOneChord}
          onChange={(e) => {
            setForceOneChord(e.target.checked);
          }}
        ></input>
        <label htmlFor="one-chord">
          {isMinor ? "i" : "I"}-chord at least once
        </label>
      </div>
      <div className="setting">
        <input
          className="custom-checkbox"
          id="dim-chords"
          title="Include diminished chords?"
          type="checkbox"
          checked={dimChords}
          onChange={(e) => {
            setDimChords(e.target.checked);
          }}
        ></input>
        <label htmlFor="dim-chords">Include dim-chords</label>
      </div>
      <div className="setting">
        <input
          id="prob-seventh-chords"
          title="The probability of each chord being a 7th chord (0% chance - 100% chance)"
          type="range"
          min="0"
          max="100"
          step="5"
          value={probSeventhChords}
          onChange={(e) => {
            setProbSeventhChords(e.target.value);
          }}
        ></input>
        <label htmlFor="prob-seventh-chords">Probability of 7th chords</label>
      </div>
      <div className="setting">
        <input
          id="prob-sus-chords"
          title="The probability of each chord being a sus2 or sus4 chord (0% chance - 100% chance)"
          type="range"
          min="0"
          max="100"
          step="5"
          value={probSusChords}
          onChange={(e) => {
            setProbSusChords(e.target.value);
          }}
        ></input>
        <label htmlFor="prob-sus-chords">Probability of sus-chords</label>
      </div>
      <div className="setting">
        <input
          id="prob-parallel-key-chords"
          title="The probability of each chord being borrowed from the parallel key (0% chance - 50% chance)"
          type="range"
          min="0"
          max="50"
          step="5"
          value={probParallelKeyChords}
          onChange={(e) => {
            setProbParallelKeyChords(e.target.value);
          }}
        ></input>
        <label htmlFor="prob-parallel-key-chords">
          Probability of parallel key chords
        </label>
      </div>
    </div>
  );
};
export default AdvancedSettings;
