function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}
function setValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function discount(elementId, value, amount) {
    const discountText = document.getElementById(elementId)
    const p = document.createElement('p');
    p.innerText = 'Discount';
    const p2 = document.createElement('p');
    const discountAmount = (value * amount).toFixed(2);
    p2.innerText = discountAmount;
    discountText.appendChild(p);
    discountText.appendChild(p2);
    return discountAmount;
}
function discountAmountForGrandTotal(value, amount) {
    const discountAmount = (value * amount).toFixed(2);
    return discountAmount;
}

