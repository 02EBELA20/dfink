// კითხვები და დავალებები
const originalCardsData = [
    { question: "ვისთან ერთად გქონდა ყველაზე უხერხული პაემანი? დალიე, თუ არ გაგიზიარებია!", category: "Friends" },
    { question: "დაასახელე 3 ადამიანი, ვისთანაც არასდროს გექნებოდა ურთიერთობა. დალიე, თუ ვერ დაასახელებ!", category: "Friends" },
    { task: "მომღერალი გახდი! იმღერე შენი საყვარელი სიმღერის ქორო, ან დალიე!", category: "Friends" },
    { task: "გააკეთე 10 ჯდომა-აჯდომა, ან დალიე 2 ყლუპი!", category: "Friends" },
    { question: "რა არის ყველაზე სასაცილო რამ, რაც მთვრალმა გააკეთე? დალიე, თუ არ გაგიზიარებია!", category: "Mixed" },
    { task: "მოყევი ხუმრობა. თუ არავინ იცინის, დალიე!", category: "Friends" },
    { question: "ვისი პირველი კოცნა იყო ყველაზე ცუდი? დალიე, თუ არ გაგიზიარებია!", category: "Mixed" },
    { task: "აირჩიე მოთამაშე, რომელმაც უნდა დაგლიჯოს ხელი. თუ უარს იტყვი, დალიე!", category: "Mixed" },
    { question: "რა არის ყველაზე უცნაური ადგილი, სადაც გიცდია სექსი? დალიე, თუ არ გაგიზიარებია!", category: "+18" },
    { task: "გააკეთე 5 წუთიანი ცეკვა, ან დალიე 3 ყლუპი!", category: "Mixed" },
    { question: "ვისთან ერთად გქონდა ყველაზე დაუვიწყარი ღამე? დალიე, თუ არ გაგიზიარებია!", category: "+18" },
    { task: "დაურეკე შენს ყოფილს და უთხარი, რომ გენატრება. თუ უარს იტყვი, დალიე!", category: "+18" },
    { question: "რა არის ყველაზე სასაცილო მიზეზი, რის გამოც დაგიშორებია? დალიე, თუ არ გაგიზიარებია!", category: "Mixed" },
    { task: "აირჩიე მოთამაშე, რომელმაც უნდა გაგიკეთოს მასაჟი 1 წუთი. თუ უარს იტყვი, დალიე!", category: "Mixed" },
    { question: "ვისთან გქონდა ყველაზე ცუდი სექსი? დალიე, თუ არ გაგიზიარებია!", category: "+18" },
    { task: "გააკეთე 20 ხტუნვა, ან დალიე 2 ყლუპი!", category: "Friends" },
    { question: "რა არის შენი ყველაზე დიდი საიდუმლო? დალიე, თუ არ გაგიზიარებია!", category: "+18" },
    { question: "ვის მოგწონდა ყველაზე მეტად სკოლაში? დალიე, თუ არ გაგიზიარებია!", category: "Friends" },
    { task: "გააკეთე 5 ბიძგი, ან დალიე 2 ყლუპი!", category: "Friends" },
    { question: "რა არის ყველაზე უხერხული მომენტი, რაც გაგიკეთებია მშობლების თვალწინ? დალიე, თუ არ გაგიზიარებია!", category: "Mixed" },
    { task: "მოყევი ისტორია, როცა ყველაზე მეტად შეგრცხვა. თუ არ გაგიზიარებია, დალიე!", category: "Mixed" },
    { question: "ვისთან გქონდა ყველაზე მოკლე ურთიერთობა? დალიე, თუ არ გაგიზიარებია!", category: "Mixed" },
    { task: "აირჩიე მოთამაშე, რომელმაც უნდა გაგაკეთოს 1 წუთიანი ცეკვა. თუ უარს იტყვი, დალიე!", category: "Mixed" },
    { question: "რა არის ყველაზე უცნაური ფანტაზია, რაც გქონია? დალიე, თუ არ გაგიზიარებია!", category: "+18" },
    { task: "გააკეთე 10 ხტუნვა, ან დალიე 1 ყლუპი!", category: "Friends" },
    { question: "ვის მოგწონს ამ ოთახში? დალიე, თუ არ გაგიზიარებია!", category: "Mixed" },
    { task: "დაურეკე მეგობარს და უთხარი, რომ გიყვარს. თუ უარს იტყვი, დალიე!", category: "Mixed" },
    { question: "რა არის ყველაზე სასაცილო მომენტი, რაც გაგიკეთებია მთვრალი? დალიე, თუ არ გაგიზიარებია!", category: "Mixed" },
    { task: "აირჩიე მოთამაშე, რომელმაც უნდა გაგაკეთოს 30 წამიანი მასაჟი. თუ უარს იტყვი, დალიე!", category: "Mixed" },
    { question: "ვისთან გქონდა ყველაზე გრძელი ურთიერთობა? დალიე, თუ არ გაგიზიარებია!", category: "Mixed" },
];

