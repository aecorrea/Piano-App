//PIANO KEYS CONSTRUCTOR
function Keys(name, value, note, color) {
  this.name = name;
  this.value = value;
  this.note = note;
  this.color = color;
}

//PIANO KEYS
const keyNotes = [
  {
    value: 0,
    name: "DO",
    note: "C1",
    color: "white",
  },
  {
    value: 1,
    name: "DO#",
    note: "C#1",
    color: "black",
  },
  {
    value: 2,
    name: "RE",
    note: "D1",
    color: "white",
  },
  {
    value: 3,
    name: "RE#",
    note: "D#1",
    color: "black",
  },
  {
    value: 4,
    name: "MI",
    note: "E1",
    color: "white",
  },
  {
    value: 5,
    name: "FA",
    note: "F1",
    color: "white",
  },
  {
    value: 6,
    name: "FA#",
    note: "F#1",
    color: "black",
  },
  {
    value: 7,
    name: "SOL",
    note: "G1",
    color: "white",
  },
  {
    value: 8,
    name: "SOL#",
    note: "G#1",
    color: "black",
  },
  {
    value: 9,
    name: "LA",
    note: "A1",
    color: "white",
  },
  {
    value: 10,
    name: "LA#",
    note: "A#1",
    color: "black",
  },
  {
    value: 11,
    name: "SI",
    note: "B1",
    color: "white",
  },
  {
    value: 12,
    name: "DO",
    note: "C2",
    color: "white",
  },
  {
    value: 13,
    name: "DO#",
    note: "C#2",
    color: "black",
  },
  {
    value: 14,
    name: "RE",
    note: "D2",
    color: "white",
  },
  {
    value: 15,
    name: "RE#",
    note: "D#2",
    color: "black",
  },
  {
    value: 16,
    name: "MI",
    note: "E2",
    color: "white",
  },
  {
    value: 17,
    name: "FA",
    note: "F2",
    color: "white",
  },
  {
    value: 18,
    name: "FA#",
    note: "F#2",
    color: "black",
  },
  {
    value: 19,
    name: "SOL",
    note: "G2",
    color: "white",
  },
  {
    value: 20,
    name: "SOL#",
    note: "G#2",
    color: "black",
  },
  {
    value: 21,
    name: "LA",
    note: "A2",
    color: "white",
  },
  {
    value: 22,
    name: "LA#",
    note: "A#2",
    color: "black",
  },
  {
    value: 23,
    name: "SI",
    note: "B2",
    color: "white",
  },
];

// ARRAY OF ONLY KEY NAMES
const keyNames = keyNotes.map((note) => note.name);

// MELODIES
// Este es simplemente un banco de melodías para que el usuario pueda acceder.
// La idea es desarrollarlo más adelante con el DOM.

