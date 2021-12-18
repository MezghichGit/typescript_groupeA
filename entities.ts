export class CompteBancaire{
    //private id:number;
    //private solde:number;

    public constructor(private id?:number, private solde?:number){
        console.log("Constructor");
        //this.id = id;
        //this.solde = solde;
    }


    public infoCompte()
    {
        console.log("ID : "+this.id +" Solde : "+this.solde);
    }
}

export interface Etudiant{
    nom:string,
    age:number,
    adresse:string
}