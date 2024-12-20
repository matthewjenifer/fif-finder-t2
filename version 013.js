// Get the button element
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when scrolling down
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Scroll to the top smoothly when the button is clicked
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


const appendOutput = (message) => {
    const outputParagraph = document.createElement('p');
    outputParagraph.textContent = message;
    outputBox.appendChild(outputParagraph);
    outputBox.scrollTop = outputBox.scrollHeight; // Auto-scroll to the bottom
};

const outputBox = document.getElementById('output-box');

function spinWheelOnce() {
    let angle = 0;
    const targetAngle = 360; // Full rotation

    function spin() {
        angle += .12; // Adjust the speed of rotation
        document.getElementById('spinningImage').style.transform = `rotate(${angle}deg)`;

        if (angle < targetAngle) {
            requestAnimationFrame(spin); // Continue spinning until the full rotation
        }
    }

    spin(); // Start spinning
}


let chordSets = {
    MAJ1: [{
            pad: 1,
            chord: 'C',
            numeral: 'I',
            smartKey: 'C'
        },
        {
            pad: 2,
            chord: 'Emi',
            numeral: 'iii',
            smartKey: 'C#'
        },
        {
            pad: 3,
            chord: 'F',
            numeral: 'IV',
            smartKey: 'D'
        },
        {
            pad: 4,
            chord: 'G',
            numeral: 'V',
            smartKey: 'Eb'
        },
        {
            pad: 5,
            chord: 'Ami',
            numeral: 'vi',
            smartKey: 'E'
        },
        {
            pad: 6,
            chord: 'Esus4',
            numeral: 'IVsus4',
            smartKey: 'F'
        },
        {
            pad: 7,
            chord: 'Gadd9',
            numeral: 'Vadd9',
            smartKey: 'F#'
        },
        {
            pad: 8,
            chord: 'Dmi',
            numeral: 'ii',
            smartKey: 'G'
        },
        {
            pad: 9,
            chord: 'Fadd9',
            numeral: 'IVadd9',
            smartKey: 'Ab'
        },
        {
            pad: 10,
            chord: 'F6',
            numeral: 'IV6',
            smartKey: 'A'
        },
        {
            pad: 11,
            chord: 'Gsus4',
            numeral: 'Vsus4',
            smartKey: 'Bb'
        },
        {
            pad: 12,
            chord: 'G',
            numeral: 'V',
            smartKey: 'B'
        },
    ],
    MAJ2: [{
            pad: 1,
            chord: 'C',
            numeral: 'I',
            smartKey: 'C'
        },
        {
            pad: 2,
            chord: 'C/B',
            numeral: 'I/7',
            smartKey: 'C#'
        },
        {
            pad: 3,
            chord: 'C/A',
            numeral: 'I/6',
            smartKey: 'D'
        },
        {
            pad: 4,
            chord: 'C/G',
            numeral: 'I/5',
            smartKey: 'Eb'
        },
        {
            pad: 5,
            chord: 'Fadd9',
            numeral: 'IVadd9',
            smartKey: 'E'
        },
        {
            pad: 6,
            chord: 'Fmi',
            numeral: 'iv',
            smartKey: 'F'
        },
        {
            pad: 7,
            chord: 'Csus4',
            numeral: 'I sus4',
            smartKey: 'F#'
        },
        {
            pad: 8,
            chord: 'Ami7',
            numeral: 'vi7',
            smartKey: 'G'
        },
        {
            pad: 9,
            chord: 'Emi',
            numeral: 'iii',
            smartKey: 'Ab'
        },
        {
            pad: 10,
            chord: 'F',
            numeral: 'IV',
            smartKey: 'A'
        },
        {
            pad: 11,
            chord: 'Gsus4',
            numeral: 'V sus4',
            smartKey: 'Bb'
        },
        {
            pad: 12,
            chord: 'G6',
            numeral: 'V6',
            smartKey: 'B'
        },
    ],
    MAJ3: [{
            pad: 1,
            chord: 'C',
            numeral: 'I',
            smartKey: 'C'
        },
        {
            pad: 2,
            chord: 'Ami',
            numeral: 'vi',
            smartKey: 'C#'
        },
        {
            pad: 3,
            chord: 'Fma7',
            numeral: 'IVma7',
            smartKey: 'D'
        },
        {
            pad: 4,
            chord: 'Gsus4',
            numeral: 'Vsus4',
            smartKey: 'Eb'
        },
        {
            pad: 5,
            chord: 'Amiadd9',
            numeral: 'viadd9',
            smartKey: 'E'
        },
        {
            pad: 6,
            chord: 'F6',
            numeral: 'IV6',
            smartKey: 'F'
        },
        {
            pad: 7,
            chord: 'Csus2',
            numeral: 'Isus2',
            smartKey: 'F#'
        },
        {
            pad: 8,
            chord: 'G',
            numeral: 'V',
            smartKey: 'G'
        },
        {
            pad: 9,
            chord: 'Dsus2',
            numeral: 'ii sus2',
            smartKey: 'Ab'
        },
        {
            pad: 10,
            chord: 'Bbadd9',
            numeral: 'bVIIadd9',
            smartKey: 'A'
        },
        {
            pad: 11,
            chord: 'Gsus4',
            numeral: 'Vsus4',
            smartKey: 'Bb'
        },
        {
            pad: 12,
            chord: 'Fadd9',
            numeral: 'IVadd9',
            smartKey: 'B'
        },
    ],
    MAJ4: [{
            pad: 1,
            chord: 'C',
            numeral: 'I',
            smartKey: 'C'
        },
        {
            pad: 2,
            chord: 'G',
            numeral: 'V',
            smartKey: 'C#'
        },
        {
            pad: 3,
            chord: 'Ami',
            numeral: 'vi',
            smartKey: 'D'
        },
        {
            pad: 4,
            chord: 'F6',
            numeral: 'IV6',
            smartKey: 'Eb'
        },
        {
            pad: 5,
            chord: 'F',
            numeral: 'IV',
            smartKey: 'E'
        },
        {
            pad: 6,
            chord: 'Ami/E',
            numeral: 'vi/E',
            smartKey: 'F'
        },
        {
            pad: 7,
            chord: 'Dmi7',
            numeral: 'ii7',
            smartKey: 'F#'
        },
        {
            pad: 8,
            chord: 'Ami/C',
            numeral: 'vi/C',
            smartKey: 'G'
        },
        {
            pad: 9,
            chord: 'Gadd9',
            numeral: 'Vadd9',
            smartKey: 'Ab'
        },
        {
            pad: 10,
            chord: 'Ami7',
            numeral: 'vi7',
            smartKey: 'A'
        },
        {
            pad: 11,
            chord: 'G/B',
            numeral: 'V/B',
            smartKey: 'Bb'
        },
        {
            pad: 12,
            chord: 'Dmi/G',
            numeral: 'ii/G',
            smartKey: 'B'
        },
    ],
    MAJ5: [{
            pad: 1,
            chord: 'C',
            numeral: 'I',
            smartKey: 'C'
        },
        {
            pad: 2,
            chord: 'D',
            numeral: 'ii',
            smartKey: 'C#'
        },
        {
            pad: 3,
            chord: 'F',
            numeral: 'IV',
            smartKey: 'D'
        },
        {
            pad: 4,
            chord: 'C',
            numeral: 'I',
            smartKey: 'Eb'
        },
        {
            pad: 5,
            chord: 'Ab',
            numeral: 'bVI',
            smartKey: 'E'
        },
        {
            pad: 6,
            chord: 'Eb',
            numeral: 'bIII',
            smartKey: 'F'
        },
        {
            pad: 7,
            chord: 'Bb',
            numeral: 'bVII',
            smartKey: 'F#'
        },
        {
            pad: 8,
            chord: 'F',
            numeral: 'IV',
            smartKey: 'G'
        },
        {
            pad: 9,
            chord: 'G7sus4',
            numeral: 'V7sus4',
            smartKey: 'Ab'
        },
        {
            pad: 10,
            chord: 'Bbadd9',
            numeral: 'bVIIadd9',
            smartKey: 'A'
        },
        {
            pad: 11,
            chord: 'F6',
            numeral: 'IV6',
            smartKey: 'Bb'
        },
        {
            pad: 12,
            chord: 'Cadd9',
            numeral: 'Iadd9',
            smartKey: 'B'
        },
    ],
    MAJ6: [{
            pad: 1,
            chord: 'C',
            numeral: 'I',
            smartKey: 'C'
        },
        {
            pad: 2,
            chord: 'G',
            numeral: 'V',
            smartKey: 'C#'
        },
        {
            pad: 3,
            chord: 'Dmi',
            numeral: 'ii',
            smartKey: 'D'
        },
        {
            pad: 4,
            chord: 'Ami',
            numeral: 'vi',
            smartKey: 'Eb'
        },
        {
            pad: 5,
            chord: 'F',
            numeral: 'IV',
            smartKey: 'E'
        },
        {
            pad: 6,
            chord: 'G/F',
            numeral: 'V/IV',
            smartKey: 'F'
        },
        {
            pad: 7,
            chord: 'C/E',
            numeral: 'I/iii',
            smartKey: 'F#'
        },
        {
            pad: 8,
            chord: 'Ami7',
            numeral: 'vi7',
            smartKey: 'G'
        },
        {
            pad: 9,
            chord: 'Dmi7',
            numeral: 'ii7',
            smartKey: 'Ab'
        },
        {
            pad: 10,
            chord: 'Emi7',
            numeral: 'iii7',
            smartKey: 'A'
        },
        {
            pad: 11,
            chord: 'C/F',
            numeral: 'I/IV',
            smartKey: 'Bb'
        },
        {
            pad: 12,
            chord: 'Gsus4',
            numeral: 'Vsus4',
            smartKey: 'B'
        },
    ],
    MAJ7: [{
            pad: 1,
            chord: 'C',
            numeral: 'I',
            smartKey: 'C'
        },
        {
            pad: 2,
            chord: 'G',
            numeral: 'V',
            smartKey: 'C#'
        },
        {
            pad: 3,
            chord: 'Ami',
            numeral: 'vi',
            smartKey: 'D'
        },
        {
            pad: 4,
            chord: 'Emi',
            numeral: 'iii',
            smartKey: 'Eb'
        },
        {
            pad: 5,
            chord: 'F',
            numeral: 'IV',
            smartKey: 'E'
        },
        {
            pad: 6,
            chord: 'C/E',
            numeral: 'I/iii',
            smartKey: 'F'
        },
        {
            pad: 7,
            chord: 'Dmi',
            numeral: 'ii',
            smartKey: 'F#'
        },
        {
            pad: 8,
            chord: 'Dmi/C',
            numeral: 'ii/I',
            smartKey: 'G'
        },
        {
            pad: 9,
            chord: 'G7/B',
            numeral: 'V7/iii',
            smartKey: 'Ab'
        },
        {
            pad: 10,
            chord: 'G',
            numeral: 'V',
            smartKey: 'A'
        },
        {
            pad: 11,
            chord: 'F/A',
            numeral: 'IV/vi',
            smartKey: 'Bb'
        },
        {
            pad: 12,
            chord: 'G7/B',
            numeral: 'V7/iii',
            smartKey: 'B'
        },
    ],
    MAJ8: [{
            pad: 1,
            chord: 'Cma9',
            numeral: 'Ima9',
            smartKey: 'C'
        },
        {
            pad: 2,
            chord: 'C#dim',
            numeral: 'ii°',
            smartKey: 'C#'
        },
        {
            pad: 3,
            chord: 'Dmi9',
            numeral: 'ii9',
            smartKey: 'D'
        },
        {
            pad: 4,
            chord: 'D#dim7',
            numeral: 'ii°7',
            smartKey: 'Eb'
        },
        {
            pad: 5,
            chord: 'Emi9',
            numeral: 'iii9',
            smartKey: 'E'
        },
        {
            pad: 6,
            chord: 'C9#5',
            numeral: 'I9#5',
            smartKey: 'F'
        },
        {
            pad: 7,
            chord: 'Fma7add13',
            numeral: 'IVma7add13',
            smartKey: 'F#'
        },
        {
            pad: 8,
            chord: 'Bb9',
            numeral: 'bVII9',
            smartKey: 'G'
        },
        {
            pad: 9,
            chord: 'Emi7',
            numeral: 'iii7',
            smartKey: 'Ab'
        },
        {
            pad: 10,
            chord: 'A9',
            numeral: 'vi9',
            smartKey: 'A'
        },
        {
            pad: 11,
            chord: 'Dmi11',
            numeral: 'ii11',
            smartKey: 'Bb'
        },
        {
            pad: 12,
            chord: 'G7b9b13',
            numeral: 'V7b9b13',
            smartKey: 'B'
        },
    ],
    MIN1: [{
            pad: 1,
            chord: 'Cmi',
            numeral: 'i',
            smartKey: 'C'
        },
        {
            pad: 2,
            chord: 'Cmi/Eb',
            numeral: 'i/III',
            smartKey: 'C#'
        },
        {
            pad: 3,
            chord: 'Fmi',
            numeral: 'iv',
            smartKey: 'D'
        },
        {
            pad: 4,
            chord: 'G',
            numeral: 'V',
            smartKey: 'Eb'
        },
        {
            pad: 5,
            chord: 'Abma7',
            numeral: 'VIma7',
            smartKey: 'E'
        },
        {
            pad: 6,
            chord: 'Eb',
            numeral: 'III',
            smartKey: 'F'
        },
        {
            pad: 7,
            chord: 'Gmi',
            numeral: 'v',
            smartKey: 'F#'
        },
        {
            pad: 8,
            chord: 'Bb',
            numeral: 'VII',
            smartKey: 'G'
        },
        {
            pad: 9,
            chord: 'F',
            numeral: 'IV',
            smartKey: 'Ab'
        },
        {
            pad: 10,
            chord: 'Fmi/Ab',
            numeral: 'iv/VI',
            smartKey: 'A'
        },
        {
            pad: 11,
            chord: 'Cmi/G',
            numeral: 'i/V',
            smartKey: 'Bb'
        },
        {
            pad: 12,
            chord: 'G',
            numeral: 'V',
            smartKey: 'B'
        },
    ],
    MIN2: [{
            pad: 1,
            chord: 'Cmi',
            numeral: 'i',
            smartKey: 'C'
        },
        {
            pad: 2,
            chord: 'G+/B',
            numeral: 'V+/III',
            smartKey: 'C#'
        },
        {
            pad: 3,
            chord: 'Cmi/Bb',
            numeral: 'i/VII',
            smartKey: 'D'
        },
        {
            pad: 4,
            chord: 'Cmi/A',
            numeral: 'i/VI',
            smartKey: 'Eb'
        },
        {
            pad: 5,
            chord: 'Abma7',
            numeral: 'VIma7',
            smartKey: 'E'
        },
        {
            pad: 6,
            chord: 'Ebma7',
            numeral: 'IIIma7',
            smartKey: 'F'
        },
        {
            pad: 7,
            chord: 'Fmi',
            numeral: 'iv',
            smartKey: 'F#'
        },
        {
            pad: 8,
            chord: 'Bb7',
            numeral: 'VII7',
            smartKey: 'G'
        },
        {
            pad: 9,
            chord: 'Cmi',
            numeral: 'i',
            smartKey: 'Ab'
        },
        {
            pad: 10,
            chord: 'Bbadd9',
            numeral: 'VIIadd9',
            smartKey: 'A'
        },
        {
            pad: 11,
            chord: 'Abadd9',
            numeral: 'VIadd9',
            smartKey: 'Bb'
        },
        {
            pad: 12,
            chord: 'G7sus4',
            numeral: 'V7sus4',
            smartKey: 'B'
        },
    ],
    MIN3: [{
            pad: 1,
            chord: 'Cmi',
            numeral: 'i',
            smartKey: 'C'
        },
        {
            pad: 2,
            chord: 'Ab',
            numeral: 'VI',
            smartKey: 'C#'
        },
        {
            pad: 3,
            chord: 'Eb',
            numeral: 'III',
            smartKey: 'D'
        },
        {
            pad: 4,
            chord: 'Bb',
            numeral: 'VII',
            smartKey: 'Eb'
        },
        {
            pad: 5,
            chord: 'F',
            numeral: 'iv',
            smartKey: 'E'
        },
        {
            pad: 6,
            chord: 'Fmi',
            numeral: 'iv',
            smartKey: 'F'
        },
        {
            pad: 7,
            chord: 'Cmi/G',
            numeral: 'i/V',
            smartKey: 'F#'
        },
        {
            pad: 8,
            chord: 'Gsus4',
            numeral: 'Vsus4',
            smartKey: 'G'
        },
        {
            pad: 9,
            chord: 'Cmi',
            numeral: 'i',
            smartKey: 'Ab'
        },
        {
            pad: 10,
            chord: 'Cmi#5',
            numeral: 'i#5',
            smartKey: 'A'
        },
        {
            pad: 11,
            chord: 'Cmi6',
            numeral: 'i6',
            smartKey: 'Bb'
        },
        {
            pad: 12,
            chord: 'Cmi7',
            numeral: 'i7',
            smartKey: 'B'
        },
    ],
    MIN4: [{
            pad: 1,
            chord: 'Cmi',
            numeral: 'i',
            smartKey: 'C'
        },
        {
            pad: 2,
            chord: 'Eb',
            numeral: 'III',
            smartKey: 'C#'
        },
        {
            pad: 3,
            chord: 'Bb',
            numeral: 'VII',
            smartKey: 'D'
        },
        {
            pad: 4,
            chord: 'F',
            numeral: 'iv',
            smartKey: 'Eb'
        },
        {
            pad: 5,
            chord: 'Ab',
            numeral: 'VI',
            smartKey: 'E'
        },
        {
            pad: 6,
            chord: 'Abma7',
            numeral: 'VIma7',
            smartKey: 'F'
        },
        {
            pad: 7,
            chord: 'Abmi7',
            numeral: 'vi7',
            smartKey: 'F#'
        },
        {
            pad: 8,
            chord: 'Ebma7',
            numeral: 'IIIma7',
            smartKey: 'G'
        },
        {
            pad: 9,
            chord: 'Dsus4',
            numeral: 'iV sus4',
            smartKey: 'Ab'
        },
        {
            pad: 10,
            chord: 'D',
            numeral: 'iV',
            smartKey: 'A'
        },
        {
            pad: 11,
            chord: 'Fmi/G',
            numeral: 'iv/V',
            smartKey: 'Bb'
        },
        {
            pad: 12,
            chord: 'G+',
            numeral: 'V+',
            smartKey: 'B'
        },
    ],
    MIN5: [{
            pad: 1,
            chord: 'Cmi',
            numeral: 'i',
            smartKey: 'C'
        },
        {
            pad: 2,
            chord: 'Bb',
            numeral: 'VII',
            smartKey: 'C#'
        },
        {
            pad: 3,
            chord: 'Ab6',
            numeral: 'VI6',
            smartKey: 'D'
        },
        {
            pad: 4,
            chord: 'Bbadd9',
            numeral: 'VIIadd9',
            smartKey: 'Eb'
        },
        {
            pad: 5,
            chord: 'Cmi',
            numeral: 'i',
            smartKey: 'E'
        },
        {
            pad: 6,
            chord: 'Dmi7',
            numeral: 'ii7',
            smartKey: 'F'
        },
        {
            pad: 7,
            chord: 'Cmi/Eb',
            numeral: 'i/III',
            smartKey: 'F#'
        },
        {
            pad: 8,
            chord: 'Fmi',
            numeral: 'iv',
            smartKey: 'G'
        },
        {
            pad: 9,
            chord: 'G',
            numeral: 'V',
            smartKey: 'Ab'
        },
        {
            pad: 10,
            chord: 'Abma7',
            numeral: 'VIma7',
            smartKey: 'A'
        },
        {
            pad: 11,
            chord: 'B6/9',
            numeral: 'bVII6/9',
            smartKey: 'Bb'
        },
        {
            pad: 12,
            chord: 'Csus4',
            numeral: 'i sus4',
            smartKey: 'B'
        },
    ],
    MIN6: [{
            pad: 1,
            chord: 'Cmi',
            numeral: 'i',
            smartKey: 'C'
        },
        {
            pad: 2,
            chord: 'Fmi',
            numeral: 'iv',
            smartKey: 'C#'
        },
        {
            pad: 3,
            chord: 'Bb',
            numeral: 'VII',
            smartKey: 'D'
        },
        {
            pad: 4,
            chord: 'Eb',
            numeral: 'III',
            smartKey: 'Eb'
        },
        {
            pad: 5,
            chord: 'Ab',
            numeral: 'VI',
            smartKey: 'E'
        },
        {
            pad: 6,
            chord: 'Dmi7b5',
            numeral: 'ii7b5',
            smartKey: 'F'
        },
        {
            pad: 7,
            chord: 'Gaddb9',
            numeral: 'Vaddb9',
            smartKey: 'F#'
        },
        {
            pad: 8,
            chord: 'G',
            numeral: 'V',
            smartKey: 'G'
        },
        {
            pad: 9,
            chord: 'Ab/G',
            numeral: 'VI/V',
            smartKey: 'Ab'
        },
        {
            pad: 10,
            chord: 'G7',
            numeral: 'V7',
            smartKey: 'A'
        },
        {
            pad: 11,
            chord: 'Cmi/G',
            numeral: 'i/V',
            smartKey: 'Bb'
        },
        {
            pad: 12,
            chord: 'G7b9',
            numeral: 'V7b9',
            smartKey: 'B'
        },
    ],
    MIN7: [{
            pad: 1,
            chord: 'Cmi9',
            numeral: 'i9',
            smartKey: 'C'
        },
        {
            pad: 2,
            chord: 'Ab9',
            numeral: 'VI9',
            smartKey: 'C#'
        },
        {
            pad: 3,
            chord: 'Cmi11',
            numeral: 'i11',
            smartKey: 'D'
        },
        {
            pad: 4,
            chord: 'C7#9b13',
            numeral: 'i7#9b13',
            smartKey: 'Eb'
        },
        {
            pad: 5,
            chord: 'Fmi9',
            numeral: 'iv9',
            smartKey: 'E'
        },
        {
            pad: 6,
            chord: 'Ebma7/F',
            numeral: 'IIIma7/iv',
            smartKey: 'F'
        },
        {
            pad: 7,
            chord: 'C11',
            numeral: 'i11',
            smartKey: 'F#'
        },
        {
            pad: 8,
            chord: 'Ami11',
            numeral: 'vii11',
            smartKey: 'G'
        },
        {
            pad: 9,
            chord: 'Ab7#11',
            numeral: 'VI7#11',
            smartKey: 'Ab'
        },
        {
            pad: 10,
            chord: 'G7#9',
            numeral: 'V7#9',
            smartKey: 'A'
        },
        {
            pad: 11,
            chord: 'Cmiadd9',
            numeral: 'i add9',
            smartKey: 'Bb'
        },
        {
            pad: 12,
            chord: 'G7b9b13',
            numeral: 'V7b9b13',
            smartKey: 'B'
        },
    ],
    MIN8: [{
            pad: 1,
            chord: 'Cmi6/9',
            numeral: 'i6/9',
            smartKey: 'C'
        },
        {
            pad: 2,
            chord: 'Dmi7b5',
            numeral: 'ii7b5',
            smartKey: 'C#'
        },
        {
            pad: 3,
            chord: 'Cmi11/G',
            numeral: 'i11/V',
            smartKey: 'D'
        },
        {
            pad: 4,
            chord: 'Cmi9',
            numeral: 'i9',
            smartKey: 'Eb'
        },
        {
            pad: 5,
            chord: 'Fmi9',
            numeral: 'iv9',
            smartKey: 'E'
        },
        {
            pad: 6,
            chord: 'Abmi7',
            numeral: 'vi7',
            smartKey: 'F'
        },
        {
            pad: 7,
            chord: 'Ebmi7',
            numeral: 'III7',
            smartKey: 'F#'
        },
        {
            pad: 8,
            chord: 'Bbmi7b5',
            numeral: 'VII7b5',
            smartKey: 'G'
        },
        {
            pad: 9,
            chord: 'Ami11',
            numeral: 'vii11',
            smartKey: 'Ab'
        },
        {
            pad: 10,
            chord: 'Abma7#5',
            numeral: 'VIma7#5',
            smartKey: 'A'
        },
        {
            pad: 11,
            chord: 'G7b9b13',
            numeral: 'V7b9b13',
            smartKey: 'Bb'
        },
        {
            pad: 12,
            chord: 'Cmi9ma7',
            numeral: 'i9ma7',
            smartKey: 'B'
        },
    ],
};

