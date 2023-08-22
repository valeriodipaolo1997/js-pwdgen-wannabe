/* Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito ed infine scrivi in pagina (non solo in console) il risultato, che va formattato in questo modo: nomecognomecolorepreferito23 
Esempio: fabiopacificiblue23 */

/* 

prompt per 
-nome completo
-colore
-età

"sommare" i log dei prompt e stampare in console e in html

*/

/* prompt nome utente */

const userName = prompt ('inserisci il tuo nome');

/* prompt cognome */

const userSourname = prompt ('inserisci il tuo cognome');

/* prompt colore preferito */

const favouriteColor = prompt ('inserisci il tuo colore preferito');

/* giorno di nascita */

const userBirthDay = prompt ('Il tuo giorno di nascita');

const userPassword = userName + userSourname + favouriteColor + ( Number(userBirthDay) + 23);

const assignedPassword = document.getElementById('info');

//stampare in console

console.log (userPassword);

//stampare in pagina

assignedPassword.innerHTML = userPassword;