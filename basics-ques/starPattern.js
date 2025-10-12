
// for (let i = 0; i < 4; i++) {
//     let row = "";
//     for (let j = 0; j < 4; j++) {
//         row = row + " *";
//     }
//     console.log(row)
// }

// for (let i = 0; i < 8; i++) {
//     let row = "";
//     for (let j = 0; j < i + 1; j++) {
//         row = row + " *"
//     }
//     console.log(row)
// }

for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row = row + (i + 1)
    }
    console.log(row)
}

for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j < 5 - i; j++) {
        row = row + (j + 1);
    }
    console.log(row)
}

for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j < 5 - i; j++) {
        row = row + " *"
    }
    console.log(row)
}

for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j < 5 - (i + 1); j++) {
        row = row + " ";
    }
    for (let k = 0; k < i + 1; k++) {
        row = row + "*"
    }
    console.log(row)
}

for (let i = 0; i < 6; i++) {
    let row = "";
    let flip = 1;
    for (j = 0; j < i + 1; j++) {
        row = row + flip;
        flip === 1 ? flip = 0 : flip = 1;
    }
    console.log(row)
}