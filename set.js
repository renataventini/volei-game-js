const Ponto = require('./ponto');

module.exports = class Set {
    constructor(pontosCasa, pontosAdversario){
        this.pontosCasa = pontosCasa;
        this.pontosAdversario = pontosAdversario;
        this.pontos = [];
    }

    getMaiorPontuador(){

    }

    getListaPontosPorTipo(){

    }

    registrarPonto(ponto){
        this.pontos.push(ponto);
    }
}