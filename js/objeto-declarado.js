let usuario ={
	nombre_completo: ['Alexander', 'Betancur', 'Builes'],
	carrera: 'Programador Web',
	edad: 35,
	ciudad: 'Medellin',
	habilidades: ['html', 'css', 'javascript', 'figma', 'wordpress', 'react', 'nodejs'],
	telefonos: {
		telefono1: '3148734025',
		telefono2: '6042168700'
	},

	saludar: function(){
		alert ('Hola, ' + this.nombre_completo[0] + '.');
	}
}

usuario.saludar();

usuario.edad = 27;

console.log(usuario.edad);


console.log(usuario.telefonos.telefono1);
console.log(usuario['telefonos']['telefono1'])

delete usuario.ciudad;
console.log(usuario);