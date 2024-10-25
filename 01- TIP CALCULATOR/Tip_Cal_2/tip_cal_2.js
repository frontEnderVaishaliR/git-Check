// selectors
const billAmt = parseInt(document.getElementById('billAmount').value);
const tipAmt = parseInt(document.getElementById('tipAmount').value);

const total = document.getElementById('total');

const calculate = document.getElementById('calculate');
const reset = document.getElementById('reset');


// code
calculate.addEventListener(
    'click',
    ()=>{
        console.log(billAmt);
        console.log(tipAmt);
        total.innerText = billAmt + ((tipAmt/100)*billAmt);
    }
);

reset.addEventListener(
    'click',
    ()=>{
        window.location = location.href;
    }
)