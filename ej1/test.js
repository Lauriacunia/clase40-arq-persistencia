import PersonasDaoMem from "./PersonasDaoMem.js";
// este archivo equivale a un servicio con la logica de negocio.
// separa la logica de negocio de la logica de acceso a datos (PersonasDaoMem).
const personasDao = new PersonasDaoMem();

const personas = [
  { nombre: "Juan", apellido: "Perez", dni: 12345678 },
  {
    nombre: "Ana",

    apellido: "Gomez",
    dni: 87654321,
  },
];

personas.forEach((persona) => personasDao.create(persona));
console.log("Todas las personas: ", personasDao.getAll());
