
const searchBar = document.getElementById("searchBar");
const searchButton = document.getElementById("searchButton");
const fruits = document.querySelectorAll(".fruit");

const fruitList = Array.from(fruits).map(fruit => ({
    name: fruit.getAttribute("data-name"),
    fruit: fruit 
}));

const options = {
    keys: ["name"], 
    threshold: 0.4 
};

const fuse = new Fuse(fruitList, options);

function filterFruits(query) {
    if (query === "") {
        fruits.forEach(fruit => {
            fruit.style.display = "block"; 
        });
        return;
    }
    
    const results = fuse.search(query);

    fruits.forEach(fruit => {
        fruit.style.display = "none";
    });

    results.forEach(result => {
        result.item.fruit.style.display = "block"; 
    });
}
 searchBar.addEventListener("keyup", function () {
    const query = searchBar.value.trim();
    filterFruits(query);
});
searchButton.addEventListener("click", function () {
    const query = searchBar.value.trim();
    filterFruits(query);
});


    searchBar.value = "";


//! ------  theme change event ---------------

function themeChange(){
    const body = document.body;
    const colorChangeButton = document.querySelector("#colorChange");

    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        colorChangeButton.textContent = "Dark Mode";
    } else {
        body.classList.add("dark-mode");
        colorChangeButton.textContent = "Light Mode";
    }
}


//!------ time event---

const timeSate = document.querySelector("#clock");

function timeSection(){
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if(hour<10) hour= "0"+hour;
    if(minutes<10) minutes="0"+minutes;
    if(seconds<10) seconds= "0" +seconds;

    let time = hour + ":"+minutes + ":"+ seconds ;
    timeSate.innerHTML= time;
   

   
}
setInterval(timeSection, 1000);

 