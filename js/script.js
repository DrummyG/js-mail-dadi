// esercizo mail
// creo lista e prompt
 let userMail = prompt('digita la tua mail');
 const access = ['io@gmail.com', 'test', 'prova@hotmail.it', 'caso', 'robe'];
// creo le condizioni
if (access.includes(userMail)) {
    alert('benvenuto nel server segreto');
} else {
    alert('mail non vailda');
}

// esercizio dadi
// generatore randomico
const myValue = Math.floor(Math.random() * 6) + 1;
const pcValue = Math.floor(Math.random() * 6) + 1;
// caselle di testo
document.getElementById('io').innerHTML +=`<p>${myValue}</p>`;
document.getElementById('pc').innerHTML +=`<p>${pcValue}</p>`;
const middle = document.getElementById('middle');
// lavoro sui risultati
if(myValue > pcValue) {
    middle.innerHTML = '>';
} else if(myValue < pcValue){
    middle.innerHTML = '<';
} else{
    middle.innerHTML = '=';
}