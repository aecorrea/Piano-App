//INSTRUCCIONES DE USO
Swal.fire({
  title: 'Instrucciones de uso.',
  text: "Para grabar: Presionar el botón 'grabar', tocar las notas con el mouse y luego presionar el botón de 'stop' para finalizar.",
  icon: 'warning',
  showCancelButton: false,
  confirmButtonColor: '#3085d6',
  confirmButtonText: 'Entendido!'
});


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

//ASIGNAR OBJECT DATA A CADA DIV
const keyDivs = document.querySelectorAll(".key");

for (let i = 0; i < keyNotes.length; i++) {
  keyDivs[i].dataset.keyObject = JSON.stringify(keyNotes[i]);
}

// MELODIES
let songsList = JSON.parse(localStorage.getItem("songsList")) || [];

if (songsList.length === 0) {
  fetch("./songs.json")
    .then((f) =>
      f
        .json()
        .then((data) => {
          if (data.length > 0) {
            songsList = data;
            localStorage.setItem("songsList", JSON.stringify(songsList));
          }
        })
        .catch((error) => {
          console.log(error);
        })
    )
    .catch((err) => {
      console.log(err);
    });
}

//MOSTRAR LAS MELODÍAS EN EL LABEL

let container = document.getElementById("default");

const showSongs = () => {
  let mensaje = "";

  songsList.forEach((el, idx) => {
    mensaje += `<option value=${idx}>Canción: ${el.title} - Dificultad: ${el.difficulty}</option>
  `;
  });
  container.innerHTML = `
  <select>
      ${mensaje}
  </select>
`;
};
showSongs();

const selectElement = document.getElementById("default");
const songNotesDiv = document.getElementById("song-notes");

selectElement.addEventListener("change", function () {
  const selectedIndex = selectElement.selectedIndex;
  const selectedSongNotes = songsList[selectedIndex].notes;
  songNotesDiv.innerText = `Las notas de la melodía seleccionada son: 
  ${selectedSongNotes.join(" ")}`;
});

//PLAY SOUND FUNCTION
function playSound(filename) {
  let snd = new Audio(`./tunes/${filename}.mp3`);
  snd.play();
}

const fileNames = [
  "C3",
  "Db3",
  "D3",
  "Eb3",
  "E3",
  "F3",
  "Gb3",
  "G3",
  "Ab3",
  "A3",
  "Bb3",
  "B3",
  "C4",
  "Db4",
  "D4",
  "Eb4",
  "E4",
  "F4",
  "Gb4",
  "G4",
  "Ab4",
  "A4",
  "Bb4",
  "B4",
  "C5",
];

const noteDivs = document.querySelectorAll(".key");

for (let i = 0; i < fileNames.length; i++) {
  const note = fileNames[i];
  const div = keyDivs[i];

  div.addEventListener("click", function () {
    playSound(note);
  });
}

//  FUNCIÓN DE BOTÓN DE GRABAR: SE ALMACENA LA INFORMACIÓN DE LOS INPUTS QUE EL USUARIO CLICKEA EN UN NUEVO ARRAY.

let newSong = [];
let recording = false;

const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("click", () => {
    const note = key.getAttribute("id");
    if (recording) {
      if (newSong.length < 20) {
        newSong.push(note);
      }
    }
  });
});

const record = document.querySelectorAll(".record");
record.forEach((btn) => {
  btn.addEventListener("click", () => {
    const event = btn.value;
    if (event === "start") {
      recording = true;
      Toastify({
        text: "Grabando!",
        duration: 3000,
      }).showToast();
    }
    if (newSong.length > 0) {
      Swal.fire({
        title: "Nueva canción",
        html: `<input type="text" id="name" class="swal2-input" placeholder="Name">

    `,
        confirmButtonText: "Crear",
        focusConfirm: false,
        preConfirm: () => {
          const name = Swal.getPopup().querySelector("#name").value;
          if (!name || songsList.some((el) => el.title === name)) {
            Swal.showValidationMessage(`Nombre inválido o repetido.`);
          }
          return { title: name, difficulty: "Custom", notes: newSong };
        },
      }).then((result) => {
        addSong(result.value);
        Swal.fire("Canción creada correctamente");
        newSong = [];
      });

      recording = false;
      Toastify({
        text: "Grabación terminada!",
        duration: 3000,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
    }
  });
});

const addSong = (song) => {
  songsList.push(song);
  localStorage.setItem("songsList", JSON.stringify(songsList));
  showSongs();
};


//1-DELETE SONGS
const deleteButton = document.getElementById("delete");
deleteButton.addEventListener("click", () => {
  const selectedIndex = selectElement.selectedIndex;
  if (selectedIndex >= songsList.length || selectedIndex <= 3) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No puedes eliminar o modificar canciones por defecto.",
    });
  } else {
    Swal.fire({
      title: "Confirmar eliminación.",
      text: `Estás por eliminar la canción ${songsList[selectedIndex].title}, ¿Deseas continuar?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        songsList.splice(selectedIndex, 1);
        localStorage.setItem("songsList", JSON.stringify(songsList));
        showSongs();
        songNotesDiv.innerText = "";
        Swal.fire("Eliminada!", "La canción seleccionada ha sido eliminada con éxito.", "success");
      }
    });
  }
});
