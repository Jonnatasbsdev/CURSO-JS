var agora=new Date()
var diaSem=agora.getDay()
var hora=agora.getHours()
var min=agora.getMinutes()

switch(diaSem){
    case 0: console.log('Domingo, às',hora,'h', min,'min')
        break
    case 1: console.log('Segunda-Feira, às',hora,'h',min,'min')
        break
    case 2: console.log('Terça-Feira, às',hora,'h', min,'min')
        break
    case 3: console.log('Quarta-Feira, às',hora,'h', min,'min')
        break
    case 4: console.log('Quinta-Feira, às',hora,'h', min,'min')
        break
    case 5: console.log('Sexta-Feira, às',hora,'h', min,'min')
        break
    case 6: console.log('Sábado, às',hora,'h', min,'min')
        break
    default: console('Dia inválido')
}