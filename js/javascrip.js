const Producto =[
    {
        id: 1,
        name:"CPU RYZEN 5 3400",
        precio: 34000,
    },

    {
        id: 2,
        name:"Monitor ReDragon 24",
        precio: 60000
    },

    {
        id: 3,
        name:"Gabinete Corsair FUSION",
        precio: 19000
    }
]
alert ("Bienvenido a SASEtecnology" );
const cart = [];

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
