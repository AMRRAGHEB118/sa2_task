const writeCharacters = (paragraph) => {
    let result = "";
    for (let i = 0; i < paragraph.length; i += 2) {
        let letter = paragraph[i];
        let count = paragraph[i + 1];
        for (let j = 0; j < count; j++) {
            result += letter;
        }
    }
    return result
}

module.exports = writeCharacters