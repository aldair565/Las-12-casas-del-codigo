let saldo = 10000;

function depositMoney(){
    let deposit = parseInt(document.getElementById("deposito").value);
    if (Number.isNaN(deposit) == false){
        saldo += deposit;
        document.getElementById("mostrarSaldo").innerHTML = saldo;
    } else {
        document.getElementById("mostrarSaldo").innerHTML = "Introduce una cantidad";
    }
}

function withdrawMoney(){
    let withdraw = parseInt(document.getElementById("retiro").value);
    if (Number.isNaN(withdraw) == false){
        if (withdraw <= saldo){
            saldo -= withdraw;
            document.getElementById("mostrarSaldo").innerHTML = saldo;
        } else {
            document.getElementById("mostrarSaldo").innerHTML = "Saldo insuficiente";
        }
    } else {
        document.getElementById("mostrarSaldo").innerHTML = "Introduce una cantidad";
    }
}

//function cash(saldo)

document.getElementById("depositar").addEventListener("click",depositMoney);
document.getElementById("retirar").addEventListener("click",withdrawMoney);
document.getElementById("balance").addEventListener("click",function() {
    document.getElementById("mostrarSaldo").innerHTML = saldo;
})