// გავაკეთოთ cardsData-ს ასლი, რომელიც შეიცვლება
let cardsData = [...originalCardsData];
let usedQuestions = [];
let currentlyFlippedCard = null; // თვალყური ვადევნოთ გადმობრუნებულ ბარათს
let currentFilter = "All"; // ნაგულისხმევი ფილტრი

const cardGrid = document.getElementById('cardGrid');
const pickCardBtn = document.getElementById('pickCardBtn');
const resetGameBtn = document.getElementById('resetGameBtn');

if (!cardGrid) {
    console.error("cardGrid element not found!");
}

if (!pickCardBtn) {
    console.error("pickCardBtn not found!");
}

if (!resetGameBtn) {
    console.error("resetGameBtn not found!");
}

function createCards() {
    if (!cardGrid) {
        console.error("cardGrid element not found!");
        return;
    }

    cardGrid.innerHTML = ''; // გავასუფთაოთ გრიდი

    // გავფილტროთ კითხვები მიმდინარე ფილტრის მიხედვით
    let filteredQuestions = originalCardsData;
    if (currentFilter !== "All") {
        filteredQuestions = originalCardsData.filter(item => item.category === currentFilter);
    }

    // თუ კითხვები არ არის, გამოვაჩინოთ შეტყობინება
    if (filteredQuestions.length === 0) {
        cardGrid.innerHTML = '<p style="color: white; text-align: center;">ამ კატეგორიაში კითხვები არ არის!</p>';
        return;
    }

    // შევქმნათ 12 ბარათი (4x3 გრიდი)
    const numberOfCards = 12;
    const availableQuestions = [...filteredQuestions]; // ხელმისაწვდომი კითხვების ასლი

    // თუ ნაკლებია 12 კითხვა, გავაორმაგოთ
    while (availableQuestions.length < numberOfCards && availableQuestions.length > 0) {
        availableQuestions.push(...filteredQuestions);
    }

    // შევარჩიოთ 12 შემთხვევითი კითხვა
    const selectedQuestions = [];
    for (let i = 0; i < numberOfCards; i++) {
        if (availableQuestions.length === 0) break; // თუ კითხვები ამოიწურა
        const randomIndex = Math.floor(Math.random() * availableQuestions.length);
        selectedQuestions.push(availableQuestions[randomIndex]);
        availableQuestions.splice(randomIndex, 1); // ამოვიღოთ გამოყენებული კითხვა
    }

    // შევქმნათ 12 ბარათი შერჩეული კითხვებით
    for (let i = 0; i < numberOfCards; i++) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.index = i;

        const cardInner = document.createElement('div');
        cardInner.classList.add('card-inner');

        const cardFront = document.createElement('div');
        cardFront.classList.add('card-front');

        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');
        cardBack.textContent = selectedQuestions[i]?.question || selectedQuestions[i]?.task || "No question available";

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        cardElement.appendChild(cardInner);
        cardGrid.appendChild(cardElement);
    }
}

