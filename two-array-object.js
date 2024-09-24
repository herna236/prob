function twoArrayObject(keys, values) {
    const result = {};

    for (let i = 0; i < keys.length; i++) {
        // If there are values left, assign them; otherwise, assign null
        result[keys[i]] = i < values.length ? values[i] : null;
    }

    return result;
}