// Consolidate these constants at the top for reuse across functions
const noteMap = {
    'C': 0,
    'C#': 1,
    'Db': 1,
    'D': 2,
    'D#': 3,
    'Eb': 3,
    'E': 4,
    'F': 5,
    'F#': 6,
    'Gb': 6,  // Added Gb as equivalent to F#
    'G': 7,
    'G#': 8,
    'Ab': 8,
    'A': 9,
    'A#': 10,
    'Bb': 10,
    'B': 11
};


const reverseNoteMap = {
    0: 'C',
    1: 'C#',
    2: 'D',
    3: 'Eb',
    4: 'E',
    5: 'F',
    6: 'F#', // Use 'F#' as the default enharmonic spelling for 6
    7: 'G',
    8: 'Ab',
    9: 'A',
    10: 'Bb',
    11: 'B'
};


const enharmonicMap = {
    'C#': 'Db',
    'Db': 'C#',
    'D#': 'Eb',
    'Eb': 'D#',
    'F#': 'Gb',
    'Gb': 'F#',
    'G#': 'Ab',
    'Ab': 'G#',
    'A#': 'Bb',
    'Bb': 'A#'
};


const specificSuffixes = [
    'sus4', 'sus2', 'add9', 'addb9', 'ma7', 'ma7add13', 'ma9', 'ma7#5',
    '6', '6/9', 'dim', 'dim7', '7', '7#9', '7b13', '7b9b13', '7#11',
    '9', '9#5', '11', 'b13', 'addb13', 'aug'
];


