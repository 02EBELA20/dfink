// თამაშის დაწყება
function startGame(gameName) {
    const gameContent = document.getElementById("game-content");

    switch(gameName) {
        case "spinWheel":
            gameContent.innerHTML = "🎡 ბორბალი იტრიალებს!";
            break;
        case "drinkingQuestions":
            gameContent.innerHTML = "🍻 დასალევი კითხვები ჩატვირთვა...";
            break;
        case "cocktailGenerator":
            gameContent.innerHTML = "🍸 კოქტეილის გენერატორი იწყება...";
            break;
        case "randomChallenge":
            gameContent.innerHTML = "🎲 შემთხვევითი გამოწვევა...";
            break;
        case "truthOrDare":
            gameContent.innerHTML = "❓ სიმართლე თუ მოქმედება...";
            break;
        default:
            gameContent.innerHTML = "აირჩიეთ თამაში დასაწყებად!";
    }
}

// JavaScript ფუნქცია თამაშის დასაწყებად
function startGame(game) {
    window.location.href = game + ".html";
}
