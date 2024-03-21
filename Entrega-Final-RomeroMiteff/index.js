const constructor = document.querySelector("#constructor");
constructor.style.backgroundColor = "#A07B71 ";
const constructor1 = document.querySelector("#constructor1");
const div1 = document.createElement("div");
const h1 = document.createElement("h1");
h1.id = "titulo1";
h1.innerText = "Bienvenidos";
h1.style.fontFamily = "'Pacifico'";
h1.style.color = "#ffffff";
h1.style.fontSize = "70px";
h1.style.display = "flex";
h1.style.justifyContent = "center";
h1.style.marginTop = "80px";

div1.appendChild(h1);
constructor1.appendChild(div1);

const h2 = document.createElement("h2");
h2.id = "subtitulo";
h2.innerText = "Simulador interactivo de cotización de divisas";
h2.style.color = "#ffffff";
h2.style.fontFamily = "'Pacifico'";
h2.style.fontSize = "35px";
h2.style.display = "flex";
h2.style.justifyContent = "center";

div1.appendChild(h2);

const p1 = document.createElement("p");
p1.innerText = "Seleccionar divisa a convertir:";
p1.style.color = "#ffffff";
p1.style.fontFamily = "'Pacifico'";
p1.style.fontSize = "25px";
p1.style.display = "flex";
p1.style.justifyContent = "center";
p1.style.marginTop = "50px";

div1.appendChild(p1);

const divInputDolar = document.createElement("div");
const inputDolar = document.createElement("input");
inputDolar.type = "radio";
inputDolar.name = "divisaelegida";
inputDolar.id = "dolarid";
const labelDolar = document.createElement("label");
labelDolar.innerText = "Dólar";
labelDolar.style.color = "#ffffff";
labelDolar.style.fontSize = "25px";
labelDolar.style.marginLeft = "15px";
labelDolar.style.marginRight = "70px";
labelDolar.style.fontFamily = "'Pacifico'";

const divInputEuro = document.createElement("div");
const inputEuro = document.createElement("input");
inputEuro.type = "radio";
inputEuro.name = "divisaelegida";
inputEuro.id = "euroid";
const labelEuro = document.createElement("label");
labelEuro.innerText = "Euro";
labelEuro.style.color = "#ffffff";
labelEuro.style.fontSize = "25px";
labelEuro.style.marginLeft = "15px";
labelEuro.style.marginRight = "70px";
labelEuro.style.fontFamily = "'Pacifico'";

const constructor2 = document.querySelector("#constructor2");
const formInput = document.createElement("form");
constructor2.appendChild(formInput);
formInput.appendChild(divInputDolar);
formInput.appendChild(divInputEuro);
divInputDolar.appendChild(inputDolar);
divInputDolar.appendChild(labelDolar);
divInputEuro.appendChild(inputEuro);
divInputEuro.appendChild(labelEuro);

formInput.style.display = "flex";
formInput.style.justifyContent = "center";
formInput.style.padding = "10px";

const divP2 = document.createElement("div");
const p2 = document.createElement("p");
p2.innerText = "Ingresar el valor en pesos a convertir ($) sin puntos. ";
p2.style.color = "#ffffff";
p2.style.fontFamily = "'Pacifico'";
p2.style.fontSize = "25px";
p2.style.marginLeft = "30px";
p2.style.display = "flex";
p2.style.justifyContent = "center";
p2.style.margin = "50px";

constructor2.appendChild(divP2);
divP2.appendChild(p2);

let inputValorEnPesos = document.createElement("input");
inputValorEnPesos.type = "number";
inputValorEnPesos.id = "valorenpesosid";
inputValorEnPesos.style.fontFamily = "'Pacifico'";
inputValorEnPesos.style.fontSize = "25px";
inputValorEnPesos.style.backgroundColor = "#ffffff";
inputValorEnPesos.style.border = "none";
inputValorEnPesos.style.borderRadius = "10px";
inputValorEnPesos.style.height = "50px";
inputValorEnPesos.style.width = "500px";
inputValorEnPesos.style.textAlign = "center";

const divInputPesos = document.createElement("div");
constructor2.appendChild(divInputPesos);
divInputPesos.appendChild(inputValorEnPesos);
divInputPesos.style.display = "flex";
divInputPesos.style.justifyContent = "center";

