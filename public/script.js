const questions = [
    { type: "mcq", question: "ফ্রান্সের রাজধানী কোনটি?", options: ["প্যারিস", "লন্ডন", "বার্লিন", "মাদ্রিদ"], answer: "প্যারিস" },  
    { type: "mcq", question: "লাল গ্রহ নামে পরিচিত গ্রহ কোনটি?", options: ["শুক্র", "মঙ্গল", "বৃহস্পতি", "শনি"], answer: "মঙ্গল" },  
    { type: "mcq", question: "পৃথিবীর সবচেয়ে বড় মহাসাগর কোনটি?", options: ["আটলান্টিক", "ভারত মহাসাগর", "আর্কটিক", "প্রশান্ত"], answer: "প্রশান্ত" },  
    { type: "mcq", question: "'রোমিও অ্যান্ড জুলিয়েট' নাটকটি কে লিখেছেন?", options: ["শেকসপিয়ার", "ডিকেন্স", "অস্টেন", "হেমিংওয়ে"], answer: "শেকসপিয়ার" },  
    { type: "mcq", question: "ভূখণ্ডের দিক থেকে বিশ্বের সবচেয়ে ছোট দেশ কোনটি?", options: ["মোনাকো", "ভ্যাটিকান সিটি", "সান মারিনো", "লিচেনস্টেইন"], answer: "ভ্যাটিকান সিটি" },  
    { type: "mcq", question: "কোন প্রাণীকে 'জঙ্গলের রাজা' বলা হয়?", options: ["বাঘ", "সিংহ", "হাতি", "ভালুক"], answer: "সিংহ" },  
    { type: "mcq", question: "জাপানের মুদ্রার নাম কী?", options: ["ইউয়ান", "ইয়েন", "উওন", "ডলার"], answer: "ইয়েন" },  
    { type: "science", question: "গাছের জন্য সালোকসংশ্লেষণের প্রধান গ্যাস কোনটি?", options: ["অক্সিজেন", "নাইট্রোজেন", "কার্বন ডাই অক্সাইড", "হাইড্রোজেন"], answer: "কার্বন ডাই অক্সাইড" },  
    { type: "science", question: "পানির স্ফুটনাঙ্ক কত?", options: ["৫০°C", "৭৫°C", "১০০°C", "১২৫°C"], answer: "১০০°C" },  
    { type: "science", question: "Fe এর রাসায়নিক প্রতীক কোন মৌলের জন্য ব্যবহৃত হয়?", options: ["ফ্লোরিন", "আয়রন", "ফ্রান্সিয়াম", "ফার্মিয়াম"], answer: "আয়রন" },  
    { type: "science", question: "সৌরজগতের সূর্যের সবচেয়ে কাছের গ্রহ কোনটি?", options: ["শুক্র", "পৃথিবী", "বুধ", "মঙ্গল"], answer: "বুধ" },  
    { type: "science", question: "পৃথিবীর প্রধান শক্তির উৎস কী?", options: ["চাঁদ", "সূর্য", "বায়ু", "কেন্দ্রস্থ গঠন"], answer: "সূর্য" },  
    { type: "science", question: "মানবদেহে রক্ত সঞ্চালনের জন্য কোন অঙ্গ কাজ করে?", options: ["ফুসফুস", "যকৃৎ", "হৃদপিণ্ড", "কিডনি"], answer: "হৃদপিণ্ড" },  
    { type: "mcq", question: "কম্পিউটারের মস্তিষ্ক কাকে বলা হয়?", options: ["RAM", "CPU", "HDD", "Mouse"], answer: "CPU" },  
    { type: "mcq", question: "কোনটি প্রোগ্রামিং ভাষা নয়?", options: ["Python", "HTML", "Java", "C++"], answer: "HTML" },  
    { type: "mcq", question: "WAN-এর পূর্ণরূপ কী?", options: ["Wide Area Network", "Wireless Access Node", "Web Application Network", "Wideband Area Node"], answer: "Wide Area Network" },  
    { type: "math", question: "যদি ২x + ৩ = ৭ হয়, তবে x এর মান কত?", options: ["১", "২", "৩", "৪"], answer: "২" },  
    { type: "math", question: "২০০-এর ১৫% কত?", options: ["২০", "২৫", "৩০", "৩৫"], answer: "৩০" },  
    { type: "math", question: "√৪৯ এর মান কত?", options: ["৬", "৭", "৮", "৯"], answer: "৭" },  
    { type: "math", question: "যদি x + ৫ = ১২ হয়, তবে x এর মান কত?", options: ["৫", "৬", "৭", "৮"], answer: "৭" },  
    { type: "math", question: "একটি ত্রিভুজের তিন কোণের সমষ্টি কত?", options: ["১৮০°", "৯০°", "৩৬০°", "২৭০°"], answer: "১৮০°" },  
    { type: "math", question: "৫ + ৩ × ২ এর মান কত?", options: ["১৬", "১১", "১৩", "১০"], answer: "১১" },  
    { type: "math", question: "১৪৪ এর বর্গমূল কত?", options: ["১০", "১১", "১২", "১৩"], answer: "১২" },  
    { type: "math", question: "একটি ত্রিভুজের দুটি কোণ ৯০° এবং ৪৫° হলে তৃতীয় কোণ কত?", options: ["৩০°", "৪৫°", "৬০°", "৯০°"], answer: "৪৫°" },  
    { type: "math", question: "¾ এর দশমিক মান কত?", options: ["০.৫", "০.৭৫", "০.২৫", "১.০"], answer: "০.৭৫" },  
    { type: "math", question: "যদি ৭x = ৪৯ হয়, তবে x এর মান কত?", options: ["৬", "৭", "৮", "৯"], answer: "৭" },  
    { type: "mcq", question: "নিউটনের তৃতীয় গতি সূত্র কোনটির উপর ভিত্তি করে কাজ করে?", options: ["বল সংরক্ষণ", "পদার্থের স্থিতি", "ক্রিয়া-প্রতিক্রিয়া", "নিস্ক্রিয়তা"], answer: "ক্রিয়া-প্রতিক্রিয়া" },  
    { type: "mcq", question: "মানবদেহে ইনসুলিন কোন অঙ্গ উৎপন্ন করে?", options: ["যকৃৎ", "অগ্ন্যাশয়", "হৃদপিণ্ড", "ফুসফুস"], answer: "অগ্ন্যাশয়" },  
    { type: "history", question: "দ্বিতীয় বিশ্বযুদ্ধ কোন সালে শুরু হয়?", options: ["১৯৩৯", "১৯৪১", "১৯৪৫", "১৯৩৫"], answer: "১৯৩৯" },  
    { type: "history", question: "১৯৭১ সালে মুক্তিযুদ্ধ চলাকালীন বাংলাদেশের প্রথম অস্থায়ী রাজধানী কোথায় ছিল?", options: ["ঢাকা", "মুজিবনগর", "চট্টগ্রাম", "খুলনা"], answer: "মুজিবনগর" },  
    { type: "history", question: "বাংলাদেশের জাতীয় সংগীত কে লিখেছেন?", options: ["কাজী নজরুল ইসলাম", "সুকান্ত ভট্টাচার্য", "রবীন্দ্রনাথ ঠাকুর", "জসীম উদ্দীন"], answer: "রবীন্দ্রনাথ ঠাকুর" },
    { type: "ict", question: "কম্পিউটারের স্থায়ী মেমোরি কোনটি?", options: ["RAM", "ROM", "Cache", "Hard Disk"], answer: "ROM" },  
    { type: "ict", question: "বাংলাদেশের প্রথম সুপার কম্পিউটার কোথায় স্থাপিত হয়?", options: ["ঢাকা বিশ্ববিদ্যালয়", "বুয়েট", "চট্টগ্রাম বিশ্ববিদ্যালয়", "রাজশাহী বিশ্ববিদ্যালয়"], answer: "বুয়েট" },  
    { type: "ict", question: "কোন প্রোগ্রামিং ভাষাটি ওয়েব ডেভেলপমেন্টের জন্য বেশি ব্যবহৃত হয়?", options: ["Python", "C", "Java", "JavaScript"], answer: "JavaScript" },  
    { type: "ict", question: "কোনটি ইনপুট ডিভাইস নয়?", options: ["মাউস", "কীবোর্ড", "মনিটর", "স্ক্যানার"], answer: "মনিটর" },  
    { type: "ict", question: "এক্সেল প্রোগ্রামে কোন ফাংশনটি যোগফল নির্ণয়ের জন্য ব্যবহৃত হয়?", options: ["SUM()", "ADD()", "TOTAL()", "COUNT()"], answer: "SUM()" },  
    { type: "science", question: "পৃথিবীর বায়ুমণ্ডলের সবচেয়ে বেশি পরিমাণ গ্যাস কোনটি?", options: ["অক্সিজেন", "কার্বন ডাই অক্সাইড", "নাইট্রোজেন", "হাইড্রোজেন"], answer: "নাইট্রোজেন" },  
    { type: "science", question: "মানুষের রক্তের প্রধান উপাদান কোনটি?", options: ["হিমোগ্লোবিন", "প্লাজমা", "লাল রক্ত কণিকা", "সাদা রক্ত কণিকা"], answer: "প্লাজমা" },  
    { type: "science", question: "সূর্যের শক্তি উৎপন্ন হয় কোন প্রক্রিয়ার মাধ্যমে?", options: ["পারমাণবিক বিভাজন", "পারমাণবিক সংযোজন", "রাসায়নিক বিক্রিয়া", "তড়িৎ চৌম্বকীয় বিক্রিয়া"], answer: "পারমাণবিক সংযোজন" },  
    { type: "math", question: "একটি বর্গক্ষেত্রের বাহুর দৈর্ঘ্য ৫ সেমি হলে, এর ক্ষেত্রফল কত?", options: ["২০", "২৫", "৩০", "৩৫"], answer: "২৫" },  
    { type: "math", question: "যদি কোনো সংখ্যা ৯ দ্বারা বিভাজ্য হয়, তবে তার অঙ্কগুলোর যোগফল কত দ্বারা বিভাজ্য হবে?", options: ["৩", "৬", "৯", "১২"], answer: "৯" },  
    { type: "math", question: "একটি বৃত্তের পরিধি নির্ণয়ের সূত্র কী?", options: ["πr²", "2πr", "πd", "r²"], answer: "2πr" },  
    { type: "history", question: "বাংলাদেশের সংবিধান কবে গৃহীত হয়?", options: ["১৯৭১", "১৯৭২", "১৯৭৩", "১৯৭৪"], answer: "১৯৭২" },  
    { type: "history", question: "বঙ্গবন্ধু শেখ মুজিবুর রহমানকে কত সালে হত্যা করা হয়?", options: ["১৯৭৩", "১৯৭৪", "১৯৭৫", "১৯৭৬"], answer: "১৯৭৫" },  
    { type: "history", question: "বাংলাদেশের প্রথম রাষ্ট্রপতি কে ছিলেন?", options: ["শেখ মুজিবুর রহমান", "জিয়াউর রহমান", "তাজউদ্দীন আহমদ", "হুসেইন মুহম্মদ এরশাদ"], answer: "শেখ মুজিবুর রহমান" },  
    { type: "history", question: "বাংলাদেশের প্রথম জাতীয় নির্বাচন কোন সালে অনুষ্ঠিত হয়?", options: ["১৯৭১", "১৯৭২", "১৯৭৩", "১৯৭৪"], answer: "১৯৭৩" },
    { type: "ict", question: "কম্পিউটারে ভাইরাস অপসারণের জন্য কোন সফটওয়্যার ব্যবহার করা হয়?", options: ["অ্যান্টিভাইরাস", "মিডিয়া প্লেয়ার", "টেক্সট এডিটর", "গ্রাফিক্স ডিজাইনার"], answer: "অ্যান্টিভাইরাস" },  
    { type: "science", question: "কোনটি বৈদ্যুতিক পরিবাহীর উদাহরণ?", options: ["কাঠ", "প্লাস্টিক", "কপার", "কাচ"], answer: "কপার" },  
    { type: "math", question: "যদি একটি সমকোণী ত্রিভুজের দুই বাহুর দৈর্ঘ্য ৩ সেমি ও ৪ সেমি হয়, তবে অতিভুজের দৈর্ঘ্য কত?", options: ["৫", "৬", "৭", "৮"], answer: "৫" },  
    { type: "history", question: "১৯৫২ সালের ভাষা আন্দোলনের মূল দাবি কী ছিল?", options: ["বাংলাকে একমাত্র রাষ্ট্রভাষা করা", "ইংরেজিকে রাষ্ট্রভাষা করা", "উর্দুকে রাষ্ট্রভাষা করা", "সব ভাষাকে সমান অধিকার দেওয়া"], answer: "বাংলাকে একমাত্র রাষ্ট্রভাষা করা" } ,
];

