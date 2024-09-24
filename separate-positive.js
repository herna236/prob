function separatePositive(arr) {
    let left = 0; // Pointer for the next positive position

    for (let right = 0; right < arr.length; right++) {
        if (arr[right] > 0) {
            // Swap if the current element is positive
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
        }
    }

    return arr; // Return the modified array
}
