/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
  let marca;
  let precio;
  let peso;
  let tipo;
  let pesoTotal = 0;
  let marcaCaraLiq;
  let marcaLivSolid;
  let continuar;
  let flag1 = 0;
  let flag2 = 0;
  let precioLiqCaro;
  let pesoSoldLiv;
  do{

    marca = prompt("Ingrese su marca");
		while(!isNaN(marca))
		{
			marca = prompt("Error. Ingrese una Marca válida");
		}
		
		tipo = prompt("Ingrese el tipo: 's' (solido) o 'l' (liquido)");
		while(!(tipo == "s" || tipo == "l"))
		{
			tipo = prompt("Error. Ingrese un tipo válido: 's' o 'l'");
		}
		
		precio = parseInt(prompt("Ingrese el Precio"));
		while(isNaN(precio))
		{
			precio = parseInt(prompt("Error. Ingrese un precio válido"));
		}
		
		peso = parseInt(prompt("Ingrese el peso del producto"));
		while(isNaN(peso))
		{
			peso = parseInt(prompt("Error. Ingrese una peso válido"));
		}
		
    pesoTotal += peso;

    if( (flag1 == 0 || precioLiqCaro < precio) && tipo == "l")
    {
      precioLiqCaro = precio;
      marcaCaraLiq = marca;
      flag1 = 1;
    }
    else if( (flag2 == 0 || pesoSoldLiv > peso) && tipo == "s")
   { 
      marcaLivSolid = marca;
      pesoSoldLiv = peso;
      flag2 = 1;
   }
    
    continuar = prompt("Desea continuar?");
  }while(continuar == "s");
		
  

  console.log("A) el peso total de la compra es: "+pesoTotal);
  console.log("B) la marca del mas caro de los liquidos es: "+marcaCaraLiq);
  console.log("C) la marca del mas liviano de los solidos es: "+marcaLivSolid);








}
