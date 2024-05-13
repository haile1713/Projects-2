const questions = [
    {
        question: "Compared to fossil fuels, one advantage of nuclear energy is:",
        answers: ["Lower greenhouse gas emissions.", "Greater abundance and accessibility.", "Lower cost and better economics.", "No need for transportation or distribution infrastructure."],
        correctAnswer: "Lower greenhouse gas emissions."
    },
    {
        question: "In comparison to solar and wind energy, nuclear energy has the advantage of:",
        answers: ["Scalability and continuous power generation.", "Zero environmental impact.", "Lower cost and higher efficiency.", "Smaller land footprint and visual impact."],
        correctAnswer: "Scalability and continuous power generation."
    },
    {
        question: "True or False: Nuclear reactors use uranium as fuel to produce heat, which is then converted to electricity.",
        answers: ["True", "False"],
        correctAnswer: "True"
    },
    {
        question: "Which of the following is a type of nuclear reactor design?",
        answers: [" Pressurized Water Reactor (PWR)", "Wind Reactor", "Solar Reactor", " Diesel Reactor"],
        correctAnswer: " Pressurized Water Reactor (PWR)"
    },
    {
        question: " True or False: Nuclear energy contributes significantly to climate change through greenhouse gas emissions.",
        answers: [" True", "False"],
        correctAnswer: " False"
    },
    {
        question: "What is the function of a control rod in a nuclear reactor?",
        answers: [" To generate electricity", "To absorb neutrons and control the reactor's power level", "To facilitate the fusion reaction", " To cool down the reactor core"],
        correctAnswer: " To absorb neutrons and control the reactor's power level"
    },
    {
        question: "What is the main difference between nuclear fission and nuclear fusion?",
        answers: [" Fission releases more energy than fusion.", "Fusion is used in nuclear power plants, while fission is used in stars.", "Fission involves splitting atoms, while fusion involves combining atoms.", " Fission does not produce radioactive waste, unlike fusion."],
        correctAnswer: " Fission involves splitting atoms, while fusion involves combining atoms."
    },
    {
        question: "Which of the following isotopes is commonly used as fuel in breeder reactors?",
        answers: [" Uranium-235", " Plutonium-239", "Thorium-232", " Uranium-238"],
        correctAnswer: " Plutonium-239"
    },
    {
        question: "What is the function of a moderator in a nuclear reactor?",
        answers: [" To absorb excess neutrons", " To cool down the reactor coolant", "To increase the reactor's power output", " To slow down fast neutrons"],
        correctAnswer: " To slow down fast neutrons"
    },
    {
        question: "Which of the following is a major source of radiation exposure for the general public?",
        answers: [" Nuclear power plants", "Medical procedures", "Coal mining", " Solar panels"],
        correctAnswer: " Medical procedures"
    },
    {
        question: "What is the primary purpose of a nuclear power plant's containment building?",
        answers: [" To provide additional cooling", "To absorb radiation", "To house the reactor core", " To prevent the release of radioactive materials in case of accidents"],
        correctAnswer: " To prevent the release of radioactive materials in case of accidents"
    },
    {
        question: "True or False: Nuclear power plants produce electricity without greenhouse gas emissions during operation.",
        answers: [" True", "False"],
        correctAnswer: " True"
    },
    {
        question: "Which of the following safety features is an important part of nuclear power plants?",
        answers: [" Red emergency buttons like in action movies.", "Thick concrete containment structures.", " Laser beam security systems.", " Secret trapdoors for nuclear waste."],
        correctAnswer: " Thick concrete containment structures."
    },
    {
        question: "Which type of nuclear reactor design uses heavy water (deuterium oxide) as both a moderator and coolant?",
        answers: [" Pressurized Water Reactor (PWR)", "Boiling Water Reactor (BWR)", "CANDU (CANada Deuterium Uranium) Reactor", " Molten Salt Reactor (MSR)"],
        correctAnswer: " CANDU (CANada Deuterium Uranium) Reactor"
    },

    {
        question: "True or False: Nuclear power plants generate a significant amount of long-lasting radioactive waste.",
        answers: [" True ", "False"],
        correctAnswer: " False"
    },

];

function startQuiz() {
    window.location.href = "quiz.html"; // Navigate to the quiz page
}


let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionText = document.getElementById('question');
    const answerList = document.getElementById('answer-list');
    questionText.innerText = questions[currentQuestionIndex].question;
    answerList.innerHTML = '';

    questions[currentQuestionIndex].answers.forEach(answer => {
        const li = document.createElement('li');
        li.innerText = answer;
        li.onclick = function() { selectAnswer(answer); };
        answerList.appendChild(li);
    });
}

function selectAnswer(answer) {
    if (answer === questions[currentQuestionIndex].correctAnswer) {
        score++;
    }
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const result = document.getElementById('result');
    let level;
    switch (true) {
        case (score === questions.length):
            level = "Expert";
            break;
        case (score >= questions.length * 0.75):
            level = "Intermediate";
            break;
        case (score >= questions.length * 0.5):
            level = "Enthusiast";
            break;
        default:
            level = "Novice";
    }
    result.innerHTML = `<h2>You answered ${score} out of ${questions.length} correctly - ${level}</h2>`;
    result.innerHTML += `<button onclick="goToHome()">Restart</button>`; // Add "Home" button
    document.getElementById('question').innerText = ''; // Clear question
    document.getElementById('answer-list').innerHTML = ''; // Clear answer list
    document.querySelector('button').style.display = 'none'; // Hide next button
}


function nextQuestion() {
    displayQuestion();
}

function goToHome() {
    window.location.href = "index.html"; 
}


window.onload = function() {
    displayQuestion();
};
