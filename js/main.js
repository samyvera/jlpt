const start = () => {
    let questionPool = [];
    document.getElementsByName("questions").forEach(option => {
        if (option.checked) questionPool = [...questionPool, ...questions[option.id]];
    });
    if (questionPool.length) {
        document.getElementById("menu").style.display = "none";
        document.getElementById("question").style.display = "flex";
        document.getElementById("result").style.display = "none";
        askQuestion(new Array(parseInt(document.getElementById("questionCount").value)).fill(null), questionPool, 0);
    } else console.log("error");
}

const askQuestion = (results, questionPool, index) => {
    const answerCount = 4;
    const answerIndex = Math.floor(Math.random() * answerCount);
    const answers = questionPool.sort(() => .5 - Math.random()).slice(0, answerCount);
    document.getElementById("character").innerHTML = answers[answerIndex][1];
    const statsElem = document.getElementById("stats");
    statsElem.innerHTML = "";
    for (let i = 0; i < results.length; i++) statsElem.innerHTML += " " + (results[i] === null ? "_" : results[i] === true ? "o" : "x");
    const answersElem = document.getElementById("answers");
    answersElem.innerHTML = "";
    for (let i = 0; i < answerCount; i++) {
        const answerElem = document.createElement("div");
        answerElem.className = "button answer";
        answerElem.innerHTML = answers[i][0];
        answerElem.onclick = () => answerQuestion(results, questionPool, index, answers[answerIndex][0], answers[i][0]);
        answersElem.appendChild(answerElem);
    }
}

const answerQuestion = (results, questionPool, index, answer, guess) => {
    document.getElementById("answers").childNodes.forEach(child => {
        child.onclick = () => false;
        child.style.backgroundColor = child.innerHTML === answer ? "#0f0" : "#f00";
    });
    results[index] = guess === answer;
    setTimeout(() => index + 1 < results.length ? askQuestion(results, questionPool, index + 1) : end(results), 1000);
}

const end = results => {
    document.getElementById("question").style.display = "none";
    document.getElementById("result").style.display = "flex";
    document.getElementById("mark").innerHTML = results.filter(guess => guess).length + "/" + results.length;
}