function saludo() {
  return prompt("Ingrese nombre y apellido");
}

{
  let nombre = saludo();
  alert(
    "Bienvenido al simulador interactivo de cotización de divisas " + nombre
  );
}

let valorEnPesos = prompt(
  "Ingresar el valor en pesos a convertir ($) sin puntos. \nESC para salir."
);

class divisa {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const dolar = new divisa("dolares", 1085);
const euro = new divisa("euros", 1172);
const historial = [];

function conversiondivisa(pesosArgentinos, valordivisa, divisa) {
  alert(
    "$" +
      valorEnPesos +
      " equivalen a " +
      (pesosArgentinos / valordivisa).toFixed(2) +
      " " +
      divisa
  );
  const operacionAGuardar = {
    valorEnPesos: valorEnPesos,
    resultado: (pesosArgentinos / valordivisa).toFixed(2),
    divisa: divisa,
  };

  historial.push(operacionAGuardar);
}

while (
  valorEnPesos.toLowerCase() != "esc" &&
  valorEnPesos.toLowerCase() != "historial"
) {
  let divisaElegida = parseInt(
    prompt(
      "Ingrese divisa en la que quiere hacer la conversión: \n 1 - Dólares \n 2 - Euros "
    )
  );

  switch (divisaElegida) {
    case 1:
      conversiondivisa(valorEnPesos, dolar.precio, dolar.nombre);
      break;

    case 2:
      conversiondivisa(valorEnPesos, euro.precio, euro.nombre);
      break;

    default:
      alert("divisa ingresada incorrecta. Volver a intentar.");
  }

  valorEnPesos = prompt(
    "Ingrese el valor en pesos a convertir ($) sin puntos o escriba HISTORIAL para ver operaciones anteriores.\n ESC para salir."
  );

  if (valorEnPesos.toLowerCase() === "historial") {
    let mensaje = "Ultimas operaciones realizadas: \n";

    historial.forEach((operacion) => {
      mensaje =
        mensaje +
        `El valor de ${operacion.valorEnPesos} pesos argentinos es equivalente a ${operacion.resultado} ${operacion.divisa}.\n`;
    });

    alert(mensaje);
  }
}
