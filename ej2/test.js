import PersonasDaoFile from "./PersonasDaoFile.js";
// este archivo equivale a un servicio con la logica de negocio.
// separa la logica de negocio de la logica de acceso a datos (PersonasDaoMem).
const ruta = "ej2/personas.json";
const personasDao = new PersonasDaoFile(ruta);

const personas = [
  { nombre: "Juan", apellido: "Perez", dni: 12345678 },
  {
    nombre: "Ana",
    apellido: "Gomez",
    dni: 87654321,
  },
];

const res = personas.forEach((persona) => personasDao.create(persona));
console.log(res);
//console.log("Todas las personas: ", personasDao.getAll());
