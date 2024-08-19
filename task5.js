//Question 1

class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
    
    static getPG(movieArray) {
        return movieArray.filter(movie => movie.rating === "PG");
    }
    
  }

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log(casinoRoyale);


//Question 2

class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    setColor(color) {
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    getColor() {
        return this.color;
    }

    toString() {
        return 'Circle[radius={this.radius},color={this.color}]';
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }

const myCircle = new Circle(2.5, "blue");
console.log(myCircle.toString());
console.log("Area:", myCircle.getArea());
console.log("Circumference:", myCircle.getCircumference());
}

//Question 3
 class person {
    constructor(Name, age, native ,contact ){
        this.Name= Name;
        this.age= age;
        this.native= native;
        this.contact= contact;

    }
 }
const detail= new person("asseem", 21, "salem", "960xxxxxx");
console.log(detail);

//Question 4
class uber{
    constructor(km, price_per_km){
        this.km = km;
        this.price_per_km = price_per_km;
    }

    getprice(){
        return this.km*this.price_per_km;
    }

}
const uber_price= new uber(19,10);
console.log(uber_price);