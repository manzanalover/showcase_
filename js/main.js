let totalReciclaje = document.getElementById("totalReciclaje");
let creditosIniciales = 0;
totalReciclaje.innerHTML = `${creditosIniciales}`;

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
    creditos: -80
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
    creditos: -100
},
{
    id: "bombilla",
    creditos: -120
},
{
    id: "cinta",
    creditos: -95
},
{
    id: "belen",
    creditos: 900
}
];

const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);

    // console.log("arrastrando...", ev.target.id);
};

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

    creditosIniciales += objetoDeseado.creditos;

    totalReciclaje.innerHTML = `${creditosIniciales}`;
};