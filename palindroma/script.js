// **Palidroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const parolaInserita = prompt('inserisci una parola')

function invertiParola (parola) {
  const arrayParola = parola.split('');
  const arrayGirato = arrayParola.reverse();
  const parolaGirata = arrayGirato.join('');
  return parolaGirata;
}

const parolaInvertita = invertiParola(parolaInserita);

const h1 = document.querySelector('h1');

h1.innerHTML = (parolaInserita === parolaInvertita) ? 'amordnilap è alorap al' : 'la parola non è palindroma'
