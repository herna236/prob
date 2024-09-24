function isSubsequence(str1, str2) {
    let i = 0; // Pointer for str1
    let j = 0; // Pointer for str2

    while (i < str1.length && j < str2.length) {
        if (str1[i] === str2[j]) {
            i++; // Move the pointer in str1 if there's a match
        }
        j++; // Always move the pointer in str2
    }


    return i === str1.length;
}
