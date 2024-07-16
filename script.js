function convert(scale) {
  const temp = parseFloat(document.getElementById('tempInput').value);
  let result = '';

  if (isNaN(temp)) {
      result = 'Por favor, insira um número válido.';
  } else {
      switch (scale) {
          case 'C':
              result = `Temperatura em Fahrenheit: ${cpf(temp).toFixed(2)} °F<br>`;
              result += `Temperatura em Kelvin: ${cpk(temp).toFixed(2)} K`;
              break;
          case 'F':
              result = `Temperatura em Celsius: ${fpc(temp).toFixed(2)} °C<br>`;
              result += `Temperatura em Kelvin: ${fpk(temp).toFixed(2)} K`;
              break;
          case 'K':
              result = `Temperatura em Celsius: ${kpc(temp).toFixed(2)} °C<br>`;
              result += `Temperatura em Fahrenheit: ${kpf(temp).toFixed(2)} °F`;
              break;
          default:
              result = 'Escala inválida.';
      }
  }

  document.getElementById('result').innerHTML = result;
}

function cpf(c) {
  return (c * 9 / 5) + 32;
}
function cpk(c) {
  return c + 273.15;
}
function fpc(f) {
  return (f - 32) * 5 / 9;
}
function fpk(f) {
  return (f - 32) * 5 / 9 + 273.15;
}
function kpc(k) {
  return k - 273.15;
}
function kpf(k) {
  return (k - 273.15) * 9 / 5 + 32;
}

function subscribe() {
  const email = document.getElementById('emailInput').value;
  if (email) {
      alert('Obrigado por se inscrever! Você receberá novidades em breve.');
      // Aqui você pode adicionar código para enviar o email para um servidor
  } else {
      alert('Por favor, insira um e-mail válido.');
  }
}