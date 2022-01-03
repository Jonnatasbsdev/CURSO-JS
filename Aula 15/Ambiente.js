/*let num=[0,12]
num[5]=32
num.push(7)

num.sort()
console.log('Nosso Vetor é: ',num, 'com ',num.length,' posições.')
*/
let num=[56,32,90,53,12]
/*
for (pos=0;pos<=4;pos++){
     console.log('O', pos+1,'° número é: ',num[pos])
}
console.log(num.sort())
console.log('______________________________')
for(let pos in num){//leia-se: para (for) cada posição (pos) em (num)
    console.log(num[pos])
}*/
console.log('_______________________________')
let pos=num.indexOf(70)
if(pos==-1){
    console.log('O valor não foi encontrado')
}else{
    console.log(num[pos])
}

//console.log(num.indexOf(14))