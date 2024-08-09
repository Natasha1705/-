
const bday = document.querySelector('#bday');
const resultInput = document.querySelector('#result');

function calculateDaysPass(){
    const bdayStr = bday.value;
    console.log(bdayStr);

    const bdayTimestamp = Date.parse(bdayStr);
    console.log(bdayTimestamp);

    const currentTimestamp = Date.now();
    
    const timeDifference = bdayTimestamp - currentTimestamp;
    console.log(timeDifference);

    const daysPassed = Math.floor(timeDifference/(1000*60*60*24));
    console.log(daysPassed);

    resultInput.textContent = ` До дня рождения осталось : ${daysPassed} дней.`
}

function check() {
    let result = document.querySelector('#bday').value;
    if(result === '') {
        resultInput.textContent = "Пожалуйста, введите дату рождения."
    }
}
console.log(check);