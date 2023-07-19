class myDate {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    getDay() {
        return this.day;
    }
    getMonth() {
        return this.month;
    }
    getYear() {
        return this.year;
    }
    setDay(day) {
        this.day = day;
    }
    setMonth(month) {
        this.month = month;
    }
    setYear(year) {
        this.year = year;
    }
}

let date = new myDate(2, 2, 2007);
date.setDay(10);
date.setMonth(9);
date.setYear(2012);


let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();
console.log(date);