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
const animales = ['Vaca','Oveja','Perro','Gato','Araña','Ave','Pez']
var num = animales.length+1

//Funcionalidades
document.getElementById('number').innerHTML=`${num}. `
agregar.addEventListener('click',()=>{
    let name = animal.value
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
    let contenido = ''
    contenido += `<table><th>Num</th><th>Animales</th>`
    animales.forEach((indAnimal,index)=>{
        console.log('prueba')
        if(index >= minimo){ 
            contenido += `<tr><td>${index+1}</td><td>${indAnimal}</td></tr>`
        }   
    })
    contenido += `</table>`
    document.getElementById('pantalla').innerHTML=contenido
})