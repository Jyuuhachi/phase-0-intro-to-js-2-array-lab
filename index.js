let cats = ["Milo", "Otis", "Garfield"]
/*function cats() {
    return cats
}*/
function destructivelyAppendCat(name) {
    cats.push(name)
    return cats
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
    return cats
}
function destructivelyRemoveLastCat() {
    cats.pop()
    return cats
}
function destructivelyRemoveFirstCat() {
    cats.shift()
    return cats
}
function appendCat(name) {
    let appendedCats = ["Milo", "Otis", "Garfield"]
    appendedCats.push(name)
    return appendedCats
}
function prependCat(name) {
    let appendedCats = ["Milo", "Otis", "Garfield"]
    appendedCats.unshift(name)
    return appendedCats
}
function removeLastCat() {
    let appendedCats = ["Milo", "Otis", "Garfield"]
    appendedCats.pop()
    return appendedCats
}
function removeFirstCat() {
    let appendedCats = ["Milo", "Otis", "Garfield"]
    appendedCats.shift()
    return appendedCats
}