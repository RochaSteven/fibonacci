<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Serie Fibonacci</title>
</head>
<body>
    <h1>Serie Fibonacci</h1>
</body>
<script>
var anterior=1;
var ultimo=2;
var maximo=100;
var sumaPares=2;

var resultado={
        suma:0,
        numerosPares:[2],
        numerosImpares:[1],
        todos:[]
    }

var esPar = function(numero){
    if (numero%2===0){
        return true;
    }else {
        return false;
    }
}


var fibo = function(anterior,ultimo) {
    if (anterior+ultimo>maximo){
        
        return sumaPares;
       
        
        
    }else{
        nuevo=anterior+ultimo;
       if (esPar(nuevo)){
        resultado.suma+=nuevo+1;
        resultado.numerosPares.push(nuevo);
           
         
        
       }
        resultado.numerosImpares.push(nuevo);
        resultado.todos=resultado.numerosImpares.concat(resultado.numerosPares);
        return fibo(ultimo,nuevo);
        
    }
    
   
}

console.log(fibo(anterior,ultimo));

</script>
</html>
