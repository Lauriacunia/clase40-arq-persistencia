export default class PersonaDTO {
  constructor({ nombre, apellido, dni }) {
    // aca defino todo lo que va a tener mi objeto response
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.nombreCompleto = `${nombre} ${apellido}`;
  }
}

export function activarDTO(param) {
  if (Array.isArray(param)) {
    return param.map(
      (item) => new PersonaDTO(item.id, item.nombre, item.apellido, item.dni)
    );
  } else if (param) {
    return new PersonaDTO(param.id, param.nombre, param.apellido, param.dni);
  }
}
