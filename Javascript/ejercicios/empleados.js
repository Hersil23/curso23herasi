/*
Crea una un sistema que modele diferentes tipos de empleados utilizando herencia y
POO. Crea una clase base llamada Empleado con propiedades como nombre, apellido, y salario.
Luego, crea clases derivadas como Gerente, Desarrollador y Diseñador que
hereden de Empleado y añadan propiedades o métodos específicos para cada tipo de empleado.

Cada clase derivada debe tener un metodo de presentación distinto que muestre
información específica del tipo de empleado. Por ejemplo, el Gerente podría mostrar
información sobre su equipo, el Desarrollador podría mostrar sus lenguajes de programación
y el diseñador podria mostrar tecnologias de diseño que utiliza. 

El diseñador debe de tener como propiedades: nombre, apellido, salario y tecnologias.
El desarrollador debe de tener como propiedades: nombre, apellido, salario y lenguajes.
El gerente debe de tener como propiedades: nombre, apellido, salario y equipo de trabajo.

Además, cada trabajador debe de tener un metodo que calcule el monto por horas extras trabajadas más su salario
teniendo en cuenta que para un diseñador la hora extra es de $100, para un desarrollador es de $150
y para un gerente es de $200. Y el salario de un diseñador es de $1000, el salario de un desarrollador es de $1500
y el salario de un gerente es de $2000.
*/

class Empleado {
  constructor (nombre, apellido, salario){
    this.nombre = nombre;
    this.apellido = apellido;
    this.salario = salario;
  }
saludar (Clase){
  return `Hola yo soy ${this.nombre}, ${this.apellido}`;
  }
} 
CalcularSalarioConHorasExtras(horasExtras){
  let pagoDeHorasExtras = 200;
  return this.salario + (horasExtras * pagoDeHorasExtras)
}







class Gerente extends Empleado{
  constructor( nombre, apellido, salario, equipo){
    super (nombre, apellido, salario);
    this.equipo = equipo;
  }
}
Presentacion_Gerente (Clase){
  return `Hola yo soy ${this.nombre}, ${this.apellido}, soy el Gerente`;
}

  class Desarrollador extends Empleado{
  constructor( nombre, apellido, salario, Lenguaje){
    super (nombre, apellido, salario );
    this.Lenguaje = Lenguaje;
  }
}
Presentacion_Desarrollador (clase){
  return `Hola yo soy ${this.nombre,}, ${this.apellido}, y programo en el Lenguaje ${this.Lenguaje}`
}

class Disenador extends Empleado{
  constructor( nombre, apellido, salario, tecnologia){
    super (nombre, apellido, salario);
    this.tecnologia = tecnologia;
  }
}

Presentacion_Disenador (clase){
  return `Hola yo soy ${this.nombre,}, ${this.apellido}, ytrabajo con la tecnologia ${this.tecnologia}`
}