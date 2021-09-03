(function(){
    let formEl = document.getElementsByTagName("form");
    let numbers = [];

    //randomising numbers upon startup.
    randomizeNumbers();
    
    function randomizeNumbers(){
        let container1 = document.querySelector(".operand1");
        let container2 = document.querySelector(".operand2");
        let operand1 = Math.floor(Math.random() * 100);
        let operand2 = Math.floor(Math.random() * 100);
        numbers.push(operand1, operand2);

        container1.innerHTML = operand1;
        container2.innerHTML = operand2;
    }

    //checking users entry after input and submission
    function check(userInput){
        let inputEl = document.getElementById("solution-entry");
        let sumOfNumbers = numbers[0] + numbers[1];
        console.log(numbers);
        if(userInput == sumOfNumbers){
            alert("Correct!!");
            window.location.reload();
            numbers.length = 0;
            randomizeNumbers();
        }else{
            alert("wrong answer, please try again");
            inputEl.value = "";
        }
    }

    formEl[0].addEventListener("submit", (e)=>{
        e.preventDefault();
        let inputEl = document.getElementById("solution-entry");
        let usersResponse = inputEl.value;
        check(usersResponse);       
    }, false)
}())