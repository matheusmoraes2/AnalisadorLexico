const prompt = require('prompt-sync')()

const cadeia = prompt('Digite um cadeia de caracteres: ')

if(cadeia.length > 9){
    console.log('Contem mais de 10 tokens atômicos.')
    return
}

if(/[jwkyçhqJWKYÇHQ]/.test(cadeia)){
    console.log('Caideia inválida, tem uma letra inválida.')
    return
}
if(/\W|_/.test(cadeia)){
    console.log('Caideia inválida, caractere especial.')
    return
}
if((/^[aeiou]+/gi.test(cadeia))){
    console.log('Caideia inválida, começou sem consoante.')
    return
}
if(cadeia.search(/[0-9]/) >= 0){
    const a = cadeia.search(/[0-9]$/)
    if(cadeia.search(/[0-9]$/) < 0){
        console.log('Não é aceito algarismos númericos no meio da cadeia.')
        return
    }
}
if(/^[zxZX]+/.test(cadeia)){
    console.log('Palavras iniciadas com Z ou X são palavras reservadas do sistema.')
    return
}

const consoantes = ['b','c','d','f','g','l','m','n','p','r','s','t','v','x','z']
const vogais = ['a','e','i','o','u']
const cadeiraArray = cadeia.split('')

for (let i = 0; i < cadeiraArray.length; i++) {
    if(!cadeiraArray[i+1]){
        break
    }

    if(!isNaN(cadeiraArray[i+1])){
        break
    }
    if(consoantes.find(element => element == cadeiraArray[i].toLowerCase())){
        if(!vogais.find(element => element == cadeiraArray[i+1].toLowerCase())){
            console.log('sequencia inválida, consoante n é seguida de vogal.')
            return
        }
    }
    if(vogais.find(element => element == cadeiraArray[i].toLowerCase())){
        if(!consoantes.find(element => element == cadeiraArray[i+1].toLowerCase())){
            console.log('sequencia inválida, volgar não é seguida de consoante.')
            return
        }
    }
}

console.log('Cadeia válida!')