// let opt = 1;

// while (opt != "esc") {
//   switch (opt) {
//     case "esc":
//       console.log("salir");
//       break;
//     case "1":
//       console.log("1");
//       break;
//     case "2":
//       console.log("2");
//       break;
//     case "3":
//       console.log("3");
//       break;
//     case "4":
//       console.log("4");
//       break;
//     default:
//       console.log("defa");
//       break;
//   }
//   opt = prompt("1 a 4 o esc");
// }

function saludo() {
  return prompt("Ingrese nombre y apellido");
}

let nombre = saludo();
alert("Bienvenido " + nombre);

let sorteo = prompt("Ingrese un numero del 1 al 3 o ESC para terminar");

while (sorteo !== null && sorteo.toUpperCase() !== "ESC") {
  switch (sorteo) {
    case "1":
      console.log(nombre + " Excelente ganaste 1 shampoo 🧴");
      alert(nombre + " Excelente ganaste 1 shampoo 🧴");
      break;
    case "2":
      console.log(nombre + " Buena suerte la próxima vez 😎");
      alert(nombre + " Buena suerte la próxima vez 😎");
      break;
    case "3":
      console.log(
        nombre + " Iajuuu te esperamos para que busques tu pote de nutrición!🧴"
      );
      alert(
        nombre + " Iajuuu te esperamos para que busques tu pote de nutrición!🧴"
      );
      break;
    default:
      console.log("Cargá la opción correcta y probá tu suerte 😜");
      alert(nombre + " Cargá la opción correcta y probá tu suerte 😜");
  }

  sorteo = prompt("Ingrese un numero del 1 al 3 o ESC para terminar");

  console.log("ESC");
  if (sorteo !== null && sorteo.toUpperCase() === "ESC") {
    console.log("Te esperamos en otra oportunidad.");
    alert("Te esperamos en otra oportunidad.");
  }
}
