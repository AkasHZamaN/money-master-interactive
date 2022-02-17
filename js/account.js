document.getElementById('calculate-btn').addEventListener('click', function(){
    const foodAmount = updateExpenseAmount('food-amount');
    const rentAmount = updateExpenseAmount('rent-amount');
    const clothAmount = updateExpenseAmount('cloth-amount');

    // income amount
    const incomeField = document.getElementById('income-amount');
    const incomeAmount = parseFloat(incomeField.value);
    incomeField.value = incomeAmount;
    // incomeField.value = '';

    // total expenses ballance
    const expenseField = document.getElementById('expense-amount');
    const previousExpenseAmount = parseFloat(expenseField.innerText);
    const totalExpenseAmount = foodAmount + rentAmount + clothAmount;
    newExpenseAmount = previousExpenseAmount + totalExpenseAmount;
    if(totalExpenseAmount > 0 && totalExpenseAmount != ''){
        expenseField.innerText = newExpenseAmount;
        if(totalExpenseAmount > incomeAmount){
            console.log('Opps! you have no enough money');
            expenseField.innerText = '';
        }
    } 

    // balance amount
    const balance = document.getElementById('balance-amount');
    const balanceAmount = parseFloat(balance.innerText);
    const totalIncomeAmount = incomeAmount + balanceAmount;
    if(incomeAmount > balanceAmount && incomeAmount != ''){
      const totalBalanceAmount = totalIncomeAmount - newExpenseAmount;
        balance.innerText = totalBalanceAmount;
        
        if(incomeAmount < totalExpenseAmount ){
            console.log('You Have Zero Balance');
            balance.innerText = '';
        }  
    } 
});

// get food, rent and cloths expenses values
function updateExpenseAmount(inputId){
    const amountField = document.getElementById(inputId);
    const getAmount = parseFloat(amountField.value);
    if(getAmount > 0 && getAmount != ''){
        return getAmount;           
    }
    else{
        console.log('please! privide a valid number');  
    }
    amountField.value = '';
}

 // save button event
 document.getElementById('save-btn').addEventListener('click', function(){

    const incomeAmount = parseFloat(updateExpenseAmount('income-amount'));
    const percentageField = document.getElementById('percentage-value');
    const percentageValue = parseFloat(percentageField.value);
    percentageField.value = percentageValue;

    const totalPercentage = (incomeAmount * percentageValue) / 100 ;
    // percentageField.value = totalPercentage;

    const savingField = document.getElementById('saving-amount');
    const savingValue = parseFloat(savingField.innerText);
    savingField.innerText = savingValue;
    // total percentage 
    const totalSavingAmount = parseFloat(savingValue + totalPercentage);
    savingField.innerText = parseFloat(totalSavingAmount);
    // remaining balance after saving
    const balanceAmount = totalBalance('balance-amount');
    const totalRemainBalance = balanceAmount - totalSavingAmount;
    const balanceRemain = document.getElementById('remaining-balance');
    const totalRemainValue = parseFloat(balanceRemain);
    balanceRemain.innerText = totalRemainValue;
    balanceRemain.innerText = totalRemainBalance;

 })
    // funtion for balance and remaining balance purpose
 function totalBalance(inputId){
     const balance = document.getElementById(inputId);
     const balanceAmount = parseFloat(balance.innerText);
     balance.innerText = balanceAmount;

     return balanceAmount; 
 }



