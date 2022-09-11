/** En esta clase vive toda la logica de acceso a la DB separada de la logica de negocios (servicio) */
export default class PersonasDaoMem {
  constructor() {
    this.personas = [];
  }
  create(persona) {
    this.personas.push(persona);
    return persona;
  }
  getAll() {
    return this.personas;
  }
  getById(id) {
    return this.personas.find((persona) => persona.id === id);
  }
  updateById(id, persona) {
    const index = this.personas.findIndex((persona) => persona.id === id);
    this.personas[index] = persona;
    return this.personas[index];
  }
  deleteAll() {
    this.personas = [];
  }
  deleteById(id) {
    this.personas = this.personas.filter((persona) => persona.id !== id);
    return this.personas;
  }
}