function getRandomQuestions() {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 50);
}

const startQuizBtn = document.getElementById("start-quiz");
const timerDiv = document.getElementById("timer");
const quizContainer = document.getElementById("quiz-container");
const submitBtn = document.getElementById("submit-btn");
const resultDiv = document.getElementById("result");
const answersDiv = document.getElementById("answers"); // New answers div
const retryBtn = document.getElementById("retry-btn"); // New retry button
const leaderboardBtn = document.getElementById("leaderboard-btn");
const leaderboardDiv = document.getElementById("leaderboard");
let timeLeft = 1200;
let score = 0;
let currentQuestions = [];
let timerInterval;

function showElement(element) {
    element.classList.remove("hidden");
}

function hideElement(element) {
    element.classList.add("hidden");
}

startQuizBtn.addEventListener("click", () => {
    hideElement(startQuizBtn);
    hideElement(leaderboardBtn);
    hideElement(leaderboardDiv);
    hideElement(resultDiv);
    hideElement(answersDiv);
    hideElement(retryBtn);
    showElement(timerDiv);
    showElement(quizContainer);
    showElement(submitBtn);
    loadQuiz();
    startTimer();
});

function loadQuiz() {
    quizContainer.innerHTML = "";
    currentQuestions = getRandomQuestions();
    currentQuestions.forEach((q, index) => {
        const div = document.createElement("div");
        div.className = "question";
        div.innerHTML = `
            <p>${index + 1}. ${q.question} (${q.type.toUpperCase()})</p>
            ${q.options.map(opt => `
                <label>
                    <input type="radio" name="q${index}" value="${opt}"> ${opt}
                </label><br>
            `).join("")}
        `;
        quizContainer.appendChild(div);
    });
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDiv.textContent = `Time Left: ${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
        }
    }, 1000);
}

function submitQuiz() {
    clearInterval(timerInterval);
    score = 0;
    const userAnswers = [];
    document.querySelectorAll(".question").forEach((qDiv, index) => {
        const selected = qDiv.querySelector(`input[name="q${index}"]:checked`);
        const userAnswer = selected ? selected.value : "No answer";
        userAnswers.push(userAnswer);
        if (userAnswer === currentQuestions[index].answer) {
            score++;
        }
    });

    resultDiv.textContent = `Your Score: ${score} / 50`;
    showElement(resultDiv);

    // Display correct answers
    answersDiv.innerHTML = "<h2>Your Answers</h2>";
    currentQuestions.forEach((q, index) => {
        const div = document.createElement("div");
        div.className = `answer ${userAnswers[index] === q.answer ? "correct" : "incorrect"}`;
        div.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            <p>Your Answer: ${userAnswers[index]}</p>
            <p>Correct Answer: ${q.answer}</p>
        `;
        answersDiv.appendChild(div);
    });
    showElement(answersDiv);

    showElement(retryBtn);
    showElement(leaderboardBtn);
    hideElement(submitBtn);
    saveScore(score);
}

