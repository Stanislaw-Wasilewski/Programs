class Gra{
    nazwa : string = "";
    rokWydania : number | undefined;
    private PEGI : number = 18; 
    protected wydawca : string = ""; 
    protected liczbaGraczy : number = -1;

    setliczbaGraczy(liczbaGraczy:number): void{
        this.liczbaGraczy = liczbaGraczy;
    }
    getliczbaGraczy(): number | undefined{
        return this.liczbaGraczy;
    }
    getPegi(): number {      
        return this.PEGI;
    }
    WypiszDane(): void {
        console.log(`nazwa: ${this.nazwa}, rok wydania: ${this.rokWydania}, PEGI: ${this.PEGI}`);
    }
    
    constructor(nazwa:string,rokWydania:number,PEGI:number){
        this.nazwa = nazwa;
        this.rokWydania = rokWydania;
        this.PEGI = PEGI;
        this.wydawca = "Ubisoft"; 
    }
}

class Strategia extends Gra{
    liczbaFrakcji: number = 2;
    WypiszDane(): void {
        console.log(`nazwa: ${this.nazwa}, rok wydania: ${this.rokWydania}, PEGI: ${this.getPegi()}, liczba frakcji: ${this.liczbaFrakcji}`);
    }
      
    constructor(nazwa:string,rokWydania:number,PEGI:number,liczbaFrakcji:number){
        super(nazwa,rokWydania,PEGI);
        this.liczbaFrakcji = liczbaFrakcji;     
    }
}

class FPP extends Gra{
    private liczbaBroni: number | undefined;

    wypiszliczbeBroni(): void{
        console.log(`liczba broni: ${this.liczbaBroni}`);
    }
    czyDlaDoroslych(): boolean{
        if(this.getPegi() == 18)
            return true;
        else
            return false;
    }
    wypiszliczbeGraczy(): void{
        if(this.liczbaGraczy > 0) 
            console.log(`liczba graczy dla tej gry wynosi: ${this.liczbaGraczy}`);
        else
            console.log("nieprawidłowa liczba graczy");
    }

    constructor(nazwa:string,rokWydania:number,PEGI:number,liczbaBroni:number){
        super(nazwa,rokWydania,PEGI);
        this.liczbaBroni = liczbaBroni;
    }
}

let h7 = new Strategia("gra1", 2015,12,6);
let d = new FPP("gra2", 2016, 18, 10);
d.wypiszliczbeBroni();

if (d.czyDlaDoroslych())
    console.log("gra jest tylko dla dorosłych");

d.setliczbaGraczy(100);
console.log(d.getliczbaGraczy());
d.wypiszliczbeGraczy();