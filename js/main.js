var document;
var today = new Date();
var y = today.getFullYear();
document.getElementById('current-year').innerHTML = y;

var update = document.lastModified;
document.getElementById('update-time').innerHTML = update;

WebFont.load({
    google: {
        families: [
            'Alegreya Sans',
            'Montserrat'
        ]
    }
})

// Code for Array List

const links = [
    {
        label: "Week 1 Notes",
        url: "week1/index.html"
    }
];

    let tableContents = "<ul>";
    for (let i = 0; i < links.length; i++) {
        tableContents += "<li>";
        tableContents += "<a href=" + links[i].url + ">" +links[i].label;
        tableContents += "</li>";
    }
    tableContents += "</ul>";

document.getElementById("links").innerHTML = tableContents;