function oldBooks(input) {
    let index = 0;
    let book = input[index];
    index++;
    let currentBook = input[index];

    while (currentBook !== book && currentBook !== "No More Books") {
        index++;
        currentBook = input[index];
    }
    if (currentBook === book) {
        console.log(`You checked ${index-1} books and found it.`);
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index - 1} books.`)
    }
}
oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])
