class Products{
    constructor(code, name, price){
        this.code = code;
        this.name = name;
        this.price = price;
    }

    get showCode(){return this.code;}
    get showName(){return this.name;}
    get showPrice(){return this.price;}
    set modifyCode(newCode){this.code = newCode;}
    set modifyName(newName){this.name = newName;}
    set modifyPrice(newPrice){this.price = newPrice;}

    printProperties(){
        document.write(`<h4>Características del producto</h4>
        Código: ${this.code}
        <br>Nombre: ${this.name}
        <br>Precio: $${this.price}`);
    }
}

let taza = new Products(5412, 'Taza ecológica', 100);
let cuchara = new Products(5410, 'Cuchara de bambú', 69);
let bioBolsa = new Products(4578, 'Bolsa vegetal', 5);
let productsArray = [taza, cuchara, bioBolsa];

productsArray.forEach(product => {
    product.printProperties();
});