class Temperature{
    constructor(value,){
        this.doC = value;
    }
    docLuxuriousdof(){
        this.doF = this.doC * 1.8 + 32;
    }
    docLuxuriousdokenvin(){
        this.doKenvin = this.doC + 273.15;
    }
}

let doC = new Temperature(25);
doC.docLuxuriousdof();
doC.docLuxuriousdokenvin()
console.log(doC);