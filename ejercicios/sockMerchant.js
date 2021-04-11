/**
 * Dada un conjunto de medias debe encontrar la cantidad de pares por color. 
 * Se proporciona un array el cual contiene el codigo de color de las medias
 * Determinar el numero maximo de pares del mismo color que se puede formar
 *
 */

/**
 * 
 * @param {Array} colorSocks 
 * @return {Number} 
 */
const sockMerchant = function(colorSocks){
<<<<<<< Updated upstream
    let count=0;
      
    // si ordenamos van los pares juntos
      colorSocks.sort();   
      
      // La estrategia es correr el indice      
      for (let i = 0; i < colorSocks.length-1; i++) {
          if(colorSocks[i]==colorSocks[i+1]){
              count++;
              i++;
          }
      }
  
     return count;
=======
    let valorFinal = 0
    colorSocks.sort()
    for (i = 0; i < colorSocks.length; i++) {
        if (colorSocks[i] == colorSocks[i+1]) {
            valorFinal++;
            i++;
        }
    }
    return valorFinal
>>>>>>> Stashed changes
}

// TESTS TDD
console.log(sockMerchant([1,2,1,2,1,3,2]) === 2);
console.log(sockMerchant([10,20,20,10,10,30,50,10,20]) === 3);
