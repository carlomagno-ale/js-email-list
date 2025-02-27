/*Descrizione
Attraverso l'apposita API di Boolean generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)*/

//axios

let emailList = [];


axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(response => {
        console.log(response.data.response);
        emailList.push(response.data.response);
        console.log(emailList)

    })
    .catch(error => console.error(error));

  





/*

for (i = 0; i < 10; i++) {
    emailList.push(response.data.response);
}

console.log(emailList)*/




