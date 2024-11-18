function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
}
console.log(isLeapYear(2024)); // Output: true
console.log(isLeapYear(2023)); // Output: false

function printButterflyPattern(n) {
    // Upper half of the butterfly
    for (let i = 1; i <= n; i++) {
      // Print left half stars
      let line = '';
      for (let j = 1; j <= i; j++) {
        line += '*';
      }
  
      // Print spaces
      for (let j = 1; j <= (2 * (n - i)); j++) {
        line += ' ';
      }
  
      // Print right half stars
      for (let j = 1; j <= i; j++) {
        line += '*';
      }
  
      console.log(line);
    }
  
    // Lower half of the butterfly
    for (let i = n; i >= 1; i--) {
      // Print left half stars
      let line = '';
      for (let j = 1; j <= i; j++) {
        line += '*';
      }
  
      // Print spaces
      for (let j = 1; j <= (2 * (n - i)); j++) {
        line += ' ';
      }
  
      // Print right half stars
      for (let j = 1; j <= i; j++) {
        line += '*';
      }
  
      console.log(line);
    }
  }
  
  // Call the function with a desired number of rows
  printButterflyPattern(5);
  