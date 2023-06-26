import { useState } from "react";
import BasicSettings from "./BasicSettings";
import AdvancedSettings from "./AdvancedSettings";

const SettingsForm = ({
  defNumberOfChords,
  defKey,
  defIsMinor,
  defOneChord,
  defDimChords,
  defProbSeventhChords,
  defProbSusChords,
  defProbParallelKeyChords,
}) => {
  // basic settings hooks
  const [numberOfChords, setNumberOfChords] = useState(defNumberOfChords);
  const [key, setKey] = useState(defKey);
  const [isMinor, setIsMinor] = useState(defIsMinor);

  // advanced settings
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);

  // advanced settings hooks
  const [forceOneChord, setForceOneChord] = useState(defOneChord);
  const [dimChords, setDimChords] = useState(defDimChords);
  const [probSeventhChords, setProbSeventhChords] =
    useState(defProbSeventhChords);
  const [probSusChords, setProbSusChords] = useState(defProbSusChords);
  const [probParallelKeyChords, setProbParallelKeyChords] = useState(
    defProbParallelKeyChords
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Number of chords: " +
        numberOfChords +
        "\n" +
        "Key: " +
        key +
        "\n" +
        "Minor? " +
        isMinor +
        "\n" +
        "Force one-chord? " +
        forceOneChord +
        "\n" +
        "Dim chords? " +
        dimChords +
        "\n" +
        "Probability of 7th chords: " +
        probSeventhChords +
        "%\n" +
        "Probability of sus chords: " +
        probSusChords +
        "%\n" +
        "Probability of parallel key chords: " +
        probParallelKeyChords +
        "%\n"
    );
  };

  return (
    <form className="generate-form" onSubmit={handleSubmit}>
      <button id="form-submit-button">Give me a chord progression!</button>
      <BasicSettings
        numberOfChords={numberOfChords}
        isMinor={isMinor}
        setNumberOfChords={setNumberOfChords}
        setKey={setKey}
        setIsMinor={setIsMinor}
      />
      <div id="advanced-settings-button">
        <input
          id="toggle-advanced-settings"
          type="checkbox"
          checked={showAdvancedSettings}
          onChange={(e) => {
            setShowAdvancedSettings(e.target.checked);
          }}
        ></input>
        <label htmlFor="toggle-advanced-settings">Advanced settings</label>
      </div>
      {showAdvancedSettings ? (
        <AdvancedSettings
          forceOneChord={forceOneChord}
          dimChords={dimChords}
          probSeventhChords={probSeventhChords}
          probSusChords={probSusChords}
          probParallelKeyChords={probParallelKeyChords}
          setForceOneChord={setForceOneChord}
          setDimChords={setDimChords}
          setProbSeventhChords={setProbSeventhChords}
          setProbSusChords={setProbSusChords}
          setProbParallelKeyChords={setProbParallelKeyChords}
          isMinor={isMinor} // for responsive I/i
        />
      ) : (
        <p></p>
      )}
    </form>
  );
};
export default SettingsForm;
