let input=document.querySelector("input");
let buttons=document.querySelectorAll('button');
let string="";
arr=Array.from(buttons);
arr.forEach(action);
function action(element){
element.addEventListener('click',calculate);
}
function calculate(e){
    if(e.target.innerHTML== 'AC'){
       string="";
    input.value=string;
    }
    else if(e.target.innerHTML=='DEL'){
        string=string.substring(0,string.length-1);
        input.value=string;
    }
    else if(e.target.innerHTML== '='){
        string=eval(string);
        input.value=string;
    }
    else {
        string+=e.target.innerHTML;
        input.value=string;
    }

}