const songs = [
  {
    title: "Happy Birthday",
    difficulty: "normal",
    notes: [
      keyNotes[0],
      keyNotes[0],
      keyNotes[2],
      keyNotes[0],
      keyNotes[5],
      keyNotes[4],
      keyNotes[0],
      keyNotes[0],
      keyNotes[2],
      keyNotes[0],
      keyNotes[7],
      keyNotes[5],
      keyNotes[0],
      keyNotes[0],
      keyNotes[12],
      keyNotes[9],
      keyNotes[5],
      keyNotes[5],
      keyNotes[4],
      keyNotes[2],
      keyNotes[10],
      keyNotes[10],
      keyNotes[9],
      keyNotes[5],
      keyNotes[7],
      keyNotes[5],
    ],
  },

  {
    title: "Twinkle Twinkle Little Star",
    difficulty: "easy",
    notes: [
      keyNotes[0],
      keyNotes[0],
      keyNotes[7],
      keyNotes[7],
      keyNotes[9],
      keyNotes[9],
      keyNotes[7],
      keyNotes[5],
      keyNotes[5],
      keyNotes[4],
      keyNotes[4],
      keyNotes[2],
      keyNotes[2],
      keyNotes[0],
      keyNotes[7],
      keyNotes[7],
      keyNotes[5],
      keyNotes[5],
      keyNotes[4],
      keyNotes[4],
      keyNotes[2],
      keyNotes[7],
      keyNotes[7],
      keyNotes[5],
      keyNotes[5],
      keyNotes[4],
      keyNotes[4],
      keyNotes[2],
      keyNotes[0],
      keyNotes[0],
      keyNotes[7],
      keyNotes[7],
      keyNotes[9],
      keyNotes[9],
      keyNotes[7],
      keyNotes[5],
      keyNotes[5],
      keyNotes[4],
      keyNotes[4],
      keyNotes[2],
      keyNotes[7],
      keyNotes[0],
    ],
  },

  {
    title: "In The End",
    difficulty: "normal",
    notes: [
      keyNotes[3],
      keyNotes[10],
      keyNotes[10],
      keyNotes[6],
      keyNotes[5],
      keyNotes[5],
      keyNotes[5],
      keyNotes[5],
      keyNotes[6],
      keyNotes[3],
      keyNotes[10],
      keyNotes[10],
      keyNotes[6],
      keyNotes[5],
      keyNotes[5],
      keyNotes[5],
      keyNotes[5],
      keyNotes[6],
      keyNotes[3],
      keyNotes[10],
      keyNotes[10],
      keyNotes[6],
      keyNotes[5],
      keyNotes[5],
      keyNotes[5],
      keyNotes[5],
      keyNotes[6],
      keyNotes[3],
      keyNotes[10],
      keyNotes[10],
      keyNotes[6],
      keyNotes[5],
    ],
  },

  {
    title: "Quien Se Ha Tomado Todo El Vino",
    difficulty: "hard",
    notes: [
      keyNotes[9],
      keyNotes[12],
      keyNotes[16],
      keyNotes[9],
      keyNotes[12],
      keyNotes[16],
      keyNotes[9],
      keyNotes[12],
      keyNotes[16],
      keyNotes[14],
      keyNotes[12],
      keyNotes[11],
      keyNotes[9],
      keyNotes[7],
      keyNotes[11],
      keyNotes[14],
      keyNotes[7],
      keyNotes[11],
      keyNotes[14],
      keyNotes[7],
      keyNotes[11],
      keyNotes[14],
      keyNotes[12],
      keyNotes[14],
      keyNotes[16],
    ],
  },
];

//SEARCHING SONGS BY TITLE AND/OR DIFFICULTY
//UN BUSCADOR DEL BANCO DE MELODÍAS. TODAVÍA EL USUARIO NO TIENE ACCESO A ESTO. ES SÓLO PARA MOSTRAR EL MÉTODO USADO.

const result = songs.map((el) => el.title);
console.log(result);

const result2 = songs.map((el) => el.difficulty);
console.log(result);

//USER SONGS
const newSong = [];

//POR EL MOMENTO LAS NOTAS SE INGRESAN DE FORMA MANUAL DESDE UN PROMPT. CON EL DOM, LAS NOTAS VAN A SER INGRESADAS A TRAVÉS DE UN
//PIANO ONLINE HECHO CON HTML Y CSS CON BOTONES COMO INPUTS.

while (true) {
  const noteInput = prompt(
    'Seleccioná las notas de tu canción. Cuando termines, simplemente escribe "Salir".\n' +
      keyNames.join("\n")
  );

  if (noteInput === "Salir") {
    break;
  } else if (!keyNames.includes(noteInput)) {
    alert(
      'Error: La nota ingresada no coincide con ninguna de las opciones mencionadas. Procura ingresarlas en mayúsculas y si ya terminaste, escribe "Salir" (La "S" es mayúscula). Por favor, intenta nuevamente.'
    );
  } else {
    newSong.push(noteInput);
  }
}

const newUserSong = prompt("Dale un nombre a tu nueva canción!");
alert(
  `Tu nueva canción se llama ${newUserSong} y las notas de tu canción son ${newSong}`
);
