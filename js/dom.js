//nodo del documento, punto de entrada al DOM
console.log(document);
//nodo html
console.log(document.documentElement);
//nodo head
console.log(document.head);
//nodo body
console.log(document.body);

//childNodes me devuelve una coleccion de los elementos
console.log(document.head.childNodes);

for (let i=0; i<document.head.childNodes.length; i++){
	console.log(document.head.childNodes[i]);
}

//Elementos hermanos
console.log(document.head.nextElementSibling);
console.log(document.head.previousElementSibling);

//Elementos padres
console.log(document.body.parentNode);
console.log(document.getElementById('parrafo').parentNode.nodeName);


//-------------------------------------------------//


//DOM- Accede al Documento como un objeto 

document.body.style.background = "rgb(73 73 73)";
let parrafo = document.getElementById('parrafo');
parrafo.style.color = 'white';

let elementosLi = document.getElementsByTagName('li');

console.log(
		elementosLi[0].innerHTML + ', ' +
		elementosLi[1].innerHTML + ', ' +
		elementosLi[1].innerHTML + '.'
);



//-----------------crea elemento y asigna clases------------//


//crea elemento <p> y lo asigna al dom
const parrafo = document.createElement('p');
parrafo.innerHTML = 'Este párrafo está generado con JS.';
document.body.appendChild(parrafo);

//crea elemento <div> y lo asigna al dom
const contenedorDiv = document.createElement('div');
document.body.appendChild(contenedorDiv);
contenedorDiv.id = 'contenedor';

//Agrega clases a elementos
contenedorDiv.className = 'alert alert-danger container bordeDiv';

//textContent es una propiedad para obtener (get) o establecer (set) 
//el contenido de texto de un nodo y sus descendientes.
contenedorDiv.textContent = 'Este div está quedando con mucho "Estilo".';
