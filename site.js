let list = document.querySelectorAll('.nav li');

function ativarLink(){
    list.forEach((item) =>
    item.classList.remove('hovered'));
    this.classList.add('hovered');
}

list.forEach((item) =>
item.addEventListener('mouseover', ativarLink));

let toggle = document.querySelector('.toggle');
let nav = document.querySelector('.nav');
let main = document.querySelector('.main');
let quadro = document.querySelector('.quadro');
let containers = document.querySelector('.containersBi');
let result = document.querySelector('.result');
let labelsR1 = document.querySelector('.labelsR1');
let labelsR2 = document.querySelector('.labelsR2');
let labelsR3 = document.querySelector('.labelsR3');
let labelsR4 = document.querySelector('.labelsR4');

toggle.onclick = function() {
    nav.classList.toggle('active')
    main.classList.toggle('active')
    quadro.classList.toggle('active')
    containers.classList.toggle('active')
    result.classList.toggle('active')
    labelsR1.classList.toggle('active')
    labelsR2.classList.toggle('active')
    labelsR3.classList.toggle('active')
    labelsR4.classList.toggle('active')
}

function home() {
    quadro.setAttribute('style', 'display: none')
}

function notas() {
    quadro.setAttribute('style', 'display: block')
    carregarMemoria1 ()
    carregarMemoria2 ()
    carregarMemoria3 ()
    carregarMemoria4 ()
}

function finceiro() {
    quadro.setAttribute('style', 'display: none')

}

function local() {
    quadro.setAttribute('style', 'display: none')

}

/* 1 bimestre*/ 
let nota1 = document.querySelector('#nota1')
let labelNota1 = document.querySelector('#lnota1')
let validNota1 = false

let nota2 = document.querySelector('#nota2')
let labelNota2 = document.querySelector('#lnota2')
let validNota2 = false

let nota3 = document.querySelector('#nota3')
let labelNota3 = document.querySelector('#lnota3')
let validNota3 = false

let nota4 = document.querySelector('#nota4')
let labelNota4 = document.querySelector('#lnota4')
let validNota4 = false

nota1.addEventListener('keyup', () => {
    if(nota1.value.length > 4) {
       labelNota1.setAttribute('style', 'color:red')
       validNota1 = false
    }
    else {
       labelNota1.setAttribute('style', 'color:black')
       validNota1 = true
    }
})

nota2.addEventListener('keyup', () => {
    if(nota2.value.length > 4) {
       labelNota2.setAttribute('style', 'color:red')
       validNota2 = false
    }
    else {
       labelNota2.setAttribute('style', 'color:black')
       validNota2 = true
    }
})

nota3.addEventListener('keyup', () => {
    if(nota3.value.length > 4) {
       labelNota3.setAttribute('style', 'color:red')
       validNota3 = false
    }
    else {
       labelNota3.setAttribute('style', 'color:black')
       validNota3 = true
    }
})

nota4.addEventListener('keyup', () => {
    if(nota4.value.length > 4) {
       labelNota4.setAttribute('style', 'color:red')
       validNota4 = false
    }
    else {
       labelNota4.setAttribute('style', 'color:black')
       validNota4 = true
    }
})

/* 2 bimestre*/ 
let nota1c2 = document.querySelector('#nota1c2')
let labelNota1c2 = document.querySelector('#lnota1c2')
let validNota1c2 = false

let nota2c2 = document.querySelector('#nota2c2')
let labelNota2c2 = document.querySelector('#lnota2c2')
let validNota2c2 = false

let nota3c2 = document.querySelector('#nota3c2')
let labelNota3c2 = document.querySelector('#lnota3c2')
let validNota3c2 = false

let nota4c2 = document.querySelector('#nota4c2')
let labelNota4c2 = document.querySelector('#lnota4c2')
let validNota4c2 = false

nota1c2.addEventListener('keyup', () => {
    if(nota1c2.value.length > 4) {
       labelNota1c2.setAttribute('style', 'color:red')
       validNota1c2 = false
    }
    else {
       labelNota1c2.setAttribute('style', 'color:black')
       validNota1c2 = true
    }
})

