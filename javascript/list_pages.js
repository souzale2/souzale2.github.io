// Define an array of page names
var pages = [
    "lesson1",
    "lesson1b",
    "lesson2",
    "lesson3A",
    "lesson3B",
    "lesson4A",
    "lesson4B",
    "lesson5A"

    // Add more page names as needed
];

// Loop through the array and create links
for (var i = 0; i < pages.length; i++) {
    var pageName = pages[i];
    document.write('<a href="./pages/' + pageName + '.html">' + pageName + '</a>');
}
