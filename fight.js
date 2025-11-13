let selectedChoice = null;

function selectChoice(num) {
    const imgs = document.querySelectorAll(".choice-grid img");
    imgs.forEach(img => img.classList.remove("selected"));
    imgs[num - 1].classList.add("selected");
    selectedChoice = num;

    // Показываем кнопку после выбора
    document.getElementById("continue-btn").style.display = "inline-block";
}

function goNext() {
    if (selectedChoice) {
        // Развилка: 1 → friends.html, 2 → queen.html
        if (selectedChoice === 1) {
            window.location.href = "friends.html";
        } else {
            window.location.href = "queen.html";
        }
    } else {
        alert("Сначала сделай выбор!");
    }
}
