const allNotes = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];
const mapDictionary = {
  i: 0,
  ii: 1,
  iii: 2,
  iv: 3,
  v: 4,
  vi: 5,
  vii: 6,
};
const intervals = {
  major: [0, 2, 4, 5, 7, 9, 11],
  minor: [0, 2, 3, 5, 7, 8, 10],
};

const getScale = (key, isMinor) => {
  let scale = [];
  if (isMinor === "true") {
    for (let i = 0; i < intervals.minor.length; i++) {
      scale.push(
        getAndCycle(allNotes, allNotes.indexOf(key), intervals.minor[i])
      );
    }
  } else {
    for (let i = 0; i < intervals.major.length; i++) {
      scale.push(
        getAndCycle(allNotes, allNotes.indexOf(key), intervals.major[i])
      );
    }
  }
  return scale;
};

const getAndCycle = (array, initial, index) => {
  let counter = initial;
  for (let i = counter; i < initial + index; i++) {
    counter++;
    if (counter > array.length - 1) counter = 0;
  }
  return array[counter];
};

const mapChord = (chord, scale) => {
  let splitChord = chord.split(":");
  let temp = splitChord[0].toLowerCase().replace("°", "").replace("ø", "");
  let head = scale[mapDictionary[temp]];
  if (splitChord[0].toLowerCase() === splitChord[0]) {
    if (splitChord[0].includes("°")) head += "°";
    else if (splitChord[0].includes("ø")) head += "ø";
    else if (!splitChord[1].includes("sus")) head += "m";
  }
  return head + splitChord[1];
};

const mapToKey = (chords, key, isMinor) => {
  let scale = getScale(key, isMinor);
  let mappedChords = chords.map((chord) => {
    return {
      chord: mapChord(chord, scale),
      relative: chord.split(":")[0],
      notes: ["x", "x", "x"],
      isOne: chord.split(":")[0].toLowerCase() === "i" ? "true" : "false",
    };
  });
  return mappedChords;
};

module.exports = {
  mapToKey: mapToKey,
};