nota2c2.addEventListener('keyup', () => {
    if(nota2c2.value.length > 4) {
       labelNota2c2.setAttribute('style', 'color:red')
       validNota2c2 = false
    }
    else {
       labelNota2c2.setAttribute('style', 'color:black')
       validNota2c2 = true
    }
})

nota3c2.addEventListener('keyup', () => {
    if(nota3c2.value.length > 4) {
       labelNota3c2.setAttribute('style', 'color:red')
       validNota3c2 = false
    }
    else {
       labelNota3c2.setAttribute('style', 'color:black')
       validNota3c2 = true
    }
})

nota4c2.addEventListener('keyup', () => {
    if(nota4c2.value.length > 4) {
       labelNota4c2.setAttribute('style', 'color:red')
       validNota4c2 = false
    }
    else {
       labelNota4c2.setAttribute('style', 'color:black')
       validNota4c2 = true
    }
})


/* 3 bimestre*/ 
let nota1c3 = document.querySelector('#nota1c3')
let labelNota1c3 = document.querySelector('#lnota1c3')
let validNota1c3 = false

let nota2c3 = document.querySelector('#nota2c3')
let labelNota2c3 = document.querySelector('#lnota2c3')
let validNota2c3 = false

let nota3c3 = document.querySelector('#nota3c3')
let labelNota3c3 = document.querySelector('#lnota3c3')
let validNota3c3 = false

let nota4c3 = document.querySelector('#nota4c3')
let labelNota4c3 = document.querySelector('#lnota4c3')
let validNota4c3 = false

nota1c3.addEventListener('keyup', () => {
    if(nota1c3.value.length > 4) {
       labelNota1c3.setAttribute('style', 'color:red')
       validNota1c3 = false
    }
    else {
       labelNota1c3.setAttribute('style', 'color:black')
       validNota1c3 = true
    }
})

nota2c3.addEventListener('keyup', () => {
    if(nota2c3.value.length > 4) {
       labelNota2c3.setAttribute('style', 'color:red')
       validNota2c3 = false
    }
    else {
       labelNota2c3.setAttribute('style', 'color:black')
       validNota2c3 = true
    }
})

nota3c3.addEventListener('keyup', () => {
    if(nota3c3.value.length > 4) {
       labelNota3c3.setAttribute('style', 'color:red')
       validNota3c3 = false
    }
    else {
       labelNota3c3.setAttribute('style', 'color:black')
       validNota3c3 = true
    }
})

nota4c3.addEventListener('keyup', () => {
    if(nota4c3.value.length > 4) {
       labelNota4c3.setAttribute('style', 'color:red')
       validNota4c3 = false
    }
    else {
       labelNota4c3.setAttribute('style', 'color:black')
       validNota4c3 = true
    }
})

/* 4 bimestre*/ 
let nota1c4 = document.querySelector('#nota1c4')
let labelNota1c4 = document.querySelector('#lnota1c4')
let validNota1c4 = false

let nota2c4 = document.querySelector('#nota2c4')
let labelNota2c4 = document.querySelector('#lnota2c4')
let validNota2c4 = false

let nota3c4 = document.querySelector('#nota3c4')
let labelNota3c4 = document.querySelector('#lnota3c4')
let validNota3c4 = false

let nota4c4 = document.querySelector('#nota4c4')
let labelNota4c4 = document.querySelector('#lnota4c4')
let validNota4c4 = false


nota1c4.addEventListener('keyup', () => {
    if(nota1c4.value.length > 4) {
       labelNota1c4.setAttribute('style', 'color:red')
       validNota1c4 = false
    }
    else {
       labelNota1c4.setAttribute('style', 'color:black')
       validNota1c4 = true
    }
})

nota2c4.addEventListener('keyup', () => {
    if(nota2c4.value.length > 4) {
       labelNota2c4.setAttribute('style', 'color:red')
       validNota2c4 = false
    }
    else {
       labelNota2c4.setAttribute('style', 'color:black')
       validNota2c4 = true
    }
})

