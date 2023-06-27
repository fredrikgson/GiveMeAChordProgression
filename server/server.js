const chordbuilder = require("./chordbuilder");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server started on port " + PORT));
app.use(express.static("build"));

app.get("/api/all-keys", (req, res) => {
  res.send(JSON.stringify(chordbuilder.getAllNotes()));
});

app.get("/api/chord-progression", (req, res) => {
  // fortsätt här, requesten innehåller allt nu
  // läs med req.query.{key}
  let chords = chordbuilder.getChordProgression(
    req.query.number,
    req.query.key.replace("sharp", "#"),
    req.query.isMinor,
    req.query.forceOneChord,
    req.query.dimChords,
    req.query.probSeventhChords,
    req.query.probSusChords,
    req.query.probParallelKeyChords
  );
  res.send(JSON.stringify(chords));
});
