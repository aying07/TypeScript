"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teléfono = void 0;
class Teléfono {
    constructor(tipo, numero) {
        this.tipo = tipo;
        this.numero = numero;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    getNumero() {
        return this.numero;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    mostrarDatos() {
        console.log('Tipo: ', this.getTipo(), 'Dirección: ', this.getNumero());
    }
}
exports.Teléfono = Teléfono;

