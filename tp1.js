console.log("Hello Typescript");
function affichage() {
    for (var i = 0; i < 10; i++) {
        console.log("i=" + i);
    }
    console.log("Final i=" + i);
}
//affichage();
var names = ["Ali", "Ahmed", "Amine"];
for (var i = 0; i < 3; i++) {
    console.log(names[i]);
}
var message;
message = "java";
var msg = "typescript";
console.log(msg.toUpperCase());
console.log(message.toUpperCase());
function info(student) {
    console.log(student.nom + " " + student.age + " " + student.adresse);
}
info({
    "nom": "Houssem",
    "age": 22,
    "adresse": "ariana"
});
var CompteBancaire = /** @class */ (function () {
    //private id:number;
    //private solde:number;
    function CompteBancaire(id, solde) {
        this.id = id;
        this.solde = solde;
        console.log("Constructor");
        //this.id = id;
        //this.solde = solde;
    }
    CompteBancaire.prototype.infoCompte = function () {
        console.log("ID : " + this.id + " Solde : " + this.solde);
    };
    return CompteBancaire;
}());
var cb;
cb = new CompteBancaire(1, 1000);
cb.infoCompte();
