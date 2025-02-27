/*Descrizione
Attraverso l'apposita API di Boolean generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)*/

//axios

const listEl = document.getElementById('email-list')

for (i = 0; i < 10; i++) {
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(response => {
            console.log(response.data.response);
            listEl.innerHTML += `
             <li>${response.data.response}</li> `
        })
        .catch(error => console.error(error));
}



