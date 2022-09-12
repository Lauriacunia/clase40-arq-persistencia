import fs from "fs";
import { activarDTO } from "./PersonaDTO.js";
export default class PersonasDaoFile {
  constructor(ruta) {
    this.ruta = ruta;
    this.personas = [];
  }

  #readFile() {
    const data = fs.readFileSync(this.ruta, "utf-8");
    this.personas = JSON.parse(data);
  }
  #createFile = async () => {
    const data = JSON.stringify(this.personas, null, 2);
    await fs.promises.writeFile(this.ruta, data);
  };

  /** En cada return llamo al DTO para que me retorne el objeto de respuesta que definí. */
  async getAll() {
    const info = await this.#readFile();
    return activarDTO(this.personas);
  }
  async create(persona) {
    console.log("persona", persona);
    //console.log(JSON.stringify(persona));
    await this.#readFile();
    this.personas.push(persona);
    await this.#createFile();
    return activarDTO(persona);
  }
  async getById(id) {
    await this.#readFile();
    const personaEncontrada = this.personas.find(
      (persona) => persona.id === id
    );
    return activarDTO(personaEncontrada);
  }
  async updateById(id, persona) {
    await this.#readFile();
    const index = this.personas.findIndex((persona) => persona.id === id);
    this.personas[index] = persona;
    await this.#createFile();
    return activarDTO(this.personas[index]);
  }
  async deleteAll() {
    this.personas = [];
    await this.#createFile();
    return activarDTO(this.personas);
  }
  async deleteById(id) {
    await this.#readFile();
    this.personas = this.personas.filter((persona) => persona.id !== id);
    await this.#createFile();
    return activarDTO(this.personas);
  }
}
