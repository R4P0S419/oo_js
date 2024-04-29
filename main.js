function Filmes(nome, diretor, orcamento) {
    this.nome = nome;
    this.diretor = diretor;
    this.orçamento = orcamento;
}

function Jogos(nome, diretor, orcamento, maisDeUm) {
    Filmes.call(this, nome, diretor, orcamento);
    this.maisDeUm = maisDeUm;
}

function Series(nome, diretor, orcamento, numeroEps) {
    Filmes.call(this, nome, diretor, orcamento);
    this.numeroEps = numeroEps;
}

const senhorDosAnes = new Filmes("Senhor Dos Anes","Peter Jackson", 93000000)
const darkSouls = new Jogos("Dark Souls","Hidetaka Miyazaki", 8000000, true)
const bigbang = new Series("Big Bang: A Teoria","Chuck Lorre e Bill Prady", 25000000, 256)


console.log(senhorDosAnes);
console.log(darkSouls);
console.log(bigbang);