class Polygon {
    constructor(sideLengths = []) {
        this.sideLengths = sideLengths
    }
    get getCount() {
        return this.sideLengths.length
    }

    get perimeter() {
        return this.sideLengths.reduce(function (a, b) {
            return a + b
        }, 0)
    }

}

class Triangle extends Polygon {

    get isValid() {
        if (!Array.isArray(this.sideLengths)) return;
        if (this.sideLengths.count !== 3) return;
        let side1 = this.sideLengths[0]
        let side2 = this.sideLengths[1]
        let side3 = this.sideLengths[2]
        return ((side1 === side2) && (side1 === side3) && (side2 === side3))
    }

}

class Square extends Polygon {


    get isValid() {
        if (this.sideLengths[0] == this.sideLengths[1] && this.sideLengths[0] == this.sideLengths[2] && this.sideLengths[0] == this.sideLengths[2]){
            return true
        } else {
            return false
        }
    }

    get area() {
        return this.sideLengths[0] * this.sideLengths[1]
    }
}