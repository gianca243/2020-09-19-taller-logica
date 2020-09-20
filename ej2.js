let temp = prompt('Ingrese una frase');
let espacios=temp.split(" ").length-1;
let caracteres = temp.length-espacios;
let omg=temp.split('')
let reves=''
for(let i = 0; i<omg.length; i++){
    reves=reves+omg[omg.length-i-1]
}
alert("Hay "+espacios+" espacios y "+caracteres+ " caracteres"+" y la frase al reves es: "+reves );