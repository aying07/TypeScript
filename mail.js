"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
class Mail {
    constructor(tipo, direccion) {
        this.tipo = tipo;
        this.direccion = direccion;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    getDireccion() {
        return this.direccion;
    }
    setDireccion(direccion) {
        this.direccion = direccion;
    }
    mostrarDatos() {
        console.log('Tipo: ', this.getTipo(), 'Dirección: ', this.getDireccion());
    }
}
exports.Mail = Mail;
