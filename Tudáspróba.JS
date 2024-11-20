document.getElementById('checkAnswers').addEventListener('click', function() {
    const correctAnswers = {
        q1: 'for', 
        q2: 'while' 
    };
    
    
    const q1Answer = document.querySelector('input[name="q1"]:checked');
    const q2Answer = document.querySelector('input[name="q2"]:checked');
    
    
    let result1 = document.getElementById('result1');
    let result2 = document.getElementById('result2');
    
     
    if (q1Answer && q1Answer.value === correctAnswers.q1) {
        result1.textContent = "Jó válasz!";
        result1.style.color = "green";
    } else {
        result1.textContent = "Rossz válasz!";
        result1.style.color = "red";
    }
    
    
    if (q2Answer && q2Answer.value === correctAnswers.q2) {
        result2.textContent = "Jó válasz!";
        result2.style.color = "green";
    } else {
        result2.textContent = "Rossz válasz!";
        result2.style.color = "red";
    }
});
    