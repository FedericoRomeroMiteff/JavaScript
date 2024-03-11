function saludo() {
  return prompt("Ingrese nombre y apellido");
}
// CONVERSIÓN PESOS A DÓLARES
{
  let nombre = saludo();
  alert("Bienvenido " + nombre);

  let valorEnPesos = parseInt(
    prompt("Ingresar el valor en pesos a convertir ($) sin puntos.")
  );
  let valorEnDolares = conversionPesoDolar;

  function conversionPesoDolar() {
    return (valorEnDolares = valorEnPesos / 1175);
  }

  conversionPesoDolar();

  alert(
    "El valor en pesos es: $" +
      valorEnPesos +
      "." +
      " El valor en dólares es: $" +
      valorEnDolares +
      "."
  );
}
// CONVERSIÓN DÓLARES A PESOS
{
  let valorEnDolares = parseInt(
    prompt("Ingresar el valor en dólares a convertir (USD) sin puntos.")
  );
  let valorEnPesos = conversionDolarPeso;

  function conversionDolarPeso() {
    return (valorEnPesos = valorEnDolares * 1150);
  }

  conversionDolarPeso();

  alert(
    " El valor en dólares es: $" +
      valorEnDolares +
      "." +
      "El valor en pesos es: $" +
      valorEnPesos +
      "."
  );
}
// CONVERSIÓN PESOS A EUROS
{
  let valorEnPesos = parseInt(
    prompt("Ingresar el valor en pesos a convertir ($) sin puntos.")
  );
  let valorEnEuros = conversionPesoEuro;

  function conversionPesoEuro() {
    return (valorEnEuros = valorEnPesos / 1245);
  }

  conversionPesoEuro();

  alert(
    "El valor en pesos es: $" +
      valorEnPesos +
      "." +
      " El valor en euros es: $" +
      valorEnEuros +
      "."
  );
}
// CONVERSIÓN EUROS A PESOS
{
  let valorEnEuro = parseInt(
    prompt("Ingresar el valor en euros a convertir (EUR) sin puntos.")
  );
  let valorEnPesos = conversionEuroPeso;

  function conversionEuroPeso() {
    return (valorEnPesos = valorEnEuro * 1212);
  }

  conversionEuroPeso();

  alert(
    " El valor en euros es: $" +
      valorEnEuro +
      "." +
      "El valor en pesos es: $" +
      valorEnPesos +
      "."
  );
}
