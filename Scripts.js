let seatsLeft = parseInt(document.getElementById('seats-left').innerText);
let seatCount = parseInt(document.getElementById('seat-count').innerText);
let priceSum = 0;
const ticketPrice = 550;
const allBtn = document.getElementsByClassName('add-btn');
for (const btn of allBtn) {
    btn.addEventListener("click", function handleSelect(event) {
        seatsLeft--;
        setValueById('seats-left', seatsLeft)
        event.target.style.backgroundColor = "#1DD100";
        event.target.style.color = "white";
        event.target.setAttribute("disabled", true);
        seatCount++;
        setValueById('seat-count', seatCount);
        const seat = btn.innerText;
        const tr = document.createElement('tr')
        const td = document.createElement('td')
        td.innerText = seat;
        const td2 = document.createElement('td');
        td2.innerText = 'Economy';
        const td3 = document.createElement('td');
        td3.innerText = ticketPrice;
        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);
        const tBody = document.getElementById('t-body');
        tBody.appendChild(tr);
        priceSum += ticketPrice;
        setValueById('total-price', priceSum)
    })
}


const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener('click', function (event) {
    const couponInput = document.getElementById("input-field").value;
    const couponCode = couponInput.toUpperCase();
    if (seatCount >= 4) {
        if (couponCode === 'NEW15') {
            discount('discount-text', priceSum, 0.15);
            const discountAmount = discountAmountForGrandTotal(priceSum, 0.15);
            document.getElementById('grand-total').innerText = priceSum - discountAmount;
            event.target.setAttribute("disabled", true);

        }
        else if (couponCode === 'COUPLE20') {
            discount('discount-text', priceSum, 0.2);
            const discountAmount = discountAmountForGrandTotal(priceSum, 0.2);
            document.getElementById('grand-total').innerText = priceSum - discountAmount;
            event.target.setAttribute("disabled", true);
        }
        else {
            alert('Invalid Coupon Code. Please type correct one.');
        }

        document.getElementById("input-field").value = '';
    }
    else {
        alert("Buy 4 Tickets");
    }
})
