document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositAmount =document.getElementById('deposit-input');
    const deposit = depositAmount.value;
    const newDepo = parseFloat(deposit);
   
    const depositA = document.getElementById('deposit-amount');
    const depositB = depositA.innerText;
    const totalDepo = parseFloat(depositB);
    
    const totalDeposit = totalDepo + newDepo;
    depositA.innerText = totalDeposit;

    const balance = document.getElementById('balance-amount');
    const balanceTotal = balance.innerText;
    const totalBalance = parseFloat(balanceTotal);

    const currentBalance = totalBalance + newDepo;
    balance.innerText = currentBalance;

    depositAmount.value = '';
})