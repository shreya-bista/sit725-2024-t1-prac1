function changeText() {
    var list = ["HTML", "CSS", "JavaScript", "Angular", "Django", "Swift", "JQuery"];
    var num = getRandomNumberBetween(0, list.length - 1);
    console.log("Index: ", num);
    document.getElementById("heading").innerHTML = list[num];
}

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
