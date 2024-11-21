// Function to decode a Caesar cipher shift (shift by -3 positions)
function decodeLetter(letter, shift = 3) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    if (letter >= 'a' && letter <= 'z') {
        // Decode lowercase letter
        const index = alphabet.indexOf(letter);
        const newIndex = (index - shift + 26) % 26;  // Make sure it's positive
        return alphabet[newIndex];
    } else if (letter >= 'A' && letter <= 'Z') {
        // Decode uppercase letter
        const index = upperAlphabet.indexOf(letter);
        const newIndex = (index - shift + 26) % 26;  // Make sure it's positive
        return upperAlphabet[newIndex];
    } else {
        return letter;  // Return the letter if it's not in the alphabet
    }
}

// Example usage:
const encodedLetter = 'd';  // 'd' is encoded as 'a' with a shift of 3
const decodedLetter = decodeLetter(encodedLetter);

console.log(decodedLetter);  // Output: 'a'
