// function subTotal(newCaseNum , newPhoneNum){
//     const totalPPrice = newPhoneNum * 1219;
//     const totalCPrice = newCaseNum * 59;
//     const subTotalPre = document.getElementById('subField');
//     subTotalPre.innerText = totalPPrice + totalCPrice;
// }

function getElementTextById(elementId){
    const totalElement = document.getElementById(elementId);
    const stringTotal = totalElement.innerText;
    const numTotal = parseInt(stringTotal);
    return numTotal;
}

function calculateSupTotal(){
    const curPTotal = getElementTextById('pTotal')
    const curCTotal = getElementTextById('preTotal');
    const currentSupTotal = curPTotal + curCTotal;
    const subTotalElement = document.getElementById('subField');
    subTotalElement.innerText = currentSupTotal;
    const taxTotalString = document.getElementById('taxField');
    const taxTotalHobo = (currentSupTotal * 0.1).toFixed(2);
    const taxTotalNumber = parseInt(taxTotalHobo);
    taxTotalString.innerText = taxTotalNumber;
    const mAllTotalString = document.getElementById('allTotal');
    const total = taxTotalNumber + currentSupTotal;
    const mAllTotalNumber = parseInt(total);
    mAllTotalString.innerText = mAllTotalNumber;
}