nota3c4.addEventListener('keyup', () => {
    if(nota3c4.value.length > 4) {
       labelNota3c4.setAttribute('style', 'color:red')
       validNota3c4 = false
    }
    else {
       labelNota3c4.setAttribute('style', 'color:black')
       validNota3c4 = true
    }
})

nota4c4.addEventListener('keyup', () => {
    if(nota4c4.value.length > 4) {
       labelNota4c4.setAttribute('style', 'color:red')
       validNota4c4 = false
    }
    else {
       labelNota4c4.setAttribute('style', 'color:black')
       validNota4c4 = true
    }
})

/*cadatro das notas*/ 

/*primeiro bimestre */

function cadastroNota1() {
   if(validNota1 &&  validNota2 && validNota3 && validNota4) {
        let listaNota1 = {
                nota1Cad: parseFloat(nota1.value),
                nota2Cad: parseFloat(nota2.value),
                nota3Cad: parseFloat(nota3.value),
                nota4Cad: parseFloat(nota4.value)
        }
        localStorage.removeItem('listaNota1')
       
     localStorage.setItem('listaNota1', JSON.stringify(listaNota1))
   } 
   pegarNotas1()
   media1()
}


function pegarNotas1 () {
    let listaNota1 = JSON.parse(localStorage.getItem('listaNota1'))
    let prova1r1 = document.getElementById('prova1r1')
    let prova2r1 = document.getElementById('prova2r1')
    let prova3r1 = document.getElementById('prova3r1')
    let prova4r1 = document.getElementById('prova4r1')
    if(listaNota1) {
        prova1r1.setAttribute('value', listaNota1.nota1Cad)
        prova2r1.setAttribute('value', listaNota1.nota2Cad)
        prova3r1.setAttribute('value', listaNota1.nota3Cad)
        prova4r1.setAttribute('value', listaNota1.nota4Cad)
    }
}
 

function media1 () {
    let listaNota1 = JSON.parse(localStorage.getItem('listaNota1'))
    let media1 = document.getElementById('media1')
    if(listaNota1) {
       media1.setAttribute('value', (listaNota1.nota1Cad + listaNota1.nota2Cad + listaNota1.nota3Cad + listaNota1.nota4Cad )/4) 
    }
}

function carregarMemoria1 () {
      pegarNotas1()
      media1()
}

document.addEventListener('load', carregarMemoria1());



/*segundo bimestre */


