let SCORE = 0;

const askQuestion = () => {
    const settingOrder = document.getElementById("setting-order").value;
    const questionOrder = settingOrder === "question" ? "trad" : "jp";
    const answerOrder = settingOrder === "answer" ? "trad" : "jp";

    const possibleModes = Array.from(document.getElementsByName("setting-mode"))
        .filter(option => option.checked)
        .map(mode => mode.value);
    if (possibleModes.length < 1) window.location.reload(true);
    const mode = possibleModes[Math.floor(Math.random() * possibleModes.length)];

    const answerCount = 4;
    const possibleAnswers = DATA[mode]
        .sort(() => .5 - Math.random())
        .slice(0, answerCount);
    const answer = possibleAnswers[Math.floor(Math.random() * answerCount)];

    const questionElem = document.getElementById("question");
    questionElem.innerHTML = '<div id="question-content">' + answer[questionOrder] + '</div>';

    const settingTimeAttack = document.getElementById("setting-time-attack").checked;
    const settingTimeAttackSpeed = parseInt(document.getElementById("setting-time-attack-speed").value);
    const timeout = settingTimeAttack ? setTimeout(() => answerQuestion(answer[questionOrder], ''), settingTimeAttackSpeed * 1000) : null;
    if (settingTimeAttack) {
        const timeoutElem = document.createElement("div");
        timeoutElem.id = 'timeoutElem';
        timeoutElem.style.animation = "progress " + settingTimeAttackSpeed + "s linear";
        questionElem.appendChild(timeoutElem);
    }

    const answersElem = document.getElementById("answers");
    answersElem.innerHTML = "";
    possibleAnswers.forEach(possibleAnswer => {
        const answerElem = document.createElement("div");
        answerElem.className = "answer " + (mode === "kanji" || mode === "vocabulary" ? "long" : "short");
        answerElem.onclick = () => {
            if (settingTimeAttack) {
                timeoutElem.style.webkitAnimationPlayState = 'paused';
                clearTimeout(timeout);
            }
            answerQuestion(answer["trad"], possibleAnswer["trad"]);
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
    SCORE = guess === answer ? SCORE + 1 : 0;
    console.log(SCORE)
    document.getElementById("answers").childNodes.forEach(answerElem => {
        answerElem.onclick = () => false;
        answerElem.style.backgroundColor = (answerElem.firstChild.innerHTML === answer || answerElem.lastChild.innerHTML === answer) ? "#0d0" : "#d00";
        answerElem.firstChild.style.height = "48px";
        answerElem.firstChild.style.lineHeight = "48px";
        answerElem.style.fontSize = "24px";
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