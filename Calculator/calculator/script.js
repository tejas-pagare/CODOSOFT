 let history=[];



let calculation='';

 function calculations(number) {
  
  calculation += number;
  console.log(calculation);
  render(calculation);
 
}

 function updateHistory(){
  let result=eval(calculation);
  history.push({calculation,result});
  console.log(history);
}

 function render(calculation){
  document.querySelector('.result').innerHTML = calculation;

}