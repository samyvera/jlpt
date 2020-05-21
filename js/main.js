const start1 = () => {
    const questionPool = Array.from(document.getElementsByName("questions1"))
        .filter(option => option.checked)
        .map(option => QUESTIONS[option.value])
        .flat();
    if (questionPool.length) {
        document.getElementById("stats1").innerHTML = " _".repeat(parseInt(document.getElementById("questionCount1").value));
        document.getElementById("menu").style.display = "none";
        document.getElementById("question1").style.display = "flex";
        document.getElementById("result1").style.display = "none";
        askQuestion(questionPool);
    } else alert("Invalid options.");
}

const askQuestion = questionPool => {
    var characterMode = document.getElementById("questionOrder").value;
    var otherMode = characterMode === "trad" ? "jp" : "trad";
    const choices = questionPool.sort(() => .5 - Math.random()).slice(0, 4);
    const answer = choices[Math.floor(Math.random() * 4)];
    const character1 = document.getElementById("character1");
    character1.innerHTML = '<div class="sub-text" style="margin: 0 auto;z-index: 1;">' + answer[characterMode] + '</div>';
    let timeout = null;
    const timeoutElem = document.createElement("div");
    timeoutElem.id = 'timeoutElem';
    if (document.getElementById("questionSpeedOn1").checked) {
        timeoutElem.style.animation = "progress " + parseInt(document.getElementById("questionSpeed1").value) + "s ease-out";
        character1.appendChild(timeoutElem);
        timeout = setTimeout(() => {
            answerQuestion(questionPool, answer[characterMode], '');
        }, parseInt(document.getElementById("questionSpeed1").value) * 1000);
    }
    const choicesElem = document.getElementById("choices1");
    choicesElem.innerHTML = "";
    choices.forEach(choice => {
        const choiceElem = document.createElement("div");
        choiceElem.className = "button choice";
        choiceElem.onclick = () => {
            if (document.getElementById("questionSpeedOn1").checked) {
                timeoutElem.style.webkitAnimationPlayState = 'paused';
                clearTimeout(timeout);
            }
            answerQuestion(questionPool, answer[characterMode], choice[characterMode]);
        }
        choicesElem.appendChild(choiceElem);
        const choiceGuess = document.createElement("p");
        choiceGuess.className = "choice-guess";
        choiceGuess.innerHTML = choice[otherMode];
        choiceElem.appendChild(choiceGuess);
        const choiceValue = document.createElement("p");
        choiceValue.className = "choice-value";
        choiceValue.innerHTML = choice[characterMode];
        choiceElem.appendChild(choiceValue);
    });
}

const answerQuestion = (questionPool, answer, guess) => {
    const stats = document.getElementById("stats1");
    stats.innerHTML = stats.innerHTML.replace("_", guess === answer ? "o" : "x");
    document.getElementById("choices1").childNodes.forEach(child => {
        child.onclick = () => false;
        child.style.backgroundColor = child.lastChild.innerHTML === answer ? "#0f0" : "#f00";
        child.firstChild.style.height = "48px";
        child.firstChild.style.lineHeight = "48px";
        child.style.fontSize = "32px";
    });
    setTimeout(() => stats.innerHTML.match(/_/g) ? askQuestion(questionPool) : end(), 1000);
}

const end = () => {
    document.getElementById("question1").style.display = "none";
    document.getElementById("result1").style.display = "flex";
    document.getElementById("score1").innerHTML = "Score : " + (document.getElementById("stats1").innerHTML.match(/o/g) || []).length + "/" + document.getElementById("questionCount1").value;
}