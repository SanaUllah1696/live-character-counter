const textareaEl = document.getElementById("textarea");
const total = document.getElementById("total");
let remaining = document.getElementById("remaining");


textareaEl.addEventListener("keyup", () => {
    updateValues();
});

updateValues();
function updateValues() {
    total.textContent = textareaEl.value.length;
    remaining.textContent = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}