// Define an array of page names
var pages = [
    "lesson1",
    "lesson1b",
    "lesson2",
    "lesson3A",
    "lesson3B",
    "lesson4A",
    "lesson4B",
    "lesson5A",
    "lesson5B",
    "lesson6A",
    "lesson6B",
    "lesson7A",
    "lesson7B",
    "lesson8",
    "lesson9A",
    "lesson9B",
    "lesson10",
    "lesson11",
    "lesson12"

    // Add more page names as needed
];

// Loop through the array and create links
for (var i = 0; i < pages.length; i++) {
    var pageName = pages[i];
    document.write('<a href="./pages/' + pageName + '.html">' + pageName + '</a>');
}
