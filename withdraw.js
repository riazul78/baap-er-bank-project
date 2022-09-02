document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawAmount = document.getElementById('withdraw-input');
    const withdraw = withdrawAmount.value;
    const totalWithdraw = parseFloat(withdraw);

    const withdrawText = document.getElementById('withdraw-amount');
    const withdrawTotal = withdrawText.innerText;
    const preWithdraw = parseFloat(withdrawTotal);
 
    const afterWithdraw = preWithdraw + totalWithdraw;
    withdrawText.innerText = afterWithdraw;

    const totalBalance = document.getElementById('balance-amount');
    const balance = totalBalance.innerText;
    
    const currentB = balance - totalWithdraw;
    totalBalance.innerText= currentB;

    withdrawAmount.value = '';
})