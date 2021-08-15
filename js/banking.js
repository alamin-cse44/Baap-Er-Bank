// handle deposit button
document.getElementById('deposit-button').addEventListener('click',function(){
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;
    // console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    depositTotal.innerText = newDepositTotal;

    // clear the deposit input field
    depositInput.value = '';


    // update account balance
    const balance = document.getElementById('balance-total');

    const prevBalance = balance.innerText;
    const newBalance = parseFloat(prevBalance) + parseFloat(newDepositAmount);
    balance.innerText = newBalance;
});



// handle withdraw
 document.getElementById('withdraw-button').addEventListener('click',function(){
     const withdrawInput = document.getElementById('withdraw-input');
     const newWithdrawAmount = withdrawInput.value;

    //  set withdraw total\
    const withdrawTotal = document.getElementById('withdraw-total');
    const pervWithdraw = withdrawTotal.innerText;

    const totalWithdraw = parseFloat(newWithdrawAmount) + parseFloat(pervWithdraw);

    withdrawTotal.innerText = totalWithdraw;

    // clear withdraw input
    withdrawInput.value = '';

    // update account balance
    const balance = document.getElementById('balance-total');

    const prevBalance = balance.innerText;
    const newBalance = parseFloat(prevBalance) - parseFloat(totalWithdraw);
    balance.innerText = newBalance;
     
 })