const container = document.querySelector('.container');
let answersMassive = {}; // Bo'sh obyekt

const getData = async () => {
    try {
        const req = await fetch('../tdos.json');
        if (!req.ok) throw new Error('Network response was not ok');
        const data = await req.json();

        let counter = 1;
        data.forEach(element => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('part-1');
            questionDiv.innerHTML = `
                <h1 class="question">
                    <p>${counter}) ${element.question}</p>
                </h1>
                <div class="part-2">
                    <button class="answer" data-question="${counter}" data-answer="${element.incorrect1}">
                        ${element.incorrect1}
                    </button>
                    <button class="answer" data-question="${counter}" data-answer="${element.incorrect2}">
                        ${element.incorrect2}
                    </button>
                    <button class="answer" data-question="${counter}" data-answer="${element.correct}">
                        ${element.correct}
                    </button>
                    <button class="answer" data-question="${counter}" data-answer="${element.incorrect3}">
                        ${element.incorrect3}
                    </button>
                </div>
        `;
            container.appendChild(questionDiv);
            counter++;
        });

        // `answer` tugmalarga event listener qo'shish
        document.querySelectorAll('.answer').forEach(answerBtn => {
            answerBtn.addEventListener('click', () => {
                let questionNumber = answerBtn.getAttribute('data-question');
                let selectedAnswer = answerBtn.getAttribute('data-answer');

                // Oldindan tanlangan javob tugmachasi mavjud bo'lsa, uni tiklash
                if (answersMassive[questionNumber]) {
                    const previousSelectedBtn = document.querySelector(`.answer[data-question="${questionNumber}"][data-answer="${answersMassive[questionNumber]}"]`);
                    if (previousSelectedBtn) {
                        previousSelectedBtn.style.backgroundColor = ''; // Tiklaymiz
                    }
                }

                // Foydalanuvchi tomonidan tanlangan javob tugmachasini qizil rangga bo'yash
                answerBtn.style.backgroundColor = 'red';

                // Javobni massivga qo'shish
                answersMassive[questionNumber] = selectedAnswer;
                console.log(answersMassive);
            });
        });

    } catch (error) {
        console.error('Fetch error:', error);
    }
};

getData();
