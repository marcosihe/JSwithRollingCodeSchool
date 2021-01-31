class Rectangle {
    constructor(height = 0, width = 0){
        this.height = height;
        this.width = width;
    }
    get showHeight(){
        return this.height;
    }
    get showWidth(){
        return this.width;
    }
    set modifyHeight(newHeight){
        this.height = newHeight;
    }
    set modifyWidth(newWidth){
        this.width = newWidth;
    }
    perimeter(){
        return (2*this.height)+(2*this.width);
    }
    area(){
        return this.height*this.width;
    }
}

let rectangulo1 = new Rectangle(5,4);
document.write('<br> Ancho: ' + rectangulo1.showWidth);
document.write('<br> Altura: ' + rectangulo1.showHeight);
document.write(`<br> Área: ${rectangulo1.area()}`);
document.write(`<br> Perímetro: ${rectangulo1.perimeter()}`);

rectangulo1.modifyHeight = 8;
document.write(`<br> Área: ${rectangulo1.area()}`);
document.write(`<br> Perímetro: ${rectangulo1.perimeter()}`);
document.write('<br> Ancho: ' + rectangulo1.showWidth);
document.write('<br> Altura: ' + rectangulo1.showHeight);