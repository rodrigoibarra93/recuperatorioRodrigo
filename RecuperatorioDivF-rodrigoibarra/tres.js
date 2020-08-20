/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let nombre;
	let lugar;
	let temporada;
	let pasajeros;
	let contBariloche = 0;
	let contSalta = 0;
	let contCataratas = 0;
	let lugarMasElegido;
	let mayorPasajeros;
	let flag = 0;
	let nombreMayorPasajeros;
	let acumPasajeros = 0;
	let contViajes = 0;
	let promPasajeros = 0;

	do{
		nombre = prompt("Ingrese su nombre");
		while(!isNaN(nombre))
		{
			nombre = prompt("Error. Ingrese un nombre válido");
		}

		lugar = prompt("Ingrese el destino: 'Bariloche', 'Cataratas' o 'Salta'.");
		while(lugar != "bariloche" && lugar != "cataratas" && lugar != "salta")
		{
			lugar = prompt("Error. Ingrese un destino válido: 'Bariloche', 'Cataratas' o 'Salta'.");
		}

		temporada = prompt("Ingrese la temporada: 'Verano', 'Otoño', 'Invierno' o 'Primavera'.");
		while(temporada != "verano" && temporada != "otoño" && temporada != "invierno" && temporada != "primavera")
		{
			temporada = prompt("Error. Ingrese una temporada válida: 'Verano', 'Otoño', 'Invierno' o 'Primavera'.");
		}

		pasajeros = parseInt(prompt("Ingrese la cantidad de pasajeros"));
		while(isNaN(pasajeros))
		{
			pasajeros = parseInt(prompt("Error. Ingrese una cantidad válida de pasajeros valida."));
		}
		
		
		
		if(lugar == "bariloche")
		{
			contBariloche++;
		}
		else if(lugar == "cataratas")
		{
			contCataratas++;
		}
		else
		{
			contSalta++;
		}
		
		
		if (flag == 0 || mayorPasajeros < pasajeros)
		{
			mayorPasajeros = pasajeros;
			nombreMayorPasajeros = nombre;
			flag = 1;
			
		}
		
		acumPasajeros += pasajeros;
		contViajes++;
		
		if(temporada == "invierno")
		{
			promPasajeros = acumPasajeros / contViajes;
		}
			
			
		continuar = prompt("desea continuar?");
	}while(continuar == "s");
			
	
	if(contBariloche > contCataratas && contBariloche > contSalta)
	{
		lugarMasElegido = "Bariloche";
	}
	else if(contCataratas > contBariloche && contCataratas > contSalta)
	{
		lugarMasElegido = "Cataratas"
	}
	else
	{
		lugarMasElegido = "Salta";
	}

	console.log("A) el lugar mas elegido es: "+lugarMasElegido);
	console.log("B) el nombre del titular que lleva mas pasajeros: "+nombreMayorPasajeros);
	console.log("C) el promedio de personas por viaje, que viajan en invierno es: "+promPasajeros);
		

}