// Desafio 11 - Crie a função generatePhoneNumber

const generatePhoneNumber = (array) => {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 9 || array[index] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    let cont = 0;
    for (let index2 = 1; index2 < array.length; index2 += 1) {
      if (array[index] === array[index2]) {
        cont += 1;
        if (cont >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
  } return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
};

// Desafio 12 -  Crie a função triangleCheck

const triangleCheck = (lineA, lineB, lineC) => {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    return true;
  }
  return false;
};

// Desafio 13 - Crie a função hydrate

const hydrate = (string) => {
  let numbers = string.match(/\d+/g);
  if (numbers[0] == 1 && numbers.length == 1) {
    return `${numbers[0]} copo de água`;
  }
  let glasses = 0
  for (let index = 0; index < numbers.length; index += 1) {
    let num = parseInt(numbers[index]);
    glasses += num;
  }
  return `${glasses} copos de água`;
}

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => { }),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => { }),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => { }),
};
