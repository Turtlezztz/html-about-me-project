fetch("topbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("topbar").innerHTML = data;
    });

fetch("buttons.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("buttons").innerHTML = data;
    });
 
fetch("mainpage.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("main-page").innerHTML = data;
    });