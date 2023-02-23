//Entradas
const animal = document.getElementById('animal')
const minimo = document.getElementById('minAnimal')
const buscador = document.getElementById('animalBuscador')
//Botones
const agregar = document.getElementById('agregar')
const visualizar = document.getElementById('verAnimales')
const cantExpAnimales = document.getElementById('verCantidadAnimales')
const buscar = document.getElementById('buscar')
//Base de datos
const animales = ['vaca','oveja','perro','gato','araña','ave','pez']
var num = animales.length+1

//Funcionalidades
document.getElementById('number').innerHTML=`${num}. `
agregar.addEventListener('click',()=>{
    let name = animal.value.toLowerCase()
    if(num <= 20){
        if(name == ''){
            alert('Error: No ha digitado ningún nombre.')
        }else{
            animales.push(name)
            animal.value = ''
            num++
            document.getElementById('number').innerHTML=`${num}. `
        }
    }else{
        alert('Error: Ya digito los 20 animales.')
    }    
})
visualizar.addEventListener('click',()=>{
    let contenido = ''
    contenido += `<table><th>Num</th><th>Animales</th>`
    animales.forEach((indAnimal,index)=>{
        contenido += `<tr><td>${index+1}</td><td>${indAnimal}</td></tr>`
    })
    contenido += `</table>`
    document.getElementById('pantalla').innerHTML=contenido
})
cantExpAnimales.addEventListener('click',()=>{
    if(minimo.value != ''){
        let contenido = ''
        contenido += `<table><th>Animales</th>`
        let filtradoAnimales = animales.slice(minimo.value-1, animales.length)
        filtradoAnimales.forEach((indAnimal)=>{
            contenido += `<tr><td>${indAnimal}</td></tr>`
        })
        contenido += `</table>`
        document.getElementById('pantalla').innerHTML=contenido
    }else{
        alert('Error: No ha digitado un valor minimo.')
    }
})
buscar.addEventListener('click',()=>{
    if(animales.includes(buscador.value.toLowerCase())){
        document.getElementById('pantalla').innerHTML=`El animal ${buscador.value} existe.`
    }else{
        document.getElementById('pantalla').innerHTML=`El animal ${buscador.value} NO existe.`
    }
})