function cadastroNota2() {
    if(validNota1c2 && validNota2c2 && validNota3c2 && validNota4c2) {
         let listaNota2 = {
                 nota1Cad: parseFloat(nota1c2.value),
                 nota2Cad: parseFloat(nota2c2.value),
                 nota3Cad: parseFloat(nota3c2.value),
                 nota4Cad: parseFloat(nota4c2.value)
         }
         localStorage.removeItem('listaNota2')
      localStorage.setItem('listaNota2', JSON.stringify(listaNota2))
    } 
    pegarNotas2()
    media2()
 }
 
 
 function pegarNotas2 () {
     let listaNota2 = JSON.parse(localStorage.getItem('listaNota2'))
     let prova1r2 = document.getElementById('prova1r2')
     let prova2r2 = document.getElementById('prova2r2')
     let prova3r2 = document.getElementById('prova3r2')
     let prova4r2 = document.getElementById('prova4r2')
     if(listaNota2) {
         prova1r2.setAttribute('value', listaNota2.nota1Cad)
         prova2r2.setAttribute('value', listaNota2.nota2Cad)
         prova3r2.setAttribute('value', listaNota2.nota3Cad)
         prova4r2.setAttribute('value', listaNota2.nota4Cad)
     }
 }
  
 
 function media2 () {
     let listaNota2 = JSON.parse(localStorage.getItem('listaNota2'))
     let media2 = document.getElementById('media2')
     if(listaNota2) {
        media2.setAttribute('value', (listaNota2.nota1Cad + listaNota2.nota2Cad + listaNota2.nota3Cad + listaNota2.nota4Cad )/4) 
     }
 }
 
 function carregarMemoria2 () {
       pegarNotas2()
       media2()
 }
 
 document.addEventListener('load', carregarMemoria2());


 /*terceiro bimestre */



 function cadastroNota3() {
    if(validNota1c3 && validNota2c3 && validNota3c3 && validNota4c3) {
         let listaNota3 = {
                 nota1Cad: parseFloat(nota1c3.value),
                 nota2Cad: parseFloat(nota2c3.value),
                 nota3Cad: parseFloat(nota3c3.value),
                 nota4Cad: parseFloat(nota4c3.value)
         }
         localStorage.removeItem('listaNota3')
      localStorage.setItem('listaNota3', JSON.stringify(listaNota3))
    } 
    pegarNotas3()
    media3()
 }
 
 
 function pegarNotas3 () {
     let listaNota3 = JSON.parse(localStorage.getItem('listaNota3'))
     let prova1r3 = document.getElementById('prova1r3')
     let prova2r3 = document.getElementById('prova2r3')
     let prova3r3 = document.getElementById('prova3r3')
     let prova4r3 = document.getElementById('prova4r3')
     if(listaNota3) {
         prova1r3.setAttribute('value', listaNota3.nota1Cad)
         prova2r3.setAttribute('value', listaNota3.nota2Cad)
         prova3r3.setAttribute('value', listaNota3.nota3Cad)
         prova4r3.setAttribute('value', listaNota3.nota4Cad)
     }
 }
  
 
 function media3 () {
     let listaNota3 = JSON.parse(localStorage.getItem('listaNota3'))
     let media3 = document.getElementById('media3')
     if(listaNota3) {
        media3.setAttribute('value', (listaNota3.nota1Cad + listaNota3.nota2Cad + listaNota3.nota3Cad + listaNota3.nota4Cad )/4) 
     }
 }
 
 function carregarMemoria3 () {
       pegarNotas3()
       media3()
 }
 
 document.addEventListener('load', carregarMemoria3());


 /*quarto bimestre */


 function cadastroNota4() {
    if(validNota1c4 && validNota2c4 && validNota3c4 && validNota4c4) {
         let listaNota4 = {
                 nota1Cad: parseFloat(nota1c4.value),
                 nota2Cad: parseFloat(nota2c4.value),
                 nota3Cad: parseFloat(nota3c4.value),
                 nota4Cad: parseFloat(nota4c4.value)
         }
         localStorage.removeItem('listaNota4')
      localStorage.setItem('listaNota4', JSON.stringify(listaNota4))
    } 
    pegarNotas4()
    media4()
 }
 

 function pegarNotas4 () {
     let listaNota4 = JSON.parse(localStorage.getItem('listaNota4'))
     let prova1r4 = document.getElementById('prova1r4')
     let prova2r4 = document.getElementById('prova2r4')
     let prova3r4 = document.getElementById('prova3r4')
     let prova4r4 = document.getElementById('prova4r4')
     if(listaNota4) {
         prova1r4.setAttribute('value', listaNota4.nota1Cad)
         prova2r4.setAttribute('value', listaNota4.nota2Cad)
         prova3r4.setAttribute('value', listaNota4.nota3Cad)
         prova4r4.setAttribute('value', listaNota4.nota4Cad)
     }
 }
  
 
 function media4 () {
     let listaNota4 = JSON.parse(localStorage.getItem('listaNota4'))
     let media4 = document.getElementById('media4')
     if(listaNota4) {
        media4.setAttribute('value', (listaNota4.nota1Cad + listaNota4.nota2Cad + listaNota4.nota3Cad + listaNota4.nota4Cad )/4) 
     }
 }
 
 function carregarMemoria4 () {
       pegarNotas4()
       media4()
 }
 
 document.addEventListener('load', carregarMemoria4());



