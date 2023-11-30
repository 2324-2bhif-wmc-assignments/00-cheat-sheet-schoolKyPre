//Passwort |
//         V

let muster = [
    [true, true, true],
    [true, false, false],
    [true, true, true]
];

//eingabefeld
let benutzerMuster = [
    [false, false, false],
    [false, false, false],
    [false, false, false]
];

function zeichne(zelle) {
    const zeilenIndex = Array.from(zelle.parentElement.parentElement.children).indexOf(zelle.parentElement);
    const zellenIndex = Array.from(zelle.parentElement.children).indexOf(zelle);

    benutzerMuster[zeilenIndex][zellenIndex] = !benutzerMuster[zeilenIndex][zellenIndex];

    if (benutzerMuster[zeilenIndex][zellenIndex]) {
        zelle.style.backgroundColor = 'aqua';
    } else {
        zelle.style.backgroundColor = '';
    }
}

function prüfeMuster() {
    if (arraysGleich(muster, benutzerMuster)) {
        window.location.href = 'startpage.html';
    } else {
        alert('Wrong pattern! Try it again.');
        zurücksetzen();
    }
}

function arraysGleich(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
            if (arr1[i][j] !== arr2[i][j]) {
                return false;
            }
        }
    }
    return true;
}

function zurücksetzen() {
    benutzerMuster = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    const zellen = document.querySelectorAll('.zelle');
    zellen.forEach(zelle => {
        zelle.style.backgroundColor = '';
    });
}