class divisa {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const dolar = new divisa("dolares");
const euro = new divisa("euros");

const URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";

// "API-KEY": "5311109685-d0e7492961-sambh1"

const USD_JSON = "usd.json";
const EUR_JSON = "eur.json";

const getChanges = async () => {
  try {
    const responseDolar = await fetch(URL + USD_JSON);
    const dataDolar = await responseDolar.json();
    dolar.precio = dataDolar.usd.ars.toFixed(2);

    const responseEuro = await fetch(URL + EUR_JSON);
    const dataEuro = await responseEuro.json();
    euro.precio = dataEuro.eur.ars.toFixed(2);
  } catch (e) {
    console.log(e);
  }
};

getChanges();

let historial = [];

function conversiondivisa(pesosArgentinos, valordivisa, divisa) {
  let span = document.createElement("span");
  span.innerText =
    "\n $" +
    inputValorEnPesos.value +
    " equivalen a " +
    (pesosArgentinos / valordivisa).toFixed(2) +
    " " +
    divisa;
  span.style.fontFamily = "'Pacifico'";
  span.style.fontSize = "25px";
  span.style.color = "#ffffff";
  span.style.display = "flex";
  span.style.justifyContent = "center";
  constructor2.appendChild(span);

  const operacionAGuardar = {
    pesos: inputValorEnPesos.value,
    resultado: (pesosArgentinos / valordivisa).toFixed(2),
    divisa: divisa,
  };

  historial.push(operacionAGuardar);

  span.addEventListener("input", (event) => {
    historial = event.target.value;
  });

  const jsonHistorial = JSON.stringify(historial);
  localStorage.setItem("Conversion", jsonHistorial);
  const historialRecuperado = JSON.parse(localStorage.getItem("Conversion"));
}

const divBotones = document.createElement("div");
const divBoton = document.createElement("div");
divBotones.style.display = "flex";
divBotones.style.justifyContent = "center";
const botonConvertir = document.createElement("input");
botonConvertir.type = "button";
botonConvertir.value = "Convertir";
botonConvertir.id = "botonid";
botonConvertir.style.backgroundColor = "#ffffff";
botonConvertir.style.width = "150px";
botonConvertir.style.height = "40px";
botonConvertir.style.border = "none";
botonConvertir.style.borderRadius = "10px";
botonConvertir.style.color = "#A07B71 ";
botonConvertir.style.fontFamily = "'Pacifico'";
botonConvertir.style.fontSize = "20px";
botonConvertir.style.marginTop = "40px";

constructor2.appendChild(divBotones);
divBotones.appendChild(divBoton);
divBoton.appendChild(botonConvertir);

botonConvertir.addEventListener("click", () => {
  if (document.getElementById("dolarid").checked) {
    conversiondivisa(inputValorEnPesos.value, dolar.precio, dolar.nombre);
  } else if (document.getElementById("euroid").checked) {
    conversiondivisa(inputValorEnPesos.value, euro.precio, euro.nombre);
  }
});

Toastify({
  text: "Cotizaciones del día Dólar $852 Euro $926",
  duration: 10000,
  className: "alert",
  style: {
    background: "#3b3131",
  },
}).showToast();

const divBoton2 = document.createElement("div");
const botonResetear = document.createElement("input");
botonResetear.type = "button";
botonResetear.value = "Resetear";
botonResetear.id = "botonid";
botonResetear.style.backgroundColor = "#ffffff";
botonResetear.style.width = "150px";
botonResetear.style.height = "40px";
botonResetear.style.border = "none";
botonResetear.style.borderRadius = "10px";
botonResetear.style.color = "#A07B71";
botonResetear.style.fontFamily = "'Pacifico'";
botonResetear.style.fontSize = "20px";
botonResetear.style.marginTop = "40px";

divBotones.appendChild(divBoton2);
divBoton2.appendChild(botonResetear);

botonResetear.addEventListener("click", () => {
  Swal.fire({
    title:
      "Esto eliminará permanentemente las conversiones, acción que no se puede deshacer",
    showCancelButton: true,
    confirmButtonText: "Resetear",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Reseteado!", "", "success");
      localStorage.clear(historial);

      const historialSpan = constructor2.querySelectorAll("span");
      historialSpan.forEach((span) => {
        span.remove();
      });

      inputValorEnPesos.value = "";
    }
  });
});
