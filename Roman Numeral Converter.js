const textInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const textOutput = document.getElementById("output");



convertBtn.addEventListener("click", ()=>{
  if(textInput.value === "") {
      textOutput.innerText = "Please enter a valid number";
      return;
  }

  else if(textInput.value < 1) {
      textOutput.innerText = "Please enter a number greater than or equal to 1";
      return;
  }
  /*else if(textInput.value >= 4000){
      textOutput.innerText = "Please enter a number less than or equal to 3999";
      return;
  }*/

  textOutput.innerText = toRoman(textInput.value);
});




function toRoman(num) {
    const lookup = {
        M: 1000, CM: 900, D: 500, CD: 400,
        C: 100, XC: 90, L: 50, XL: 40,
        X: 10, IX: 9, V: 5, IV: 4, I: 1
    };
    let roman = '';
    for (const key in lookup) {
        while (num >= lookup[key]) {
            roman += key;
            num -= lookup[key];
        }
    }
    return roman;
}
