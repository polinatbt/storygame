let selectedCharacter = null;

function selectCharacter(num) {
    const imgs = document.querySelectorAll(".character-grid img");
    imgs.forEach(img => img.classList.remove("selected"));
    imgs[num - 1].classList.add("selected");
    selectedCharacter = num;

    const comment = document.getElementById("character-comment");
    let text = "";
    switch (num) {
        case 1: text = "Милая блондинка, ты получила много комплиментов, +10 к репутации "; break;
        case 2: text = "Многим понравился твой пирсинг, ты получила комплименты своему стилю, +10 к репутации "; break;
        case 3: text = "После операции тебе часто говорят, что ты им кого то напоминаешь... "; break;
        case 4: text = "Не все оценили твой способ самовыражения, некоторые посчитали что ты нелегал из Мексики"; break;
    }
    comment.textContent = text;

    // Показываем кнопку после выбора
    document.getElementById("continue-btn").style.display = "inline-block";
}

function goNext() {
    if (selectedCharacter) {
        // Сохраняем выбор персонажа
        localStorage.setItem("character", selectedCharacter);
        // Переходим на экран выбора одежды
        window.location.href = "outfit.html";
    } else {
        alert("Сначала выбери персонажа!");
    }
}
