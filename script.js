// Figura Geométrica
class FiguraGeometrica{
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }
}

class Retangulo extends FiguraGeometrica{
    constructor(base, altura) {
        super(base, altura)
    }
    calcularArea() {
        return(this.altura * this.base)
    }
}

class Circulo{
    constructor(raio){
        this.raio = raio;
    }
    calcularArea() {
        return(3.14 * (this.raio**2))
    }
}

let retangulo1 = new Retangulo(10, 20);
console.log(retangulo1.calcularArea());

let circulo1 = new Circulo(5);
console.log(circulo1.calcularArea());

// Animal

class Animal{
    constructor(nome, especie){
        this.nome = nome;
        this.especie = especie;
    }
}

class Cachorro extends Animal{
    constructor(nome, especie){
        super(nome, especie)
    }
    latir(){
        console.log("AuAu")
    }
}

class Gato extends Animal{
    constructor(nome, especie){
        super(nome, especie)
    }
    miar(){
        console.log("Miau")
    }
}

let cachorro1 = new Cachorro("Totó", "Cachorro");
cachorro1.latir();

let gato1 = new Gato("Miaú", "Gato");
gato1.miar();