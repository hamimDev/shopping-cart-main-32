document.getElementById('pPlus').addEventListener('click', function(){
    const phoneNumField = document.getElementById('pInput');
    const phoneNumString = phoneNumField.value;
    const prePhoneNum = parseInt(phoneNumString);
    const newPhoneNum = prePhoneNum + 1;
    phoneNumField.value = newPhoneNum;
    totalPhonePrice(newPhoneNum);
    calculateSupTotal();
})

document.getElementById('pMinus').addEventListener('click', function(){
    const phoneNumField = document.getElementById('pInput');
    const phoneNumString = phoneNumField.value;
    const prePhoneNum = parseInt(phoneNumString);
    if(prePhoneNum < 2){
        alert('Not shote be smaller')
        return
    }
    const newPhoneNum = prePhoneNum - 1;
    phoneNumField.value = newPhoneNum;
    totalPhonePrice(newPhoneNum);
    calculateSupTotal();
})

function totalPhonePrice(newPhoneNum){
    const totalPrice = newPhoneNum * 1219;
    const totalPre = document.getElementById('pTotal');
    totalPre.innerText = totalPrice;
}