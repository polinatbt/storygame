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
        // Развилка: 1 → fight.html, 2 → loser.html
        if (selectedChoice === 1) {
            window.location.href = "fight.html";
        } else {
            window.location.href = "loser.html";
        }
    } else {
        alert("Сначала сделай выбор!");
    }
}
