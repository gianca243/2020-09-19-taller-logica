let temp = prompt('Ingrese una frase');
let espacios=temp.split("");
for(let i =0; i<espacios.length;i++){
  if (espacios[i] != " ") {
    espacios[i]=espacios[i]+"-"
  } 
  else {
    espacios[i]="--"
  }
}
temp=espacios.join('');
temp= temp.slice(0,-1);
alert(temp);