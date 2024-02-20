class Rectangle {
    constructor(width,height){
        this._width=width;
        this._height=height
    }
    getArea(){
        return this._height + this._width
    }
    get width(){
     return this._width
    }
    set height(height){
        this._height = height
    }
}

class Square extends Rectangle{
    constructor(side){
        super(side,side)
    }
    getPerimeter(){
        return this._width*4
    }
}
const total = new Square(12,10)
console.log(total.getPerimeter())

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
