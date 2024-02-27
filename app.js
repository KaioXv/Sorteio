async function sortear (){
    const totalResultados = Number(document.querySelector('#totalResultadosInput').value)


    const menorValor = Number(document.querySelector('#menorValorInput').value)
   


    const maiorValor = Number(document.querySelector('#maiorValorInput').value)

    for(let j = 0; j < 20; j++){

    


    const elementoHTMLResultValues = document.querySelector('.results-values')
    elementoHTMLResultValues.innerHTML=''


    for(let i =0; i < totalResultados; i++){ 


    const resultado = Math.floor(Math.random() * (maiorValor - menorValor)) + menorValor

    const elementoHTMLDoResultado = document.createElement('div')
    elementoHTMLDoResultado.classList.add('result-value')
    elementoHTMLDoResultado.innerText = resultado

    
    
    elementoHTMLResultValues.append(elementoHTMLDoResultado)
    }

    await wait(20)
 }
   
   
}

function wait(tempo){
    return  new Promise((resolve,) => {
        setTimeout(()=> resolve(), tempo)
    })
}