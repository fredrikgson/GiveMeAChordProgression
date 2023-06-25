const BasicSettings = ({numberOfChords, isMinor, setNumberOfChords, setKey, setIsMinor}) => {

    const keys = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

    return (
        <div className="basic-settings">
          <input 
          id="number-of-chords"
          type="number" 
          min="2" 
          max="8" 
          value={numberOfChords} 
          onChange={(e) => setNumberOfChords(e.target.value)}>
          </input>
          <label htmlFor="number-of-chords">Number of chords</label>
          <select id="key" onChange={(e) => setKey(e.target.value)}>
            {keys.map((key) => {return <option key={key} value={key}>{key}</option>})}
          </select>
          <label htmlFor="key">Key</label>
          <input id="is-minor" type="checkbox" checked={isMinor} onChange={(e) => setIsMinor(e.target.checked)}></input>
          <label htmlFor="is-minor">Minor?</label>
        </div>
    );
}
export default BasicSettings;