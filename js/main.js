const start = questionCount => {
    const menuElem = document.getElementById("menu");
    menuElem.style.display = "none";
    const questionElem = document.getElementById("question");
    questionElem.style.display = "flex";
    const resultElem = document.getElementById("result");
    resultElem.style.display = "none";
    askQuestion(new Array(questionCount).fill(null), hiragana, 0);
}

const askQuestion = (results, characters, index) => {
    const answerCount = 4;
    const answerIndex = Math.floor(Math.random() * answerCount);
    const answers = characters.sort(() => .5 - Math.random()).slice(0, answerCount);
    document.getElementById("character").innerHTML = answers[answerIndex][1];
    const statsElem = document.getElementById("stats");
    statsElem.innerHTML = "";
    for (let i = 0; i < results.length; i++) {
        statsElem.innerHTML += " " + (results[i] === null ? "_" : results[i] === true ? "o" : "x");
    }
    const answersElem = document.getElementById("answers");
    answersElem.innerHTML = "";
    for (let i = 0; i < answerCount; i++) {
        const answerElem = document.createElement("div");
        answerElem.className = "button answer";
        answerElem.innerHTML = answers[i][0];
        answerElem.onclick = () => answerQuestion(results, characters, index, answers[answerIndex][0], answers[i][0]);
        answersElem.appendChild(answerElem);
    }
}

const answerQuestion = (results, characters, index, answer, guess) => {
    const answersElem = document.getElementById("answers");
    answersElem.childNodes.forEach(child => {
        child.onclick = () => false;
        child.style.backgroundColor = child.innerHTML === answer ? "#0f0" : "#f00";
    });
    results[index] = guess === answer;
    setTimeout(() => index + 1 < results.length ? askQuestion(results, characters, index + 1) : end(results), 1000);
}

const end = results => {
    const questionElem = document.getElementById("question");
    questionElem.style.display = "none";
    const resultElem = document.getElementById("result");
    resultElem.style.display = "flex";
    document.getElementById("mark").innerHTML = results.filter(guess => guess).length + "/" + results.length;
}