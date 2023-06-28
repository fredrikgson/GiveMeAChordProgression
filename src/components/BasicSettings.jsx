import { useEffect, useState } from "react";

const BasicSettings = ({
  numberOfChords,
  isMinor,
  setNumberOfChords,
  setKey,
  setIsMinor,
}) => {
  const [fetchedKeys, setFetchedKeys] = useState([]);

  useEffect(() => {
    fetch("/api/all-keys")
      .then((res) => res.json())
      .then((data) => setFetchedKeys(data));
  }, []);

  return (
    <div className="settings-group">
      <div className="setting">
        <input
          id="number-of-chords"
          title="How many chords will be generated?"
          type="number"
          min="2"
          max="8"
          value={numberOfChords}
          onChange={(e) => setNumberOfChords(e.target.value)}
        ></input>
        <label htmlFor="number-of-chords">Number of chords</label>
      </div>
      <div className="setting">
        <select
          id="key"
          title="What key will the generated chords be in?"
          onChange={(e) => setKey(e.target.value)}
        >
          {fetchedKeys.length > 0 ? (
            fetchedKeys.map((fetchedKey) => {
              return (
                <option key={fetchedKey} value={fetchedKey}>
                  {fetchedKey}
                </option>
              );
            })
          ) : (
            <option>Loading...</option>
          )}
        </select>
        <label htmlFor="key">Key</label>
      </div>
      <div className={`setting ${isMinor ? "alternative" : ""}`}>
        <input
          className="minmaj-button"
          id="is-minor"
          title="Major or minor key?"
          type="button"
          value={isMinor ? "minor" : "Major"}
          onClick={() => setIsMinor(!isMinor)}
        ></input>
      </div>
    </div>
  );
};
export default BasicSettings;
