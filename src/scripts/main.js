function sortearNumero() {
    const min = 1;
    const max = 100;
    const numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('numeroSorteado').innerText = `Número Sorteado: ${numeroSorteado}`;
  }
  