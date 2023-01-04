// Only change code below this line
function urlSlug(title) {
    return title
    .split(" ")
    .filter(subtr => subtr !== "")
    .join("-")
    .toLowerCase();
  
  }
  // Only change code above this line
  console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
  
  /*Split vai mostrar as palavras, o filter vai verificar se 
  o parêmetro é diferente de letras separadas, se for. ele vai juntar as palalavras
  com o traço, e depois todas as letras vão ficar minúsculas */