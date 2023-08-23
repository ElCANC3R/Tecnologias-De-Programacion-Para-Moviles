//console.log("Hola mundo");

  
  const inputString = "MateriaProgramaciónMóvil";
  const palabraConvertida = convertirPalabra(inputString);
  console.log("Numero de palabras: "+palabraConvertida.cantidad+"\nPalabra:"+palabraConvertida.snakeCase);

  function convertirPalabra(input) {
    const cantidad = input.split(/(?=[A-Z])/);
    const snakeCase = cantidad.join('_');
    
    return {
      cantidad: cantidad.length,
      snakeCase: snakeCase
    };
  }
  