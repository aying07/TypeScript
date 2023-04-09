"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const persona_1 = require("./persona");
const direccion_1 = require("./direccion");
const telefono_1 = require("./telefono");
const mail_1 = require("./mail");
//Cliente  1
const persona1 = new persona_1.Persona('Natalia', 'Vidal Pernas', 41, '34876549R', '19/11', 'negro', 'mujer', [new direccion_1.Dirección('Avenida Rosalía de Castro', 8, 1, 'D', 27654, 'Santiago', 'A Coruña')], [new mail_1.Mail('Personal', 'natacha@gmail.com')], [new telefono_1.Teléfono('Móvil', 636996512)], 'Ninguna.');
//Cliente 2
const persona2 = new persona_1.Persona('María de las Virtudes', 'Arias Barral', 57, '67551295X', '12/12', 'verde', 'mujer', [new direccion_1.Dirección('Calle del Olvido', 15, 3, 'A', 15007, 'Madrid', 'Madrid')], [new mail_1.Mail('Personal', 'virtu12@gmail.com')], [new telefono_1.Teléfono('Fijo', 982596774)], 'Llamar solo por las mañanas.');
//Cliente 3
const persona3 = new persona_1.Persona('Félix', 'Casanova Sandoval', 31, '67335986V', '07/03', 'amarillo chillón', 'hombre', [new direccion_1.Dirección('Calle Algodonales', 68, 1, 'B', 158003, 'Madrid', 'Madrid')], [new mail_1.Mail('Corporativo', 'felixcasanova@gmail.com')], [new telefono_1.Teléfono('Móvil', 699572355)], 'Prefiere WhatsApp');
// Datos Personales
console.log('Datos Personales: ');
console.log(persona1);
console.log(persona2);
console.log(persona3);
const arrayPersonas = [persona1, persona2, persona3];
const dniBusqueda = '34876549R';
const personaModificada = arrayPersonas.find(persona => persona.dni === dniBusqueda);
const direccionModificada = new direccion_1.Dirección("Callejuela Verde", 4, 1, 'A', 28230, 'Monforte de Lemos', 'Lugo');
const mailModificado = new mail_1.Mail("Personal", "natacha123@gmail.com");
const telefonoModificado = new telefono_1.Teléfono("Móvil", 677852309);
personaModificada.mostrarDatos();
personaModificada.mostrarDatos();
personaModificada.mostrarDatos();
console.log('Datos Personales modificados: ');
console.log(persona1);
console.log(persona2);
console.log(persona3);
