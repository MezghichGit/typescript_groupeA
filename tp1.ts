console.log("Hello Typescript");

function affichage()
{
    for(var i=0; i<10;i++)
    {
        console.log("i="+i);
    }

    console.log("Final i="+i);
}
//affichage();

let names:string[]=["Ali","Ahmed","Amine"];

for(var i=0; i<3; i++)
{
    console.log(names[i]);
}

let message:any;
message ="java";
let msg:string ="typescript";

console.log(msg.toUpperCase());
console.log((<string>message).toUpperCase());
///// La fonction arrow
// version fonction anonyme
/*
let info = function(firstname:string,lastname:string){
    console.log("Vous êtes : " +firstname+" "+lastname);
}*/

/*
// version arrow function
let info = (firstname,lastname) =>console.log("Vous êtes Mr : " +firstname+" "+lastname);

info("Mohamed Amine","Mezghich");*/

import { CompteBancaire, Etudiant} from "./entities";  // entities est un module typescript (tout fichier.ts)

function info(student : Etudiant)
{
    console.log(student.nom+" "+student.age+" "+student.adresse);
}

info({
    "nom":"Houssem",
    "age":22,
    "adresse":"ariana"
});




let cb:CompteBancaire;
cb = new CompteBancaire(1, 1000);
cb.infoCompte();