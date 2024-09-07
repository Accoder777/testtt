const login = document.querySelector('.login')
const parol = document.querySelector('.parol')
const forma = document.getElementById('forma')
const entering = document.querySelector('.entering')
const question = document.querySelector('.question')
const main = document.querySelector('.main')

forma.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    if(login.value == 'accoder' || parol.value == 12345){
        window.location.href = "main/main.html"
    }
    else{
        login.value = '';
        parol.value = '';
    }
})

const question1 = {
    question1: 'which one ois correct',
    correct: '1 answer',
    incorrect1: '2 answer',
    incorrect2: '3 answer',
    incorrect3: '4 answer',
}



question.innerHTML = `
    <h3>${question1.question1}?</h3>
                <div class="answer">
                    <input type="radio" id="question1" name="same1"> <span>${question1.incorrect2}</span><br>
                </div>
                <div class="answer">
                    <input type="radio" id="question1" name="same1"> <span>${question1.correct}</span><br>
                </div>
                <div class="answer">
                    <input type="radio" id="question1" name="same1"> <span>${question1.incorrect1}</span><br>
                </div>
                <div class="answer">
                    <input type="radio" id="question1" name="same1"> <span>${question1.incorrect3}</span><br>
                </div>
`;

