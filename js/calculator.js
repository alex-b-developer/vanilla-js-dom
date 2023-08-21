let operacion = prompt ("Que operación desea: 1-Suma 2-Resta 3-Multi 4-Divi");
let operando1;
let operando2;
let result;

if (operacion >=1 && operacion <=4){
	operando1 = parseInt(prompt("Primer Número"));
	operando2 = parseInt(prompt("Segundo Número"));
}

function suma(n1, n2){
	return n1 + n2
}

function resta(n1, n2){
	return n1 - n2
}

function multi(n1, n2){
	return n1 * n2
}

function divi(n1, n2){
	return n1 / n2
}


switch(operacion){
	case "1":
		resultado = suma(operando1, operando2);
		document.write("El resultado de la suma es " + resultado);
		break;

	case "2":
		resultado = resta(operando1, operando2);
		document.write("El resultado de la resta es " + resultado);		
		break;

	case "3":
		resultado = multi(operando1, operando2);
		document.write("El resultado de la multiplicación es " + resultado);
		break;

	case "4":
		resultado = divi(operando1, operando2);
		document.write("El resultado de la división es " + resultado);
		break;

	default:
		alert("ha ingresado una opción no válida")
		break;
}