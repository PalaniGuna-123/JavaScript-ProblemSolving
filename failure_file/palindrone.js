function isPalindrome(number) {
    // Convert the number to a string
    let str = number.toString();
    
    // Reverse the string and check if it matches the original string
    let reversedStr = str.split('').reverse().join('');
    
    if (str === reversedStr) {
        return true; // It is a palindrome
    } else {
        return false; // It is not a palindrome
    }
}

// Example usage
let num = 121;
if (isPalindrome(num)) {
    console.log(`${num} is a palindrome`);
} else {
    console.log(`${num} is not a palindrome`);
}
