// Define an array of page names
var pages = [
    "lesson1",
    
    // Add more page names as needed
];

// Loop through the array and create links
for (var i = 0; i < pages.length; i++) {
    var pageName = pages[i];
    document.write('<a href="./pages/' + pageName + '.html">' + pageName + '</a>');
}