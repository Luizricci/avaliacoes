let numeros = [-1, -3, 4, 5, 8, 9, 15, 32, 99];
let par = [];
let impar = [];

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] <= 0){
        console.log("não multiplicamos por numero negativos")
    }else{
        if (numeros[i] % 2 == 0) {
            par.push(numeros[i]);
        } else {
            impar.push(numeros[i]);
        }
    }
    }

par.sort((a, b) => a - b);
par.reverse(); // Deixando decrescente

impar.sort((a, b) => a - b);

console.log(par);
console.log(impar);


