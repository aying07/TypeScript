
 

import { Persona } from './persona';
import { Dirección } from './direccion';
import { Teléfono } from './telefono';
import { Mail } from './mail';

//Cliente  1
const persona1 = new Persona('Natalia', 'Vidal Pernas', 41, '34876549R', '19/11', 'negro', 'mujer', [new Dirección('Avenida Rosalía de Castro', 8, 1, 'D', 27654, 'Santiago', 'A Coruña')], [new Mail('Personal', 'natacha@gmail.com')], [new Teléfono('Móvil', 636996512,)], 'Ninguna.')


//Cliente 2
const persona2 = new Persona('María de las Virtudes', 'Arias Barral', 57, '67551295X', '12/12', 'verde', 'mujer', [new Dirección('Calle del Olvido', 15, 3, 'A', 15007, 'Madrid', 'Madrid')], [new Mail('Personal', 'virtu12@gmail.com')], [new Teléfono('Fijo', 982596774)], 'Llamar solo por las mañanas.')


//Cliente 3
const persona3 = new Persona('Félix', 'Casanova Sandoval', 31, '67335986V', '07/03', 'amarillo chillón', 'hombre', [new Dirección('Calle Algodonales', 68, 1, 'B', 158003, 'Madrid', 'Madrid')], [new Mail('Corporativo', 'felixcasanova@gmail.com')], [new Teléfono('Móvil', 699572355)], 'Prefiere WhatsApp')


// Datos Personales
console.log('Datos Personales: ');
console.log(persona1);
console.log(persona2);
console.log(persona3);


const arrayPersonas: Persona[] = [persona1, persona2, persona3];
const dniBusqueda: string = '34876549R';

const personaModificada: Persona = arrayPersonas.find(persona => persona.dni === dniBusqueda) as Persona;

const direccionModificada = new Dirección(
    "Callejuela Verde", 4, 1, 'A', 28230, 'Monforte de Lemos', 'Lugo'
)
const mailModificado = new Mail(
    "Personal", "natacha123@gmail.com"
)
const telefonoModificado = new Teléfono(
    "Móvil", 677852309
)
personaModificada.mostrarDatos();
personaModificada.mostrarDatos();
personaModificada.mostrarDatos()

console.log('Datos Personales modificados: ');
console.log(persona1);
console.log(persona2);
console.log(persona3);
