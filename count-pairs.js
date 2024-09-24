function countPairs(arr, targetSum) {
    const seen = new Set();
    let count = 0;

    for (const num of arr) {
        const complement = targetSum - num;
        // Check if the complement has been seen
        if (seen.has(complement)) {
            count++;
        }
        // Add the current number to the seen set
        seen.add(num);
    }

    return count;
}