// თამაშის გადატვირთვის ფუნქცია
function resetGame() {
    cardsData = [...originalCardsData];
    usedQuestions = [];
    currentlyFlippedCard = null;
    createCards();
    pickCardBtn.disabled = false;
}

// ფილტრის ღილაკების მოვლენების დამმუშავებელი
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        // ამოვიღოთ active კლასი ყველა ღილაკიდან
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        // დავამატოთ active კლასი დაჭერილ ღილაკს
        button.classList.add('active');
        // განვაახლოთ მიმდინარე ფილტრი
        currentFilter = button.dataset.filter;
        // გადავტვირთოთ თამაში
        resetGame();
    });
});

// გამოვიძახოთ ფუნქცია გვერდის ჩატვირთვისას
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded, calling createCards...");
    createCards();

    // თავიდან დაწყების ღილაკის მოვლენა
    if (resetGameBtn) {
        resetGameBtn.addEventListener('click', resetGame);
    }
});

// ამორჩევის ანიმაცია
let isPicking = false;

if (pickCardBtn) {
    pickCardBtn.addEventListener('click', () => {
        if (isPicking) return;
        isPicking = true;
        pickCardBtn.disabled = true;

        const cards = document.querySelectorAll('.card');
        if (cards.length === 0) {
            alert('ბარათები არ არის ხელმისაწვდომი!');
            isPicking = false;
            pickCardBtn.disabled = false;
            return;
        }

        // გავფილტროთ cardsData მიმდინარე ფილტრის მიხედვით
        let filteredCardsData = cardsData;
        if (currentFilter !== "All") {
            filteredCardsData = cardsData.filter(item => item.category === currentFilter);
        }

        if (filteredCardsData.length === 0) {
            alert('ყველა კითხვა გამოიყენა! გსურთ თავიდან დაწყება?');
            resetGame();
            isPicking = false;
            pickCardBtn.disabled = false;
            return;
        }

        // თუ უკვე არის გადმობრუნებული ბარათი, დავხუროთ
        if (currentlyFlippedCard) {
            currentlyFlippedCard.classList.remove('selected');
            currentlyFlippedCard.classList.remove('flipped');
            currentlyFlippedCard = null;
            isPicking = false;
            pickCardBtn.disabled = false;
            return;
        }

        // მანათობელი ეფექტის შემთხვევითი გადაადგილება
        let glowCount = 0;
        const maxGlows = 10; // შევამციროთ სიჩქარისთვის
        let lastGlowIndex = null;

        const glowInterval = setInterval(() => {
            cards.forEach(card => card.classList.remove('glow'));

            const randomIndex = Math.floor(Math.random() * cards.length);
            cards[randomIndex].classList.add('glow');
            lastGlowIndex = randomIndex;

            glowCount++;
            if (glowCount >= maxGlows) {
                clearInterval(glowInterval);
                cards.forEach(card => card.classList.remove('glow'));

                const randomCardIndex = Math.floor(Math.random() * filteredCardsData.length);
                const selectedQuestion = filteredCardsData[randomCardIndex];
                const selectedCard = cards[lastGlowIndex];

                selectedCard.querySelector('.card-back').textContent = selectedQuestion.question || selectedQuestion.task;
                selectedCard.classList.add('flipped');
                setTimeout(() => {
                    selectedCard.classList.add('selected');
                }, 500); // შევამციროთ დრო

                // ამოვიღოთ გამოყენებული კითხვა cardsData-დან
                const globalIndex = cardsData.findIndex(item => item === selectedQuestion);
                if (globalIndex !== -1) {
                    usedQuestions.push(cardsData[globalIndex]);
                    cardsData.splice(globalIndex, 1);
                }

                currentlyFlippedCard = selectedCard;
                isPicking = false;
                pickCardBtn.disabled = false;
            }
        }, 150); // უფრო სწრაფი მანათობა
    });
} else {
    console.error("pickCardBtn not found!");
}