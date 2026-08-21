const darkModeButton = document.getElementById("darkModeButton");

darkModeButton.addEventListener("click", 
    function () {
        document.body.classList.toggle("dark-mode");
    }
);
const input = document.getElementById("task");
const btn = document.getElementById("addBtn");
const list = document.getElementById("list");

btn.addEventListener("click", function() {
    if (input.value.trim() === "") return;
    const li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);
    input.value = "";
})
const learnButtons = document.querySelectAll(".Learn-button");

learnButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const course =button.dataset.course;
        alert("You selected the "+ course + "course!");
    });
});