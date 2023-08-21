
let user = "Alexadmin"
let pass = "123456789"


let getUser = prompt("Introduce Usuario");
let getPass = prompt("Introduce Contraseña");

if (getUser == user && getPass == pass )
{
	alert("El ciclo va a comenzar");
	for(i=10;i>=-19;i--){

		if (i==0){
			continue;
		}
		document.write("El valor de i es de " + i + "<br>");
		if (i ==-10){
			break;
		}
	}
	document.write("El bucle ha finalizadoo");
}else{
	alert("Usuario o contraseña errada, recarga la pagina e intenta de nuevo.");
}
