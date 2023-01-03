function splitify(str) {
    // Only change code below this line
    return str.split(/\W/);
  
    // Only change code above this line
  }
  
  let strSplit = "Hello World,I-am code";
  
  console.log(splitify(strSplit));
  //[ 'Hello', 'World', 'I', 'am', 'code' ]
  
  /*Usar o /\W/ vai dividir todas as letras */