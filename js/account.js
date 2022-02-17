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
    // amountField.value = getAmount;
    amountField.value = '';
}





