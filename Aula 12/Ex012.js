var agora=new Date()
var hora=agora.getHours()
console.log('agora são exatamente ',hora,' horas')
if (hora<6){
    console.log('Boa madrugada!')
}else if(hora<12){
    console.log('Bom dia!')
}else if(hora<6){
    console.log('Boa tarde!')
}
else{
    console.log('Boa noite!')
}