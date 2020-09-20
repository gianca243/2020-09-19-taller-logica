let nombres=[];
let salida = false;
let salida2 = false
let cont = 0;
while(salida == false){
  let temp = prompt('Ingrese un nombre')
  if (temp == "") {
    salida = true;
  } 
  else {
    if(nombres.length<1){
      nombres[0]=[temp]
    }
    else{
      for(let i=0;i<nombres.length;i++){
        if (nombres[i]==temp) {
          alert("no se deben repetir nombres")
          salida2=true;
        }
      }
      if (salida2 == false) {
        nombres.push(temp)
      }
      else{
        salida2=false
      }
    }
  }
}
let orden = nombres.sort();
console.log(orden)
alert(orden)