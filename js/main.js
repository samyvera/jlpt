const askQuestion = () => {
    const settingOrder = document.getElementById("setting-order").value;
    const questionMode = settingOrder === "question" ? "trad" : "jp";
    const answerMode = settingOrder === "answer" ? "trad" : "jp";

    const questionPool = Array.from(document.getElementsByName("setting-mode"))
        .filter(option => option.checked)
        .map(option => QUESTIONS[option.value])
        .flat();
    if (!questionPool.length) window.location.reload(true);

    const possibleAnswers = questionPool.sort(() => .5 - Math.random()).slice(0, 4);
    const answer = possibleAnswers[Math.floor(Math.random() * 4)];

    const questionElem = document.getElementById("question");
    questionElem.innerHTML = '<p style="margin: 0 auto;z-index: 1;">' + answer[questionMode] + '</p>';

    const settingTimeAttack = document.getElementById("setting-time-attack").checked;
    let timeout = null;
    const timeoutElem = document.createElement("div");
    timeoutElem.id = 'timeoutElem';
    if (settingTimeAttack) {
        const speed = parseInt(document.getElementById("setting-time-attack-speed").value);
        timeoutElem.style.animation = "progress " + speed + "s ease-out";
        questionElem.appendChild(timeoutElem);
        timeout = setTimeout(() => {
            answerQuestion(answer[questionMode], '');
        }, speed * 1000);
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
            answerQuestion(answer[questionMode], possibleAnswer[questionMode]);
        }
        answersElem.appendChild(answerElem);
        const answerGuess = document.createElement("div");
        answerGuess.className = "answer-guess";
        answerGuess.innerHTML = possibleAnswer[answerMode];
        answerElem.appendChild(answerGuess);
        const answerValue = document.createElement("div");
        answerValue.className = "answer-value";
        answerValue.innerHTML = possibleAnswer[questionMode];
        answerElem.appendChild(answerValue);
    });
}

const answerQuestion = (answer, guess) => {
    document.getElementById("answers").childNodes.forEach(answerElem => {
        answerElem.onclick = () => false;
        answerElem.style.backgroundColor = answerElem.lastChild.innerHTML === answer ? "#0f0" : "#f00";
        answerElem.firstChild.style.height = "48px";
        answerElem.firstChild.style.lineHeight = "48px";
        answerElem.style.fontSize = "32px";
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