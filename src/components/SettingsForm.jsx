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
      "Send request for " +
        numberOfChords +
        " chords in the key of " +
        key +
        ". Minor: " +
        isMinor
    );
  };

  return (
    <form className="generate-form" onSubmit={handleSubmit}>
      <button id="form-submit-button">Give me a chord progression</button>
      <BasicSettings
        numberOfChords={numberOfChords}
        isMinor={isMinor}
        setNumberOfChords={setNumberOfChords}
        setKey={setKey}
        setIsMinor={setIsMinor}
      />
      <input
        id="toggle-advanced-settings"
        type="checkbox"
        checked={showAdvancedSettings}
        onChange={(e) => {
          setShowAdvancedSettings(e.target.checked);
        }}
      ></input>
      <label htmlFor="toggle-advanced-settings">Advanced settings</label>
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
