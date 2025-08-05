function symbolCheck(string1, symbol, string2) {
  let replacedString = "";
  for (let i = 0; i < string1.length; i++) {
    let curSymbol = string1[i];
    if (curSymbol === "_") {
      replacedString += symbol;
    } else {
      replacedString += curSymbol;
    }
  }
  if (replacedString === string2) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}
// symbolCheck("Str_ng", "o", "String");
symbolCheck("Str_ng", "i", "String");
