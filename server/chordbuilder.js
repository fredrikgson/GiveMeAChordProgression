const chordmapper = require("./chordmapper");

const scaleChords = {
  major: ["I", "ii", "iii", "IV", "V", "vi", "vii°"],
  majorWithoutDim: ["I", "ii", "iii", "IV", "V", "vi"],
  minor: ["i", "ii°", "III", "iv", "v", "VI", "VII"],
  minorWithoutDim: ["i", "III", "iv", "v", "VI", "VII"],
};

const getChordProgression = (
  number,
  key,
  isMinor,
  forceOneChord,
  dimChords,
  probSeventhChords,
  probSusChords,
  probParallelKeyChords
) => {
  let chords = [];

  // include dim chords?
  const major =
    dimChords === "true" ? scaleChords.major : scaleChords.majorWithoutDim;
  const minor =
    dimChords === "true" ? scaleChords.minor : scaleChords.minorWithoutDim;

  // append defaults
  for (let i = 0; i < number; i++) {
    chords.push(
      isMinor === "true"
        ? minor[Math.floor(Math.random() * minor.length)]
        : major[Math.floor(Math.random() * major.length)]
    );
  }

  // parallel key chords
  chords = chords.map((chord) => {
    let parallelChord =
      isMinor === "true"
        ? major[minor.indexOf(chord)]
        : minor[major.indexOf(chord)];
    return Math.random() < probParallelKeyChords / 100 ? parallelChord : chord;
  });

  // force one chord
  if (forceOneChord === "true") {
    if (isMinor === "true" && !chords.includes("i")) {
      chords[Math.floor(Math.random() * chords.length)] = "i";
    } else if (isMinor === "false" && !chords.includes("I")) {
      chords[Math.floor(Math.random() * chords.length)] = "I";
    }
  }

  // append separator
  chords = chords.map((chord) => {
    return chord + ":";
  });

  // seventh chords
  chords = chords.map((chord) => {
    let seventhChord;
    if (chord === "VII" && isMinor === "true") seventhChord = chord + "7";
    else if (chord === "V" && isMinor === "false") seventhChord = chord + "7";
    else {
      seventhChord =
        chord === chord.toUpperCase() ? chord + "maj7" : chord + "7";
    }
    if (seventhChord.includes("°"))
      seventhChord = seventhChord.replace("°", "ø");
    return Math.random() < probSeventhChords / 100 ? seventhChord : chord;
  });

  // sus chords
  chords = chords.map((chord) => {
    let susChord = chord + "sus" + (Math.random() < 0.5 ? "2" : "4");
    return !susChord.includes("°") && Math.random() < probSusChords / 100
      ? susChord
      : chord;
  });

  // map to given key before returning
  let chordsOutput = chordmapper.mapToKey(chords, key, isMinor);

  return chordsOutput;
};

module.exports = {
  getChordProgression: getChordProgression,
};