submitBtn.addEventListener("click", submitQuiz);

retryBtn.addEventListener("click", () => {
    timeLeft = 1200;
    hideElement(resultDiv);
    hideElement(answersDiv);
    hideElement(retryBtn);
    hideElement(leaderboardBtn);
    hideElement(leaderboardDiv);
    showElement(startQuizBtn);
    hideElement(quizContainer);
    hideElement(timerDiv);
});

leaderboardBtn.addEventListener("click", () => {
    hideElement(quizContainer);
    hideElement(resultDiv);
    hideElement(answersDiv);
    hideElement(retryBtn);
    showElement(leaderboardDiv);
    fetch("/leaderboard")
        .then(response => {
            console.log("Leaderboard response status:", response.status);
            if (!response.ok) throw new Error("Fetch failed");
            return response.json();
        })
        .then(data => {
            console.log("Leaderboard data received:", data);
            leaderboardDiv.innerHTML = "<h2>Leaderboard</h2>" + data.map((entry, i) => 
                `<p>${i + 1}. ${entry.username}: ${entry.score}/50 (Date: ${new Date(entry.timestamp).toLocaleString()})</p>`
            ).join("");
        })
        .catch(err => console.error("Leaderboard error:", err));
});

function saveScore(score) {
    const username = prompt("Enter your username (optional):") || "Anonymous";
    console.log("Attempting to save:", { username, score });
    fetch("/save-score", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, score })
    })
    .then(response => {
        console.log("Save response status:", response.status);
        if (!response.ok) throw new Error("Save failed");
        return response.text();
    })
    .then(data => console.log("Save result:", data))
    .catch(err => console.error("Save error:", err));
}