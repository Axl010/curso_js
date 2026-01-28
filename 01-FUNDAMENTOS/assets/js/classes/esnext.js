class Rectangulo {
    #area = 0;

    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }
}

const rectangulo = new Rectangulo(10, 15);
// rectangulo.#area = 100; No permite ya que el parametro es privado
console.log(rectangulo);