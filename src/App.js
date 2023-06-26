import SettingsForm from "./components/SettingsForm";

function App() {
  return (
    <div className="wrapper">
      <h1>Hello, world!</h1>
      <SettingsForm
        defNumberOfChords={4}
        defIsMinor={false}
        defOneChord={true}
        defDimChords={false}
        defProbSeventhChords={10}
        defProbSusChords={0}
        defProbParallelKeyChords={0}
      />
      <hr />
    </div>
  );
}

export default App;
