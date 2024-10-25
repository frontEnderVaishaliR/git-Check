// Selectors
let billAmt = Number(document.getElementById('billAmt').value); //bill amount in number format
let people = Number(document.getElementById('people').value);   //people amount in number format
// console.log(billAmt, people);  //integers 

let tipAmt = document.getElementById('tipAmt');      //tip amount element
let totalAmt = document.getElementById('totalAmt');  //total amount element
// console.log(tipAmt.value, totalAmt.value);  //string

let calculate = document.getElementById('calculate');  //selector for calculate button
let reset = document.getElementById('reset');          //selector for reset button


// INITIALIZERS
let tipAmtNum = Number(tipAmt.value);
let totalAmtNum = Number(totalAmt.value);
let totalTip;
// console.log(tipAmtNum, totalAmtNum);


// CODE

// selector for "tip buttons"
const tipButtons = document.querySelectorAll('.tipButton');

for(let i = 0; i < tipButtons.length; i++){
    tipButtons[i].addEventListener(
        'click',
        function(){
            this.style.border = '2px solid #5d5757';
            console.log(tipButtons[i]);
            let tip = Number(this.innerText.slice(0, -1));
            // console.log(tip);
            // console.log(typeof(tip));

            // calculating TotalTip first
            totalTip = (billAmt * tip) / 100;
            console.log(totalTip);
        }
    )
}

// selector for "custom tip input"
const customTip = Number(document.getElementById("custom").value);
console.log(customTip);
if(customTip === 0){
    totalTip = 0;
}


//event listener for "calculate" button
const calculateBillPerPerson = () => {
    calculate.style.display = 'none'; 
    reset.style.display = 'block';

    // calculating TotalTip first
    
    // Calculating and Displaying Tip per person
    tipAmtNum = totalTip / people;

    tipAmt.value = tipAmtNum;
    // console.log(tipAmtNum);

    // Calculating and Displaying total Bill Amount per person
    totalAmtNum = (billAmt + totalTip ) / people;

    totalAmt.value = totalAmtNum;
    console.log('total bill amount per person: ' + totalAmt.value);     
}

// event handler for "reset" button
function resetFunction(){
    window.location = location.href;
}
