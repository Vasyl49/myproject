// main.js

// Вітання у консолі
console.log("My Project запущено!");

// Підсвічування пункту меню при кліку
const links = document.querySelectorAll(".menu a");
links.forEach(link => {
    link.addEventListener("click", function(e) {
        links.forEach(l => l.style.color = "#ccc");
        this.style.color = "#fff";
    });
});
