class Polygon{
  constructor(sides){
    this.sides = sides;
  }

  get getCount(){
    return this.sides.length;
  }

  get perimeter(){
    return this.sides.reduce((partial_sum, a) => partial_sum + a);
  }
}
class Triangle extends Polygon{
  get isValid(){
    let sides = this.sides;
    let a = sides[0], b = sides[1], c = sides[2];
    return a+b > c && a+c > b && b+c > a ? true : false;
  }
}

class Square extends Polygon{
  get isValid(){
    let sides = this.sides;
    let a = sides[0], b = sides[1], c = sides[2], d = sides[3];
    return a == b && b == c && c == d ? true : false;
  }

  get area(){
    let side = this.sides[0];
    return side * side;
  }
}
