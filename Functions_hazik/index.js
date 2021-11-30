function isEven (n) {
  if (n % 2 === 0) {
    return true;
  }
  return false;
}

function isOdd (n) {
  if (n % 2 != 0) {
    return true;
  }
  return false;
} 

function letterGrade (score, total){
  let result = (score / total) * 100;
  if (result <= 59) {
    return "F";
  }else if (result > 59 && result <= 69) {
    return "D";
  }else if (result > 69 && result <= 79) {
    return "C";
  }else if (result > 79 && result <= 89) {
    return "B";
  }
  return "A";
}

function combine (word1, word2) {
  return word1.concat(" ", word2);
}

function createCircle (radius) {
  let area = Math.PI * (radius * radius);
  let circumference = (2 * radius) * Math.PI;
  let result = {
    area: Math.round(area),
    circumference: Math.round(circumference),
  };
  return result;
}



/* ---------------------------------------------------------------------------------- */

function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase();
  }
  return str.join(' ');
}
console.log(titleCase("I'm a little tea pot"));