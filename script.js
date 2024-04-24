const calcularPresionArterial = (edad, sistolica, diastolica) => {
  if (edad < 17 || edad > 99) {
    return "Edad fuera del rango válido (17-99 años).";
  }

  if (sistolica < 89 && diastolica < 59) {
    return "Tensión baja.";
  } else if (sistolica < 120 && diastolica < 80) {
    return "Tensión normal.";
  } else if (sistolica >= 121 && sistolica <= 129 && diastolica < 80) {
    return "Tensión elevada.";
  } else if (sistolica >= 130 && sistolica <= 139 && diastolica >= 80 && diastolica <= 89) {
    return "Hipertensión nivel 1.";
  } else if (sistolica >= 140 && sistolica <= 180 && diastolica >= 90 && diastolica <= 120) {
    return "Hipertensión nivel 2.";
  } else if (sistolica > 180 && diastolica > 120) {
    return "Crisis de hipertensión. ¡Acuda a un médico de inmediato!";
  }
  return "Ninguno de los casos fue cierto."
};

const formulario = document.getElementById("calculadora");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const edad = parseInt(document.getElementById("edad").value);
  const sistolica = parseInt(document.getElementById("sistolica").value);
  const diastolica = parseInt(document.getElementById("diastolica").value);

  const resultadoPresion = calcularPresionArterial(edad, sistolica, diastolica);

  resultado.textContent = resultadoPresion;
});