function simplifyChord(chord) {
    const rootMatch = chord.match(/^[A-Ga-g][b#]?/); // Allow both uppercase and lowercase roots
    if (!rootMatch) return chord;

    const root = rootMatch[0];
    const isMinor = chord.toLowerCase().includes('mi') && !chord.toLowerCase().includes('maj');

    // Enhance suffix handling to preserve and match enharmonic names
    const suffixMatch = chord.slice(root.length);
    const finalRoot = enharmonicMap[root.toUpperCase()] || root;

    return isMinor ? `${finalRoot}mi${suffixMatch}` : `${finalRoot}${suffixMatch}`.trim();
}



function simplifyChordSet(chordSet) {
    for (let key in chordSet) {
        if (chordSet.hasOwnProperty(key)) {
            chordSet[key] = chordSet[key].map(entry => {
                const simplifiedChord = simplifyChord(entry.chord);
                entry.chord = simplifiedChord;
                return entry;
            });
        }
    }
    return chordSet;
}

function transposeChord(chord, interval) {
    const rootMatch = chord.match(/^[A-G][b#]?/);
    if (!rootMatch) return chord;

    const root = rootMatch[0];
    const originalNote = noteMap[root];
    const transposedNote = (originalNote + interval + 12) % 12;
    const transposedRoot = reverseNoteMap[transposedNote];
    const finalRoot = enharmonicMap[transposedRoot] || transposedRoot;

    if (chord.includes('/')) {
        const slashMatch = chord.match(/\/([A-G][b#]?)/);
        if (slashMatch) {
            const slashNote = slashMatch[1];
            const originalSlashNote = noteMap[slashNote];
            const transposedSlashNote = (originalSlashNote + interval + 12) % 12;
            const transposedSlash = reverseNoteMap[transposedSlashNote];
            const finalSlash = enharmonicMap[transposedSlash] || transposedSlash;
            return `${finalRoot}${chord.slice(root.length).split('/')[0]}/${finalSlash}`;
        }
    }

    return chord.replace(root, finalRoot);
}

function transposeChordSet(chordSet, interval) {
    for (let key in chordSet) {
        if (chordSet.hasOwnProperty(key)) {
            chordSet[key] = chordSet[key].map(entry => {
                const transposedChord = transposeChord(entry.chord, interval);
                entry.chord = transposedChord;
                return entry;
            });
        }
    }
    return chordSet;
}

function transposeChordSets(chordSets, root) {
    if (!(root in noteMap)) {
        console.error('Invalid root note');
        return;
    }

    const interval = (noteMap[root] - noteMap['C'] + 12) % 12;
    const complexChords = {};
    const simplifiedChords = {};

    for (const [setName, chords] of Object.entries(chordSets)) {
        complexChords[setName] = chords.map(entry => ({
            ...entry,
            chord: transposeChord(entry.chord, interval)
        }));

        simplifiedChords[setName] = complexChords[setName].map(entry => ({
            ...entry,
            chord: simplifyChord(entry.chord)
        }));
    }

    return {
        complexChords,
        simplifiedChords
    };
}

function createChordCheckbox(setName, padNumber, chordName) {
    const checkbox = document.createElement('input'); 
    checkbox.type = 'checkbox';
    checkbox.id = `chordCheckbox${padNumber}`; 
    checkbox.value = chordName; 

    const label = document.createElement('label'); 
    label.htmlFor = `chordCheckbox${padNumber}`; 
    label.innerHTML = `&nbsp;&nbsp;<b>${setName}</b>, "pad": <b>${padNumber}</b>, "chord": "<b>${chordName}</b>"`; // Add space before the set name

    const container = document.createElement('div'); 
    container.appendChild(document.createElement('br')); 
    container.appendChild(checkbox); 
    container.appendChild(label); 
    container.appendChild(document.createElement('br')); 

    const hr = document.createElement('hr'); 
    container.appendChild(hr); 

    
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            // Uncheck all other checkboxes
            const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
            allCheckboxes.forEach((cb) => {
                if (cb !== checkbox) {
                    cb.checked = false;
                }
            });

            
            document.getElementById('current-chord').value = chordName;
        } else {
            document.getElementById('current-chord').value = ''; 
        }
    });

    outputBox.appendChild(container); 
}


function findChordMatch(complexChords, currentChord) {
    if (!currentChord) {
        console.log('No chord provided.');
        return;
    }

    // Simplify and normalize the currentChord for comparison
    const simplifiedChord = simplifyChord(currentChord.trim());
    const normalizedChord = (enharmonicMap[simplifiedChord] || simplifiedChord).toLowerCase();

    for (const [setName, chords] of Object.entries(complexChords)) {
        for (const entry of chords) {
            const entrySimplified = simplifyChord(entry.chord);
            const entryChord = (enharmonicMap[entrySimplified.trim()] || entrySimplified.trim()).toLowerCase();

            if (entryChord === normalizedChord) {
                // console.log(`Found in set: ${setName}, Pad: ${entry.pad}`);
                return;
            }
        }
    }

    console.log('Chord not found in any set.');
}




function circleOfFifths(chordSet, currentChord) {
    if (!currentChord) {
        console.log('No chord provided.');
        return null;
    }

    const circle = [
        { major: 'C', minor: 'Am', enharmonicMajor: 'B#', enharmonicMinor: null },
        { major: 'G', minor: 'Em', enharmonicMajor: null, enharmonicMinor: null },
        { major: 'D', minor: 'Bm', enharmonicMajor: null, enharmonicMinor: null },
        { major: 'A', minor: 'F#m', enharmonicMajor: null, enharmonicMinor: 'G#m' },
        { major: 'E', minor: 'C#m', enharmonicMajor: null, enharmonicMinor: 'Dbm' },
        { major: 'B', minor: 'G#m', enharmonicMajor: 'Cb', enharmonicMinor: 'Abm' },
        { major: 'F#', minor: 'D#m', enharmonicMajor: 'Gb', enharmonicMinor: 'Ebm' }, // Updated for consistency
        { major: 'Db', minor: 'Bbm', enharmonicMajor: 'C#', enharmonicMinor: 'A#m' },
        { major: 'Ab', minor: 'Fm', enharmonicMajor: 'G#', enharmonicMinor: null },
        { major: 'Eb', minor: 'Cm', enharmonicMajor: 'D#', enharmonicMinor: null },
        { major: 'Bb', minor: 'Gm', enharmonicMajor: 'A#', enharmonicMinor: null },
        { major: 'F', minor: 'Dm', enharmonicMajor: 'E#', enharmonicMinor: null }
    ];

    const simplifiedRoot = currentChord.match(/^[A-Ga-g][b#]?/)[0];
    let currentKey = null;
    let chordType = '';

    // Loop through the circle to find a match
    for (let i = 0; i < circle.length; i++) {
        if (circle[i].major === simplifiedRoot || circle[i].enharmonicMajor === simplifiedRoot) {
            currentKey = circle[i];
            chordType = 'major';
            break;
        } else if (circle[i].minor === simplifiedRoot || circle[i].enharmonicMinor === simplifiedRoot) {
            currentKey = circle[i];
            chordType = 'minor';
            break;
        }
    }

    if (!currentKey) {
        console.log('Chord not found in the circle of fifths.');
        return null;
    }

    const relativeKey = chordType === 'major' ? currentKey.minor : currentKey.major;
    const currentIndex = circle.findIndex(key => key.major === currentKey.major);
    const neighboringKeys = [
        circle[(currentIndex + 11) % 12],
        circle[(currentIndex + 1) % 12]
    ];

    const neighboringMajorKeys = neighboringKeys.map(key => key.major);
    const neighboringRelativeMinorKeys = neighboringKeys.map(key => key.minor);

    console.log(`Relative Key: ${relativeKey}`);
    console.log(`Neighboring Major Keys: ${neighboringMajorKeys.join(', ')}`);
    console.log(`Neighboring Relative Minor Keys: ${neighboringRelativeMinorKeys.join(', ')}`);

    return {
        neighboringMajorKeys,
        neighboringRelativeMinorKeys
    };
}


function getChordComplexityRank(chord) {
    const complexityRank = [
        'maj', 'min', 'mi', 'dim', 'sus2', 'sus4',  // Simple triads and suspensions
        '6', 'add9',                                // First extensions
        '7', 'mi7', 'ma7',                          // Seventh chords
        '9', 'mi9', 'ma9',                          // Ninth chords
        '11', 'mi11',                               // Eleventh chords
        '13', 'ma7add13',                           // Thirteenth chords and major seventh added thirteenth
        '#9', 'b9', 'b13', '#11',                   // Alterations
        'dim7', '7#9', '7b9', '7b13', '7#11'        // Altered dominant and diminished sevenths
    ];

    let rank = 0;
    complexityRank.forEach((suffix, index) => {
        if (chord.includes(suffix)) {
            rank = index + 1;
        }
    });

    return rank;
}

function getChordRoot(chord) {
    // Extract the root from the chord (e.g., "D" from "Dmi7").
    const match = chord.match(/^[A-G][b#]?/);
    return match ? match[0] : chord;
}

function groupAndSortChords(chords) {
    // Group chords by their root triad.
    const groups = chords.reduce((acc, chord) => {
        const root = getChordRoot(chord.chord);
        if (!acc[root]) {
            acc[root] = [];
        }
        acc[root].push(chord);
        return acc;
    }, {});

    // Sort each group by complexity.
    for (const root in groups) {
        groups[root].sort((a, b) => a.rank - b.rank);
    }

    // Flatten the sorted groups into a single array.
    return Object.values(groups).flat();
}

// Update findNeighboringChordMatches to use createChordCheckbox for matches
function findNeighboringChordMatches(complexChords, neighboringMajorKeys, neighboringRelativeMinorKeys) {
    if (!neighboringMajorKeys || !neighboringRelativeMinorKeys) {
        console.log('No neighboring keys provided.');
        return;
    }

    const printedChords = new Set();
    const relativeKeyMatches = [];
    const neighboringKeyMatches = [];

    // Normalize the keys for comparison
    const normalizeKey = (key) => enharmonicMap[key] || key;

    // Find matches in Relative Key
    neighboringRelativeMinorKeys.forEach(key => {
        const normalizedKey = normalizeKey(key);
        for (const [setName, chords] of Object.entries(complexChords)) {
            chords.forEach(entry => {
                const entryChord = (enharmonicMap[entry.chord.trim()] || entry.chord.trim()).toLowerCase();
                if (entryChord.includes(normalizedKey.toLowerCase()) && entry.pad !== 1 && !printedChords.has(entryChord)) {
                    printedChords.add(entryChord);
                    relativeKeyMatches.push({
                        set: setName,
                        pad: entry.pad,
                        chord: entry.chord,
                        rank: getChordComplexityRank(entry.chord)
                    });
                }
            });
        }
    });

    // Find matches in Neighboring Major Keys
    neighboringMajorKeys.forEach(key => {
        const normalizedKey = normalizeKey(key);
        for (const [setName, chords] of Object.entries(complexChords)) {
            chords.forEach(entry => {
                const entryChord = (enharmonicMap[entry.chord.trim()] || entry.chord.trim()).toLowerCase();
                if (entryChord.includes(normalizedKey.toLowerCase()) && entry.pad !== 1 && !printedChords.has(entryChord)) {
                    printedChords.add(entryChord);
                    neighboringKeyMatches.push({
                        set: setName,
                        pad: entry.pad,
                        chord: entry.chord,
                        rank: getChordComplexityRank(entry.chord)
                    });
                }
            });
        }
    });

    // Group by root triad and sort by complexity within each group
    const sortedRelativeKeyMatches = groupAndSortChords(relativeKeyMatches);
    const sortedNeighboringKeyMatches = groupAndSortChords(neighboringKeyMatches);

    // Print the sorted matches using createChordCheckbox for checkboxes
    appendOutput("\nRelative Key chord matches:\n");
    sortedRelativeKeyMatches.forEach(match => {
        createChordCheckbox(match.set, match.pad, match.chord);
    });

    appendOutput("\n\nNeighboring chord matches:\n");
    sortedNeighboringKeyMatches.forEach(match => {
        createChordCheckbox(match.set, match.pad, match.chord);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    // Select the existing submit button and output box from HTML
    const submitButton = document.getElementById('submit-button');
    const outputBox = document.getElementById('output-box');

    // Button click listener to process inputs
    submitButton.addEventListener('click', () => {
        spinWheelOnce(); // Spin the wheel when the search button is pressed
        const rootInput = document.getElementById('root-note').value;
        const currentChordInput = document.getElementById('current-chord').value;
    
        outputBox.innerHTML = ''; // Clear previous output
    
        if (!rootInput) {
            appendOutput('No root note provided');
            return;
        }
    

        const transposedChordSets = transposeChordSets(chordSets, rootInput);
    if (transposedChordSets) {


// console.log('Transposed Chord Sets:\n' + JSON.stringify(transposedChordSets.complexChords, null, 0).replace(/],"/g, '],\n"')); // CHORDSETS FOR DEBUGGING
// console.log('Simplified Chord Sets:\n' + JSON.stringify(transposedChordSets.simplifiedChords, null, 0).replace(/],"/g, '],\n"')); // CHORDSETS FOR DEBUGGING


if (!currentChordInput) {
    appendOutput('No chord provided');
    return;
}

// Finding the chord and printing to console only
findChordMatch(transposedChordSets.complexChords, currentChordInput);

// Find neighboring chords based on circle of fifths
const simplifiedChord = simplifyChord(currentChordInput);
const neighboringKeysData = circleOfFifths(transposedChordSets.complexChords, simplifiedChord);

// Ensure neighboringKeysData is valid before proceeding
if (neighboringKeysData) {
    const { neighboringMajorKeys, neighboringRelativeMinorKeys } = neighboringKeysData;

    // Check if neighboring keys are available before finding matches
    if (neighboringMajorKeys.length > 0 || neighboringRelativeMinorKeys.length > 0) {
        findNeighboringChordMatches(
            transposedChordSets.complexChords,
            neighboringMajorKeys,
            neighboringRelativeMinorKeys
        );
    } else {
        appendOutput('No neighboring keys found.');
    }
} else {
    appendOutput('No neighboring keys data available.');
}
}
});

    // Override console.log to also log messages to the output box, but with filtering
const originalConsoleLog = console.log;
console.log = function (...args) {
    originalConsoleLog.apply(console, args);

    args.forEach(arg => {
        let message = typeof arg === "object" ? JSON.stringify(arg) : arg;

        
        message = message.replace(/^Relative Key:/, '<b>Relative Key:</b>');
        message = message.replace(/^Neighboring Major Keys:/, '<b>Neighboring Major Keys:</b>');
        message = message.replace(/^Neighboring Relative Minor Keys:/, '<b>Neighboring Relative Minor Keys:</b>');
        message = message.replace(/^Relative Key chord matches:/, '<b>Relative Key chord matches:</b>');
        message = message.replace(/^Neighboring chord matches:/, '<b>Neighboring chord matches:</b>');

        
        message = message.replace(/(\w+), "pad": (\d+), "chord": "([^"]+)"/g, '<b>$1</b>, "pad": <b>$2</b>, "chord": "<b>$3</b>"');

        
        const outputParagraph = document.createElement('p');
        outputParagraph.innerHTML = message;

        
        if (message.includes('<b>')) {
            const hr = document.createElement('hr');
            outputBox.appendChild(hr);
        }

        outputBox.appendChild(outputParagraph);
        outputBox.scrollTop = outputBox.scrollHeight; 
    });
};
});