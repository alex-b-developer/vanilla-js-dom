class Vehiculo{

	constructor(marca, modelo, fecha_matricula, color){

		//Propiedades
		this.marca = marca;
		this.modelo = modelo;
		this.fecha_matricula = fecha_matricula;
		this.color = color;

		//Metodos
		this.acelera = function(){
			console.log('El vehiculo, ' + this.marca +  ' ' + this.modelo + ' Acelera.')
		}
	}

}
//instanciación de la clase vehiculo

let vehiculo1 = new Vehiculo ('KIA SPORTAGE', '2017', '2020-05-03', 'Azul');

vehiculo1.acelera();
