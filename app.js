var number = document.querySelector("h2");
var count = 0;
var increase = document.querySelector(".increase");
var reset = document.querySelector(".reset");
var decrease = document.querySelector(".decrease");

increase.addEventListener("click", function() {
    number.textContent = count++;
    if (count > 0) {
        number.style.color = "green";
    } else {
        number.style.color = "black";
    }
});
reset.addEventListener("click", function() {
    count = 0;
    number.textContent = 0;
    number.style.color = "black";
});
decrease.addEventListener("click", function() {
    number.textContent = count--;
    if (count < 0) {
        number.style.color = "red";
    } else {
        number.style.color = "black";
    }
})
