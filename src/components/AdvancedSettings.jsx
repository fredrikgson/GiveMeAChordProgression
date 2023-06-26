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
          id="one-chord"
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
          id="dim-chords"
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
