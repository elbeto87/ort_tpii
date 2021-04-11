/**
 * Dado un string s que contiene solo los caracteres 
 * '(', ')','{','}', '[' y ']' determinar si el string enviado es valido
 * 
 * Un string es valido si
 * 1.- Todas las aperturas ( { y [ tienen su cierre.
 * 2.- Todos los cierres estan en el orden correcto 
 * 
 */

/**
 * 
 * @param {string} s 
 * @return {boolean}
 */
const isValid = function(s){
<<<<<<< Updated upstream
    let aux = -1;
    
    while(s.length != 0){
        // Almaceno la longitud antes de hacer reemplazos
        aux = s.length;

        s = s.replace('()','');
        s = s.replace('[]','');
        s = s.replace('{}','');
        if(aux === s.length) return false;
    }
    if(s.length === 0) return true;
=======
    let i = 0
    let counting = 0
    let openings = ['(', '[', '{']
    let flag = true;
    while ((i < s.length) && (flag == true)) {
        if (openings.includes(s[i])) {
            counting++;
        } else {
            pair = s[i-1] + s[i]
            if (pair == '()' || pair == '[]' || pair == '{}') {
                counting--;
            } else {
                flag = false;
            }
            pair = "";
        }
        i++;
    }
    if (counting == 0) {
        return true
    } else {
        return false
    }
>>>>>>> Stashed changes
};

// TESTS
console.log(isValid('()') === true);
console.log(isValid('()[]{}')=== true);
console.log(isValid('(}') === false);
console.log(isValid('([)]') === false);
console.log(isValid('{()}') === true);
console.log(isValid('{}{}(){[()]}') === true);