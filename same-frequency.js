function sameFrequency(num1, num2) {
    // Convert numbers to strings
    const str1 = num1.toString();
    const str2 = num2.toString();

    // If lengths differ, they can't have the same frequency
    if (str1.length !== str2.length) return false;

    const frequencyCounter = {};

    // Count frequency of digits in the first number
    for (const char of str1) {
        frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
    }

    // Check against the second number
    for (const char of str2) {
        if (!frequencyCounter[char]) {
            return false; // Digit not found or frequency mismatch
        }
        frequencyCounter[char] -= 1; // Decrease frequency count
    }

    return true; // All frequencies matched
}
