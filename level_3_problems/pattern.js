function printDiamond(rows) {
    let n = Math.floor(rows / 2); 

    for (let i = 0; i <= n; i++) {
        let line = "";

        for (let j = 0; j < n - i; j++) {
            line += " ";
        }

        for (let j = 0; j < 2 * i + 1; j++) {
            line += "*";
        }

        console.log(line);
    }

    for (let i = n - 1; i >= 0; i--) {
        let line = "";

        for (let j = 0; j < n - i; j++) {
            line += " ";
        }

        for (let j = 0; j < 2 * i + 1; j++) {
            line += "*";
        }

        console.log(line);
    }
}


printDiamond(30); 

function print_pyramid_pattern(n) {
    for (let i = 0; i < n; i++) {
        let row = '';//variable strored

        // Print spaces
        for (let j = 0; j < n - i - 1; j++) {
            row += ' ';
        }

        // Print stars
        for (let k = 0; k < 2 * i + 1; k++) {
            row += '*';
        }

        // Print the row
        console.log(row);
    }
}

// Call the function
print_pyramid_pattern(10);

let guna=(1,2,3,4,5,5)
