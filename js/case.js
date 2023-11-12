
// function increaseAndDecrease(num){
//     const caseNumField = document.getElementById('case-num-field');
//     const caseNumString = caseNumField.value;
//     const preCaseNum = parseInt(caseNumString);
//     let newCaseNum;
//     if(num === true){
//         newCaseNum = preCaseNum + 1;
//     }
//     else if(num === false){
//         newCaseNum = preCaseNum - 1;
//     }
//     caseNumField.value = newCaseNum;
// }

function totalPrice(newCaseNum){
    const totalPrice = newCaseNum * 59;
    const totalPre = document.getElementById('preTotal');
    totalPre.innerText = totalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
    // increaseAndDecrease(true);
    const caseNumField = document.getElementById('case-num-field');
    const caseNumString = caseNumField.value;
    const preCaseNum = parseInt(caseNumString);
    const newCaseNum = preCaseNum + 1;
    caseNumField.value = newCaseNum;
    totalPrice(newCaseNum);
    calculateSupTotal();

})

document.getElementById('btn-case-Minus').addEventListener('click', function(){
    // increaseAndDecrease(false);
    const caseNumField = document.getElementById('case-num-field');
    const caseNumString = caseNumField.value;
    const preCaseNum = parseInt(caseNumString);
    if(preCaseNum < 2){
        alert('Not shote be smaller')
        return
    }
    const newCaseNum = preCaseNum - 1;
    caseNumField.value = newCaseNum;
    totalPrice(newCaseNum);
    calculateSupTotal();
})