let selectedOutfit = null;

function selectOutfit(num) {
    const imgs = document.querySelectorAll(".outfit-grid img");
    imgs.forEach(img => img.classList.remove("selected"));
    imgs[num - 1].classList.add("selected");
    selectedOutfit = num;

    const comment = document.getElementById("outfit-comment");
    let text = "";
    switch (num) {
        case 1: text = "В школе подумали что ты ебанутая и посчитали твой внешний вид оскорбительным, -5 к реп"; break;
        case 2: text = "Охранник подумал что ты проститутка и вызвал директора, тебя пропустили, но ты привлекла много внимания и оставила сомнительное первое впечатление, -5 к реп (но многие девочки заценили лук)"; break;
        case 3: text = "Самое то для школы, ты понравилась большинтсву, +10 к реп"; break;
        case 4: text = "Ты конченая?"; break;
    }
    comment.textContent = text;

    // Показываем кнопку после выбора
    document.getElementById("continue-btn").style.display = "inline-block";
}

function goNext() {
    if (selectedOutfit) {
        // Сохраняем выбор в localStorage
        localStorage.setItem("outfit", selectedOutfit);
        // Переходим на следующий экран
        window.location.href = "seating.html";
    } else {
        alert("Сначала выбери одежду!");
    }
}
