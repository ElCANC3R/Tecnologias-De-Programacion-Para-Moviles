  
  const inputArray = process.argv.slice(2); // Obtener argumentos desde la posición 2
  const output = generarCombinaciones(inputArray);
  for(let i = 0; i<output.length; i++){
    console.log(output[i]);
  }

  function generarCombinaciones(arr) {
    let combinaciones = [[]];
  
    arr.forEach(item => {
      const todasCombinaciones = [...combinaciones];
  
      todasCombinaciones.forEach(combinacion => {
        combinaciones.push([...combinacion, item]);
      });
    });
  
    return combinaciones;
  }
  