"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, apellidos, edad, dni, cumpleaños, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleaños = cumpleaños;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos = telefonos;
        this.notas = notas;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getApellidos() {
        return this.apellidos;
    }
    setApellidos(apellidos) {
        this.apellidos = apellidos;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    getDni() {
        return this.dni;
    }
    setDni(dni) {
        this.dni = dni;
    }
    getCumpleaños() {
        return this.cumpleaños;
    }
    setCumpleaños(cumpleaños) {
        this.cumpleaños = cumpleaños;
    }
    getColorFavorito() {
        return this.colorFavorito;
    }
    setColorFavoriot(colorFavorito) {
        this.colorFavorito = colorFavorito;
    }
    getSexo() {
        return this.sexo;
    }
    setSexo(sexo) {
        this.sexo = sexo;
    }
    getDirecciones() {
        return this.direcciones;
    }
    setDirecciones(direcciones) {
        this.direcciones;
    }
    getMails() {
        return this.mails;
    }
    setMails(mails) {
        this.mails;
    }
    getTelefonos() {
        return this.telefonos;
    }
    setTelefonos(telefonos) {
        this.telefonos;
    }
    getNotas() {
        return this.notas;
    }
    setNotas(notas) {
        this.notas;
    }
    mostrarDatos() {
        console.log('Nombre: ', this.getNombre(), 'Apellidos: ', this.getApellidos(), 'Edad: ', this.getEdad(), 'DNI: ', this.getEdad(), 'Cumpleaños: ', this.getCumpleaños(), 'Color Favorito: ', this.getColorFavorito(), 'Sexo: ', this.getSexo(), 'Direcciones: ', this.getDirecciones(), 'Mail: ', this.getMails(), 'Teléfono: ', this.getTelefonos(), 'Notas: ', this.getNotas());
    }
    busquedaDni(dni) {
        return dni === this.dni;
    }
}
exports.Persona = Persona;
