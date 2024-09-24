function constructNote(message, letters) {
    const letterCount = {};

    // Count the occurrences of each letter in the letters string
    for (const letter of letters) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    }

    // Check if the message can be constructed
    for (const char of message) {
        if (!letterCount[char]) {
            return false; // Not enough letters to construct the message
        }
        letterCount[char]--; // Use one letter from the count
        if (letterCount[char] < 0) {
            return false; // More letters used than available
        }
    }

    return true; // All letters needed are available
}
