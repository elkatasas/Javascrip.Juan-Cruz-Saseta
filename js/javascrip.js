
function calcular__interes(){
    let Dinero = document.getElementById("Dinero").value
    let Cuotas = document.getElementById("Cuotas").value
    let iva = 0.21
    if(Cuotas==1){
        subtotal=Dinero * 1
        cuotas=subtotal / 1
    }
    if (Cuotas==2){
        subtotal=Dinero * 1.25
        cuotas=subtotal / 2
    }
    if (Cuotas==3){
        subtotal=Dinero * 1.5
        cuotas=subtotal / 3
    }
    total=subtotal + subtotal * iva
    document.getElementById("mecha").innerHTML=subtotal
    document.getElementById("cuots").innerHTML=cuotas
    console.log(Dinero)
    console.log(Cuotas)
}


function calcular__impuestos(){
    let iva = prompt("iva");
    let impuestoPais = prompt("impuestoPais");
    console.log(iva,impuestoPais)
}
