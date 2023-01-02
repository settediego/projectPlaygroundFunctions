// Desafio 1 - Crie a função compareTrue

const compareTrue = (param1, param2) => param1 === true && param2 === true;

// Desafio 2 - Crie a função splitSentence

const splitSentence = (string) => string.split(' ');

// Desafio 3 - Crie a função concatName

const concatName = (param) => `${param[param.length - 1]}, ${param[0]}`;

// Desafio 4 - Crie a função footballPoints

const footballPoints = (wins, ties) => wins * 3 + ties;

// Desafio 5 - Crie a função highestCount

function highestCount(arr1) {
  arr1 = arr1.sort((a, b) => b - a);
  let cont = 1;
  for (index = 0; index <= arr1.length; index += 1) {
    if (arr1[0] === arr1[index + 1]) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

const calcTriangleArea = (base, height) => (base * height) / 2;
const calcRectangleArea = (base, height) => (base * height);
const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo') {
    return `O valor da área do ${form} é de: ${calcTriangleArea(base, height)}`;
  } if (form === 'retângulo') {
    return `O valor da área do ${form} é de: ${calcRectangleArea(base, height)}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
};

// Desafio 7 - Crie a função catAndMouse

const catAndMouse = (mouse, cat1, cat2) => {
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  }
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
};

// Desafio 8 - Crie a função fizzBuzz

function fizzBuzz(param) {
  const arrayFizz = [];
  for (let index = 0; index < param.length; index += 1) {
    if (param[index] % 3 === 0 && param[index] % 5 === 0) {
      arrayFizz.push('fizzBuzz');
    } else if (param[index] % 3 === 0) {
      arrayFizz.push('fizz');
    } else if (param[index] % 5 === 0) {
      arrayFizz.push('buzz');
    } else {
      arrayFizz.push('bug!');
    }
  }
  return arrayFizz;
}

// Desafio 9 - Crie a função encode e a função decode

const encode = (string) => {
  let result = string.replaceAll('a', '1');
  result = result.replaceAll('e', '2');
  result = result.replaceAll('i', '3');
  result = result.replaceAll('o', '4');
  result = result.replaceAll('u', '5');
  return result;
};
const decode = (string) => {
  let result = string.replaceAll('1', 'a');
  result = result.replaceAll('2', 'e');
  result = result.replaceAll('3', 'i');
  result = result.replaceAll('4', 'o');
  result = result.replaceAll('5', 'u');
  return result;
};

// Desafio 10 - Crie a função techList

const techList = (array, string) => {
  let result = [];
  let sorted = array.sort();
  if (sorted.length === 0) {
    return result;
  }
  for (let index = 0; index < sorted.length; index += 1) {
    result.push({ tech: sorted[index], name: string });
  }
  return result;
};

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => { }),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => { }),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => { }),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => { }),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => { }),
  concatName: typeof concatName === 'function' ? concatName : (() => { }),
  decode: typeof decode === 'function' ? decode : (() => { }),
  encode: typeof encode === 'function' ? encode : (() => { }),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => { }),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => { }),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => { }),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => { }),
  techList: typeof techList === 'function' ? techList : (() => { }),
};
