let totalReciclaje = document.getElementById("totalReciclaje");
let creditosIniciales = 0;
totalReciclaje.innerHTML = `${creditosIniciales} creditos`;

let objetos = [
{
    id: "botella-agua",
    creditos: 100
},
{
    id: "botella-vino",
    creditos: 150
},
{
    id: "papelhigienico",
    creditos: 80
},
{
    id: "cerveza",
    creditos: 80
},
{
    id: "periodico",
    creditos: 90
},
{
    id: "espejo",
    creditos: 100
},
{
    id: "bombilla",
    credito: 120
},
{
    id: "cinta",
    credito: 95
},
{
    id: "belen",
    credito: 1000
}
];

const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);

    // console.log("arrastrando...", ev.target.id);
}

const allowDrop = (ev) => {
    ev.preventDefault();
};

const drop = (ev) => {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    // ev.target.appendChild(document.getElementById(data));

    let objetoDeseado = objetos.find(objeto => {
        return objeto.id == data
    });

    creditosIniciales += objetoDeseado.credito;

    totalReciclaje.innerHTML = `${creditosIniciales} creditos`;
};