let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");
let operacion = document.getElementById("operacion");
let btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", () => {
  let calculo: number = Number(operacion.value);
  let suma: number = Number(valor1.value) + Number(valor2.value);
  let resta: number = Number(valor1.value) - Number(valor2.value);

  let guion: string = "-";
  for (let i = 0; i <= 40; i++) {
    guion = guion + "-";
  }
 switch (calculo) {

    case 1:
      console.log(guion);
      console.log("  El resultado de la operación es: " + suma);
      console.log(guion);
      break;

    case 2:
      console.log(guion);
      console.log(" El resultado de la operación es: " + resta);
      console.log(guion);
      break;

    default:
      console.log(guion);
      console.log("        *  El programa finalizó  *");
      console.log(guion);
 }