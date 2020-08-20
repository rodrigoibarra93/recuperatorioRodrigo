/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let temperatura;
	let sexo;
	let edad;
	let contHombres = 0;
	let contMujeres = 0;
	let promedio;
	let tempMax = 0;
	let acumNombre;
	let acumEdad = 0;
	

	for(let i=0;i<5;i++){

		nombre = prompt("Ingrese su nombre");
		while(!isNaN(nombre))
		{
			nombre = prompt("Error. Ingrese un nombre válido");
		}
		
		sexo = prompt("Ingrese su sexo: 'f' o 'm'");
		while(!(sexo == "f" || sexo == "m"))
		{
			sexo = prompt("Error. Ingrese un sexo válido: 'f' o 'm'");
		}
		
		temperatura = parseInt(prompt("Ingrese su temperatura"));
		while(isNaN(temperatura))
		{
			temperatura = parseInt(prompt("Error. Ingrese una temperatura válida"));
		}
		
		
		edad = parseInt(prompt("Ingrese su edad"));
		while(isNaN(edad))
		{
			edad = parseInt(prompt("Error. Ingrese una edad válida"));
		}
		
		acumEdad += edad;
		
		if(sexo == "f")
		{
			contMujeres++;
		}
			
		else
		{
			contHombres++;
		}
	
		if(sexo == "f" && temperatura > tempMax)
		{
			tempMax = temperatura;
			acumNombre = nombre;
		}
	}

	promedio = acumEdad / 5
	
	console.log("A) mujeres en total: '"+contMujeres+"' hombres en total: "+contHombres);
	console.log("B) la edad promedio total es: "+promedio);
	if(contMujeres == 0)
	{
		console.log("C) no se encontraron mujeres")
	}
	else
	{
		console.log("C) la mujer con mas temperatura se llama: "+acumNombre+" y tiene: "+tempMax+" grados")
	}


}	