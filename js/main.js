const askQuestion = () => {
    const settingOrder = document.getElementById("setting-order").value;
    const questionOrder = settingOrder === "question" ? "trad" : "jp";
    const answerOrder = settingOrder === "answer" ? "trad" : "jp";

    const possibleModes = Array.from(document.getElementsByName("setting-mode"))
        .filter(option => option.checked)
        .map(mode => mode.value);
    if (possibleModes.length < 1) window.location.reload(true);
    const mode = possibleModes[Math.floor(Math.random() * possibleModes.length)];

    const possibleAnswers = QUESTIONS[mode]
        .sort(() => .5 - Math.random())
        .slice(0, 4);
    const answer = possibleAnswers[Math.floor(Math.random() * 4)];

    const questionElem = document.getElementById("question");
    questionElem.innerHTML = '<div id="question-content">' + answer[questionOrder] + '</div>';

    const settingTimeAttack = document.getElementById("setting-time-attack").checked;
    const settingTimeAttackSpeed = parseInt(document.getElementById("setting-time-attack-speed").value);
    const timeout = settingTimeAttack ? setTimeout(() => answerQuestion(answer[questionOrder], ''), settingTimeAttackSpeed * 1000) : null;
    if (settingTimeAttack) {
        const timeoutElem = document.createElement("div");
        timeoutElem.id = 'timeoutElem';
        timeoutElem.style.animation = "progress " + settingTimeAttackSpeed + "s ease-out";
        questionElem.appendChild(timeoutElem);
    }

    const answersElem = document.getElementById("answers");
    answersElem.innerHTML = "";
    possibleAnswers.forEach(possibleAnswer => {
        const answerElem = document.createElement("div");
        answerElem.className = "answer";
        answerElem.onclick = () => {
            if (settingTimeAttack) {
                timeoutElem.style.webkitAnimationPlayState = 'paused';
                clearTimeout(timeout);
            }
            answerQuestion(answer[questionOrder], possibleAnswer[questionOrder]);
        }
        answersElem.appendChild(answerElem);

        const answerGuess = document.createElement("div");
        answerGuess.className = "answer-guess";
        answerGuess.innerHTML = possibleAnswer[answerOrder];
        answerElem.appendChild(answerGuess);

        const answerValue = document.createElement("div");
        answerValue.className = "answer-value";
        answerValue.innerHTML = possibleAnswer[questionOrder];
        answerElem.appendChild(answerValue);
    });
}

const answerQuestion = (answer, guess) => {
    document.getElementById("answers").childNodes.forEach(answerElem => {
        answerElem.onclick = () => false;
        answerElem.style.backgroundColor = answerElem.lastChild.innerHTML === answer ? "#0f0" : "#f00";
        answerElem.firstChild.style.height = "32px";
        answerElem.firstChild.style.lineHeight = "32px";
        answerElem.firstChild.style.fontSize = "32px";
        answerElem.lastChild.style.color = "#fff";
    });
    setTimeout(() => askQuestion(), 1000);
}

window.onload = () => {
    document.getElementById("settings-container").onmouseenter = event => {
        document.getElementById("settings").style.height = "217px";
    }
    
    document.getElementById("settings-container").onmouseleave = event => {
        document.getElementById("settings").style.height = "0px";
    }

    askQuestion();
}