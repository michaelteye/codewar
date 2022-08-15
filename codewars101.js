function getunt(str) {
    return (str.match(/[aeiou]/g) || []).length
}