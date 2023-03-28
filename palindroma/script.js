// **Palidroma**
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const parolaInserita = 'daaaak' //prompt('inserisci una parola')

function invertiParola (parola) {
  const arrayParola = parola.split('');
  const arrayGirato = arrayParola.reverse();
  const parolaGirata = arrayGirato.join('');
  return parolaGirata;
}

console.log(invertiParola('franco'));
