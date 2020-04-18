// login button event handler

const loginBtn = document.querySelector("#login");

loginBtn.addEventListener("click",function(){
    const loginArea = document.querySelector(".login-area");
    loginArea.style.display = "none";
    const transactionArea = document.querySelector(".transaction-area");
    transactionArea.style.display = "block";
});

// deposit button event handler

const depositBtn = document.querySelector("#addDeposit");

depositBtn.addEventListener("click",function(){
    const depositAmount = document.querySelector("#depositAmount").value;

    if(depositAmount < 0){
        alert("Deposit amount cannot be negative");
    }
    else{
        const depositNumber = parseFloat(depositAmount);
    
        // const currentAmount = document.querySelector("#currentAmount").innerText;
    
        // const currentAmountNumber = parseFloat(currentAmount);
    
        // const totalAmount = depositNumber + currentAmountNumber;
    
        // document.querySelector("#currentAmount").innerText = totalAmount;
    
        updateSpanText("#currentAmount",depositNumber);
    
        updateSpanText("#currentBalance",depositNumber);
    
        document.querySelector("#depositAmount").value = "";
    }
});

function updateSpanText(id,depositNumber){
   
        const currentBalance = document.querySelector(id).innerText;
        const currentBalanceNumber = parseFloat(currentBalance);
        const totalCurrentBalance = currentBalanceNumber + depositNumber;
        document.querySelector(id).innerText = totalCurrentBalance;
}

// withdraw button event handler

const withdrawBtn = document.querySelector("#addWithdraw");

withdrawBtn.addEventListener("click",function(){
    const addWithdrawAmount = document.querySelector("#addWithdrawAmount").value;

    if(addWithdrawAmount < 0){
        alert("Withdraw amount cannot be negative");
    }
    else{
        const addWithdrawAmountNumber = parseFloat(addWithdrawAmount);

        const withdrawAmount = document.querySelector(".withdrawAmount").innerText;
        const withdrawAmountNumber = parseFloat(withdrawAmount);

        const totalWithdrawAmount = addWithdrawAmountNumber + withdrawAmountNumber;

        document.querySelector(".withdrawAmount").innerText = totalWithdrawAmount;

        updateWithdrawSpanText("#currentBalance",addWithdrawAmountNumber)

        document.querySelector("#addWithdrawAmount").value = "";
}
});

function updateWithdrawSpanText(id,addWithdrawAmountNumber){
    const currentBalance = document.querySelector(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalCurrentBalance = currentBalanceNumber - addWithdrawAmountNumber;
    document.querySelector(id).innerText = totalCurrentBalance;
}

