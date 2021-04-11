const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];

  // Imprimir el array de objetos en formato tabular
  function printInventors(inventors){
      console.log(`${'Nombre'.padEnd(12,' ')}${'Apellido'.padEnd(12,' ')}Año`);
      console.log('------------------------------- ');
      inventors.forEach(inventor => console.log(`${inventor.first.padEnd(12,' ')}${inventor.last.padEnd(12,' ')}${inventor.year}`));      
  }
  //printInventors(inventors);

  // Ejercicio
  // Filtrar los inventores nacidos antes del 1800
  printInventors(inventors.filter(inventor => inventor.year < 1800));

  // Ejercicio
  // Convertir el apellido a Mayusculas e imprimirlo
  printInventors(
      inventors.map(
          inventor => (
              {
                  first: inventor.first, 
                  last: inventor.last.toUpperCase(), 
                  year: inventor.year
              }
            )
        )
  );

  // Ejercicio buscar el inventor Kepler y retornar ese objeto
  console.log(inventors.findIndex(inventor => inventor.last === 'Kepler'));

  // Ejercicio dentro de inventores hay alguno que nacio en 1858
  console.log(inventors.some(inventor => inventor.year === 1858));
  // every

  // Ordenar los inventores por año
  printInventors(inventors.sort((iventora, inventorb) => inventorb.year - iventora.year  ));


  
